import "../assets/styles/massagebox.css"


const Massage = () => {
    return (
        <div className="msgdiv">
          <div className="msgdiv1">
            <i className="fa-regular fa-circle-check iconSuccess" ></i>
            <p className="mt-2"><h3>Congratulation</h3></p>
            <p><b>Your Account has been Created Successfully</b></p>
            <button type="submit" className="btn  btn-primary mt-4 loginbtn">Go To Login</button>
          </div>  
        </div>
    );
}

export default Massage;
