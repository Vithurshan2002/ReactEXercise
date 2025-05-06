
import { BrowserRouter,Routes,Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import Signinpage from "./pages/Signinpage"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/Signup" element={ <LoginPage/> }/>
        <Route path="/" element={ <Signinpage/>  }/>
    </Routes>
    </BrowserRouter>
   
  
      </>
  )
}

export default App
