# Roteiro de apresentação

## 1. Apresentação do projeto

Este é meu portfólio profissional, desenvolvido com React e Vite. Ele reúne minha apresentação, os trabalhos que fiz durante o curso e minhas formas de contato.

## 2. Design e navegação

Usei um fundo escuro e detalhes em roxo para manter uma relação com meu perfil do GitHub. O menu leva às quatro seções. No celular, os links ficam em um menu que abre por um botão. O editor de código da abertura é uma ilustração do meu perfil.

Mostre os wireframes e compare com o resultado. Reduza a janela para demonstrar o layout móvel.

## 3. Sobre mim

Apresente sua formação, seus interesses e o objetivo de encontrar um estágio. Clique em English e depois em Português para mostrar as duas versões.

## 4. Projetos

Mostre a ordem cronológica, as tecnologias, as imagens reais e os links dos repositórios. Explique sua participação no jogo em grupo e a evolução do CRUD em JavaScript para o catálogo em React.

## 5. Experiências

Explique que sua trajetória na área ainda é acadêmica. Os itens informam instituição, atividade, período e uma descrição do que foi feito.

## 6. Contato

Mostre os links de e-mail, LinkedIn e GitHub. Demonstre a validação de um campo vazio e de um e-mail incorreto. Depois da ativação do destinatário, envie uma mensagem real e confira o recebimento.

## 7. Organização do código

- `App.jsx`: estrutura da página, menu e idioma.
- `Contact.jsx`: validação e envio do formulário.
- `data.js`: informações do perfil, projetos e experiências.
- `style.css`: estilos, animações e adaptações para celular.
- `Icons.jsx`: ícones em SVG.

Os projetos são exibidos com `map`. O idioma e a abertura do menu são controlados com `useState`. Um `IntersectionObserver` acompanha as seções visíveis para atualizar a navegação.

## 8. Hospedagem e documentação

Mostre o repositório, o README e a URL pública da Vercel. Explique os comandos `npm install`, `npm run dev` e `npm run build`. O front-end fica hospedado como arquivos estáticos, e o formulário usa um serviço externo de envio.
