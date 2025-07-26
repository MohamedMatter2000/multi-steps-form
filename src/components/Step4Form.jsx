import { useDispatch, useSelector } from "react-redux";
import {
  prevstep,
  selectTotalCost,
  seletedactiveplan,
  submitForm,
  toggleBillingCycle,
} from "../Store/formslice";
import Buttons from "./Buttons";
import Containerform from "./containerform";
import HeadForm from "./HeadForm";
export default function Step4Form() {
  const { addOns } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const activeplan = useSelector(seletedactiveplan);
  const totalCost = useSelector(selectTotalCost);
  function handlePrev(e) {
    e.preventDefault();
    dispatch(prevstep());
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm());
  };
  function handleYearlySub() {
    dispatch(toggleBillingCycle());
  }
  return (
    <form onSubmit={handleSubmit} noValidate className="flex h-full flex-col">
      <Containerform>
        <HeadForm
          head=" Finishing up"
          subhead=" Double-check everything looks OK before confirming"
        />
        <div className="flex flex-col">
          <div className="flex flex-col gap-2 rounded-xl bg-alabaster p-4">
            <div className="flex items-center justify-between border-b border-light-gray pb-2">
              <div>
                <p className="font-semibold text-marine-blue">
                  {activeplan.name} ({activeplan.duration})
                </p>
                <span
                  onClick={handleYearlySub}
                  className="cursor-pointer py-2 font-semibold text-cool-gray"
                >
                  change
                </span>
              </div>
              <div>
                <p className="font-semibold text-marine-blue">
                  ${activeplan.price}/{activeplan.duration.slice(0, 2)}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {addOns.length > 0 &&
                addOns
                  .filter((addon) => addon.selected)
                  .map((add) => (
                    <div
                      key={add.id}
                      className="flex items-center justify-between"
                    >
                      <p className="font-semibold text-cool-gray">{add.name}</p>
                      <span className="font-semibold text-marine-blue">
                        ${add.costs}/{activeplan.duration.slice(0, 2)}
                      </span>
                    </div>
                  ))}
            </div>
          </div>
          <div className="flex items-center justify-between p-4">
            <p className="font-semibold text-cool-gray">
              Total (Per
              <span className="pl-1">
                {activeplan.duration.slice(0, activeplan.duration.length - 2)}
              </span>
              )
            </p>
            <p className="font-bold text-purplish-blue">
              +${totalCost}/{activeplan.duration.slice(0, 2)}
            </p>
          </div>
        </div>
      </Containerform>

      <Buttons onClick={handlePrev} />
    </form>
  );
}
