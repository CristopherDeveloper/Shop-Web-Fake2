import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainLogin from "./components/MainLogin";
import MainHome from "./components/MainHome";
import MainProduct from "./components/MainProduct";


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/products" element={<MainProduct/>} />
        <Route path="/home" element={<MainHome/>} />
        <Route path="" element={<MainLogin/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
