import { addDoc, collection, doc, Timestamp } from "firebase/firestore";
import { useEffect, useRef } from "uelements";
import { SmallComponentprops } from "../types";
import { db  } from "../firebase/firebase"
function SmallComponent({
  cmpclose,
  video,
  setinitialsize,
  data,
  base,
  round = false,
  onlocalchange,
  initalanimation,
}: SmallComponentprops) {

  let docref  = doc(db , "f22plugin" , "naturallyyours.com")
  async function gettingdids(){
      const collectionref = collection(docref , "f22plugin" )
     await addDoc( collectionref ,  {  visited : 1 , timestamp : Timestamp.now() } )
 }


  const videoref = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    videoref.current?.removeAttribute("controls");
  }, []);
  const collectionref = collection(db , "Naturally yours")
  
  let cssval = "smvideo-container";
  function animationhandler() {
    if (round) {
      cssval = "smvideo-container-round";
    } 
  }
  animationhandler();
  let count = 1;
  

 async function handleClick() {
    setinitialsize(true);
    gettingdids()
    onlocalchange();
  }

  let animation = initalanimation ? "pageloadanimation" : ""

  return (
    <>
      <>
        <div className={`small-video-container-box ${animation} `}>
          <div className="close-button cls-sm">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"   onClick={cmpclose} >
<g clip-path="url(#clip0_126_12)">
<path d="M8.28259 7.01145L13.734 1.55995C14.0887 1.20535 14.0887 0.631989 13.734 0.277427C13.3794 -0.0771763 12.806 -0.0771763 12.4515 0.277427L6.99994 5.72888L1.54861 0.277427C1.19383 -0.0771763 0.620684 -0.0771763 0.26608 0.277427C-0.0886934 0.632031 -0.0886934 1.20535 0.26608 1.55995L5.71737 7.01145L0.266123 12.4629C-0.0886509 12.8175 -0.0886509 13.3909 0.266123 13.7454C0.350236 13.8298 0.450189 13.8967 0.560238 13.9423C0.670287 13.9879 0.788262 14.0113 0.907386 14.0112C1.13954 14.0112 1.37177 13.9223 1.54865 13.7454L6.99994 8.29398L12.4515 13.7454C12.5356 13.8298 12.6356 13.8967 12.7456 13.9423C12.8556 13.9879 12.9736 14.0113 13.0927 14.0112C13.3249 14.0112 13.5571 13.9223 13.734 13.7454C14.0887 13.3908 14.0887 12.8175 13.734 12.4629L8.28259 7.01145Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_126_12">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
</svg>
          </div>
          <div className={cssval} data-customattribute={"red"}>
            <video
              src={video}
              autoPlay
              id="videos"
              className={round ? "sm-video circle " : "sm-video"}
              muted
              loop
              playsInline
              ref={videoref}
            />
          </div>
          <h1 className="widgetheader" onClick={() => handleClick()}>
            {data.widgetHeader}
          </h1>
        </div>
      </>
    </>
  );
}

export default SmallComponent;
