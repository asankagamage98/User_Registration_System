import '../assets/styles/Profile.css'
import UploadImage from '../components/UploadImage';


const UserProfile = () => {
    return (
        <div className="maindiv">

            
           
           <div className="seconddiv">

                <div className="d-flex">
                    <div className="mt-5 mb-4">
                        <UploadImage/>
                    </div>
                    <div className="maintopic ms-3">
                        <h3 className=" font-bold ">Welcome</h3>
                        <h2 className=" font-bold d-flex wrap">
                              Mr.Jhone Broker
                        </h2>
                    </div>
                </div>

            <div className='mt-4'>
       
                <div className='d-flex'>
                    <p  className="labletext">E mail Address</p>
                    <p  className=" displaytext" id="">sfsafasfasf dfsdfsdf sdfdfsdf</p> 
                </div>
                <div className='d-flex '>
                    <p className="">Name</p>
                    <p className=" " />
                </div>
                <div className='d-flex '>
                    <p className="">Gender</p>
                    <p type="text" className=" inputtext" id="" />
                </div>
                <div className='d-flex '>
                    <p  className="">Date of Birth</p>
                    <p  className=" inputtext" id="" />
                </div>

            </div>   
           </div>
        </div>
    );
}

export default UserProfile;
