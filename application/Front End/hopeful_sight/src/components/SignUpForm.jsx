import { FormBody } from "./FormBody";
import { Button } from "./Button";
import { Input } from "./Input";
import { useState } from "react";
import useAxiosWithToken, { axiosInstance as axios } from "../hooks/axios";
import { useDispatch } from "react-redux";
import { setAuth } from "../app/features/userSlice";

export function SignUpForm({ setHasAccount }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
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

      console.log("Creation Resp: " + creationResp);
      if (creationResp.status === 201) {
        let logInToken = await axiosInter.post("/auth/token/login/", {
          username: username,
          password: password,
        });
        dispatch(setAuth(logInToken.data.auth_token));
      }
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
