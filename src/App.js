import "./App.css";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div
      style={{ backgroundColor: "#11111a", width: "100vw", height: "100vh" }}
    >
      <BrowserRouter>
        <ToastContainer />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
