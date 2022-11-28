 ### REQUISITOS DA APLICAÇÃO
 
A aplicação que deverá ser realizada individualmente, deve contemplar os seguintes requisitos:

- Um título na aba do navegador, para que o usuário encontre a sua aplicação no meio das várias abas que constantemente mantém abertas.
- Um cabeçalho dentro da página, para que o usuário saiba facilmente em que página se encontra e do que se trata o conteúdo.
- Um campo de texto com validação para digitar o nome do produto a ser adicionado.
-Preenchimento: Obrigatório
  - Tipo de campo: Input
  - Mínimo de caracteres: 8
  - Máximo de caracteres: 64
  - Um botão para adicionar um novo produto na lista.
  
Quando um produto for adicionado o sistema deve exibir uma animação na tela demonstrando que foi cadastrado com sucesso.

- Uma lista contendo os produtos já inseridos.
- Cada item da lista deve conter:
  - Um checkbox para o usuário marcar aquele produto que já foi comprado.
  - O texto que o usuário digitou ao cadastrar o produto.
  - Um botão para excluir o produto da lista, caso desejado.
  - Quando o usuário marcar um item da compra, deve-se abrir um pop-up para que o mesmo digite o valor válido da compra, 
  após isso, deve-se somar ao valor total das compras.
  - Preenchimento: Obrigatório
  - Tipo de campo: Input number
  - Valor mínimo: R$0,00
  - A lista deve ser salva no localStorage do navegador, e deve ser carregada sempre que a página for reaberta.
