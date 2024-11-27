import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlassesCard } from "../components/GlassesCard";
import { glasses } from "../test_data/glasses"; // Adjust this path if necessary
import { Overlay } from "../components/Overlay";
import { AuthForm } from "../components/AuthForm";
import { useAxiosWithToken } from "../hooks/axios";
import { ConfirmSelected } from "../components/ConfirmSelected";
import { AlreadyClaimed } from "../components/AlreadyClaimend";

export function Home() {
  const [show, setShow] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);
  const [data, setData] = useState(null);
  const [stateGlasses, setGlasses] = useState([]);
  const loggedIn = useSelector((state) => state.user.userInfo.loggedIn);
  const isDonator = useSelector((state) => state.user.userInfo.donator);
  const hasClaimed = useSelector(
    (state) => state.user.userInfo?.account?.donatee?.has_claimed,
  );
  console.log("acceptetd", hasClaimed);
  console.log(isDonator);
  const axiosInter = useAxiosWithToken();
  const navigate = useNavigate();
  function handleCardClick(data) {
    if (!loggedIn) {
      setShow(true);
    } else {
      if (!isDonator) {
        console.log("Not a donator");
        setData(data);
        setIsClaiming(true);
      } else {
        navigate("/donate/form");
      }
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
      {hasClaimed && <AlreadyClaimed />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {!hasClaimed &&
          stateGlasses.map((value, index) => (
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
        {isClaiming && (
          <Overlay setShow={setIsClaiming}>
            <ConfirmSelected
              onCancel={() => setIsClaiming(false)}
              data={data}
            />
          </Overlay>
        )}
      </div>
    </div>
  );
}
