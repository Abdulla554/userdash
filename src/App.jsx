import AllUser from "./pages/User/AllUser";
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import Userdelete from "./pages/User/Userdelete";
import Newuser from "./pages/User/Newuser";
import User from "./pages/User/User";
export default function App() {
  return (
   <>
   <BrowserRouter>
        <Routes>
          <Route path="/" element={   <AllUser/>} />
          <Route path="/userdelete" element={<Userdelete />} />
          <Route path="/newuser" element={<Newuser />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
    </BrowserRouter>

   
   </>
  )
}