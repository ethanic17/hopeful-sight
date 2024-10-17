import { useState } from "react";
import { Requester } from "../components/Requester";
import useAxiosWithToken from "../hooks/axios";

export function Home() {
  const { token, setToken, axiosInstance: axios } = useAxiosWithToken();
  const [router, setRouter] = useState(0);
  const authRequests = [
    {
      working: true,
      url: "/auth/token/login/",
      verb: "POST",
      body: { username: "admin", password: "admin" },
      authentication: true,
      setParentData: (data) => setToken(data.auth_token),
    },
    {
      working: true,
      url: "/auth/token/logout/",
      verb: "POST",
      authentication: !!token,
      setParentData: () => setToken(""),
    },
    {
      working: true,
      url: "/auth/users/",
      verb: "GET",
      authentication: !!token,
    },
    {
      working: true,
      url: "/auth/users/",
      verb: "POST",
      body: {
        email: "newAuthUser@new.com",
        username: "newAuthUser",
        password: "helloworld123",
      },
      authentication: !!token,
    },
    {
      working: false,
      url: "/auth/users/activation/",
      verb: "POST",
      body: { uid: 6, token: "token" },
      authentication: !!token,
    },
    {
      working: true,
      url: "/auth/users/me/",
      verb: "GET",
      authentication: !!token,
    },
    {
      working: true,
      url: "/auth/users/me/",
      verb: "PUT",
      body: { username: "admin2" },
      authentication: !!token,
    },
    {
      working: true,
      url: "/auth/users/me/",
      verb: "PATCH",
      body: { username: "admin2" },
      authentication: !!token,
    },
    {
      working: false,
      url: "/auth/users/me/",
      verb: "DELETE",
      authentication: !!token,
    },
    {
      working: false,
      url: "/auth/users/resend_activation/",
      verb: "POST",
      body: { email: "admin@admin.com" },
      authentication: !!token,
    },
    {
      working: false,
      url: "/auth/users/reset_password/",
      verb: "POST",
      body: {
        email: "admin@admin.com",
      },
      authentication: !!token,
    },
    {
      working: false,
      url: "/auth/users/reset_password_confirm/",
      verb: "POST",
      body: {
        uid: ":(",
        token: ":(",
        new_password: ":(",
      },
      authentication: !!token,
    },
    {
      working: false,
      url: "/auth/users/reset_username/",
      verb: "POST",
      body: {
        email: "newadmin@admin.com",
      },
      authentication: !!token,
    },
    {
      working: false,
      url: "/auth/users/reset_username_confirm/",
      verb: "POST",
      body: {
        new_username: "newAdminName",
      },
      authentication: !!token,
    },
    {
      working: false,
      url: "/auth/users/set_password/",
      verb: "POST",
      body: {
        new_password: "newpass",
        current_password: "admin",
      },
      authentication: !!token,
    },
    {
      working: false,
      url: "/auth/users/set_username/",
      verb: "POST",
      body: {
        new_username: "newpass",
        current_password: "admin",
      },
      authentication: !!token,
    },
    {
      working: true,
      url: "/auth/users/1/",
      verb: "GET",
      authentication: !!token,
    },
    {
      working: false,
      url: "/auth/users/1/",
      verb: "PUT",
      authentication: !!token,
      body: {
        email: "email@email.com",
      },
    },
    {
      working: false,
      url: "/auth/users/1/",
      verb: "PATCH",
      authentication: !!token,
      body: {
        email: "email@email.com",
      },
    },
    {
      working: false,
      url: "/auth/users/1/",
      verb: "DELETE",
      authentication: !!token,
    },
  ];

  const userRequests = [
    {
      working: true,
      url: "/api/users/",
      verb: "GET",

      authentication: !!token,
    },
    {
      working: true,
      url: "/api/users/",
      verb: "POST",
      body: {
        username: "newUser",
        email: "email@email.com",
      },
      authentication: !!token,
    },
    {
      working: true,
      url: "/api/users/",
      verb: "PUT",
      body: {
        username: "newUser",
      },
      authentication: !!token,
    },
    {
      working: true,
      url: "/api/users/1",
      verb: "DELETE",
      authentication: !!token,
    },
    {
      working: true,
      url: "/api/users/1",
      verb: "GET",
      authentication: !!token,
    },
  ];

  const donateeRequests = [
    {
      working: false,
      url: "/api/donatee/",
      verb: "GET",
      authentication: !!token,
    },
    {
      working: false,
      url: "/api/donatee/",
      verb: "POST",
      body: {
        username: "newUser",
        email: "email@email.com",
      },
      authentication: !!token,
    },
    {
      working: false,
      url: "/api/donatee/1",
      verb: "DELETE",
      authentication: !!token,
    },
    {
      working: false,
      url: "/api/donatee/1",
      verb: "GET",
      authentication: !!token,
    },
  ];

  const donatorRequests = [
    {
      working: false,
      url: "/api/donator/",
      verb: "GET",
      authentication: !!token,
    },
    {
      working: false,
      url: "/api/donator/",
      verb: "POST",
      body: {
        username: "newUser",
        email: "email@email.com",
      },
      authentication: !!token,
    },
    {
      working: false,
      url: "/api/donator/1",
      verb: "PUT",
      body: {
        username: "newUser",
      },
      authentication: !!token,
    },
    {
      working: false,
      url: "/api/donator/1",
      verb: "DELETE",
      authentication: !!token,
    },
    {
      working: false,
      url: "/api/donator/1",
      verb: "GET",
      authentication: !!token,
    },
  ];

  const accountRequests = [
    {
      working: false,
      url: "/api/account",
      verb: "GET",
      authentication: !!token,
    },
    {
      working: false,
      url: "/api/account",
      verb: "POST",
      body: {
        username: "newUser",
        email: "email@email.com",
      },
      authentication: !!token,
    },
    {
      working: false,
      url: "/api/account/1",
      verb: "PUT",
      body: {
        username: "newUser",
      },
      authentication: !!token,
    },
    {
      working: false,
      url: "/api/account/1",
      verb: "DELETE",
      authentication: !!token,
    },
    {
      working: false,
      url: "/api/account/1",
      verb: "GET",
      authentication: !!token,
    },
  ];

  const donationRequests = [
    {
      working: false,
      url: "/api/donation/",
      verb: "GET",
      authentication: !!token,
    },
    {
      working: false,
      url: "/api/donation/",
      verb: "POST",
      body: {
        username: "newUser",
        email: "email@email.com",
      },
      authentication: !!token,
    },
    {
      working: false,
      url: "/api/donation/1",
      verb: "PUT",
      body: {
        username: "newUser",
      },
      authentication: !!token,
    },
    {
      working: false,
      url: "/api/donation/1",
      verb: "DELETE",
      authentication: !!token,
    },
    {
      working: false,
      url: "/api/donation/1",
      verb: "GET",
      authentication: !!token,
    },
  ];

  const regionRequests = [
    {
      working: false,
      url: "/api/region/",
      verb: "GET",
      authentication: !!token,
    },
    {
      working: false,
      url: "/api/region/",
      verb: "POST",
      body: {
        username: "newUser",
        email: "email@email.com",
      },
      authentication: !!token,
    },
    {
      working: false,
      url: "/api/region/1",
      verb: "PUT",
      body: {
        username: "newUser",
      },
      authentication: !!token,
    },
    {
      working: false,
      url: "/api/region/1",
      verb: "GET",
      authentication: !!token,
    },
  ];

  const glassesRequests = [
    {
      working: false,
      url: "/api/glasses/",
      verb: "GET",
      authentication: !!token,
    },
    {
      working: false,
      url: "/api/glasses/",
      verb: "POST",
      body: {
        username: "newUser",
        email: "email@email.com",
      },
      authentication: !!token,
    },
    {
      working: false,
      url: "/api/glasses/1",
      verb: "PUT",
      body: {
        username: "newUser",
      },
      authentication: !!token,
    },
    {
      working: false,
      url: "/api/glasses/1",
      verb: "DELETE",
      authentication: !!token,
    },
    {
      working: false,
      url: "/api/glasses/1",
      verb: "GET",
      authentication: !!token,
    },
  ];

  const requestsObj = [
    { path: "/auth", arr: authRequests },
    { path: "/user", arr: userRequests },
    { path: "/donatee", arr: donateeRequests },
    { path: "/donator", arr: donatorRequests },
    { path: "/account", arr: accountRequests },
    { path: "/donation", arr: donationRequests },
    { path: "/region", arr: regionRequests },
    { path: "/glasses", arr: glassesRequests },
  ];

  return (
    <div className="w-full space-y-3 px-2 overflow-hidden py-4">
      <div className="pt-2 flex flex-col w-full items-center space-y-3 ">
        <h3 className="text-4xl">{requestsObj[router].path}</h3>
        {requestsObj[router].arr.map((request) => (
          <Requester
            key={request.url + request.verb}
            axios={axios}
            {...request}
          />
        ))}
      </div>

      <div className="flex justify-between p-4 cursor-pointer">
        <div
          onClick={() => {
            setRouter((router - 1 + requestsObj.length) % requestsObj.length);
          }}
          className="bg-slate-800 p-2 rounded-md text-slate-50"
        >
          Back
        </div>
        <h4>{`${router + 1}/${requestsObj.length}`}</h4>
        <div
          onClick={() => {
            setRouter((router + 1) % requestsObj.length);
          }}
          className="bg-slate-800 p-2 rounded-md text-slate-50"
        >
          Next
        </div>
      </div>
    </div>
  );
}
