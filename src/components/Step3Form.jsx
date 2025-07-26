import { useDispatch, useSelector } from "react-redux";
import {
  nextstep,
  prevstep,
  seletedactiveplan,
  toggleAddon,
} from "../Store/formslice";
import Buttons from "./Buttons";
import Containerform from "./containerform";
import HeadForm from "./HeadForm";
export default function Step3Form() {
  const { addOns } = useSelector((state) => state.form);
  const activeplan = useSelector(seletedactiveplan);
  const dispatch = useDispatch();
  const handleToggleAddon = (id) => {
    dispatch(toggleAddon(id));
  };
  function handlePrev(e) {
    e.preventDefault();
    dispatch(prevstep());
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(nextstep());
  }
  return (
    <form onSubmit={handleSubmit} noValidate className="flex h-full flex-col">
      <Containerform>
        <HeadForm
          head="Pick add-ons"
          subhead="Add-ons help enhance your gaming experience."
        />
        <ul className="flex flex-col gap-6">
          {addOns.map((item) => (
            <li className="flex items-center" key={item.id}>
              <input
                type="checkbox"
                name={item.name}
                id={item.id}
                className="hidden"
                checked={item.selected}
                onChange={() => handleToggleAddon(item.id)}
              />
              <label
                htmlFor={item.id}
                className="toggle-adds relative flex w-full border-spacing-3 cursor-pointer items-center gap-4 rounded-lg border-[2px] border-light-gray p-4"
              >
                <span className="mr-auto">
                  <h3 className="font-semibold tracking-wider text-marine-blue">
                    {item.name}
                  </h3>
                  <p className="text-sm font-medium text-cool-gray">
                    {item.description}
                  </p>
                </span>
                <p className="text-sm font-bold text-purplish-blue">
                  +${item.costs}/{activeplan.duration.slice(0, 2)}
                </p>
              </label>
            </li>
          ))}
        </ul>
      </Containerform>

      <Buttons onClick={handlePrev} />
    </form>
  );
}
