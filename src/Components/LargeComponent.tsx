import { useEffect, useRef } from "uelements";
import { LargeComponentprops } from "../types";
import CustomButton from "./CustomButton";

function LargeComponent({
  cssval,
  handleCloseforlargesize,
  video,
  videoEl,
  handlemuted,
  muted,
  handleChange,
  show,
  buttons,
}: LargeComponentprops) {
  useEffect(() => {
    videoEl.current?.removeAttribute("controls");
  }, []);

  function handlereplay() {
    videoEl.current!.currentTime = 0;
    videoEl.current!.play();
  }
  return (
    <div style={cssval as any} className="video-container">
      <div className="loader-container">
        <svg
          version="1.1"
          id="L9"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 0 0"
        >
          <path
            fill="#fff"
            d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            ></animateTransform>
          </path>
        </svg>
      </div>
      <div className="video-container-box">
        <div class="close-button" onClick={() => handleCloseforlargesize()}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15" cy="15" r="15" fill="black" />
            <path
              d="M15 18.9902C14.7491 18.9902 14.4982 18.8944 14.3069 18.7032L8.2872 12.6834C7.90427 12.3005 7.90427 11.6796 8.2872 11.2968C8.66997 10.9141 9.29071 10.9141 9.67367 11.2968L15 16.6235L20.3263 11.297C20.7092 10.9143 21.3299 10.9143 21.7126 11.297C22.0957 11.6798 22.0957 12.3007 21.7126 12.6836L15.693 18.7033C15.5017 18.8946 15.2508 18.9902 15 18.9902Z"
              fill="white"
            />
          </svg>
        </div>
        <button className="mutedbutton" onClick={handlemuted}>
          {" "}
          {!muted ? (
            <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
              <use class="ytp-svg-shadow"></use>
              <path
                class="ytp-svg-fill"
                d="m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"
                id="ytp-id-17"
              ></path>
            </svg>
          ) : (
            <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
              <use class="ytp-svg-shadow"></use>
              <use class="ytp-svg-shadow"></use>
              <defs>
                <clipPath id="ytp-svg-volume-animation-mask">
                  <path d="m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"></path>
                  <path d="M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"></path>
                  <path
                    class="ytp-svg-volume-animation-mover"
                    d="M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z"
                    transform="translate(0, 0)"
                  ></path>
                </clipPath>
                <clipPath id="ytp-svg-volume-animation-slash-mask">
                  <path
                    class="ytp-svg-volume-animation-mover"
                    d="m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z"
                    transform="translate(0, 0)"
                  ></path>
                </clipPath>
              </defs>
              <path
                class="ytp-svg-fill ytp-svg-volume-animation-speaker"
                clip-path="url(#ytp-svg-volume-animation-mask)"
                d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z"
                fill="#fff"
                id="ytp-id-15"
              ></path>
              <path
                class="ytp-svg-fill ytp-svg-volume-animation-hider"
                clip-path="url(#ytp-svg-volume-animation-slash-mask)"
                d="M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z"
                fill="#fff"
                id="ytp-id-16"
                style="display: none;"
              ></path>
            </svg>
          )}{" "}
        </button>

        <button className="mutedbutton replay" onClick={handlereplay}>
       
<svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_118_21)">
<path d="M6 0.75C4.76291 0.751353 3.56662 1.19265 2.625 1.995V1.125C2.625 1.02554 2.58549 0.930161 2.51517 0.859835C2.44484 0.789509 2.34946 0.75 2.25 0.75C2.15054 0.75 2.05516 0.789509 1.98484 0.859835C1.91451 0.930161 1.875 1.02554 1.875 1.125V3C1.875 3.09946 1.91451 3.19484 1.98484 3.26517C2.05516 3.33549 2.15054 3.375 2.25 3.375H4.125C4.22446 3.375 4.31984 3.33549 4.39017 3.26517C4.46049 3.19484 4.5 3.09946 4.5 3C4.5 2.90054 4.46049 2.80516 4.39017 2.73484C4.31984 2.66451 4.22446 2.625 4.125 2.625H3.04125C3.85635 1.90015 4.90922 1.49981 6 1.5C6.9348 1.49954 7.84653 1.79021 8.60857 2.33163C9.37061 2.87305 9.94512 3.63836 10.2523 4.52124C10.5595 5.40412 10.5841 6.36075 10.3227 7.25826C10.0613 8.15577 9.52695 8.9496 8.79376 9.52949C8.06057 10.1094 7.16498 10.4466 6.2314 10.4942C5.29782 10.5418 4.37258 10.2975 3.5842 9.79515C2.79583 9.29285 2.18345 8.5575 1.83212 7.69124C1.4808 6.82497 1.40797 5.8708 1.62375 4.96125C1.63961 4.91201 1.64511 4.86002 1.63991 4.80854C1.63471 4.75707 1.61891 4.70724 1.59351 4.66217C1.56811 4.6171 1.53366 4.57777 1.49233 4.54666C1.45099 4.51554 1.40367 4.49332 1.35333 4.48139C1.30299 4.46945 1.25073 4.46806 1.19983 4.4773C1.14893 4.48654 1.10049 4.50622 1.05756 4.53508C1.01463 4.56395 0.978133 4.60139 0.950372 4.64505C0.922612 4.6887 0.904185 4.73763 0.89625 4.78875C0.799632 5.18527 0.750537 5.59188 0.75 6C0.75 7.03835 1.05791 8.05339 1.63478 8.91674C2.21166 9.7801 3.0316 10.453 3.99091 10.8504C4.95022 11.2477 6.00582 11.3517 7.02422 11.1491C8.04262 10.9466 8.97809 10.4465 9.71231 9.71231C10.4465 8.97809 10.9466 8.04262 11.1491 7.02422C11.3517 6.00582 11.2477 4.95022 10.8504 3.99091C10.453 3.0316 9.7801 2.21166 8.91674 1.63478C8.05339 1.05791 7.03835 0.75 6 0.75Z" fill="white"/>
<path d="M5.25 7.95C5.39078 7.94933 5.52854 7.90904 5.6475 7.83375L7.56375 6.6375C7.67228 6.57024 7.76185 6.47638 7.82396 6.36482C7.88606 6.25326 7.91866 6.12769 7.91866 6C7.91866 5.87231 7.88606 5.74674 7.82396 5.63518C7.76185 5.52362 7.67228 5.42976 7.56375 5.3625L5.6475 4.16625C5.53413 4.09539 5.40389 4.05613 5.27025 4.05252C5.13661 4.04891 5.00443 4.08109 4.88741 4.14572C4.77038 4.21035 4.67275 4.30509 4.60464 4.42013C4.53653 4.53516 4.5004 4.66631 4.5 4.8V7.2C4.5 7.39891 4.57902 7.58968 4.71967 7.73033C4.86032 7.87098 5.05109 7.95 5.25 7.95ZM5.25 4.8L7.16625 6L5.25 7.2V4.8Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_118_21">
<rect width="12" height="12" fill="white"/>
</clipPath>
</defs>
</svg>
        </button>

        <video
          src={video}
          autoPlay
          ref={videoEl}
          className="lg-video-for-full"
          playsInline
        />
        <CustomButton show = {show}  buttons = {buttons}  handleChange ={handleChange} />
        <h1
          className="lg-credit"
          style={{
            background: "black",
            paddingTop: "2px",
            paddingBottom: "2px",
          }}
        >
          <a
            href="https://api.whatsapp.com/send/?phone=918870981553&text=Hello%21+saw+your+plugin+on+Naturally+Yours+website.+Interested+to+know+more&type=phone_number&app_absent=0"
            target="_blank"
          >
            {" "}
           
            <span style={{ fontSize: "14px", margin: "0px" , textDecoration : "underline" }}>
            Made with ❤️ at F22 Labs
            </span>
          </a>
        </h1>
      </div>
    </div>
  );
}

export default LargeComponent;
