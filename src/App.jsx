import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <>
    <Navigation/>
      <main>
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;
