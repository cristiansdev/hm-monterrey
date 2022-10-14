import React,{useState} from "react"; 
import "./actimg.css";
import Images from './../../utils/images.jsx';

export function ActImg() {
    const[selectedImg, setSelectedImg] = useState(Images[0]);

    return (
      <div className="Galeria">
        <div className="container">
            <img src={selectedImg} alt="Seleccionada" className="selected" />
            <div className="imgContainer">
                {Images.map((img, index) => (
                    <img 
                    key={index} 
                    src={img.img} 
                    alt={img.title} 
                    onClick={() => setSelectedImg(img)}
                    />
                ))}
            </div>
        </div>
      </div>
    );
  }