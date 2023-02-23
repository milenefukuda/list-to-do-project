export function Done({ list, setList }) {
  const listDone = list.filter((currentElement) => {
    return currentElement.status === true;
  });

  // function handleDelete(id) {
  //   let deleteItem = list.filter((currentTask) => currentTask.id !== id);
  //   setList(deleteItem);
  // }

  function handleDelete(id) {
    let findItem = list.find((currentTask) => currentTask.id === id);
    let findIndex = list.indexOf(findItem);
    let clone = [...list];
    clone.splice(findIndex, 1);
    setList(clone);
  }

  return (
    <>
      <div class="col">
        <h3>Done</h3>
        {listDone.map((currentTask, index) => {
          return (
            <>
              <p>{index + 1}</p>
              <p>{currentTask.name}</p>
              <p>{currentTask.description}</p>
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
