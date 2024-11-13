import { useState, useRef } from "react";
import { useThunk } from "../hooks/use-thunk";
import { joinEmailList } from "../store/thunks/joinEmailList";
// import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [
    doJoinEmailList,
    isLoadingJoinEmailList,
    errorLoadingJoinEmailList
  ] = useThunk(joinEmailList);
  const [emailInput, setEmailInput] = useState("");
  const [showThanks, setShowThanks] = useState(false);
  // const captchaRef = useRef(null);

  async function handleJoinEmailList() {
    var emailRGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var emailResult = emailRGEX.test(emailInput);
    // const token = captchaRef.current.getValue();
    // if (token.length < 1) {
    //   alert("Captcha error. Please try again later");
    // }
    if (emailResult) {
      captchaRef.current.reset();
      const email = emailInput;
      const payload = {
        email
        // token,
      };
      doJoinEmailList(payload);
      setEmailInput("");
      setShowThanks(true);
    } else {
      alert("Please enter a valid email address");
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        {!showThanks && (
          <div>
            <div>
              <h3 className="heading-3">
                Calling all labels, publishers and streaming platforms:
              </h3>
              <h3 className="heading-3">BETA TESTING STARTS SOON!</h3>
            </div>
          </div>
        )}
        {!showThanks && (
          <div>
            <div>
              <input
                type="email"
                id="email"
                placeholder="name@email.com"
                required
                value={emailInput}
                onChange={event => setEmailInput(event.target.value)}
              />
            </div>
            <br />
            <div>
              {/* <ReCAPTCHA
                sitekey={import.meta.env.VITE_APP_SITE_KEY}
                ref={captchaRef}
              /> */}
            </div>
            <br />
            <button
              onClick={() => handleJoinEmailList()}
              className="button ns w-inline-block"
            >
              Submit Email to Receive More Info
            </button>
          </div>
        )}
        {showThanks === true && (
          <div>
            <h3 className="heading-3">Thank you for your interest!</h3>
          </div>
        )}
      </div>

      {showThanks && (
        <div>
          <div>
            <h3 className="heading-3">SEE YOU SOON!</h3>
          </div>
        </div>
      )}
    </div>
  );
}
