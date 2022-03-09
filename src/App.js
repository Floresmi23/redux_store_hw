import {Outlet} from "react-router-dom";
import Nav from "./components/Nav";


function App() {


  return (
      <div className="App">
        <Nav/>
        <header className="App-header">
          <Outlet/>
        </header>
      </div>
  );
}

export default App;
