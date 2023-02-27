import { useEffect, useRef, useState, JSX } from "uelements";
import LargeComponent from "./Components/LargeComponent";
import Modal from "./Components/modal/Modal";
import SmallComponent from "./Components/SmallComponent";
import { useLocalstorage } from "./hook/useLocalstorage";
import useWindowDimensions from "./hook/useWindowDimensions";
import { cssvalinterface } from "./types";
import arrowpng from "./assets/arrow png .png";
function App({ dataURL }: { dataURL: string }): JSX.Element {
  let base = window.location.pathname;
  let cssval!: cssvalinterface;
  const [data, setdata] = useState({} as any);
  const [local, setlocal] = useState({} as any);
  const [first, setfirst] = useLocalstorage("initialvideo", []);
  const [timingshow, settimingshow] = useState(true);
  const [initalanimation, setinitalanimation] = useState(true);
  const [overlay, setoverlay] = useState(timingshow);

  function getingkeys() {
    let val = JSON.parse(localStorage.getItem("initialvideo")!);
    if (val?.length) {
      val.filter((e: any) => {
        if (e.base === base) {
          return e?.count;
        } else {
          return 0;
        }
      });
    } else {
      return 0;
    }
  }

  function handlenextkind(data: any) {
    let keys = Object.keys(data);
    let dudefindkey = keys.filter((e) => {
      if (e === base) {
        return e;
      }
    });

    let log;
    if (!dudefindkey.length) {
      log = keys.filter((e) => {
        if (base.match(e)) {
          return e;
        }
      });
    }
    if (!dudefindkey.length) {
      return log?.[1];
    } else {
      return dudefindkey[0];
    }
  }

  useEffect(() => {
    async function data() {
      let val = await fetch(dataURL);
      let data = await val.json();
      let excatindex = JSON.parse(
        localStorage.getItem("initialvideo")!
      )?.filter((e: any) => {
        if (e.base === base) {
          return e;
        } else {
          return 0;
        }
      });

      let bin = handlenextkind(data.record);
      handlestoragevals(data.record);
      setdata(data.record);
      console.log(data ,data.record[bin!] , bin , excatindex );
      setlocal(data.record[bin!][excatindex[0]?.count || 0]);
    }
    data();
  }, []);

  document.documentElement.style.setProperty(
    "--largecontainer-width",
    `${local.largecontainerwidth}px`
  );

  document.documentElement.style.setProperty(
    "--largecontainer-height",
    `${local.largecontainerheight}px`
  );

  document.documentElement.style.setProperty(
    "--bottom-css",
    `${local.bottomcss}px`
  );

  document.documentElement.style.setProperty(
    "--width-smallbox",
    `${local.widthsmallbox}px`
  );
  document.documentElement.style.setProperty(
    "--height-smallbox",
    `${local.heightsmallbox}px`
  );

  document.documentElement.style.setProperty(
    "--text-color",
    `${local.textcolor}`
  );

  document.documentElement.style.setProperty(
    " --row-position",
    `${local.rowposition}`
  );

  document.documentElement.style.setProperty(
    "--padding-x",
    `${local.paddingx}px`
  );

  document.documentElement.style.setProperty(
    "--padding-y",
    `${local.paddingy}px`
  );

  document.documentElement.style.setProperty(
    "--row-position",
    `${local.rowposition}`
  );

  document.documentElement.style.setProperty(
    "--grid-gap",
    `${local.gridgap}px`
  );

  document.documentElement.style.setProperty(
    "--small-closebuttonheight",
    `${local.closebuttonheight}px`
  );

  document.documentElement.style.setProperty(
    "--small-closebuttonwidth",
    `${local.closebuttonwidth}px`
  );

  document.documentElement.style.setProperty(
    "--buttonloadanimation",
    `${local.buttonloadanimation}`
  );

  document.documentElement.style.setProperty(
    "--opacityforoverlay",
    `${local.opacityforoverlay}px`
  );

  // if (tharaganula) {
  // setTimeout(() => {
  //   setoveraly(true)
  //   setinitalanimation(false)
  // } ,1200 )

  setTimeout(() => {
    document.documentElement.style.setProperty(
      "--color-border",
      local.widthcolor
    );

    document.documentElement.style.setProperty(
      "--color-width",
      `${local.widthsize}px`
    );
  }, local.firestylechanges * 1000);

  if (Object.entries(data).length === 0) return <div></div>;

  const [show, SetShow] = useState<boolean>(false);
  const [video, setvideo] = useState<string>("");
  const [gif, setgif] = useState<string>("");
  const [initialsize, setinitialsize] = useState<boolean>(false);
  const [next, setnext] = useState<string>(local?.startStep);
  const [buttons, setbutton] = useState({} as any);
  const [removefromcontainer, setremovefromcontainer] = useState(false);
  const [muted, setmuted] = useState(true);
  const [timeout, settimeout] = useState<number>(0);
  const videoEl = useRef<HTMLVideoElement | null>(null);
  const { height , width } = useWindowDimensions();
  const [overalyimg, setoveralyimg] = useState<string>(local?.overalyimglarge)
  const [hidden] = useState(local.hidden)
  function handlestoragevals(data: any) {
    let sa = Object.keys(data).map((e) => {
      return { base: e, count: 0 };
    });

    if (!JSON.parse(localStorage.getItem("initialvideo")!).length) {
      setfirst(sa);
    }
  }

  function keypair(key = local?.startStep) {
    local?.steps
      .filter((e: any) => e)
      .filter((e: any) => {
        if (e.key === key) {
          settimeout(e.answerTime);
          setbutton(e);
          setvideo(e.stockAsset.videoUrl);
          setgif(e.stockAsset.gifUrl);
          document.documentElement.style.setProperty(
            "--f22-display",
            `${e.display || "block"}`
          );
        }
      });
  }

  useEffect(() => {
    const val = setTimeout(() => {
      if (initialsize) {
        SetShow(true);
      }
    }, timeout * 1000);
    return () => clearInterval(val);
  }, [next, initialsize, timeout]);

  keypair(next);

  function handleChange(val: string) {
    setnext(val);
    SetShow(false);
  }

  function handleCloseforlargesize() {
    setinitialsize(false);
    SetShow(false);
    setnext(local?.startStep);
    setmuted(true);
    setinitalanimation(false);
  }

  function cmpclose() {
    setremovefromcontainer(true);
  }

  function handlemuted() {
    if (videoEl.current) {
      setmuted((prev) => !prev);
      videoEl.current.muted = muted;
    }
  }

  function handlpositioncss() {
    let xp = {
      transform: `translate(${local?.custom?.x}px  , ${local?.custom?.y}px)`,
    };
    console.log(xp, local?.widgetPosition === "random");
    //
    if (typeof local?.custom?.x === "string") {
      xp = {
        transform: `translate(${local?.custom?.x}  , ${local?.custom?.y})`,
      };
    }

    switch (local?.widgetPosition) {
      case "bottomRight":
        cssval = { bottom: "10px", right: "10px", ...xp };
        break;
      case "bottomLeft":
        cssval = { bottom: "10px", left: "10px", ...xp };
        break;
      case "topRight":
        cssval = { top: "3px", right: "10px", ...xp };
        break;
      case "topLeft":
        cssval = { top: "3px", left: "10px", ...xp };
        break;
      case "bottomcenter":
        cssval = { bottom: "10px", left: "50%", ...xp };
        break;

      case "topcenter":
        cssval = { top: "3px", left: "50%", ...xp };
        break;

      case "leftcenter":
        cssval = { left: "10px", ...xp };
        break;

      case "rightcenter":
        cssval = { top: "3px", left: "50%", ...xp };
        break;

      case "custom":
        // const xPercentage = (local?.custom?.x/ width) * 100;
        // const yPercentage = (local?.custom?.y / height) * 100;
        // console.log(xPercentage , yPercentage)
        cssval = {
          top: `${local?.custom?.y}%`,
          left: `${local?.custom?.x}%`,
          transform: `translate(-${local.custom.x}%  , -${local.custom.y}%)`,
        };
        break;
      default:
        return cssval;
    }
    console.log(cssval);
  }

  handlpositioncss();

  //  function handleoverlay(){
  //     setoverlay(false)
  //   }

  if (local.toshowinmobile) {
    if (width <= 600) {
      return <div></div>;
    }
  }

  if (removefromcontainer) {
    return <div></div>;
  }

  function onlocalchange() {
    handlestoragevals(data);
    setfirst((prev: any[]) => {
      let sai = prev.map((e, i) => {
        if (e.base === base && e.count < data[base].length - 1) {
          return { ...e, count: e.count + 1 };
        }
        return e;
      });
      return sai;
    });

    getingkeys();
  }

  setTimeout(() => {
    settimingshow(false);
  }, 1000);

  const [modal, setmodal] = useState(local.ismodal ? true : false);
  const [values, setvalues] = useState({} as any);
  useEffect(() => {
    setTimeout(() => {
      setmodal(local.ismodal);
    }, 1000);
  }, []);

  // overlay
  function handleoverlay() {
    setoverlay(false);
  }
  console.log(hidden)
  if (hidden) {
    return <div></div>
 }

  if (modal) {
    return (
      <>
        {" "}
        {modal ? (
          <Modal
            setmodal={setmodal}
            values={values}
            setvalues={setvalues}
            modalformformat={local?.modal?.dummy}
          />
        ) : (
          <div></div>
        )}{" "}
      </>
    );
  }
  // if (width <= 600) {
  //     // setoveralyimg("data:image/jpeg;base64,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")
  // } else {
  //     setoveralyimg(local?.overalyimglarge)
  // }

  return (
    <div className= { overlay ? 'f22box-container' : 'smsmsmhidden'  }   onClick={handleoverlay}  >
    
     {overlay &&   <div id="f22background"></div> }
    <div
      className={local.overlay && overlay ? "f22box-container" : "smsmsmhidden"}
      onClick={handleoverlay}
    >
      {!timingshow ? (
        <>  
        <div className="f22arrow-container">
        <img src={overalyimg || arrowpng} />
        </div>

          </>
      ) : (
        <div />
      )}

      <div
        className={
          !timingshow
            ? `small-video-container-box-parent `
            : `small-video-container-box-parent smsmsmhidden  `
        }
        style={cssval as any}
      >
      
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');
        </style>
        {initialsize ? (
          <LargeComponent
            cssval={cssval}
            handleCloseforlargesize={handleCloseforlargesize}
            video={video}
            videoEl={videoEl}
            handlemuted={handlemuted}
            muted={muted}
            handleChange={handleChange}
            show={show}
            buttons={buttons}
            // data = {}
          />
        ) : (
          <SmallComponent
            base={base}
            cmpclose={cmpclose}
            data={local}
            setinitialsize={setinitialsize}
            video={video}
            round={local?.rounded}
            onlocalchange={onlocalchange}
            initalanimation={initalanimation}
            handleoverlay={handleoverlay}
          />
        )}
      </div>
    </div>
    </div>
  );
}

export default App;


