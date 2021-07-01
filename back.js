const nome = document.querySelector("#nome");
const registrar = document.querySelector("#registrar");
const tabelaGastos = document.querySelector("#table-gastos");
const tabelaBody = document.querySelector("#table-body");
const tableGastos = document.querySelector("#table-gastos");
const tipo = document.querySelector("#tipo");
const db = [];

const update = () => {
  tabelaBody.innerHTML = "";
  JSON.parse(window.localStorage.getItem("listaUser")).map(function (dado) {
    tabelaBody.innerHTML += `<tr><td>${dado.descricao}</td><td>${dado.tipo}</td></tr>`;
  });
};

const adicionaGasto = () => {
  const obj = {
    descricao: nome.value,
    tipo: tipo.value,
  };
  if (!window.localStorage.getItem("listaUser")) {
    db.push(obj);
    window.localStorage.setItem("listaUser", JSON.stringify(db));
  } else {
    listaConsolidada = JSON.parse(window.localStorage.getItem("listaUser"));
    listaConsolidada.push(obj);
    window.localStorage.setItem("listaUser", JSON.stringify(listaConsolidada));
  }
  update();
};

update();

console.log(JSON.parse(window.localStorage.getItem("listaUser")).length);
