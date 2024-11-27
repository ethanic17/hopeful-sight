import { FormBody } from "./FormBody";
import { Button } from "./Button";
import { Input } from "./Input";
import { useState } from "react";
import { useAxiosWithToken, axiosDefault as axios } from "../hooks/axios";
import { useDispatch } from "react-redux";
import { setAuth, login } from "../app/features/userSlice";
import { AccountForm } from "./AccountForm";
import { DonateeForm } from "./DonateeForm";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

export function SignUpForm({ setHasAccount }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [accountType, setAccountType] = useState("none");
  const [userId, setUserID] = useState(null);
  const axiosInter = useAxiosWithToken();
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
        let me = await getme();
        dispatch(
          login({
            username: username,
            email: email,
            id: me.id,
            account: me.account,
          }),
        );
      }
      setStep(step + 1);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  async function getme() {
    try {
      let me = await axiosInter.get("/auth/users/me/");
      return me.data;
    } catch (e) {
      console.log(e);
    }
  }

  switch (step) {
    case 0:
      // user form (add to new component)
      return (
        <FormBody>
          <h3 className="text-5xl font-semibold text-slate-800">Get Started</h3>
          <div className="w-2/3">
            <Input
              title={"Enter your email"}
              label={"Enter your email"}
              placeholder="Enter you email"
              value={email}
              setValue={setEmail}
              type="email"
              required
              icon={FaEnvelope}
            />
            <Input
              title={"Enter your username"}
              label={"Enter your username"}
              placeholder="Enter you username"
              value={username}
              setValue={setUsername}
              required
              icon={FaUser}
            />
            <Input
              title={"Password"}
              label={"Password"}
              placeholder="Password"
              value={password}
              setValue={setPassword}
              required
              type="password"
              icon={FaLock}
            />
          </div>
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
          <h3 className="text-3xl font-bold mb-4 text-center text-sky-950">
            Choose Your Account Type
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex flex-col items-center bg-sky-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-sky-600 mb-4">
                Donator
              </h4>
              <p className="text-gray-600 text-center mb-6">
                Join as a Donator to support others by contributing your
                resources or time.
              </p>
              <Button
                className="bg-sky-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
                onClick={(e) => {
                  e.preventDefault();
                  setAccountType("donator");
                  setStep(step + 1);
                }}
              >
                Be a Giver
              </Button>
            </div>
            <div className="flex flex-col items-center bg-sky-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-sky-600 mb-4">
                Donatee
              </h4>
              <p className="text-gray-600 text-center mb-6">
                Join as a Donatee to receive assistance and support from
                generous donors.
              </p>
              <Button
                className="bg-sky-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
                onClick={(e) => {
                  e.preventDefault();
                  setAccountType("donatee");
                  setStep(step + 1);
                }}
              >
                Be a Receiver
              </Button>
            </div>
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
