const itemInput = document.querySelector(".cartao_input");
const listaItem = document.querySelector(".lista_item");
const BotaoAdicionar = document.querySelector(".cartao_botao");
const listaDeCompras = document.querySelector(".cartao_lista");
const botaoApagar = document.querySelector(".item_botao");
const item = document.querySelector(".item");
const produto = { nome: "", valor: 0, produtoPrecificado: false };

let listaDeProdutos =
  JSON.parse(localStorage.getItem("ListaDeProdutosSalvos")) || [];

const validaInput = () =>
  itemInput.value.trim().length >= 8 && itemInput.value.trim().length <= 64;

BotaoAdicionar.addEventListener("click", criaProduto);

function criaProduto() {
  const itemValido = validaInput();
  if (!itemValido) {
    return swal({
      title: "Atenção!",
      text: "O produto deve ter de 8 a 64 caracteres!",
      icon: "error",
      button: "Ok",
    });
  } else {
    let produto = {
      nome: itemInput.value,
      valor: 0,
      produtoPrecificado: false,
    };
    listaDeProdutos.push(produto);
    localStorage.setItem(
      "ListaDeProdutosSalvos",
      JSON.stringify(listaDeProdutos)
    );
    itemInput.value = "";
    adicionaItem(produto.nome);
    swal({
      title: "Sucesso!",
      text: "Produto adicionado com sucesso!",
      icon: "success",
      button: "Ok",
    });
  }
  return produto;
}

function atualizaValor(listaDeProdutos) {
  let valorTotal = 0;
  listaDeProdutos.forEach((produto) => {
    valorTotal += produto.valor;
  });
  totalCompras = document.querySelector(".total_valor");
  totalCompras.innerText = valorTotal.toFixed(2);
}

function criaItens() {
  listaDeProdutos.forEach((element) => {
    adicionaItem(element.nome, element.produtoPrecificado);
    atualizaValor(listaDeProdutos);
  });
}

const adicionaItem = (nome, produtoPrecificado) => {
  let produto = { nome: itemInput.value, valor: 0, produtoPrecificado: false };

  let listaItem = document.createElement("li");
  listaItem.classList.add("lista_item");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("item_checkbox");

  if (produtoPrecificado == true) {
    checkbox.classList.add("checked");
    checkbox.checked=true;
    checkbox.disabled=true;

  }

  checkbox.addEventListener("click", () => {
    produto.valor = "i";
    while (isNaN(produto.valor)) {
      produto.valor = Number(prompt("Digite o valor do produto"));
    }
    let i = listaDeProdutos.findIndex((obj) => obj.nome === nome);
    if (i > -1) {
      listaDeProdutos[i].valor = produto.valor;
      listaDeProdutos[i].produtoPrecificado = true;
      salvaNoLocalStorage(listaDeProdutos);
      atualizaValor(listaDeProdutos);
      checkbox.disabled = true;
      checkbox.classList.add("checked")
    }
  });

  const item = document.createElement("span");
  item.classList.add("item");
  item.innerText = nome;

  const botaoApagar = document.createElement("button");
  botaoApagar.classList.add("item_botao");
  botaoApagar.innerText = "X";
  botaoApagar.addEventListener("click", () => {
    swal({
      title: "Atenção!",
      text: "Você quer mesmo deletar este produto?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Produto deletado com sucesso!", {
          icon: "success",
        });
        listaDeCompras.removeChild(listaItem);
        apagaItem(nome);
      } else {
        swal("Seu produto está a salvo.");
      }
    });
  });
  listaItem.appendChild(checkbox);
  listaItem.appendChild(item);
  listaItem.appendChild(botaoApagar);
  listaDeCompras.appendChild(listaItem);
};

criaItens();

function salvaNoLocalStorage(listaDeProdutos) {
  localStorage.setItem(
    "ListaDeProdutosSalvos",
    JSON.stringify(listaDeProdutos)
  );
}

function apagaItem(nome) {
  let index = listaDeProdutos.findIndex((obj) => obj.nome === nome);
  if (index > -1) {
    listaDeProdutos.splice(index, 1);
  }
  salvaNoLocalStorage(listaDeProdutos);
  atualizaValor(listaDeProdutos);
}