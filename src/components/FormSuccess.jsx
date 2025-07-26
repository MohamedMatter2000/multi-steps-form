import confirmationIcon from "../assets/images/icon-thank-you.svg";
export default function FormSuccess() {
  return (
    <div className="w-[calc(100%- 2rem)] flex flex-col items-center justify-center gap-4 text-center">
      <span>
        <img src={confirmationIcon} alt="thankyou" />
      </span>
      <h2 className="text-4xl font-semibold text-marine-blue">Thank you!</h2>
      <p className="text-cool-gray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
