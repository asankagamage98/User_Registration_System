import { useNavigate } from 'react-router-dom';
import "../assets/styles/Login.css"

const Login = () => {

    
  const navigate = useNavigate();
  
  const onClicAbout = () => {
    navigate('singup');
  }

    return (
        <div className ='login'>
           <form className='form1'>
             
                <h2>Welcome Back</h2>
                <h5>Login to your account</h5>
              
             <div className='form2 mt-4'>
                <h3>ABC COMPANY</h3>
                <div className="mb-3 mt-3">
                    <label  className="form-label">User Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Jone.Doe@gmail.com"/>
                </div>

                <div>
                    <label  className="form-label">Password</label>
                    <input type="password" id="inputPassword5" className="form-control" aria-labelledby="passwordHelpBlock"/>
                </div>
                <div><button type="submit" className=" btn-primary Loginbtn mt-5">Login</button></div>
                <div  className="form-text mt-3">
                    Still Have No account ? <span className="text-warning " onClick={onClicAbout} >SIGNUP </span> Now
                </div>

             </div>
             <div className="ms-3 mt-2 d-flex gap-3" style={{ fontSize: '11px', display: 'flex'}}>
                <div className="me-5"><span className="text-white">Version 1.0</span></div>
                <span className="text-white ms-5"><b>About Us</b></span>
                <span className="text-white ms-5"><b>Privacy</b></span>
                <span className="text-white ms-5"><b>Terms</b></span>
            </div>
           </form>
        </div>
    );
}

export default Login;
