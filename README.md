# Coding Challenge Password Management

Desenvolvi o gerenciador de senhas com a ferramenta visual studio code.

## 🛠️ Construído com

* [NextJS](https://nextjs.org/docs/getting-started) - Framework React.
* [SWR](https://swr.vercel.app/docs/getting-started) -  Estratégia de stale-while-revalidate.
* [Styled Components](https://styled-components.com/docs) - Biblioteca para estilizacão.
* [Axios](https://axios-http.com/docs/intro) - Cliente HTTP baseado em promises.
* [Unform](https://unform-rocketseat.vercel.app/) - Biblioteca de formulários baseado em refêrencias.
* [Yup](https://github.com/jquense/yup/tree/62786c42ca07a2b84b05ca8c473bc01f0c868a94) - Validador de formulários.
* [React Modal](https://www.npmjs.com/package/react-modal) - Biblioteca para criação de modal.
* [React Context Menu](https://github.com/vkbansal/react-contextmenu) - Biblioteca para criação de contextos ao clicar com o botão direito do mouse.
* [JSON Server](https://www.npmjs.com/package/json-server) - Biblioteca para simular API REST falsa


### 🔧 Instalação
Para instalar as depêndencias do projeto:

```
npm i --force
```

Para instalar o simulador de API Rest:

```
npm install -g json-server
```

Para iniciar o servidor:

```
npm run start:api
```

Para iniciar o projeto localmente:

```
npm run dev
```


### 🔧 Explicação das tecnologias usadas e arquitetura:

Arquitetura:

Escolhi usar uma arquitetura em que tenho a camada de serviços separada das páginas e dos componentes, deixando tanto a pages e components na mesma hierarquia de pasta src onde nesta contém os serviços e contextos.

A forma de organizar os componentes é o que eu julgo ser o mais viável para manutenção e escalabilidade a longo prazo, todo componente possui sua pasta e seu estilo, sendo fácil solucionar problemas ou refatorar partes sem que afete o todo.

Ao separar a src e agora ter toda a lógica funcional lá dentro posso ter mais facilidade de mudar de "ambiente" de acordo com o que estou mexendo, aumentando a produtividade.

Tecnologias:

A escolha do React + Next.js e Typescript vem muito da minha preferência e do que venho trabalhando. Resolvi traze-los por questões de conforto com o desenvolvimento e também praticidade para criação de rotas.

A escolha para fazer o data fetching das informações foi a biblioteca SWR e a escolhi por ser ideal no que o projeto pedia, que era atualização do estado de acordo com ações do usuário e esta oferece isso de forma bem direta com o "mutate" após as chamadas de api.

A escolha do styled components para realizar a estilização dos componentes vem muito do que uso hoje em dia como core para desenvolver css, na minha opnião styled components é de longe o que mais me dá poder e produtividade a longo prazo dentro de um projeto, tendo possibilidade de usar javascript em conjunto com o css de forma homogenia e prática.

A escolha do Unform + Yup é pela praticidade e facilidade de manipulação de dados, o unform trabalha com a refêrencia dos campos de texto de forma prática e direta. Já o Yup me traz um leque de possibilidades para validar os dados vindo do formulário de forma bem prática e clara.

A escolha para criação de modais usando React Modal foi porque é um biblioteca leve, funcional e de extrema facilidade de uso.

A escolha do React Context Menu para criação de contextos ao clicar com o botão direito do mouse, foi por sua praticidade no uso de forma clara, objetiva e acima de tudo funcional.

---

⌨️ desenvolvido por [Tiago Dias Maciel](https://www.linkedin.com/in/tiago-maciel-baa095197/) 😊