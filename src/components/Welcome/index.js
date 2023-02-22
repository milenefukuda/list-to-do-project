import { Link } from "react-router-dom";

export function Welcome() {
  return (
    <header id="start">
      <h1> Welcome to your task list</h1>
      <Link to="/home">
        <button type="button" class="btn btn-dark">
          Start
        </button>
      </Link>
    </header>
  );
}
