import { useDispatch, useSelector } from "react-redux";
import { updatePersonalInfo } from "../Store/formslice";
import { useForm } from "react-hook-form";
import HeadForm from "./HeadForm";
import Buttons from "./Buttons";
import Containerform from "./containerform";
function Step1Form() {
  const dispatch = useDispatch();
  const { name, email, phone } = useSelector((state) => state.form);
  const phoneRegex = /^01[0-2,5][0-9]{8}$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name, email, phone },
  });
  function handleNext(data) {
    dispatch(updatePersonalInfo(data));
  }
  return (
    <form
      onSubmit={handleSubmit(handleNext)}
      noValidate
      className="flex h-full flex-col"
    >
      <Containerform>
        <HeadForm
          head="Personal info"
          subhead="Please provide your name, email address, and phone number."
        />
        <div className="mt-5 flex flex-col gap-5 md:mt-8">
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-marine-blue"
            >
              Name
            </label>
            <input
              autoComplete="off"
              id="name"
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="e.g. Stephen King"
              className="w-full rounded-lg border border-light-gray p-3 focus:border-marine-blue focus:outline-none focus:ring-1 focus:ring-marine-blue"
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-marine-blue"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
              {...register("email", {
                required: "Email address is required",
                pattern: {
                  value: emailRegex,
                  message: "Please provide a valid email address.",
                },
              })}
              className="w-full rounded-lg border border-light-gray p-3 focus:border-marine-blue focus:outline-none focus:ring-1 focus:ring-marine-blue"
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mb-1 block text-sm font-medium text-marine-blue"
            >
              Phone Number
            </label>
            <input
              autoComplete="off"
              type="tel"
              id="phone"
              placeholder="e.g. 01234567890"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: phoneRegex,
                  message: "Please provide a valid mobile number.",
                },
              })}
              className="w-full rounded-lg border border-light-gray p-3 focus:border-marine-blue focus:outline-none focus:ring-1 focus:ring-marine-blue"
            />
            {errors.phone && (
              <span className="text-sm text-red-500">
                {errors.phone.message}
              </span>
            )}
          </div>
        </div>
      </Containerform>
      <Buttons />
    </form>
  );
}

export default Step1Form;
