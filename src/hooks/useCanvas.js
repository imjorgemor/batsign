import { useRef, useEffect } from 'react'

const useCanvas = (draw, image) => {
    //setup canvas ref
    const canvasRef = useRef(null);


    useEffect(() => {
        // establecemos la referencia
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        //pintamos
        draw(context, canvas);
    }, [draw, image])
    return canvasRef;
}

export default useCanvas