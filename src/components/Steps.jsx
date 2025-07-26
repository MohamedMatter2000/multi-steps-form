import { useSelector } from "react-redux";
function Steps() {
  const { activeStep } = useSelector((store) => store.form);
  const steps = [
    { id: 1, name: "Step 1", description: "your info" },
    { id: 2, name: "Step 2", description: "select plan" },
    { id: 3, name: "Step 3", description: "add-one" },
    { id: 4, name: "Step 4", description: "summary" },
  ];
  return (
    <div className="flex flex-row justify-center gap-4 md:flex-col md:justify-start md:gap-6">
      {steps.map((step) => (
        <div key={step.id} className="flex items-center gap-4">
          <div
            className={` ${activeStep === step.id ? "bg-light-gray" : "border-2 border-light-gray"} flex h-10 w-10 items-center justify-center rounded-full text-white`}
          >
            {step.id}
          </div>
          <div className="hidden text-sm font-bold uppercase md:block">
            <h1 className="font-medium text-cool-gray">{step.name}</h1>
            <p className="tracking-wider text-white">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Steps;
