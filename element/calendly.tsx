import { PopupButton } from "react-calendly";

export default function Calendly({ button }) {
  return (
    <>
      <PopupButton
        url="https://calendly.com/solustack"
        rootElement={document.getElementById("__next")}
        text={
          button ? "Schedule a Call" : " Schedule a call with Us via Calendly"
        }
      />
    </>
  );
}
