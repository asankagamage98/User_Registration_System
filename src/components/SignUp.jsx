import '../assets/styles/SignUp.css'



const SignUp = () => {
    return (
        <div className ='login'>
        <form className='form1'>
            <div className='d-flex align-items-center gap-3 icon1'>
               <i className="fa-solid fa-angle-left"></i>
               <h4 className='p-0 m-0'>Create Account</h4>
            </div>
             
           
          <div className='form2 pt-2'>
             <h3>ABC COMPANY</h3>

             <div className='form3'>
                <div className='d-flex mt-2 gap-4'>
                    <div className="">
                        <label  className="form-label">First Name</label>
                        <input type="text" className="form-control text-input" id="exampleFormControlInput1" placeholder="Jone"/>
                    </div>

                    <div className="">
                        <label  className="form-label">Second Name</label>
                        <input type="text" className="form-control text-input" id="exampleFormControlInput1" placeholder=""/>
                    </div>

                </div>

                <div className="">
                        <label  className="form-label">Email Address</label>
                        <input type="email" className="form-control " id="exampleFormControlInput1" placeholder=""/>
                </div>

                <div className='d-flex mt-2 '>
                    <div className="">
                        <label  className="form-label">Mobile Number</label>
                        <input type="text" className="form-control num1" placeholder="+94"/>
                    </div>

                    <div className="input-number ">
                        <input type="text" className="form-control num2"  placeholder=""/>
                    </div>

                </div>

                <div>
                    <label  className="form-label">Password</label>
                    <input type="password" id="inputPassword5" className="form-control" aria-labelledby="passwordHelpBlock"/>
                </div>

                <div >
                    <label  className="form-label">Password</label>
                    <input type="password" id="inputPassword5" className="form-control" aria-labelledby="passwordHelpBlock"/>
                </div>

                <button type="submit" className="btn btn-primary mt-2">Login</button>
                <div  className="form-text mt-2">
                    Still Have No account? <span className="text-warning ">SIGNUP </span>Now
                </div>

             </div>

          </div>
          <div className="ms-3 mt-2 d-flex" style={{ fontSize: '11px', display: 'flex'}}>
             <div className="me-5"><span className="text-white">Version 1.0</span></div>
             <span className="text-white ms-5"><b>About Us</b></span>
             <span className="text-white ms-5"><b>Privacy</b></span>
             <span className="text-white ms-5"><b>Terms</b></span>
         </div>
        </form>
     </div>
    );
}

export default SignUp;
