import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlassesCard } from "../components/GlassesCard";
import { glasses } from "../test_data/glasses"; // Adjust this path if necessary
import { Overlay } from "../components/Overlay";
import { AuthForm } from "../components/AuthForm";
import { useAxiosWithToken } from "../hooks/axios";

export function Home() {
  const [show, setShow] = useState(false);
  const [stateGlasses, setGlasses] = useState([]);
  const loggedIn = useSelector((state) => state.user.userInfo.loggedIn);
  const axiosInter = useAxiosWithToken();
  const navigate = useNavigate();
  function handleCardClick() {
    if (!loggedIn) {
      setShow(true);
    } else {
      navigate("/donate/form");
    }
  }

  useEffect(() => {
    let asf = async () => {
      try {
        let resp = await axiosInter.get("/api/glasses/");
        setGlasses(resp.data);
      } catch (e) {
        console.log("Can't fetch glasses", e.message);
        setGlasses(glasses);
      }
    };
    asf();
  }, [loggedIn, axiosInter]);

  return (
    <div className="bg-blue-50 p-4 min-h-screen flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {stateGlasses.map((value, index) => (
          <GlassesCard
            key={value.name || index}
            data={value}
            onClick={handleCardClick}
          />
        ))}
        {show && (
          <Overlay setShow={setShow}>
            <AuthForm />
          </Overlay>
        )}
      </div>
    </div>
  );
}
