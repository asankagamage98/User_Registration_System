import img from '../assets/images/profile_photo.png'
import '../assets/styles/Profile.css'
import { useRef,useState } from 'react';


const UploadImage = () => {

    const inputRef = useRef("");
    const [image,setImage] = useState("");


    const handleImageClick = () => {
        inputRef.current.click();
    };

    const handleImageChange = (event) => {
            const file = event.target.files[0];
            console.log(file);
            setImage(event.target.files[0]);

    };

    return (
        <div className="d-flex">
            <div className=''>

                <div className="image-container">
                <div>
                    { image ? <img src={URL.createObjectURL(image)} alt='' className='profileImage' /> :<img src={img} alt="" className='profileImage' />}
                </div> 
                <div className='circle-background' onClick={handleImageClick}>
                    <i className="fas fa-circle-plus"></i>
                </div>

                </div>
                <input type='file' ref={inputRef} onChange={handleImageChange} style={{display:"none"}}/>
            </div>
            <div className=''>
            </div>  
        </div>
    );
}

export default UploadImage;
