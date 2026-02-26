import { CssBaseline } from "@mui/material";
import Contador from "./pages/ex01_contador/Contador";
import InputControl from "./pages/ex02_inputControl/InputControl";
import MapRender from "./pages/ex03_mapRender/MapRender";
import AddItensInput from "./pages/ex04_AddItensInput/AddItensInput";
import ContainerProps from "./pages/containerProps/ContainerProps";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/contador" element={<Contador />} />
          <Route path="/input" element={<InputControl />} />
          <Route path="/map" element={<MapRender />} />
          <Route path="/add-itens" element={<AddItensInput />} />
          <Route path="/container-props" element={<ContainerProps />} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
