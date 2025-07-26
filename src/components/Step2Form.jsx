/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import {
  nextstep,
  prevstep,
  selectPlan,
  toggleBillingCycle,
} from "../Store/formslice";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";
import HeadForm from "./HeadForm";
import Buttons from "./Buttons";
import Containerform from "./containerform";

export default function Step2Form() {
  const dispatch = useDispatch();
  const icons = {
    arcade: arcadeIcon,
    advanced: advancedIcon,
    pro: proIcon,
  };
  const { Selectedplans, isYearly } = useSelector((state) => state.form);
  const updatedPlans = Selectedplans.map((plan) => {
    return {
      ...plan,
      icon: icons[plan.id],
    };
  });
  const handlePlanSelect = (planId) => {
    dispatch(selectPlan(planId));
  };
  function handlePrev(e) {
    e.preventDefault();
    dispatch(prevstep());
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(nextstep());
  }
  function handleYearlySub() {
    dispatch(toggleBillingCycle());
  }
  return (
    <form onSubmit={handleSubmit} noValidate className="flex h-full flex-col">
      <Containerform>
        <HeadForm
          head="Select your Plan"
          subhead=" You have the option of monthly or yearly billing"
        />
        <div className="mb-6 flex flex-row gap-4">
          {updatedPlans.map((plan) => (
            <div key={plan.id} className="flex-1">
              <input
                type="radio"
                onChange={() => handlePlanSelect(plan?.id)}
                checked={plan.selected}
                name="plan"
                className="peer hidden"
                id={plan.id}
              />
              <label
                htmlFor={plan.id}
                className="flex min-h-11 flex-1 cursor-pointer flex-col items-start justify-start gap-4 rounded-xl border-[2px] border-light-gray px-4 py-2 peer-checked:border-marine-blue peer-checked:bg-light-blue"
              >
                <span>
                  <img src={plan.icon} alt={plan.id} />
                </span>
                <span>
                  <h3 className="font-bold text-marine-blue">{plan.name}</h3>
                  <p className="text-cool-gray">
                    ${plan.price}/{plan.duration.slice(0, 2)}
                  </p>
                </span>
              </label>
            </div>
          ))}
        </div>
        <div className="toggle flex items-center justify-center rounded-xl bg-magnolia p-4">
          <label htmlFor="checkbox" className="relative flex gap-3">
            <span
              className={`font-bold ${isYearly ? "text-cool-gray" : "text-marine-blue"} cursor-pointer`}
            >
              Monthly
            </span>
            <input
              type="checkbox"
              id="checkbox"
              className="hidden"
              checked={isYearly}
              onChange={handleYearlySub}
            />
            <div className="toggle-switch"></div>
            <span
              className={`font-bold ${isYearly ? "text-marine-blue" : "text-cool-gray"} cursor-pointer`}
            >
              Yearly
            </span>
          </label>
        </div>
      </Containerform>
      <Buttons next="Next Step" prev=" Go back" onClick={handlePrev} />
    </form>
  );
}
