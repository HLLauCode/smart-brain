import React from "react";
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div className="center mt-2">
            <div className="absolute">
                <img id='inputImage' src={imageUrl} alt="output image" width='500px' height='auto'/>
                <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition;