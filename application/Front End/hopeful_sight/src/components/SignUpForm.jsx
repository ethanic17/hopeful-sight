import { FormBody } from "./FormBody";
import { Button } from "./Button";
import { Input } from "./Input";
import { useState } from "react";
import { axiosDefault as axios } from "../hooks/axios";
import { useDispatch } from "react-redux";
import { setAuth, login } from "../app/features/userSlice";
import { AccountForm } from "./AccountForm";
import { DonateeForm } from "./DonateeForm";

export function SignUpForm({ setHasAccount }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [accountType, setAccountType] = useState("none");
  const [userId, setUserID] = useState(null);

  const dispatch = useDispatch();

  async function handleSignUp(e) {
    e.preventDefault();
    try {
      setLoading(true);
      let creationResp = await axios.post("/auth/users/", {
        username: username,
        email: email,
        password: password,
      });
      setUserID(creationResp.data.id);
      if (creationResp.status === 201) {
        let logInToken = await axios.post("/auth/token/login/", {
          username: username,
          password: password,
        });
        dispatch(setAuth(logInToken.data.auth_token));
        dispatch(login({ username: username, email: email, name: "" }));
      }
      setStep(step + 1);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  switch (step) {
    case 0:
      // user form (add to new component)
      return (
        <FormBody>
          <h3 className="text-5xl font-semibold text-slate-800">Get Started</h3>
          <Input
            placeholder="Enter you email"
            state={email}
            setState={setEmail}
          />
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
    case 1:
      // account Type form (add to new component)
      return (
        <FormBody>
          <h3 className="text-2xl font-bold mb-4">Select Account Type:</h3>
          <div className="flex justify-around flex-row gap-x-5">
            <Button
              onClick={(e) => {
                setAccountType("donator");
                e.preventDefault();
                setStep(step + 1);
              }}
            >
              As Donator
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                setStep(step + 1);
                setAccountType("donatee");
              }}
            >
              As Donatee
            </Button>
          </div>
        </FormBody>
      );
    case 2:
      return (
        <AccountForm
          userID={userId}
          setStep={setStep}
          accountType={accountType}
        />
      );
    case 3:
      return <DonateeForm />;
  }
}
