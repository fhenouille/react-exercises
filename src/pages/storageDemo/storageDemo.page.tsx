import type { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Emitter from "./components/emitter.component";
import Subscriber from "./components/subscriber.component";

const StorageDemo: FunctionComponent = () => {
  return (
    <div>
      <h1>Storage Sync Demo</h1>
      <Emitter />
      <Subscriber />
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
};

export default StorageDemo;
