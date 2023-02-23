import { useState } from "react";

export function ToDo({ list, setList }) {
  const listToDo = list.filter((currentElement) => {
    return currentElement.status === false;
  });

  function handleClick(id) {
    console.log(id);
    let findTask = list.find((currentTask) => currentTask.id === id); // para encontrar o id
    let findIndex = list.indexOf(findTask); // para encontrar a posição
    let clone = [...list]; // array clonada
    clone[findIndex].status = true; // alteração da array clonada
    setList(clone);
  }

  function handleDelete(id) {
    let findTask = list.find((currentTask) => currentTask.id === id);
    // console.log(id);
    // console.log(findTask);
    let findIndex = list.indexOf(findTask);
    // console.log(findIndex);
    let clone = [...list];
    clone.splice(findIndex, 1);
    // console.log(clone);
    setList(clone);
  }

  console.log(list); // do componente

  return (
    <>
      <div class="col">
        <h3>To Do:</h3>
        {listToDo.map((currentTask, index) => {
          return (
            <>
              <p>{index + 1}</p>
              <p>
                <strong>Tarefa: </strong>
                {currentTask.name}
              </p>
              <p>
                <strong>Descrição: </strong>
                {currentTask.description}
              </p>
              <button onClick={() => handleClick(currentTask.id)}>
                I did it!
              </button>
              <button onClick={() => handleDelete(currentTask.id)}>
                Delete
              </button>
            </>
          );
        })}
      </div>
    </>
  );
}
