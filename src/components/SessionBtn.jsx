import upArrow from "../assets/upArrow.svg";
import downArrow from "../assets/downArrow.svg";

export default function SessionBtn({
  name,
  sessionNumber,
  setNumber,
}) {
  function plusOne() {
    setNumber((prev) => prev + 1);
  }

  function minusOne() {
    if (sessionNumber - 1 < 0) {
      setNumber(0);
    } else {
      setNumber((prev) => prev - 1);
    }
  }

  return (
    <>
      <div className="flex">
        <label htmlFor={name}>{name + " Length"}</label>
        <div className="buttonsDisplay">
          <button onClick={plusOne} className="arrowBtn">
            <img src={upArrow} className="arrow" alt="Up arrow" />
          </button>
          <span className="">{sessionNumber}</span>
          <button onClick={minusOne} className="arrowBtn">
            <img src={downArrow} className="arrow" alt="Down arrow" />
          </button>
        </div>
      </div>
    </>
  );
}
