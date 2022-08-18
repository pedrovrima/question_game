import Routes from "./pages"
import { BrowserRouter } from "react-router-dom";
import Context from './context';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Context>
          <Routes />
        </Context>
      </BrowserRouter>
    </div>
  );
}

export default App;
