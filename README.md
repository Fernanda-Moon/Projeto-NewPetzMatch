=========================================================
# 🐾 PetzMatch
==========================================================
**Encontre o parceiro ideal para o seu pet de forma segura e transparente.**



==========================================================
## 📌 Nome do Projeto
==========================================================
PetzMatch



==========================================================
## 👥 Integrantes do Grupo
==========================================================

- Fernanda V Travassos
- Maria Eduarda
- Samuel de Andrade
- Sarah Hellen
- Vitória Marques



==========================================================
## 💡 Descrição da Ideia do Sistema
==========================================================

O **PetzMatch** é uma plataforma web que conecta tutores de animais de estimação interessados em cruzamentos responsáveis e seguros, especialmente para animais de raça pura. O sistema oferece um ambiente confiável e verificado, eliminando a dependência de grupos não regulamentados em redes sociais.

A ideia central é permitir que os donos cadastrem seus animais com informações completas (raça, sexo, idade, peso, localização, descrição) e, principalmente, dados de saúde (exames, vacinas) e pedigree. Outros usuários podem então buscar parceiros compatíveis utilizando filtros por tipo de animal, sexo e localização.

O PetzMatch atua como um intermediário que valoriza a transparência: antes de um cruzamento, a plataforma pode exigir a verificação de documentos e atestados de saúde. Um chat interno permite a negociação direta entre os tutores, mantendo um histórico das conversas.

> *Este repositório contém um protótipo funcional (front-end com dados persistidos localmente) que demonstra as principais telas e fluxos do sistema, incluindo cadastro de usuários/pets, busca, filtros, chat simulado e gestão de perfil.*



==========================================================
## 🛠️ Tecnologias Utilizadas
==========================================================

- **React 18** – Biblioteca para construção da interface
- **React Router DOM 6** – Roteamento entre as páginas
- **Bootstrap 5** – Estilização e componentes responsivos (grid, modal, carousel)
- **Context API** – Gerenciamento de estado global (autenticação e dados dos pets)
- **localStorage** – Persistência local dos dados (usuário e pets cadastrados)
- **Vite** – Ferramenta de build e desenvolvimento
- **Material Icons** – Ícones para navegação e ações



==========================================================
## 📱 Telas Desenvolvidas
==========================================================

O projeto possui as seguintes rotas/páginas:

| Rota | Componente | Descrição |
|------|------------|-----------|
| `/` | `Welcome` | Tela inicial com login/cadastro (modal). Usuário mockado pré‑definido. |
| `/home` | `Home` | Página principal com carrossel, categorias de animais (6 tipos) e lista de pets próximos (primeiros 6). |
| `/explorar` | `Explorar` | Busca avançada: filtros por tipo de animal e sexo. Exibe todos os pets cadastrados. |
| `/chat` | `Chat` | Lista de conversas simuladas (mock visual). Representa o futuro chat entre tutores. |
| `/perfil` | `Perfil` | Exibe dados do usuário logado, menu de opções (editar perfil, privacidade, ajuda, sair) e lista seus pets cadastrados, com botão para editar cada um. |
| `/cadastro-pet` | `CadastroPet` | Formulário completo para cadastrar um novo pet (dados do tutor, do animal, fotos). A idade é calculada a partir da data de nascimento. |
| `/editar-pet/:id` | `EditarPet` | Permite editar todos os dados do pet (incluindo situação de exames/vacinas). |
| `/detalhes/:id` | `DetalhesPet` | Visualização detalhada do pet: galeria de fotos, informações, dados do dono, status de saúde e documentos. |
| `/categoria/:tipo` | `Categoria` | Exibe pets de um tipo específico (gato, cachorro, etc.) com filtro por sexo. |



==========================================================
## 📁 Organização das Pastas
==========================================================

petzmatch/
├── public/
│ └── img/ (fotos dos pets, avatares, ícones das categorias)
├── src/
│ ├── components/ (Todos os componentes React)
│ │ ├── layout/  (Componentes estruturais - Header, MobileHeader)
│ │ ├── BottomNav.jsx  (Navegação inferior fixa)
│ │ ├── CadastroPet.jsx
│ │ ├── Categoria.jsx
│ │ ├── Chat.jsx
│ │ ├── DetalhesPet.jsx
│ │ ├── EditarPet.jsx
│ │ ├── Explorar.jsx
│ │ ├── Home.jsx
│ │ ├── Perfil.jsx
│ │ ├── PetCard.jsx  (Card reutilizável para exibir um pet)
│ │ └── Welcome.jsx
│ ├── contexts/ # Contextos globais
│ │ ├── AuthContext.jsx  (Autenticação - login, cadastro, logout)
│ │ └── PetContext.jsx  (Gerenciamento dos pets - CRUD, filtros)
│ ├── styles/  (CSS global)
│ │ └── style.css
│ ├── App.jsx  (Componente principal com as rotas)
│ └── main.jsx  (Ponto de entrada - renderização, import de CSS Bootstrap)
├── index.html
├── package.json
├── vite.config.js
└── README.md



==========================================================
## 🚀 Instruções para Rodar o Projeto
==========================================================

### Pré‑requisitos
- Node.js (versão 16 ou superior)
- npm (geralmente já incluso com o Node)


### Passos
1. **Clone o repositório** (ou descompacte o código fornecido)

   ```bash
   git clone https://github.com/seu-usuario/petzmatch.git
   cd petzmatch

2. **Instale as dependências** 

    ```bash
    npm install

3. **Execute o servidor de desenvolvimento** 

    ```bash
    npm run dev

4. **Acesse no navegador o endereço indicado no terminal** 



==========================================================
## Dados iniciais
==========================================================

-> A aplicação já vem com 21 pets mockados e um usuário padrão:

        E-mail: fernanda.lua.travassos@gmail.com
        Senha: 123456

-> Os dados ficam armazenados no localStorage do navegador. Para resetar tudo (voltar aos 21 pets iniciais), execute no console do navegador:

        ```js
        localStorage.removeItem('petzmatch_pets');
        localStorage.removeItem('petzmatch_user');
        location.reload();
        ```



==========================================================
## Funcionalidades Implementadas (Escopo)
==========================================================

-> Cadastro de usuários
    - via modal na Welcome, com persistência local.

-> Cadastro de animais (raça, saúde, localização)
    - formulário completo, incluindo fotos.

-> Busca por compatibilidade (filtros)
    - explorar e Categoria com filtros por tipo e sexo.

-> Verificação de pedigree / exames / vacinas
    - informações são exibidas nos detalhes e podem ser editadas – numa versão real exigiria upload de arquivos.

-> Chat entre donos
    - tela mockada com conversas estáticas – fluxo completo não implementado.

*O projeto serve como prova de conceito (front‑end funcional) das principais telas e do fluxo de cadastro/busca. A lógica de verificação de documentos e o chat real seriam implementados em etapas futuras com back‑end.*



==========================================================
## Notas Adicionais
==========================================================

- As imagens dos pets e avatares estão na pasta public/img/ e são referenciadas diretamente.

- O componente PetCard é reutilizado nas telas Home, Explorar, Categoria e Perfil.

- O layout é otimizado para dispositivos móveis (largura máxima de 480px, bottom navigation fixa).

- O Bootstrap é usado apenas para o carrossel e para classes utilitárias de grid (row, col-6). O restante da estilização é CSS customizado (arquivo style.css).



==========================================================
## Desenvolvido como parte do componente curricular Criar Serviços Web com REST – CESED / Unifacisa.
==========================================================


