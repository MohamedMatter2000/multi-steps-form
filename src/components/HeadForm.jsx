/* eslint-disable react/prop-types */
export default function HeadForm({ head, subhead }) {
  return (
    <>
      <div className="my-5">
        <h1 className="mb-3 text-3xl font-semibold capitalize text-marine-blue">
          {head}
        </h1>
        <p className="text-base font-semibold text-cool-gray">{subhead}</p>
      </div>
    </>
  );
}
