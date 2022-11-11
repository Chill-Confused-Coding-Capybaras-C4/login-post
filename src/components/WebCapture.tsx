import { useCallback, useRef } from "react";
import Webcam from "react-webcam";
import Button from 'react-bootstrap/Button';

const videoConstraints = {
    width: 480,
    height: 480,
    facingMode: "user"
  };
  
  let imageSrc;

  export const WebCapture = () => {
    const webcamRef: any = useRef(null);
    const capture = useCallback(
      () => {
        console.log('Here');
        imageSrc = webcamRef.current.getScreenshot();
        
      },
      [webcamRef]
    );
    return (
      <>
        <Webcam
          audio={false}
          height={200}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={200}
          videoConstraints={videoConstraints}
        />
        <br/>
        <Button onClick={capture}>Capture photo</Button>
      </>
      
    );
  };

  export default imageSrc;