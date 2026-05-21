import { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';

const PetContext = createContext();

// Dados mmockados de início para ficar melhor a visualização/ideia.
const initialPetsData = [
  {
    id: 1,
    nome: 'Luna',
    tipo: 'Gato',
    sexo: 'Fêmea',
    raca: 'Preto',
    peso: 3.2,
    idade: '1 anos',
    local: 'Campina Grande, PB',
    descricao: 'Luna é uma gatinha que gosta de usar chapéus. De vez em quando ela olha para o vazio com seus grandes olhos, mas ela é fofinha.',
    fotos: ['/img/luna.png.jpg', '/img/luna2.png.jpg', '/img/luna3.png.jpg'],
    dono: { nome: 'Fernanda Travassos', foto: '/img/avatar.png.jpg', telefone: '(83) 99609-8944' },
    saude: { pedigree: true, exames: 'aprovado', vacinas: 'em dia' }
  },
  {
    id: 2,
    nome: 'Phainon',
    tipo: 'Cachorro',
    sexo: 'Macho',
    raca: 'Golden Retriever',
    peso: 32,
    idade: '2 anos',
    local: 'João Pessoa, PB',
    descricao: 'Phainon é um golden dócil, muito brincalhão e extremamente amigável. Perfeito para famílias.',
    fotos: ['/img/golden.png.jpg'],
    dono: { nome: 'Cardan Greenbriar', foto: '/img/cardangreenbriar.png.jpg', telefone: '(83) 91234-5678' },
    saude: { pedigree: true, exames: 'aprovado', vacinas: 'em dia' }
  },
  {
    id: 3,
    nome: 'Era',
    tipo: 'passaro',
    sexo: 'Fêmea',
    raca: 'Calopsita',
    peso: 0.1,
    idade: '1 ano',
    local: 'Campina Grande, PB',
    descricao: 'Era é uma calopsita muito cantora e sociável.',
    fotos: ['/img/era.png.jpg'],
    dono: { nome: 'Alice Armstrong', foto: '/img/aliceAvatar.png.jpg', telefone: '(83) 99876-5432' },
    saude: { pedigree: false, exames: 'pendente', vacinas: 'necessário' }
  },
  {
    id: 4,
    nome: 'Bochechas',
    tipo: 'roedor',
    sexo: 'Fêmea',
    raca: 'Hamster Sírio',
    peso: 0.15,
    idade: '8 meses',
    local: 'Campina Grande, PB',
    descricao: 'Bolinha é um hamster muito ativo à noite e adora girar na rodinha e comer.',
    fotos: ['/img/bochechas.png.jpg'],
    dono: { nome: 'Lucas Kaliel', foto: '/img/lucasAvatar.png.jpg', telefone: '(83) 98711-2233' },
    saude: { pedigree: false, exames: 'aprovado', vacinas: 'não aplicável' }
  },
  {
    id: 5,
    nome: 'Bluy',
    tipo: 'passaro',
    sexo: 'Macho',
    raca: 'Passarinho azul',
    peso: 0.15,
    idade: '5 meses',
    local: 'Campina Grande, PB',
    descricao: 'Bluy é um passarinho muito amigável e carente, sempre pedindo carinho e ficando perto de sua mão!',
    fotos: ['/img/sillyBlue.png.jpg'],
    dono: { nome: 'Lucas Kaliel', foto: '/img/lucasAvatar.png.jpg', telefone: '(83) 98711-2233' },
    saude: { pedigree: false, exames: 'aprovado', vacinas: 'em dia' }
  },
  {
    id: 6,
    nome: 'Garfield',
    tipo: 'Gato',
    sexo: 'Macho',
    raca: 'Laranja',
    peso: 2,
    idade: '6 meses',
    local: 'João Pessoa, PB',
    descricao: 'Garfield é um gatinho filhote que gosta de usar roupinhas diferentes e fingir ser um CLT chamado "Tom".',
    fotos: ['/img/garfield.png.jpg'],
    dono: { nome: 'Amy Farias', foto: '/img/amyAvatar.png.jpg', telefone: '(83) 98734-9802' },
    saude: { pedigree: true, exames: 'aprovado', vacinas: 'em dia' }
  },
  {
    id: 7,
    nome: 'Amora',
    tipo: 'Gato',
    sexo: 'Fêmea',
    raca: 'Siamês',
    peso: 3,
    idade: '9 meses',
    local: 'João Pessoa, PB',
    descricao: 'Amora é uma gatinha que ama quando escovam seu pelo. Gosta muito de ficar deitada em frames de janelas olhando a rua.',
    fotos: ['/img/siames.png.jpg'],
    dono: { nome: 'Alice Armstrong', foto: '/img/aliceAvatar.png.jpg', telefone: '(83) 99876-5432' },
    saude: { pedigree: true, exames: 'aprovado', vacinas: 'em dia' }
  },
  {
    id: 8,
    nome: 'Baltazar',
    tipo: 'Gato',
    sexo: 'Macho',
    raca: 'Branquinho',
    peso: 3,
    idade: '1 ano',
    local: 'Campina Grande, PB',
    descricao: 'Baltazar é um gatinho que gosta muito de acompanhar seus donos pela casa. Curioso e bem paciente com crianças.',
    fotos: ['/img/homofobico.png.jpg'],
    dono: { nome: 'Fernanda Travassos', foto: '/img/avatar.png.jpg', telefone: '(83) 99609-8944' },
    saude: { pedigree: true, exames: 'aprovado', vacinas: 'em dia' }
  },
  {
    id: 9,
    nome: 'Kaligula',
    tipo: 'Gato',
    sexo: 'Macho',
    raca: 'Laranjinha',
    peso: 2,
    idade: '4 meses',
    local: 'Campina Grande, PB',
    descricao: 'Kaligula é um gatinho filhote que gosta de brincar com bolinhas, principalmente felpudas e/ou de costura.',
    fotos: ['/img/laranjinha.png.jpg'],
    dono: { nome: 'Fernanda Travassos', foto: '/img/avatar.png.jpg', telefone: '(83) 99609-8944' },
    saude: { pedigree: true, exames: 'aprovado', vacinas: 'pendente' }
  },
  {
    id: 10,
    nome: 'Marry',
    tipo: 'Gato',
    sexo: 'Fêmea',
    raca: 'Branquinha',
    peso: 2,
    idade: '1 ano',
    local: 'João Pessoa, PB',
    descricao: 'Marry é uma gatinha que gosta, surpreendentemente, de tomar banho e comer comidas diferentes.',
    fotos: ['/img/mary.png.jpg'],
    dono: { nome: 'Cardan Greenbriar', foto: '/img/cardangreenbriar.png.jpg', telefone: '(83) 91234-5678' },
    saude: { pedigree: true, exames: 'aprovado', vacinas: 'em dia' }
  },
  {
    id: 11,
    nome: 'Heva',
    tipo: 'Cachorro',
    sexo: 'Fêmea',
    raca: 'Schnauzer',
    peso: 3,
    idade: '1 ano',
    local: 'João Pessoa, PB',
    descricao: 'Heva é uma cachorrinha que ama deitar sob a luz do sol no chão. Late bastante quando não conhece alguém, mas, ao fazer carinho, ela logo se derrete.',
    fotos: ['/img/schnauzer.png.jpg'],
    dono: { nome: 'Amy Farias', foto: '/img/amyAvatar.png.jpg', telefone: '(83) 98734-9802' },
    saude: { pedigree: true, exames: 'aprovado', vacinas: 'em dia' }
  },
  {
    id: 12,
    nome: 'Pipoca',
    tipo: 'Cachorro',
    sexo: 'Macho',
    raca: 'Bichon frisé',
    peso: 2,
    idade: '6 meses',
    local: 'Campina Grande, PB',
    descricao: 'Pipoca é um cachorrinho muito pequeninho que gosta bastante de brincar e modiscar as coisas.',
    fotos: ['/img/fluffy.png.jpg'],
    dono: { nome: 'Ravi Pierre', foto: '/img/raviAvatar.png.jpg', telefone: '(83) 99734-4202' },
    saude: { pedigree: true, exames: 'aprovado', vacinas: 'em dia' }
  },
  {
    id: 13,
    nome: 'Loki',
    tipo: 'Cachorro',
    sexo: 'Macho',
    raca: 'Boiadeiro de Berna',
    peso: 3,
    idade: '2',
    local: 'João Pessoa, PB',
    descricao: 'Loki é um cachorrinho muito peludo que gosta bastante de brincar com bolinhas e também que seu pelo seja escovado.',
    fotos: ['/img/bernerse.png.jpg'],
    dono: { nome: 'Ravi Pierre', foto: '/img/raviAvatar.png.jpg', telefone: '(83) 99734-4202' },
    saude: { pedigree: true, exames: 'aprovado', vacinas: 'em dia' }
  },
  {
    id: 14,
    nome: 'Assutada Da Silva',
    tipo: 'Cachorro',
    sexo: 'Fêmea',
    raca: 'Capa Preta',
    peso: 5,
    idade: '2',
    local: 'Campina Grande, PB',
    descricao: 'Seu nome é Mel! Apesar do nome engraçadinho, Mel consegue ser bastante assustada e bem bricalhona, além de fazer coisas bobas para chamar a atenção dos donos.',
    fotos: ['/img/assustadoDaSilva.png.jpg'],
    dono: { nome: 'Fernanda Travassos', foto: '/img/avatar.png.jpg', telefone: '(83) 99609-8944' },
    saude: { pedigree: true, exames: 'aprovado', vacinas: 'em dia' }
  },
  {
    id: 15,
    nome: 'Joca',
    tipo: 'roedor',
    sexo: 'Macho',
    raca: 'Coelho',
    peso: 1,
    idade: '8 meses',
    local: 'João Pessoa, PB',
    descricao: 'Joca é um coelhinho com um temperamento calmo, além de comer, ele gosta bastante de tomar banhos e usar sua touquinha para cobrir suas orelhas.',
    fotos: ['/img/coelhinhoskincare.png.jpg'],
    dono: { nome: 'Alice Armstrong', foto: '/img/aliceAvatar.png.jpg', telefone: '(83) 99876-5432' },
    saude: { pedigree: false, exames: 'aprovado', vacinas: 'em dia' }
  },
  {
    id: 16,
    nome: 'Víbora',
    tipo: 'reptil',
    sexo: 'Fêmea',
    raca: 'Cobra do Milharal',
    peso: 0.9,
    idade: '3 anos',
    local: 'João Pessoa, PB',
    descricao: 'Víbora é uma cobra do milharal de temperamento calmo e curioso. Adora explorar seu terrário e se enrolar em galhos. Apesar do nome intimidador, é completamente inofensiva e ótima para iniciantes no mundo dos répteis.',
    fotos: ['/img/vibora1.png.jpg', '/img/vibora2.png.jpg'],
    dono: { nome: 'Cardan Greenbriar', foto: '/img/cardangreenbriar.png.jpg', telefone: '(83) 91234-5678' },
    saude: { pedigree: false, exames: 'aprovado', vacinas: 'não aplicável' }
  },
  {
    id: 17,
    nome: 'Gekko',
    tipo: 'reptil',
    sexo: 'Macho',
    raca: 'Gecko Leopardo',
    peso: 0.06,
    idade: '1 ano e 6 meses',
    local: 'João Pessoa, PB',
    descricao: 'Gekko é um gecko leopardo muito ativo e divertido de observar. Adora caçar grilos e se aquecer sob a luz de seu terrário. Seus olhos grandes e sua pele manchada fazem sucesso entre visitantes. Perfeito para quem busca um pet exótico de fácil cuidado.',
    fotos: ['/img/gekko1.png.jpg', '/img/gekko2.png.jpg'],
    dono: { nome: 'Ravi Pierre', foto: '/img/raviAvatar.png.jpg', telefone: '(83) 99734-4202' },
    saude: { pedigree: false, exames: 'aprovado', vacinas: 'não aplicável' }
  },
  {
    id: 18,
    nome: 'SirFroggo',
    tipo: 'reptil',
    sexo: 'Macho',
    raca: 'Sapo Pac-Man',
    peso: 0.4,
    idade: '2 anos',
    local: 'João Pessoa, PB',
    descricao: 'SirFroggo é um autêntico cavalheiro anfíbio: sempre elegante em seu terrário, ele aguarda pacientemente sua refeição como quem espera o chá das cinco. Apesar do apetite voraz e da boca descomunal, mantém uma pose digna e jamais perde a compostura – um verdadeiro lord entre os sapos Pac-Man. De hábitos tranquilos e baixa manutenção, é o companheiro perfeito para quem aprecia um toque de classe no mundo exótico.',
    fotos: ['/img/sirFroggo.png.jpg'],
    dono: { nome: 'Ravi Pierre', foto: '/img/raviAvatar.png.jpg', telefone: '(83) 99734-4202' },
    saude: { pedigree: false, exames: 'aprovado', vacinas: 'não aplicável' }
  },
  {
    id: 19,
    nome: 'Goldie',
    tipo: 'peixe',
    sexo: 'Fêmea',
    raca: 'Peixe Dourado',
    peso: 0.2,
    idade: '1 ano e 3 meses',
    local: 'João Pessoa, PB',
    descricao: 'Goldie é uma peixinha dourada de personalidade curiosa e brilhante como o próprio nome sugere. Está sempre nadando alegremente de um lado para o outro, reconhecendo seu tutor e até "dançando" na hora da comida. É a companheira aquática ideal para quem busca um pet calmo, colorido e fácil de cuidar – um verdadeiro raio de sol em forma de peixe.',
    fotos: ['/img/goldenFish.png.jpg'],
    dono: { nome: 'Amy Farias', foto: '/img/amyAvatar.png.jpg', telefone: '(83) 98734-9802' },
    saude: { pedigree: false, exames: 'aprovado', vacinas: 'não aplicável' }
  },
  {
    id: 20,
    nome: 'Kaito',
    tipo: 'peixe',
    sexo: 'Macho',
    raca: 'Carpa Koi',
    peso: 1.2,
    idade: '5 anos',
    local: 'João Pessoa, PB',
    descricao: 'Kaito é uma carpa koi de beleza hipnotizante, com manchas vermelhas e brancas que mais parecem pinceladas de um artista japonês. Elegante e sereno, ele desliza pela água como um verdadeiro símbolo de perseverança e boa sorte. Adora ser admirado à distância e traz um ar de tranquilidade ao ambiente.',
    fotos: ['/img/koiFish.png.jpg'],
    dono: { nome: 'Amy Farias', foto: '/img/amyAvatar.png.jpg', telefone: '(83) 98734-9802' },
    saude: { pedigree: false, exames: 'aprovado', vacinas: 'não aplicável' }
  },
  {
    id: 21,
    nome: 'Lebre de Março',
    tipo: 'roedor',
    sexo: 'Macho',
    raca: 'Fuzzy Lop',
    peso: 1.8,
    idade: '1 ano e 2 meses',
    local: 'Campina Grande, PB',
    descricao: 'A Lebre de Março é um coelhinho marrom de pelagem macia como algodão e orelhas que mais parecem um cachecol felpudo. Sempre atrasado para o chá (ou para a ração), ele tem um jeito estabanado e encantador que derrete qualquer coração. Adora dar pulinhos de alegria quando vê folhas frescas de hortelã e é um verdadeiro gentleman das tocas: educado, carinhoso e cheio de personalidade.',
    fotos: ['/img/lebreMarco.png.jpg'],
    dono: { nome: 'Fernanda Travassos', foto: '/img/avatar.png.jpg', telefone: '(83) 99609-8944' },
    saude: { pedigree: false, exames: 'aprovado', vacinas: 'em dia' }
  }
];

export function PetProvider({ children }) {
  const [pets, setPets] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const storedPets = localStorage.getItem('petzmatch_pets');
    if (!storedPets) {
      localStorage.setItem('petzmatch_pets', JSON.stringify(initialPetsData));
      setPets(initialPetsData);
    } else {
      setPets(JSON.parse(storedPets));
    }
  }, []);

  const savePets = (newPets) => {
    setPets(newPets);
    localStorage.setItem('petzmatch_pets', JSON.stringify(newPets));
  };

  const addPet = (petData) => {
    const newPet = {
      id: Date.now(),
      ...petData,
      dono: {
        nome: user?.name || petData.dono.nome,
        foto: petData.dono.foto || '/img/avatar.png.jpg',
        telefone: user?.phone || petData.dono.telefone
      },
      saude: { pedigree: false, exames: 'Em análise', vacinas: 'Em análise' }
    };
    const updatedPets = [...pets, newPet];
    savePets(updatedPets);
    return newPet.id;
  };

  const updatePet = (id, updatedData) => {
    const updatedPets = pets.map(pet =>
      pet.id === parseInt(id) ? { ...pet, ...updatedData } : pet
    );
    savePets(updatedPets);
    return true;
  };

  const getPetById = (id) => pets.find(p => p.id === parseInt(id));
  const getUserPets = () => pets.filter(p => p.dono.nome === user?.name);
  const getPetsByTipo = (tipo) => pets.filter(p => p.tipo.toLowerCase() === tipo.toLowerCase());

  return (
    <PetContext.Provider value={{ 
      pets, 
      addPet, 
      updatePet,
      getPetById, 
      getUserPets, 
      getPetsByTipo 
    }}>
      {children}
    </PetContext.Provider>
  );
}

export function usePets() {
  return useContext(PetContext);
}