/* eslint-disable react/prop-types */
export default function Containerform({ children }) {
  return (
    <div className="flex-grow max-md:rounded-md max-md:bg-white max-md:p-4 max-md:pt-0">
      {children}
    </div>
  );
}
