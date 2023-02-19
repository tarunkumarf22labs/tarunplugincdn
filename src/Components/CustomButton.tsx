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
    let Icons = alphabetIcons.filter((e, i) => {
      if (i === v) {
        return e;
      }
    });

    return Icons[0];
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
            <a href={e.linkforshopping} style = {{ display : "block" }}  >
            <div className="thumbnailcontainer">
              <div className="img-container">
                <img src={e.imgurl} className="thumbnailimage" />
              </div>
              <div className="text-container">
                <h1>{e.name}</h1>
                <h6> Price: {e.preice} </h6>
              </div>
            </div>
            </a>
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

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          "data":   {
            "type": "profile",
            "attributes": {...values}
          }
          
      } )
    };
    fetch('https://iecb4lgq9l.execute-api.us-east-1.amazonaws.com/dev/', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
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
        if (e.target.name === "phone_number") {
           let val = e.target.value.includes("+91")
           if (val) {
          e.target.value = e.target.value.replace("+91" , "" )
           }
           console.log(val)
          return { ...prev, [e.target.name]: `+91${e.target.value}` };
        } else {
          return { ...prev, [e.target.name]: e.target.value };
        }
     
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