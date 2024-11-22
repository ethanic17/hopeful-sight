import { useState } from "react";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";

export function AuthForm() {
  const [hasAccount, setHasAccount] = useState(true);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-1/2">
        {hasAccount ? (
          <SignInForm setHasAccount={setHasAccount} />
        ) : (
          <SignUpForm setHasAccount={setHasAccount} />
        )}
      </div>
    </div>
  );
}
