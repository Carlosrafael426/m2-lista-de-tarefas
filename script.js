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



function  renderElements(array) {
  const list = document.querySelector(".tasks__list");
  list.innerHTML = " "
  for(let i = 0; i < array.length; i++){
      const item = createTaskItem(array[i]) 
      list.appendChild(item);  
  }
}
renderElements(tasks)

function  createTaskItem(item){

    const listItem = document.createElement("li");
    const listContainer = document.createElement("div");
    const listSpan = document.createElement("span");
    const listTitle = document.createElement("p");
    const deleteButton = document.createElement("button");
  
    deleteButton.addEventListener("click", function(){
      const deleteTask = tasks.indexOf(item);
      tasks.splice(deleteTask,1);
      renderElements(tasks);
    }) 
    
    listTitle.innerText  = item.title;
    console.log(listTitle);

    if(item.type === "Urgente"){
       listSpan.classList.add("span-urgent");
    }else if(item.type === "Importante"){
       listSpan.classList.add("span-important");
    }else{
       listSpan.classList.add("span-normal");
    }

    listItem.classList.add("task__item");
    listContainer.classList.add("task-info__container");
    listSpan.classList.add("task-type");
    deleteButton.classList.add("task__button--remove-task");

    listItem.appendChild(listContainer);
    listItem.appendChild(deleteButton);
    listContainer.appendChild(listSpan);
    listContainer.appendChild(listTitle);
    return listItem;  
  }
  const form = document.querySelector('.form__container')

  form.addEventListener("submit", function(event){
    event.preventDefault();
    const inputName = document.querySelector(".form__input--text");
    const selectPriority = document.querySelector(".form__input--priority");
    tasks.unshift({title: inputName.value ,type: selectPriority.value});
    renderElements(tasks);
  })