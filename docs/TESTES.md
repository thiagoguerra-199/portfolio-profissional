# Verificações realizadas

| Verificação | Resultado |
| --- | --- |
| Instalação do zero com `npm ci` em uma pasta separada | Concluída com o lockfile completo. As dependências foram obtidas do cache local. |
| Build de produção com `npm run build` | Concluído sem erros. |
| Abertura local no navegador | Página carregada com as quatro seções. |
| Português e inglês | Troca de idioma conferida nos dois sentidos. |
| Painel sobre-mim.js | Transformação CSS igual a `none`: painel reto. |
| Largura de desktop, 1280 px | Sem rolagem horizontal. |
| Largura de celular, 390 px | Sem rolagem horizontal. |
| Menu móvel | Abriu e fechou após selecionar Contato. |
| Nome vazio | Envio bloqueado pela validação do navegador. |
| E-mail inválido | Envio bloqueado pela validação do navegador. |
| Imagens dos projetos | Três arquivos locais presentes e inspecionados. |
| Wireframes SVG | Arquivos XML válidos e importados no Figma como camadas editáveis. |
| Envio por e-mail | POST chegou ao FormSubmit, que exibiu “Check Your Email” e informou o envio da ativação ao destinatário. Recebimento de mensagens ainda depende da ativação e da confirmação do autor. |

## Evidências

- `evidencias/desktop.jpg`: página em desktop.
- `evidencias/mobile.jpg`: abertura do site em tela móvel.
- `evidencias/figma.jpg`: wireframes importados no Figma.

O teste inicial do envio por AJAX não concluiu. A versão entregue usa envio HTML por POST, com confirmação na página do serviço. As capturas de tela mostram o layout; não são uma comprovação de recebimento de e-mail.

## Validação após a publicação

A Vercel será configurada pelo autor. Depois do deploy, falta testar a URL pública em janela anônima e em um celular real, confirmar a ativação do formulário e verificar o recebimento de uma mensagem na caixa de entrada. Esses itens não foram marcados como aprovados sem confirmação.
