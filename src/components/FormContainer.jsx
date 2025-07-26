import { useSelector } from "react-redux";
import Steps from "../components/Steps";
import FormSuccess from "./FormSuccess";
import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";
import Step4Form from "./Step4Form";
import Steps3Form from "./Step3Form";

const FormContainer = () => {
  const { activeStep, isSubmitted } = useSelector((state) => state.form);
  const renderStep = () => {
    if (isSubmitted) {
      return <FormSuccess />;
    }
    switch (activeStep) {
      case 1:
        return <Step1Form />;
      case 2:
        return <Step2Form />;
      case 3:
        return <Steps3Form />;
      case 4:
        return <Step4Form />;
      default:
        return null;
    }
  };

  return (
    <div className="grid w-full max-w-5xl grid-cols-1 gap-4 rounded-lg md:grid-cols-[18rem_1fr] md:gap-12 md:bg-white md:p-4 md:shadow-xl">
      <div className="flex justify-center rounded-lg bg-sidebar-desktop bg-cover bg-center p-8 max-md:items-center max-md:bg-sidebar-mobile md:flex-col md:justify-start">
        <Steps />
      </div>
      <div
        className={`flex h-full flex-col ${isSubmitted ? "justify-center" : "justify-between"} `}
      >
        {renderStep()}
      </div>
    </div>
  );
};

export default FormContainer;
