import { FormBody } from "./FormBody";
import { Button } from "./Button";
import { Input } from "./Input";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useState } from "react";
import { axiosDefault, useAxiosWithToken } from "../hooks/axios";
import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";
import { useNavigate } from "react-router-dom";
import { setAuth } from "../app/features/userSlice";

export function SignInForm({ setHasAccount }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const axiosInter = useAxiosWithToken();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSignIn(e) {
    try {
      e.preventDefault();
      if (!username || !password) {
        setMessage("All Fields Are Required.");
      }
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
        console.log(userResp.data);
      }
      navigate("/account");
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <FormBody>
      <h3 className="text-5xl font-semibold text-slate-800">Welcome Back</h3>
      <div className="w-2/3">
        <Input
          label="Username"
          title={"Username"}
          type="text"
          value={username}
          setValue={(val) => {
            setMessage("");
            setUsername(val);
          }}
          required
          icon={FaEnvelope}
          className="text-lg"
        />
        <Input
          label="Password"
          type="password"
          value={password}
          setValue={(val) => {
            setMessage("");
            setPassword(val);
          }}
          icon={FaLock}
          required
          className="text-lg"
        />
      </div>
      {message && <p className="text-red-600 text-xs">{message}</p>}
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
