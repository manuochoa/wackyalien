import "./App.css";
import "./assets/scss/responsive.scss"
import { BrowserRouter as Router } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <SnackbarProvider maxSnack={3}>
        <div className="App">
          <Home />
        </div>
      </SnackbarProvider>
    </Router>
  );
}

export default App;
