const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];


const list = document.querySelector("ul");

function  renderElements(array) {
  for(let i = 0; i < array.length; i++){
    const title = array[i].title;
    const type = array[i].type;
    createTaskItem(title, type);
    

  }
}

function  createTaskItem(title ,type){

    const listItem = document.createElement("li");
    const listContainer = document.createElement("div");
    const listSpan = document.createElement("span");
    const listTitle = document.createElement("p");
    const listButton = document.createElement("button");

    listTitle.innerText  = title; 

    if(type === "Urgente"){
       listSpan.classList.add("span-urgent");
    }else if(type === "Importante"){
       listSpan.classList.add("span-important");
    }else{
       listSpan.classList.add("span-normal");
    }

    listItem.classList.add("task__item");
    listContainer.classList.add("task-info__container");
    listSpan.classList.add("task-type");
    listButton.classList.add("task__button--remove-task");

    listItem.appendChild(listContainer);
    listItem.appendChild(listButton);
    listContainer.appendChild(listSpan);
    listContainer.appendChild(listTitle);
    list.appendChild(listItem);  
    console.log(listItem);
  }  

  function addTasklist(){
    const form = document.querySelector("form__container");
    console.log(form)
  }
  
  addTasklist