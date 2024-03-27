import { IoBackspace } from "react-icons/io5";
import { FaDivide, FaMinus, FaPlus, FaEquals } from "react-icons/fa6";

const button = [
  { label: "C", value: "clear" },
  { label: <IoBackspace />, value: "backspace" },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: <FaPlus />, value: "+", classname: "addition glow op" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: <FaMinus />, value: "-", classname: "glow op" },
  { label: ".", value: "." },
  { label: "0", value: "0", classname: "zero" },
  { label: <FaDivide />, value: "/", classname: "glow op" },
  { label: <FaPlus />, value: "*", classname: "glow multiply op" },
  { label: <FaEquals />, value: "=", classname: "equal op" },
];

const Buttons = ({ onButtonClick }) => (
  <>
    <div className="buttons">
      {button.map(({ label, value, classname }) => (
        <button
          className={classname ?? value}
          key={value}
          onClick={() => onButtonClick(value)}
        >
          {label}
        </button>
      ))}
    </div>
  </>
);

export default Buttons;
