import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import Apple from "../../assests/images/mobile/LOGO/apple.png";
import Moto from "../../assests/images/mobile/LOGO/moto.png";
import Oneplus from "../../assests/images/mobile/LOGO/oneplus.png";
import Realme from "../../assests/images/mobile/LOGO/realme.png";
import Samsung from "../../assests/images/mobile/LOGO/samsung.png";
import Vivo from "../../assests/images/mobile/LOGO/vivo.png";
import Nokia from "../../assests/images/mobile/LOGO/nokia.png";
import Oppo from "../../assests/images/mobile/LOGO/oppo.png";
import Mi from "../../assests/images/mobile/LOGO/mi.png";

import Boat from "../../assests/images/mobile/boat.png";
import Jbl from "../../assests/images/mobile/jbl.png";
import Noise from "../../assests/images/mobile/noise.jpg";

import "../../assests/css/style.css";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Cards() {
  return (
    <>
    
      <div className="Cardspar">
      <div className="CardsMobilehead">
        <p> Latest Mobile Brands</p>
      </div>
      </div>

      <div className="CardsMobile">
        <div className="cardcircle mx-2">
          <img src="https://www.freepnglogos.com/uploads/apple-logo-png/file-apple-logo-black-svg-wikimedia-commons-1.png" className="mobilelogo" alt="" />
        </div>
        <div className="cardcircle mx-2">
          <img src="https://www.freepnglogos.com/uploads/samsung-logo-text-png-1.png" className="mobilelogo" alt="" />
        </div>
        <div className="cardcircle mx-2">
          <img src={Oneplus} className="mobilelogo" alt="" />
        </div>
        <div className="cardcircle mx-2">
          <img src="https://www.freepnglogos.com/uploads/xiaomi-png/xiaomi-meaning-oppo-logo-and-symbol-history-and-evolution-19.png" className="mobilelogo" alt="" />
        </div>
        <div className="cardcircle mx-2">
          <img src="https://www.freepnglogos.com/uploads/nokia-logo-png-0.png" className="mobilelogo" alt="" />
        </div>
        <div className="cardcircle mx-2">
          <img src={Realme} className="mobilelogo" alt="" />
        </div>
      
        <div className="cardcircle mx-2">
          <img src={Vivo} className="mobilelogo" alt="" />
        </div>
        <div className="cardcircle mx-2">
          <img src="https://www.freepnglogos.com/uploads/oppo-logo-png/oppo-green-logo-transparent-0.png" className="mobilelogo" alt="" />
        </div>
  
        <div className="cardcircle mx-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Motorola_new_logo.svg/2560px-Motorola_new_logo.svg.png" className="mobilelogo" alt="" />
        </div>
    
     
      
       
      </div>
      {/* <div className="Cardspar">
      <div className="CardsMobilehead">
        <p>Top HeadPhones Brands</p>
      </div>
      </div>

      <div className="CardsMobile ">
        <div className="cardcircle mx-2">
          <img src={Boat} className="mobilelogo" alt="" />
        </div>
        <div className="cardcircle mx-2">
          <img src={Jbl} className="mobilelogo" alt="" />
        </div>
        <div className="cardcircle mx-2">
          <img src={Noise} className="mobilelogo" alt="" />
        </div>
      </div> */}
    </>
  );
} 
