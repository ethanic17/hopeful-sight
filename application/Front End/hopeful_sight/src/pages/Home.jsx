import { useEffect, useState } from "react";
import axios from "../hooks/axios";

export function Home() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    try {
      setLoading(true);
      let resp = await axios.get("/squirtle");
      setData(resp.data);
      console.log(resp.data.sprites);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <div className="flex justify-center bg-slate-400">
        <p className="text-3xl capitalize">
          {loading ? "Loading..." : data.name}
        </p>
        {!loading && (
          <img src={data.sprites.front_default} className="size-96" />
        )}
      </div>
    </>
  );
}
