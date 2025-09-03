FAQ Accordion
Este é um projeto simples de um componente de FAQ (Perguntas Frequentes) estilo acordeão. Ele foi desenvolvido com o objetivo de praticar e aprimorar habilidades em HTML, CSS, e JavaScript.

O projeto apresenta uma lista de perguntas e respostas que podem ser expandidas e recolhidas individualmente, proporcionando uma experiência de usuário interativa e limpa.

⚙️ Tecnologias Utilizadas
HTML: Para a estrutura e marcação do conteúdo.

CSS: Para a estilização e responsividade do layout. Foram usadas variáveis CSS para facilitar a manutenção das cores.

JavaScript: Para adicionar a funcionalidade interativa de expandir e recolher as respostas quando as perguntas são clicadas.

✨ Funcionalidades
Acordeão Interativo: Ao clicar em uma pergunta, a resposta correspondente é exibida ou ocultada.

Design Responsivo: O layout se adapta a diferentes tamanhos de tela, desde desktops até dispositivos móveis, garantindo uma boa visualização em qualquer aparelho.

Estilização Customizada: Utiliza uma paleta de cores e uma fonte específica (Work Sans) para um design moderno e elegante.

Ícones Dinâmicos: Os ícones de "mais" e "menos" (+ e -) mudam dinamicamente ao lado da pergunta para indicar o estado do acordeão (aberto ou fechado).

💡 Dicas de Desenvolvimento
Aqui estão algumas dicas úteis que foram aplicadas neste projeto e que podem te ajudar em seus próprios desafios de desenvolvimento web:

Estrutura e Organização
Separação de arquivos CSS: O uso de múltiplos arquivos CSS (style.css, reset.css, variables.css, responsive.css) é uma ótima prática para manter o código organizado e modular. Cada arquivo tem uma função específica, facilitando a manutenção.

reset.css: Garante que o projeto comece com uma base consistente em todos os navegadores, removendo estilos padrão.

variables.css: Centraliza a definição de cores e outras propriedades, permitindo que você mude a paleta de cores do projeto alterando apenas um arquivo.

Aplicações de CSS
Media Queries para Responsividade: O uso de @media é fundamental para criar um design responsivo. Neste projeto, ele é usado para ajustar o layout (como a margem superior e o tamanho da fonte) para diferentes tamanhos de tela.

Posicionamento de Background: A propriedade background-position com valores como top .5px right 0 permite um controle preciso sobre a posição de ícones ou imagens de fundo em relação ao conteúdo.

Padding: A propriedade padding usada no responsivo impede que as perguntas encostem nos ícones conforme a tela vai diminuindo.

JavaScript Prático
Manipulação de Classes: A lógica JavaScript utiliza o método classList.contains('ativo') para verificar a existência de uma classe e o classList.add() ou classList.remove() para alternar o estado do acordeão. Essa é uma maneira simples e eficaz de controlar a visibilidade e a aparência dos elementos sem precisar manipular o CSS diretamente no JS.

Seletores Eficientes: Usar document.querySelectorAll(".item") é uma forma eficiente de selecionar todos os elementos com a classe .item de uma vez, permitindo que você itere sobre eles com o método forEach para adicionar o ouvinte de eventos a cada um.
