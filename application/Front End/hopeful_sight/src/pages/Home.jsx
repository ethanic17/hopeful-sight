import { useState } from "react";
import { GlassesCard } from "../components/GlassesCard";
import { Overlay } from "../components/Overlay";
import { glasses } from "../test_data/glasses";
import { useSelector } from "react-redux";
import { AuthForm } from "../components/AuthForm";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [show, setShow] = useState(false);
  const loggedIn = useSelector((state) => state.user.userInfo.loggedIn);
  const navigate = useNavigate();
  function handleCardClick() {
    if (!loggedIn) {
      setShow(true);
    } else {
      navigate("/donate/form");
    }
  }

  return (
    <div className="bg-blue-50 p-4 min-h-screen flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {glasses.map((value, index) => (
          <GlassesCard
            loggedIn={loggedIn}
            onClick={handleCardClick}
            key={value.glasses_id || index}
            data={value}
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
