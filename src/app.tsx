import { log } from "console";
import { useEffect, useRef, useState, JSX } from "uelements";
import LargeComponent from "./Components/LargeComponent";
import SmallComponent from "./Components/SmallComponent";
import { useLocalstorage } from "./hook/useLocalstorage";
import useWindowDimensions from "./hook/useWindowDimensions";
import { cssvalinterface } from "./types";

function App({ dataURL }: { dataURL: string }): JSX.Element {
  let base = window.location.pathname;
  let cssval!: cssvalinterface;
  const [data, setdata] = useState({} as any);
  const [local, setlocal] = useState({} as any);
  const [first, setfirst] = useLocalstorage("initialvideo", []);
  const [timingshow, settimingshow] = useState(true);
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

      handlestoragevals(data.record);
      setdata(data.record);

      setlocal(data.record[base][excatindex[0]?.count || 0]);
    }
    data();
  }, []);

  //  width: 320px;
  //  height: 540px;

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
  const [buttons, setbutton] = useState([]);
  const [removefromcontainer, setremovefromcontainer] = useState(false);
  const [muted, setmuted] = useState(true);
  const [timeout, settimeout] = useState<number>(0);
  const videoEl = useRef<HTMLVideoElement | null>(null);
  const { height, width } = useWindowDimensions();

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
          setbutton(e.answers);
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

      default:
        return cssval;
    }
  }

  handlpositioncss();

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
  console.log(data);

  setTimeout(() => {
    settimingshow(false);
  }, 1000);

  return (
    <div
      className={
        !timingshow
          ? "small-video-container-box-parent"
          : "small-video-container-box-parent smsmsmhidden"
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
        />
      )}
    </div>
  );
}

export default App;
