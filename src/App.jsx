import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard"
import { Error404 } from "./pages/Error404"

function App() {
  

  return 
    <>
     <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
     </BrowserRouter>
     
    </>
  
};

export default App
