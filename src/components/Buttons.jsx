
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Buttons = () => {

  const navigate =useNavigate();

  const [fontColor, setFontColor] = useState('black');
  const [fontColor2, setFontColor2] = useState('black');

  const handleButtonClick = () => {
    // Change the font color when the button is clicked
    setFontColor(fontColor === 'black' ? '#205387' : 'black'); 
    setFontColor2(fontColor2 === '#205387' ? 'black' : 'black');
    

     navigate('editProfile');
  };

  const handleButton2Click = () => {
    // Change the font color when the button is clicked
    setFontColor2(fontColor2 === 'black' ? '#205387' : 'black'); 
    setFontColor(fontColor === '#205387' ? 'black' : 'black');

    navigate('/');
  };

    return (
        <div className="d-flex align-items-end flex-column p-0 me-4">
                <div className="mt-5 buttons ">
                    <div> <button type="button" className="btnDash" style={{color:fontColor}} onClick={handleButtonClick}>Edit Profile</button></div>  
                    <div> <button type="button" className="btnDash1" style={{color:fontColor2}} onClick={handleButton2Click}>Sign Out</button></div>  
                </div>
        </div>
    );
}

export default Buttons;
