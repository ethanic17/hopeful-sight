import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GlassesCard } from "../components/GlassesCard";
import { glasses } from "../test_data/glasses"; // Adjust this path if necessary

export function Home() {
  const loggedIn = useSelector((state) => state.user.userInfo.loggedIn);
  const navigate = useNavigate();

  return (
    <div className="bg-blue-50 p-4 min-h-screen flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 border border-red-500">
        {glasses.map((value, index) => (
          <GlassesCard
            key={value.glasses_id || index}
            data={value}
            onClick={() => !loggedIn && navigate("/login")}
          />
        ))}
      </div>
    </div>
  );
}
