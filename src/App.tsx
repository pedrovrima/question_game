import Routes from "./pages"
import { BrowserRouter } from "react-router-dom";
import ContextStore from './context';

function App() {
  return (
    <div >
      <BrowserRouter>
        <ContextStore>
          <Routes />
        </ContextStore>
      </BrowserRouter>
    </div>
  );
}

export default App;
