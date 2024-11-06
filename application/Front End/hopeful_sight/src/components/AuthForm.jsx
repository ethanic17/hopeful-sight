import { useState } from "react";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";
import { useSelector } from "react-redux";
import { AccountTypeForm } from "./AccountTypeForm";

export function AuthForm() {
  const [hasAccount, setHasAccount] = useState(true);
  const token = useSelector((state) => state.user.token);

  if (token) {
    return <AccountTypeForm />;
  }

  // if (accountType == "donator") {
  //   navigate("/");
  // }
  // if (accountType == "donatee") {
  //   return <DonatorForm />;
  // }

  return hasAccount ? (
    <SignInForm setHasAccount={setHasAccount} />
  ) : (
    <SignUpForm setHasAccount={setHasAccount} />
  );
}
