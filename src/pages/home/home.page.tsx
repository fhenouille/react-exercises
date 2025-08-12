import type { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    navigate(path);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Welcome to the Demo Hub</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <button
          type="button"
          onClick={() => {
            handleClick("/storage");
          }}
        >
          Exercise 1 - Storage Demo
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("/dialog");
          }}
        >
          Exercise 2 - Dialog Demo
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("/dropdown");
          }}
        >
          Exercise 3 - Dropdown Demo
        </button>
      </div>
    </div>
  );
};

export default Home;
