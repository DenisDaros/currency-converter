# currency-converter


### Sumário

<details>
  <summary><strong>👨‍💻 O que foi desenvolvido</strong></summary><br />

  Neste projeto você vai ver uma casa de câmbio:

  - Um formulário simples de Inputs de entrada de Moedas;
  - A aplicação consumindo serviços de uma API;
  - Uma aplicação responsiva;
</details>

### Orientações

<details>
  <summary><strong>Rodando na sua máquina</strong></summary><br />

1. Clone o repositório

	*  Use o comando: `git@github.com:DenisDaros/currency-converter.git`

2. Instale as dependências

	* Para isso, use o seguinte comando: `npm install`

3. Rode a aplicação 

	* Para isso, use o seguinte comando: `npm run dev`
</details>

<details>
  <summary><strong>API</strong></summary><br />

API é a sigla para "Interface de Programação de Aplicativos" (em inglês, Application Programming Interface). Uma API é um conjunto de regras e protocolos que permite que diferentes softwares se comuniquem e interajam entre si. Ela define os métodos e as estruturas de dados que os desenvolvedores podem usar para acessar as funcionalidades de um sistema, serviço ou aplicativo específico, sem precisar conhecer os detalhes internos da implementação.

As APIs são usadas para permitir a integração entre diferentes sistemas e aplicativos, tornando possível que eles compartilhem informações, executem ações e troquem dados de forma eficiente. Por exemplo, muitos aplicativos móveis usam APIs para se conectar a serviços web, como redes sociais, serviços de mapas, previsão do tempo, pagamentos online, entre outros.

As APIs podem ser públicas, disponíveis para qualquer desenvolvedor usar, ou privadas, restritas a um grupo específico de desenvolvedores ou a uma organização. Elas desempenham um papel fundamental na criação de ecossistemas de software, permitindo que aplicativos de terceiros ampliem e aprimorem a funcionalidade de outros aplicativos e serviços.

Em resumo, uma API é uma ponte de comunicação que permite que diferentes softwares interajam e cooperem, tornando possível a criação de sistemas mais complexos e integrados.
</details>
<details>
  <summary><strong>Explorando main.js</strong></summary><br />

1. Importa a biblioteca SweetAlert2 (Swal) para exibir mensagens de erro.

  *  `import Swal from 'sweetalert2';`

2. Define três funções: fetchCurrencyConversion, displayConversionResult, e handleError. Cada uma delas executa uma parte específica da lógica do programa.

  *  `fetchCurrencyConversion()`
  *  `displayConversionResult()`
  *  `handleError()`  

3. O evento window.onload é acionado quando a página HTML está totalmente carregada.

  *  `window.onload = () => {...}`

4. Obtém referências para elementos HTML relevantes, como campos de entrada, botões e elementos de exibição de resultados.

  *  `const coin1 = document.querySelector('#input-coin1');`
  *  `const coin2 = document.querySelector('#input-coin2');` 
  *  `const value = document.querySelector('#input-value');` 
  *  `const areaResponse = document.querySelector('#areaResponse');` 
  *  `const button = document.querySelector('#btt');`

5. Adiciona um ouvinte de eventos de clique ao botão "btt".

  *  ` button.addEventListener('click', (event) => {...});`

6. Quando o botão é clicado, a função fetchCurrencyConversion é chamada para obter a conversão de moedas da API.

  *  `fetchCurrencyConversion(value.value, coin1.value, coin2.value)`

7. Se a chamada à API for bem-sucedida, a função displayConversionResult é chamada para exibir o resultado no elemento areaResponse.

  *  `.then(displayConversionResult)`

8. Se ocorrer algum erro durante a chamada à API, a função handleError é chamada para exibir uma mensagem de erro usando o SweetAlert2 (Swal).

  *  `.catch(handleError);`

</details>
