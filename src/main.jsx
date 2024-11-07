import { createRoot } from "react-dom/client";
import Routers from "./routers";
import './index.css'
import 'sweetalert2/dist/sweetalert2.min.css'

createRoot(document.getElementById("root")).render(<Routers />);