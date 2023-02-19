import { StateUpdater, useState } from "preact/hooks";
import { useRef } from "uelements";
import usemultistepForm from "../../hook/usemultistepForm";
import "../modal/styles/index.css";

function Modal({
  setmodal,
  values,
  setvalues,
  modalformformat
}: {
  setmodal: StateUpdater<boolean>;
  values: any;
  setvalues: StateUpdater<any>;
  modalformformat : any
}) {

  console.log(modalformformat)
  const { step, currentStepindex, cmpComponentsLength, next } =
    usemultistepForm(modalformformat);
  const ref = useRef<HTMLInputElement>(null);

  console.log(currentStepindex, cmpComponentsLength);

  function handleClick(e: any) {
    e.preventDefault();
    ref.current!.value = "";
    if (currentStepindex === cmpComponentsLength - 1) {
      setmodal(false);
      console.log(values);
      return;
    }
    next();
    console.log(e);
  }

  function handelInputchange(e: any) {
    console.log(values, e.target.name, e.target.value);
    setvalues((prev: any) => {
      console.log(prev, values);
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function handleClose() {
    setmodal(false);
  }
  console.log(step);
  return (
    <>
      <div className="modal"></div>

      <div className="modal-container">
        <video
          autoPlay
          playsInline
          src="https://f22videoplugin.s3.ap-northeast-1.amazonaws.com/paperlondon/video1.mp4"
        ></video>

        <div className="forms">
          <form action="" className="modal-form" onSubmit={handleClick}>
            <input
              type={step?.type}
              value={values[step?.name]}
              onInput={(e) => handelInputchange(e)}
              placeholder={step?.placeholder}
              className="input-modal"
              name={step?.name}
              ref={ref}
              required
            />
            <button className="submitbtnmodal">
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.42042 6.00003C7.42042 6.2151 7.3383 6.43013 7.17441 6.5941L2.01463 11.7538C1.6864 12.0821 1.15424 12.0821 0.826148 11.7538C0.498055 11.4257 0.498055 10.8937 0.826148 10.5654L5.39181 6.00003L0.826308 1.43461C0.498214 1.10639 0.498214 0.574383 0.826308 0.246316C1.1544 -0.0820694 1.68656 -0.0820694 2.01479 0.246316L7.17457 5.40596C7.33849 5.57001 7.42042 5.78505 7.42042 6.00003Z"
                  fill="#080807"
                />
              </svg>
            </button>
          </form>
        </div>
        <div className="cross-buttonmodal" onClick={handleClose}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.25367 12C0.93501 12 0.616352 11.8826 0.36478 11.6312C-0.121593 11.145 -0.121593 10.3402 0.36478 9.854L9.85744 0.364652C10.3438 -0.121551 11.1488 -0.121551 11.6352 0.364652C12.1216 0.850856 12.1216 1.65561 11.6352 2.14181L2.14256 11.6312C1.90776 11.8826 1.57233 12 1.25367 12Z"
              fill="white"
            />
            <path
              d="M10.7463 12C10.4277 12 10.109 11.8826 9.85744 11.6312L0.36478 2.14181C-0.121593 1.65561 -0.121593 0.850856 0.36478 0.364652C0.851153 -0.121551 1.65618 -0.121551 2.14256 0.364652L11.6352 9.854C12.1216 10.3402 12.1216 11.145 11.6352 11.6312C11.3836 11.8826 11.065 12 10.7463 12Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Modal;
