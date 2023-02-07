import { log } from "console";
import {
  Aicons,
  Bicons,
  Cicons,
  Dicons,
  Eicons,
  Ficons,
  Shareicon,
} from "../assets/Icons";
import {CustomButtomprops} from "../types" 

function CustomButton({ show, buttons, handleChange } : CustomButtomprops ) {
  let sp = [
    <Aicons />,
    <Bicons />,
    <Cicons />,
    <Dicons />,
    <Eicons />,
    <Ficons />,
  ];
  function logicforbuttontext(v  : number ) {
    let sahi = sp.filter((e, i) => {
      if (i === v) {
        return e;
      }
    });

    return sahi[0];
  }

   console.log("button" , buttons )
  return (
    <div className="large-container-buttonparent">
      {show ? (
        buttons.answers.map((e: any, i: number) => {
          if (!e.value) {
            return (
              <button
                className={"overlay-thing-button"}
                onClick={() => handleChange(e.next)}
                href={e?.value}
              >
                <div className="icon-container">{logicforbuttontext(i)}</div>
                {e.text}
              </button>
            );
          } else {
            return (
              <button className={"overlay-thing-button"}>
                <div className="icon-container  share">
                  <Shareicon />
                </div>
                <a href={e.value} target="_blank">
                  {e.text}
                </a>
              </button>
            );
          }
        })
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default CustomButton;
