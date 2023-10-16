import "./App.css";
// import { BotonContador } from "./components/BotonContador/BotonContador";
import { Header } from "./components/Header/Header";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Promises } from "./components/Promises/Promises";
// import { Map } from "./components/Map/Map";
// import { Simpsons } from "./components/Simpsons/Simpsons";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <ItemListContainer/>
        <ItemDetailContainer/>
        <Routes>
          <Route path="" element={ItemDetailContainer}/>
        </Routes>      
      </BrowserRouter>

      {/* <BotonContador stock={10} inicial={1}/> */}

      {/* <Promises/> */}

      {/* <Map/> */}

      {/* <Simpsons/> */}

    </div>
  );
}

export default App;
