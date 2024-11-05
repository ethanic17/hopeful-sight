import { useState } from "react";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";
export function AuthForm() {
  const [hasAccount, setHasAccount] = useState(true);
  return hasAccount ? (
    <SignInForm setHasAccount={setHasAccount} />
  ) : (
    <SignUpForm setHasAccount={setHasAccount} />
  );
}
