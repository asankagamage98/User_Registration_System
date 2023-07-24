
import { Routes, Route, Outlet } from "react-router-dom";


import Login from '../components/Login'
import UserProfile from '../pages/UserProfile'
import EditUserProfile from '../pages/EditProfile'
import SingUp from '../components/SignUp'
import Dashboard from "../components/Dashboard";
import UploadImage from "../components/UploadImage";



const Routers = () => {
    return (
        <div>
       
          <Routes>
                <Route  index element={<Login />} />
                <Route path='singup' element={<SingUp/>}/>
               


                <Route  path="dashbord" element={<Dashboard/>}>
                    <Route index   element={<UserProfile/>}/>
                    <Route path="userdetails" element={<Outlet/>}/>
                    <Route path="uploadImage" element={<UploadImage/>}/>
                    <Route path="editProfile" element={<EditUserProfile/>}/>
                

                </Route>
                
          </Routes>
       
      </div>
    );
}

export default Routers;


