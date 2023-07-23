import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const Dashboard = () => {
    return (
        <div className="row p-0 m-0" style={{ backgroundColor: '#01030e' }}>
          <div className="row w-100 p-0 m-0" style={{ position: 'fixed', zIndex: 3000, backgroundColor: '#01030e' }}>
            <Navbar />
          </div>
          <div className="row d-flex w-100 form1 p-0 m-0"> 
            <div className="col-lg-9 col-md-8 overflow-auto  mb-0 form1  " style={{ height: '79.9vh', marginTop: 135, backgroundColor: '' }}>
              <Outlet />
            </div>
          </div>
         
        </div>
    );
} 

export default Dashboard;
