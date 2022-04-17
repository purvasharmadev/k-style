// import Routes
import URLRoutes from "./routes";

// Import styles
import "./App.css";

import { toast } from "react-toastify";
// Import toastify css file
import "react-toastify/dist/ReactToastify.css";

// toast-configuration method,
// it is compulsory method.
toast.configure();

function App() {
  return (
    <div>
      <URLRoutes />
    </div>
  );
}

export default App;
