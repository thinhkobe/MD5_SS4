import { useState } from "react";
import "./App.css";
import OrderForm from "./components/OrderForm";
import CountClick from "./components/CountClick";
import CounText from "./components/CounText";
import CountTime from "./components/CountTime";
import Navbar from "./components/Navbar";
import Manager_Student from "./components/Manager_Student";
const MyContext = createContext(null);
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Manager_Student />
      <Navbar />
      <OrderForm />
      <CountClick />
      <CounText />
      <CountTime />
    </>
  );
}

export default App;
