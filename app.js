function onReady () {
  const addToDoForm = document.getElementById('addToDoForm');
  let toDos = [];
  let id = 0;

  function createNewToDo () {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    id++;

    newToDoText.value = '';
    renderTheUI ();
}
    function renderTheUI() {
      const toDoList = document.getElementById('toDoList');
    }
      toDoList.textContent = '';

      toDos.forEach(function(toDo) {
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        const delete_Btn = document.createElement('button');
        delete_Btn.textContent = "Delete";

        function deleteToDo(){
          toDos = toDos.filter(function(item){
          return item.id !==toDo.id;
          });
        }

        delete_Btn.addEventListener('click', event => {
          deleteToDo();
          });
          renderTheUI();

        });

        newLi.textContent = toDo.title;

        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        newLi.appendChild(delete_Btn);
      };

    addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
    });
    createNewToDo();
    renderTheUI();
  }

window.onload = function() {
  onReady();
};
