import { FormBody } from "./FormBody";
import { Button } from "./Button";
import { Input } from "./Input";
import { useState } from "react";

export function SignInForm({ setHasAccount }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <FormBody>
      <h3 className="text-5xl font-semibold text-slate-800">Welcome Back</h3>
      <Input placeholder="Enter you email" state={email} setState={setEmail} />
      <Input
        type="password"
        placeholder="....."
        state={password}
        setState={setPassword}
      />
      <Button>Sign In</Button>
      <div
        onClick={() => setHasAccount((state) => !state)}
        className="place-self-start text-sm text-blue-800 hover:text-blue-700 hover:underline cursor-pointer"
      >
        Need an Account?
      </div>
    </FormBody>
  );
}
