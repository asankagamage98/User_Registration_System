

import "../assets/styles/Login.css"

const Login = () => {
    return (
        <div className ='login'>
           <form className='form1'>
             
                <h1>Welcome Back</h1>
                <h4>Login to your account</h4>
              
             <div className='form2 pt-2'>
                <h2>ABC COMPANY</h2>
                <div className="mb-3 mt-3">
                    <label  className="form-label">User Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Jone.Doe@gmail.com"/>
                </div>

                <div>
                    <label  className="form-label">Password</label>
                    <input type="password" id="inputPassword5" className="form-control" aria-labelledby="passwordHelpBlock"/>
                </div>
                <button type="button" className="btn btn-primary mt-4">Login</button>
                <div  className="form-text mt-3">
                    Still Have No account? <span className="text-warning ">SIGNUP </span>Now
                </div>

             </div>
             <div className="row ms-3 mt-2" style={{fontSize:'15px'}}>
                 <span className="col-6 text-white">Version 1.0 </span>
                 <span className="col-2 text-white"><b>About Us</b> </span>
                 <span className="col-2 text-white"><b>Privacy</b> </span>
                 <span className="col-2 text-white"><b>Terms</b> </span>
             </div>
           </form>
        </div>
    );
}

export default Login;
