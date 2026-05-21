# 🐾 PetzMatch

[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![React Router](https://img.shields.io/badge/React_Router-6.14-orange)](https://reactrouter.com/)
[![Vite](https://img.shields.io/badge/Vite-4.5-646CFF)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

**Encontre o parceiro ideal para o seu pet de forma segura e transparente.**
<img width="1024" height="1024" alt="petzmatch logo" src="https://github.com/user-attachments/assets/f94f22cb-f975-41e2-b3c6-ca0e1b708f7b" />

---
<br>


## 📝 Observações Importantes

### 1. Simulação de aplicativo mobile
Este projeto **simula um aplicativo mobile**. Por esse motivo, ao acessar a aplicação pela primeira vez, **não há login automático** – é necessário fazer login com o e-mail e senha do usuário mockado (fornecidos abaixo na seção "Dados Iniciais").  
No entanto, após o login, você pode testar o fluxo de **cadastro de um novo usuário** da seguinte forma:  
- Acesse a tela de **Perfil** (ícone de pessoa no menu inferior).  
- Clique em **Sair** (opção no menu do perfil).  
- Você será redirecionado para a tela de **Login**.  
- Clique em **"Primeiro acesso"** para ir ao cadastro e criar um novo usuário.

### 2. Pasta `node_modules` no GitHub
Os arquivos disponíveis no repositório do GitHub **não incluem** a pasta `node_modules`. Isso ocorre porque essa pasta contém uma quantidade muito grande de arquivos e dependências, o que excede os limites aceitos pela plataforma (tanto em número de arquivos quanto em tamanho de repositório).  
Para executar o projeto localmente, lembre-se de rodar o comando `npm install` (ou `yarn`) após o clone para instalar todas as dependências necessárias.

---
<br>


## 📌 Nome do Projeto

**PetzMatch**

---
<br>


## 👥 Integrantes do Grupo

- Fernanda Venancio Travassos  
- Maria Eduarda de Brito Oliveira 
- Samuel de Andrade Vasconcelos
- Sarah Hellen Nascimento
- Vitória Marques Freire 

---
<br>


## 💡 Descrição da Ideia do Sistema

O **PetzMatch** é uma plataforma web que conecta tutores de animais de estimação interessados em cruzamentos responsáveis, especialmente para animais de raça pura. O sistema oferece um ambiente confiável e verificado, eliminando a dependência de grupos não regulamentados em redes sociais.

Com o PetzMatch, você pode:
- Cadastrar seus animais com informações completas (raça, sexo, idade, peso, localização, descrição)
- Registrar dados de saúde (exames, vacinas) e pedigree
- Buscar parceiros compatíveis usando filtros por tipo, sexo e localização
- Visualizar detalhes completos de cada pet, incluindo galeria de fotos e status de saúde
- Editar as informações dos seus pets a qualquer momento
- Conversar diretamente com outros tutores (interface mockada para demonstração)

> **Status atual:** Protótipo funcional com front-end completo e persistência local (`localStorage`). O backend (API, banco de dados, autenticação real, chat em tempo real) será implementado na próxima fase.

---
<br>


## 🛠️ Tecnologias Utilizadas

- **React 18** – Biblioteca para construção da interface
- **React Router DOM 6** – Roteamento entre as páginas
- **Bootstrap 5** – Estilização e componentes responsivos (grid, carousel)
- **Context API** – Gerenciamento de estado global (autenticação e dados dos pets)
- **localStorage** – Persistência local dos dados (usuário e pets cadastrados)
- **Vite** – Ferramenta de build e desenvolvimento
- **Material Icons** – Ícones para navegação e ações

---
<br>


## 📱 Telas Desenvolvidas

O projeto possui as seguintes rotas/páginas (simulando um aplicativo mobile):

| Rota | Componente | Descrição |
|------|------------|-----------|
| `/login` | `Login` | Tela de login com e-mail e senha. |
| `/register` | `Register` | Tela de cadastro de novo usuário. |
| `/home` | `Home` | Página principal com carrossel, categorias de animais (6 tipos) e lista de pets próximos (primeiros 6). |
| `/explorar` | `Explorar` | Busca avançada: filtros por tipo de animal e sexo. Exibe todos os pets cadastrados. |
| `/chat` | `Chat` | Lista de conversas simuladas (mock visual). Representa o futuro chat entre tutores. |
| `/perfil` | `Perfil` | Exibe dados do usuário logado, menu de opções (editar perfil, privacidade, ajuda, sair) e lista seus pets cadastrados, com botão para editar cada um. |
| `/cadastro-pet` | `CadastroPet` | Formulário completo para cadastrar um novo pet (dados do tutor, do animal, fotos). |
| `/editar-pet/:id` | `EditarPet` | Permite editar todos os dados do pet (incluindo situação de exames/vacinas). |
| `/detalhes/:id` | `DetalhesPet` | Visualização detalhada do pet: galeria de fotos, informações, dados do dono, status de saúde e documentos. |
| `/categoria/:tipo` | `Categoria` | Exibe pets de um tipo específico (gato, cachorro, etc.) com filtro por sexo. |

---
<br>


## 📁 Estrutura do Projeto

```
petzmatch/
├── public/
│   └── img/                    # Imagens estáticas (fotos dos pets, avatares, ícones)
├── src/
│   ├── components/
│   │   ├── layout/             # Header, MobileHeader
│   │   ├── BottomNav.jsx
│   │   ├── CadastroPet.jsx
│   │   ├── Categoria.jsx
│   │   ├── Chat.jsx
│   │   ├── DetalhesPet.jsx
│   │   ├── EditarPet.jsx
│   │   ├── Explorar.jsx
│   │   ├── Home.jsx
│   │   ├── Perfil.jsx
│   │   ├── PetCard.jsx
│   │   └── Welcome.jsx
│   ├── contexts/
│   │   ├── AuthContext.jsx     # Autenticação (login, cadastro, logout)
│   │   └── PetContext.jsx      # CRUD e filtros dos pets
│   ├── styles/
│   │   └── style.css           # Estilos globais customizados
│   ├── App.jsx                 # Rotas principais
│   └── main.jsx                # Ponto de entrada
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---
<br>


## 🚀 Instruções para Rodar o Projeto

### Pré‑requisitos
- Node.js (versão 16 ou superior)
- npm (geralmente já incluso com o Node)

### Passos

1. **Clone o repositório** (ou descompacte o código fornecido)
   ```bash
   git clone https://github.com/seu-usuario/petzmatch.git
   cd petzmatch

2. Instale a dependência
   ```bash
   npm install

3. Execute o servidor de desenvolvimento
   ```bash
   npm run dev

4. Acesse no navegador o endereço indicado no terminal

---
<br>


## Dados iniciais

-> A aplicação já vem com 21 pets mockados e um usuário padrão:

        E-mail: fernanda.lua.travassos@gmail.com
        Senha: 123456

-> Os dados ficam armazenados no localStorage do navegador. Para resetar tudo (voltar aos 21 pets iniciais), execute no console do navegador:

        ```js
        localStorage.removeItem('petzmatch_pets');
        localStorage.removeItem('petzmatch_user');
        location.reload();
        ```

---
<br>


## Funcionalidades Implementadas (Escopo)


-> Cadastro de usuários
    - via tela de registro, com persistência local.

-> Cadastro de animais (raça, saúde, localização)
    - formulário completo, incluindo fotos.

-> Busca por compatibilidade (filtros)
    - filtros por tipo e sexo nas telas Explorar e Categoria.

-> Verificação de pedigree / exames / vacinas
    -  informações são exibidas nos detalhes e podem ser editadas (numa versão real exigiria upload de arquivos).

-> Chat entre donos
    - tela mockada com conversas estáticas (fluxo completo não implementado).

*O projeto serve como prova de conceito (front‑end funcional) das principais telas e do fluxo de cadastro/busca. A lógica de verificação de documentos e o chat real seriam implementados em etapas futuras com back‑end.*

---
<br>


## Notas Adicionais

- As imagens dos pets e avatares estão na pasta public/img/ e são referenciadas diretamente.
- O componente PetCard é reutilizado nas telas Home, Explorar, Categoria e Perfil.
- O layout é otimizado para dispositivos móveis (largura máxima de 480px, bottom navigation fixa).
- O Bootstrap é usado apenas para o carrossel e para classes utilitárias de grid (.row, .col-6). O restante da estilização é CSS customizado (arquivo style.css).

---
<br>


## Desenvolvido como parte do componente curricular Criar Serviços Web com REST – CESED / Unifacisa.


