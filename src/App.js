// import Routes
import URLRoutes from "./routes";

// Import styles
import "./App.css";

// import toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import nav,footer
import { Nav } from "./Pages/Nav";
import { Footer } from "./Pages/Footer";

// toast-configuration method,
// it is compulsory method.
toast.configure();

function App() {
  return (
    <>
      <Nav />
      <URLRoutes />
      <Footer />
    </>
  );
}

export default App;
