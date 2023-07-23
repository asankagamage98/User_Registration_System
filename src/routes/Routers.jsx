
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";


import Login from '../components/Login'
import UserProfile from '../pages/UserProfile'
import EditUserProfile from '../pages/EditProfile'
import SingUp from '../components/SignUp'



const Routers = () => {
    return (
        <div>
        <Router>
          <Routes>
                <Route  index element={<Login />} />
                <Route path='singup' element={<SingUp/>}/>

                <Route  path="userProfile" element={Outlet}>
                    <Route path="profileView" index element={<UserProfile/>}/>
                    <Route path="editProfile" element={<EditUserProfile/>}/>
                </Route>

          </Routes>
        </Router>
      </div>
    );
}

export default Routers;


