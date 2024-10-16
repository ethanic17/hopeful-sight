import { Requester } from "../components/Requester";
import useAxiosWithToken from "../hooks/axios";

export function Home() {
  const { token, setToken, axiosInstance: axios } = useAxiosWithToken();

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
      working: false,
      url: "/auth/users/",
      verb: "POST",
      body: {
        email: "newAuthUser@new.com",
        username: "newAuthUser",
        password: "123",
      },
      authentication: !!token,
    },
    {
      working: false,
      url: "/auth/users/activation/",
      verb: "POST",
      body: { uid: "1234", token: "123" },
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

  const apiRequests = [
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
      verb: "GET",
      authentication: !!token,
    },
    {
      working: true,
      url: "/api/users/1",
      verb: "GET",
      authentication: !!token,
    },
    {
      working: true,
      url: "/api/users/1",
      verb: "PUT",
      authentication: !!token,
      body: { username: "admin", phone_number: 123415 },
    },
    {
      working: true,
      url: "/api/users/4",
      verb: "DELETE",
      authentication: !!token,
    },
    {
      working: true,
      url: "/api/users/1",
      verb: "PUT",
      authentication: !!token,
    },
  ];

  return (
    <div className="space-y-3 px-2">
      <div className="pt-2 flex flex-col w-full items-center space-y-3 ">
        <h3 className="text-4xl">/auth</h3>
        {authRequests.map((request, index) => (
          <Requester key={index} axios={axios} {...request} />
        ))}
      </div>
      <div className="pt-2 flex flex-col w-full items-center space-y-3">
        <h3 className="text-4xl">/api</h3>
        {apiRequests.map((request, index) => (
          <Requester key={index} axios={axios} {...request} />
        ))}
      </div>
    </div>
  );
}
