/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
export default function Buttons({ onClick }) {
  const { activeStep } = useSelector((state) => state.form);
  return (
    <div
      className={`mt-4 flex items-center ${activeStep > 1 ? "justify-between" : "justify-end"} `}
    >
      {activeStep > 1 && (
        <button
          type="button"
          onClick={onClick}
          className="rounded-lg bg-purplish-blue px-4 py-2 font-medium text-white transition-colors hover:bg-marine-blue focus:outline-none focus:ring-2 focus:ring-marine-blue focus:ring-opacity-50"
        >
          Go Back
        </button>
      )}
      <button
        type="submit"
        className="rounded-lg bg-marine-blue px-4 py-2 font-medium text-white transition-colors hover:bg-purplish-blue focus:outline-none focus:ring-2 focus:ring-purplish-blue focus:ring-opacity-50"
      >
        {activeStep === 4 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
}
