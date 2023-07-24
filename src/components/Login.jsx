import { useNavigate } from 'react-router-dom';
import "../assets/styles/Login.css";
import { useFormik } from 'formik';
import loginValidations from '../validations/loginValidations';
import { useDispatch } from 'react-redux';
import { login } from '../app/redux/auth/authAction';

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const onClicAbout = () => {
    navigate('singup');
  }


    const formik = useFormik({
      initialValues: {
        username: "",
        password: ""
      },
      validationSchema: loginValidations,

      onSubmit: async (values) => {
        try {
          await dispatch(login(values))
          navigate('dashbord');
        } catch (err) {
          alert("err")
       }

      }
    })

    return (
        <div className ='login'>
           <form className='form1' onSubmit={formik.handleSubmit}>
             
                <h2>Welcome Back</h2>
                <h5>Login to your account</h5>
              
             <div className='form2 mt-4'>
                <h3>ABC COMPANY</h3>
                <div className="mb-3 mt-3">
                    <label  className="form-label">User Name</label>
                    <input value={formik.values.username} type="text" className="form-control" onChange={formik.handleChange} name='username' id="username"  placeholder="Jone.Doe@gmail.com"/>
                </div>
                {formik.errors.username ? (
                <span className="text-danger block">{formik.errors.username}</span>
              ) : null}
                <div>
                    <label  className="form-label">Password</label>
                    <input value={formik.values.password} type="password"  onChange={formik.handleChange} name='password'  id="password" className="form-control" aria-labelledby="passwordHelpBlock"/>
                </div>
                {formik.errors.password ? (
                <span className="text-danger block">{formik.errors.password}</span>
              ) : null}
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
