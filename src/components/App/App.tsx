import type { FC } from "react";
import "./App.css";
import Menubar from "../Menu/Menubar";


const App: FC = () => {
  return (
    <div className="app">
        <Menubar/>
      {/*<Agents />*/}
    </div>
  );
};

export default App;
