import { saveAs } from "file-saver";

export const download = (canvasRef, user) => {
    try {
        canvasRef.current.toBlob((blob) => {
            saveAs(blob, `${user}.png`);
        });
    } catch (exception) {
        console.log(exception);
    }
};