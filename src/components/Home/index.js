import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { ToDo } from "../Pages/ToDo";
import { Done } from "../Pages/Done";

export function Home() {
  const [list, setList] = useState([]);

  const [form, setForm] = useState({
    id: uuidv4(),
    name: "",
    description: "",
    status: false,
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setList([...list, form]); // await axios post // api // id plural //

    setForm({
      id: uuidv4(),
      name: "",
      description: "",
      status: false,
    });
  }

  return (
    <>
      <form>
        <div className="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            Nome da tarefa
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            name="name"
            value={form.name}
            onChange={handleChange}
          ></input>
          <div className="mb-3">
            <label for="formGroupExampleInput2" class="form-label">
              Descrição da Tarefa
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </div>
          {/* <input
        type="number"
        name="status"
        value={form.status}
        onChange={handleChange}
      /> */}
          <button type="submit" onClick={handleSubmit} class="btn btn-dark">
            Create task
          </button>
        </div>
      </form>
      <div className="container">
        <div className="row">
          <ToDo list={list} setList={setList} />
          <Done list={list} setList={setList} />
        </div>
      </div>
    </>
  );
}
