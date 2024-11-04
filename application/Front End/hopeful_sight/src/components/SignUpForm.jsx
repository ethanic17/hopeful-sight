import { FormBody } from "./FormBody";
import { Button } from "./Button";
import { Input } from "./Input";
import { useState } from "react";
import useAxiosWithToken from "../hooks/axios";

export function SignUpForm({ setHasAccount }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const axios = useAxiosWithToken();

  async function handleSignUp(e) {
    e.preventDefault();
    try {
      setLoading(true);
      let resp = await axios.post("/api/users/", {
        username: username,
        email: email,
      });
      console.log(resp);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <FormBody>
      <h3 className="text-5xl font-semibold text-slate-800">Get Started</h3>
      <Input placeholder="Enter you email" state={email} setState={setEmail} />
      <Input
        placeholder="Enter a username"
        state={username}
        setState={setUsername}
      />
      <Input
        type="password"
        placeholder="....."
        state={password}
        setState={setPassword}
      />
      <Button onClick={handleSignUp}>
        {loading ? "Loading..." : "Sign Up"}
      </Button>
      <div
        onClick={() => setHasAccount((state) => !state)}
        className="place-self-start text-sm text-blue-800 hover:text-blue-700 hover:underline cursor-pointer"
      >
        Already have an Account?
      </div>
    </FormBody>
  );
}
