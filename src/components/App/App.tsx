import type { FC } from "react";
import "./App.css";
import Menubar from "../Menu/Menubar";
import {useState} from "react";


const App: FC = () => {

    const [isSearchBarActived] = useState<boolean>(false);

  return (
    <div className="app">

        <Menubar isSearchBarActived={isSearchBarActived} handleChangeSearch={() => ""} handleSubmitSearch={() => ""}/>
      {/*<Agents />*/}

    </div>
  );
};

export default App;
