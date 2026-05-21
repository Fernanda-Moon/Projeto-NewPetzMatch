import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

const mockUser = {
  name: 'Fernanda Travassos',
  email: 'fernanda.lua.travassos@gmail.com',
  password: '123456',
  phone: '(83) 99609-8944',
  foto: '/img/avatar.png.jpg'
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let storedUser = localStorage.getItem('petzmatch_user');
    if (!storedUser) {
      localStorage.setItem('petzmatch_user', JSON.stringify(mockUser));
      storedUser = JSON.stringify(mockUser);
    }
    // Não define o user automaticamente para evitar login automático indesejado
    // O user será definido apenas após o login bem-sucedido
  }, []);

  const login = (email, password) => {
    const storedUser = localStorage.getItem('petzmatch_user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      if (userData.email === email && userData.password === password) {
        setUser(userData);
        return true;
      }
    }
    return false;
  };

  const register = (name, email, password, phone = '') => {
    // Verifica se já existe um usuário com o mesmo e-mail
    const storedUser = localStorage.getItem('petzmatch_user');
    if (storedUser) {
      const existingUser = JSON.parse(storedUser);
      if (existingUser.email === email) {
        return false; // e-mail já cadastrado
      }
    }
    const newUser = { name, email, password, phone, foto: '/img/avatar.png.jpg' };
    localStorage.setItem('petzmatch_user', JSON.stringify(newUser));
    // Não loga automaticamente
    return true;
  };

  const logout = () => {
    // NÃO remove do localStorage, apenas limpa o estado
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}