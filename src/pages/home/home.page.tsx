import type { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

const Home: FunctionComponent = () => {
    const navigate = useNavigate();

    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h1>Welcome to the Demo Hub</h1>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <button onClick={() => navigate("/storage")}>Exercise 1 - Storage Demo</button>
          <button onClick={() => navigate("/dialog")}>Exercise 2 - Dialog Demo</button>
          <button onClick={() => navigate("/dropdown")}>Exercise 3 - Dropdown Demo</button>
        </div>
      </div>
    );
  }
  
export default Home;


