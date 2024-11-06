import { FormBody } from "./FormBody";
import { Button } from "./Button";
import { Input } from "./Input";
import { useState } from "react";
import { axiosDefault, useAxiosWithToken } from "../hooks/axios";
import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";
import { useNavigate } from "react-router-dom";
import { setAuth } from "../app/features/userSlice";

export function SignInForm({ setHasAccount }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const axiosInter = useAxiosWithToken();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSignIn(e) {
    try {
      e.preventDefault();
      setLoading(true);
      let tokenResp = await axiosDefault.post("/auth/token/login/", {
        password: password,
        username: username,
      });
      if (tokenResp.status == 200) {
        dispatch(setAuth(tokenResp.data.auth_token));
      }
      let userResp = await axiosInter.get("/auth/users/me/");
      if (userResp.status == 200) {
        dispatch(login(userResp.data));
        navigate("/account");
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  return (
    <FormBody>
      <h3 className="text-5xl font-semibold text-slate-800">Welcome Back</h3>
      <Input
        placeholder="Enter you email"
        state={username}
        setState={setUsername}
      />
      <Input
        type="password"
        placeholder="....."
        state={password}
        setState={setPassword}
      />
      <Button onClick={handleSignIn}>
        {loading ? "Loading..." : "Sign In"}
      </Button>
      <div
        onClick={() => setHasAccount((state) => !state)}
        className="place-self-start text-sm text-blue-800 hover:text-blue-700 hover:underline cursor-pointer"
      >
        Need an Account?
      </div>
    </FormBody>
  );
}
