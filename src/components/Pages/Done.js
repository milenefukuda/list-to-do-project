export function Done({ list }) {
  const listDone = list.filter((currentElement) => {
    return currentElement.status === true;
  });

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
            </>
          );
        })}
      </div>
    </>
  );
}
