import { useFormik } from 'formik';
import '../assets/styles/SignUp.css'
import { useNavigate } from 'react-router-dom';
import signupValidations from '../validations/signupValidations';
import AuthService from '../app/api/AuthService';


const SignUp = () => {

        const navigate = useNavigate();

        const onClickBack = ()=>{
            navigate('/');
        }

        const formik = useFormik({
            initialValues: {
                first_name: "",
                last_name: "",
                email: "",
                county_code: "+94",
                local_number: "",
                password: "",
                confirm_password: "",
              },
            validationSchema: signupValidations,
            onSubmit: async (values) => {
                try {
                    await AuthService.signup(values);
                    navigate("massage")
                } catch (err) {
                    navigate("/singup")
                }
            } 
        })
        

    return (
        <div className ='signup'>
        <form className='form1' onSubmit={formik.handleSubmit}>
            <div className='d-flex align-items-center gap-3 icon1 '>
               <i className="fa-solid fa-angle-left mt-1" onClick={onClickBack}></i>
               <h4 className='p-0 m-0'>Create Account</h4>
            </div>
             
           
          <div className='form2 pt-2'>
             <h3>ABC COMPANY</h3>

             <div className='form3'>
                <div className='d-flex mt-2 gap-4'>
                    <div className="">
                        <label  className="form-label">First Name</label>
                        <input value={formik.values.first_name} onChange={formik.handleChange} type="text" className="form-control text-input" id="first_name" name='first_name' placeholder="Jone"/>
                    </div>

                    <div className="">
                        <label  className="form-label">Second Name</label>
                        <input value={formik.values.last_name} onChange={formik.handleChange} type="text" className="form-control text-input" id="last_name" name="last_name" placeholder=""/>
                    </div>

                </div>
                {formik.errors.first_name ? (
                <span className="text-danger block">{formik.errors.first_name}</span>
              ) : null}
              {formik.errors.last_name ? (
                <span className="text-danger block">{formik.errors.last_name}</span>
              ) : null}

                <div className="">
                        <label  className="form-label">Email Address</label>
                        <input value={formik.values.email} onChange={formik.handleChange} type="email" className="form-control " id="email" name="email" placeholder=""/>
                </div>
                {formik.errors.email ? (
                <span className="text-danger block">{formik.errors.email}</span>
              ) : null}

                <div className='d-flex mt-2 '>
                    <div className="">
                        <label  className="form-label">Mobile Number</label>
                        <input value={formik.values.county_code} onChange={formik.handleChange} id="county_code" name="county_code" type="text" className="form-control num1" placeholder="+94"/>
                    </div>
                    

                    <div className="input-number ">
                        <input value={formik.values.local_number} onChange={formik.handleChange} maxLength={9} id="local_number" name="local_number" type="text" className="form-control num2"  placeholder=""/>
                    </div>

                </div>
                {formik.errors.county_code ? (
                <span className="text-danger block">{formik.errors.county_code}</span>
              ) : null}
              {formik.errors.local_number ? (
                <span className="text-danger block">{formik.errors.local_number}</span>
              ) : null}

                <div>
                    <label  className="form-label">Password</label>
                    <input value={formik.values.password} onChange={formik.handleChange} type="password" id="password" name="password" className="form-control" aria-labelledby="passwordHelpBlock"/>
                </div>
                {formik.errors.password ? (
                <span className="text-danger block">{formik.errors.password}</span>
              ) : null}

                <div >
                    <label  className="form-label">Password</label>
                    <input value={formik.values.confirm_password} onChange={formik.handleChange} type="password" id="confirm_password" name="confirm_password" className="form-control" aria-labelledby="passwordHelpBlock"/>
                </div>
                {formik.errors.confirm_password ? (
                <span className="text-danger block">{formik.errors.confirm_password}</span>
              ) : null}

                <button type="submit" className=" btn-primary Createbtn mt-2 mb-4 ">Create Account</button>
               

             </div>

          </div>
          <div className="ms-3 mt-2 d-flex mb-5" style={{ fontSize: '11px', display: 'flex'}}>
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
