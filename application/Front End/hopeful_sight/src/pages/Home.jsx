import { useEffect, useState } from "react";
import axios from "../hooks/axios";
import { Requester } from "../components/Requester";

export function Home() {
  const [auth, setAuth] = useState();
  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    try {
      setLoading(true);

      let resp = await axios.post("/auth/token/login/", {
        username: "admin",
        password: "admin",
      });

      setAuth(resp.data.auth_token);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const authFetch = async () => {
    try {
      if (!auth) return;
      console.log(auth);
      setLoading(true);
      let resp = await axios.get("/api/users/", {
        headers: {
          Authorization: `Token ${auth}`,
        },
      });
      console.log("AuthFetch Resp:");
      console.log(resp);
    } catch (e) {
      console.log("AuthFetch err: ");
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    authFetch();
  }, [auth]);

  return (
    <>
      <Requester url={"/hello"} verb={"POST"} />
    </>
  );
}
