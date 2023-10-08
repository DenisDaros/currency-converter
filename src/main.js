// Importa a biblioteca SweetAlert2 (Swal) para exibir mensagens de erro.
import Swal from 'sweetalert2';

// Função que realiza a chamada à API para converter moedas.
function fetchCurrencyConversion(amount, fromCurrency, toCurrency) {
  // Constrói a URL da API com os parâmetros fornecidos.
  const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`;
  
  // Realiza a solicitação à API usando fetch e retorna a resposta JSON.
  return fetch(url).then((result) => result.json());
}

// Função que exibe o resultado da conversão no elemento de resposta.
function displayConversionResult(result) {
  // Extrai as taxas de câmbio da resposta.
  const response = Object.values(result.rates);
  
  // Formata a primeira taxa para duas casas decimais.
  const responseToFixed = response[0].toFixed(2);
  
  // Atualiza o conteúdo do elemento "areaResponse" com o valor convertido.
  areaResponse.innerText = `Valor total convertido: ${responseToFixed}`;
}

// Função que lida com erros na chamada da API.
function handleError(error) {
  // Exibe uma mensagem de erro usando a biblioteca SweetAlert2 (Swal).
  Swal.fire({
    title: 'Moeda não encontrada', // Título da mensagem de erro.
    text: error.message, // Texto da mensagem de erro (mensagem de erro real recebida da API).
    icon: 'error', // Ícone de erro na mensagem.
    confirmButtonText: 'Cool', // Texto do botão de confirmação.
  });
} 
// Cannot convert undefined or null to object
// Evento que é acionado quando a página HTML está totalmente carregada.
window.onload = () => {
  // Obtém referências para elementos HTML relevantes.
  const coin1 = document.querySelector('#input-coin1'); // Campo de entrada da moeda de origem.
  const coin2 = document.querySelector('#input-coin2'); // Campo de entrada da moeda de destino.
  const value = document.querySelector('#input-value'); // Campo de entrada do valor a ser convertido.
  const areaResponse = document.querySelector('#areaResponse'); // Elemento onde o resultado será exibido.
  const button = document.querySelector('#btt'); // Botão que inicia a conversão.

  // Adiciona um ouvinte de eventos de clique ao botão.
  button.addEventListener('click', (event) => {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página.

    // Chama a função fetchCurrencyConversion para obter a conversão de moedas.
    fetchCurrencyConversion(value.value, coin1.value, coin2.value)
      .then(displayConversionResult) // Exibe o resultado da conversão.
      .catch(handleError); // Lida com erros, se ocorrerem.
  });
};