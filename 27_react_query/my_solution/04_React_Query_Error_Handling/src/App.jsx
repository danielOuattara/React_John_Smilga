import { ToastContainer } from "react-toastify";
import { Form, Items } from "./components";

const App = () => {
  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form />
      <Items />
    </section>
  );
};
export default App;
