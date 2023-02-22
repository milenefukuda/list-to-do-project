import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export function ToDo({ list }) {
  const listToDo = list.filter((currentElement) => {
    return currentElement.status === false;
  });

  const [formStatus, setFormStatus] = useState(false);
  const [form, setForm] = useState({
    id: { uuidv4 },
    name: "",
    description: "",
    status: false,
  });

  function handleClick() {
    setFormStatus(!formStatus);
  }

  function handleDelete(id) {
    const updatedList = { ...form, status: true };
    setForm(updatedList);
  }

  // function handleDelete(){
  // const updatedList = form.filter(currentForm => form.id !== id)
  // setForm(updatedList)
  // }

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
              <button onClick={handleClick}>I did it!</button>
              <button onClick={handleDelete}>Delete</button>
            </>
          );
        })}
      </div>
    </>
  );
}
