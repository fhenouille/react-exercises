import { type FunctionComponent } from "react";
import { Outlet } from "react-router-dom";

const App: FunctionComponent = () => {
  return <Outlet />;
};

export default App;
