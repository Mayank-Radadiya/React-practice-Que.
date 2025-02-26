// Toggle Switch
import { useState } from "react";

const ToggleSwitch = ({}) => {
  const [text, settext] = useState(true);

  const handler = () => {
    settext(!text);
  };
  return (
    <>
      {" "}
      <div className="flex flex-col gap-10 w-[60vh] items-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            className="sr-only peer"
            value=""
            type="checkbox"
            onClick={() => handler()}
          />
          <div className="peer ring-2 ring-gray-900 bg-gradient-to-r from-rose-400 to-red-900 rounded-full outline-none duration-300 after:duration-500 w-20 h-8  shadow-inner peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-emerald-900 shadow-gray-900 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-900  after:content-[''] after:rounded-full after:absolute after:outline-none after:h-12 after:w-12 after:bg-gray-50 after:-top-2 after:-left-2 after:flex after:justify-center after:items-center after:border-4 after:border-gray-900  peer-checked:after:translate-x-14"></div>
        </label>
        {text ? <h1>Toggle Switch On</h1> : <h1> Off</h1>}
      </div>
    </>
  );
};

export default ToggleSwitch;
