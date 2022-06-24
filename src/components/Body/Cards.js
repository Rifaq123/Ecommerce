import * as React from "react";

import "../../assests/css/style.css";

const data = [
  {
    id: 1,
    name: "iphone",
    image:
      "https://www.freepnglogos.com/uploads/apple-logo-png/file-apple-logo-black-svg-wikimedia-commons-1.png",
  },
  {
    id: 2,
    name: "Samsung",
    image: "https://www.freepnglogos.com/uploads/samsung-logo-text-png-1.png",
  },
  {
    id: 3,
    name: "oneplus",
    image:
      "https://www.oneplus.com/content/dam/oasis/page/common/logo/OnePlus_Logo.png",
  },
  {
    id: 4,
    name: "redmi",
    image:
      "https://www.freepnglogos.com/uploads/xiaomi-png/xiaomi-meaning-oppo-logo-and-symbol-history-and-evolution-19.png",
  },
  {
    id: 5,
    name: "nokia",
    image: "https://www.freepnglogos.com/uploads/nokia-logo-png-0.png",
  },
  {
    id: 6,
    name: "realme",
    image:
      "https://www.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/11/16/Photos/Home%20Page/GO%20(77)-kjmB--621x414@LiveMint.png",
  },
  {
    id: 7,
    name: "vivo",
    image:
      "https://img.etimg.com/thumb/msid-75741298,width-650,imgsize-29606,,resizemode-4,quality-100/vivo-agencies.jpg",
  },
  {
    id: 8,
    name: "oppo",
    image:
      "https://www.freepnglogos.com/uploads/oppo-logo-png/oppo-green-logo-transparent-0.png",
  },
  {
    id: 9,
    name: "moto",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Motorola_new_logo.svg/2560px-Motorola_new_logo.svg.png",
  },
];

export default function Cards() {
  return (
    <>
      <div className="Cardspar">
        <div className="CardsMobilehead">
          <p>Top Mobile Brands</p>
        </div>
      </div>

      <div className="CardsMobile">
        {data.map((value, index) => {
          return (
            <div className="cardcircle mx-2">
              <img src={value.image} className="mobilelogo" alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
}
