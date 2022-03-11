import { useRef, useEffect, useState } from 'react'


const Canvas = (props) => {

    const [width, setWidth] = useState(800)

    //setup useref
    const canvasRef = useRef(null)

    //setup general measurement variables
    const SCALE = 0.5;


    //setup background image
    const backgroundImage = new Image()
    backgroundImage.src = ("https://wallpapercave.com/wp/wp8106692.jpg")

    //funcion que nos pinta
    const draw = (ctx, canvas) => {

        //dibujamos background imagen
        ctx.scale(SCALE, SCALE)
        ctx.drawImage(
            backgroundImage, width/2, 25, width, canvas.height+50
        )
        ctx.globalCompositeOperation = "destination-in";

        //set name
        ctx.font = "250px Anton"

        const username = "BATMAN"
        ctx.fillStyle = "white";
        let letter = ctx.measureText(username)
        console.log("letter", letter)
        ctx.fillText( username, width/2, 350)
       

        //adapt size to name
        setWidth(letter.width)

        //set up background black
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width+100, canvas.height+100);
    };

    useEffect(() => {
        // establecemos la referencia
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        //pintamos
        draw(context, canvas)
    }, [draw])

    return (
        <div className='cover'>
            <canvas ref={canvasRef} width={width} height="400" className="canvas" />
        </div>
    )
}

export default Canvas