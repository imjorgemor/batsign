import { useState } from 'react';
import useCanvas from "../hooks/useCanvas";
import { download } from '../helpers/download';


const BatCanvas = ({ user }) => {

    const [width, setWidth] = useState(800);

    let fontSize = "250px";

    //funcion que nos pinta
    const draw = (ctx, canvas) => {
        //setup general measurement variables
        const SCALE = 0.5;

        //setup background image
        const backgroundImage = new Image();
        backgroundImage.src = ("assets/batcover.jpeg");
        //dibujamos background imagen
        ctx.scale(SCALE, SCALE);
        ctx.drawImage(
            backgroundImage, width / 2, 25, width, canvas.height + 50
        );
        ctx.globalCompositeOperation = "destination-in";

        //set name
        ctx.font = `${fontSize} Anton`;
        const username = user;
        ctx.fillStyle = "white";
        let letter = ctx.measureText(username);
        //console.log("letter", letter);
        ctx.fillText(username, width / 2, 385);

        //adapt size to name
        setWidth(letter.width);

        //set up background black
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = "black";
        ctx.fillRect(width / 2, 0, canvas.width, canvas.height + 100);
    };

    //setup canvas ref
    const canvasRef = useCanvas(draw);

    return (
        <div className='cover'>
            <canvas ref={canvasRef} width={width} height="400" className="canvas" id="batcanvas" />
            {
                user.length>2 &&
                <div className="bat-buttons">
                    <button onClick={() => download(canvasRef, user)} className="bat-button">download</button>
                </div>
            }
        </div>
    )
}

export default BatCanvas