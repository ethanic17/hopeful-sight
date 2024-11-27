import { useState } from "react";

import { FormBody } from "./FormBody";
import { PaymentForm } from "./PaymentForm";
import { DonationAmount } from "./DonationAmount";
import { DonationConfirm } from "./DonationConfirm";

export function DonationForm({ currentGasses }) {
  const [step, setStep] = useState(0);

  return (
    <div className="flex h-full items-center justify-center bg-gray-100 p-10 space-x-10">
      <div className="w-1/2 bg-gradient-to-br from-sky-600 to-blue-900 text-white p-10 rounded-xl shadow-lg hover:shadow-2xl">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          Transform Lives with the Gift of Sight
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Over <strong>800 million people</strong> lack access to glasses,
          limiting their ability to learn, work, and thrive. With{" "}
          <strong>any amount you’re able to give</strong>, you can provide
          someone with the gift of clear sight, unlocking a brighter future for
          themselves and their community.
        </p>
        <em className="block text-base font-medium">
          Your support changes lives—one lens at a time. ❤️
        </em>
      </div>
      <div className="w-1/2">
        <FormBody>
          {step == 0 && <PaymentForm setStep={setStep} />}
          {step == 1 && <DonationAmount setStep={setStep} />}
          {step == 2 && <DonationConfirm />}
        </FormBody>
      </div>
    </div>
  );
}
