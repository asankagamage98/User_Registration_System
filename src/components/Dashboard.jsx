import { Outlet} from "react-router-dom";

import Navbar from "./Navbar";
import '../assets/styles/Dashbord.css'
import Buttons from "./Buttons";


const Dashboard = () => {

  
    return (
        <div className="dashbord p-0 m-0" style={{ backgroundColor: '#ffff' }}>
          <div className="w-100" style={{ position: 'fixed', zIndex: 3000 }}>
            <Navbar />
          </div>
          <div className="d-flex w-100 p-0 m-0"> 
            <div className="col-lg-12 col-md-8 overflow-auto  mb-0 form1  " >
              <Buttons/>
              <Outlet />
            </div>
          </div>   
        </div>
    );
}

export default Dashboard;
