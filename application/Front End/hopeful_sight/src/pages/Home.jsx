import React, { useState, useEffect } from "react";
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

  return (
    <div className="bg-blue-50 p-4 min-h-screen flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 border border-red-500">
        {/* This is for debugging guys */}
        {glasses.map((value, index) => (
          <GlassesCard
            key={value.glasses_id || index}
            data={value}
            onClick={() => setShow(!loggedIn)}
          />
        ))}
      </div>
      {show && (
        <Overlay setShow={setShow}>
          <AuthForm setShow={setShow} />
        </Overlay>
      )}
    </div>
  );
}
