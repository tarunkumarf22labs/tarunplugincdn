import { async } from "@firebase/util";
import { useRef, useState } from "uelements";
import {
  Aicons,
  Bicons,
  Cicons,
  Dicons,
  Eicons,
  Ficons,
  Shareicon,
  Nextbutton,
  Submitbutton,
} from "../assets/Icons";
import { CustomButtomprops } from "../types";
import usemultistepForm from "../hook/usemultistepForm";

function CustomButton({
  show,
  buttons,
  handleChange,
  handletoast,
}: CustomButtomprops) {
  console.log(buttons ,  "paapa")
  let alphabetIcons = [
    <Aicons />,
    <Bicons />,
    <Cicons />,
    <Dicons />,
    <Eicons />,
    <Ficons />,
  ];
  const ref = useRef<HTMLInputElement | null>(null);
  function logicforbuttontext(v: number) {
    let sahi = alphabetIcons.filter((e, i) => {
      if (i === v) {
        return e;
      }
    });

    return sahi[0];
  }

  if (buttons?.type === "thumbnail") {
    console.log(buttons.question);

    if (!show) {
      return <div></div>;
    }

    return (
      <div className="large-container-buttonparent  thumbnail">
        {buttons.answers.map((e: any) => {
          return (
            <div className="thumbnailcontainer">
              <div className="img-container">
                <img src={e.imgurl} className="thumbnailimage" />
              </div>
              <div className="text-container">
                <h1>{e.name}</h1>
                <h6> price: {e.preice} </h6>
                <button>
                  <a href={e.linkforshopping}>Shop now</a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // submitting

  if (buttons?.type === "form") {
    const { next, step, cmpComponentsLength, currentStepindex } =
      usemultistepForm(buttons.inputs);
    const [values, setvalues] = useState({} as any);
    async function handlesubmitok() {
      handletoast();
    }

    function handlesubmit(e: any) {
      e.preventDefault();
      ref.current!.value = "";
      console.log();
      if (!Boolean(cmpComponentsLength <= currentStepindex + 1)) {
        next();
      }
    }

    function handelInputchange(e: any) {
      console.log(values, e.target.name, e.target.value);
      setvalues((prev: any) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    }

    return (
      <>
        <div className="large-container-buttonparent">
          <form action="" onSubmit={handlesubmit} className="form-step">
            <input
              ref={ref}
              type={step!.type}
              placeholder={step!.placeholder}
              onInput={(e) => handelInputchange(e)}
              value={values[step.name]}
              name={step.name}
              required
            />
            <br />
            {cmpComponentsLength === currentStepindex + 1 ? (
              <button
                className="submitbuttonforform"
                onClick={() => handlesubmitok()}
              >
                <Submitbutton />
              </button>
            ) : (
              <button>
                <Nextbutton />
              </button>
            )}
          </form>
        </div>
      </>
    );
  }

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
