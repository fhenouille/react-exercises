import type { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const StorageDemo: FunctionComponent = () => {
  return (
    <div>
      <h1>StorageDemo</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default StorageDemo;
