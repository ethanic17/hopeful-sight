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
        username: "newAuthUser2",
        password: "thisisthePass23",
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
      url: "/auth/users/",
      verb: "GET",
      authentication: !!token,
      editable: true,
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
      url: "/api/users/",
      verb: "DELETE",
      authentication: !!token,
      editable: true,
    },
    {
      working: true,
      url: "/api/users/",
      verb: "GET",
      authentication: !!token,
      editable: true,
    },
  ];

  const donateeRequests = [
    {
      working: true,
      url: "/api/donatees/",
      verb: "GET",
      authentication: !!token,
    },
    {
      working: true,
      url: "/api/donatees/",
      verb: "POST",
      body: {
        has_applied_for_account: "true",
        has_claimed: "false",
        account: 1,
        monthly_income: 200,
        average_household_income: 10000,
        current_bank_balance: 100,
        is_dependent: false,
      },
      authentication: !!token,
      editable: true,
    },
    {
      working: true,
      url: "/api/donatees/",
      verb: "PUT",
      body: {
        has_applied_for_account: "true",
        has_claimed: "false",
        account: 1,
        monthly_income: 200,
        average_household_income: 10000,
        current_bank_balance: 100,
        is_dependent: false,
      },
      authentication: !!token,
      editable: true,
    },
    {
      working: true,
      url: "/api/donatees/",
      verb: "PATCH",
      body: {
        has_applied_for_account: "true",
        has_claimed: "false",
        account: 1,
        monthly_income: 200,
        average_household_income: 10000,
        current_bank_balance: 100,
        is_dependent: false,
      },
      authentication: !!token,
      editable: true,
    },
    {
      working: false,
      url: "/api/donatees/",
      verb: "DELETE",
      authentication: !!token,
      editable: true,
    },
    {
      working: true,
      url: "/api/donatees/",
      verb: "GET",
      authentication: !!token,
      editable: true,
    },
  ];

  const donatorRequests = [
    {
      working: true,
      url: "/api/donators/",
      verb: "GET",
      authentication: !!token,
    },
    {
      working: true,
      url: "/api/donators/",
      verb: "POST",
      body: {
        has_donated: true,
        total_amount_donated: 100,
        account: 1,
      },
      authentication: !!token,
    },
    {
      working: true,
      url: "/api/donators/",
      verb: "PUT",
      body: {
        has_donated: true,
        total_amount_donated: 100,
        account: 1,
      },
      authentication: !!token,
      editable: true,
    },
    {
      working: true,
      url: "/api/donators/",
      verb: "PATCH",
      body: {
        has_donated: true,
        total_amount_donated: 100,
        account: 1,
      },
      authentication: !!token,
      editable: true,
    },
    {
      working: true,
      url: "/api/donator/",
      verb: "DELETE",
      authentication: !!token,
      editable: true,
    },
    {
      working: true,
      url: "/api/donators/",
      verb: "GET",
      authentication: !!token,
      editable: true,
    },
  ];

  const accountRequests = [
    {
      working: true,
      url: "/api/accounts",
      verb: "GET",
      authentication: !!token,
    },
    {
      working: true,
      url: "/api/accounts",
      verb: "POST",
      body: {
        phone_number: "(707)111-1111",
        address: "12 st street",
        city: "Santa Rosa",
        state: "CA",
        zip_code: "121211",
      },
      authentication: !!token,
    },
    {
      working: true,
      url: "/api/accounts/",
      verb: "PUT",
      body: {
        phone_number: "(707)111-1111",
        address: "12 st street",
        city: "Santa Rosa",
        state: "CA",
        zip_code: "121211",
      },
      authentication: !!token,
      editable: true,
    },
    {
      working: true,
      url: "/api/accounts/",
      verb: "PATCH",
      body: {
        phone_number: "(707)111-1111",
        address: "12 st street",
        city: "Santa Rosa",
        state: "CA",
        zip_code: "121211",
      },
      authentication: !!token,
      editable: true,
    },
    {
      working: true,
      url: "/api/accounts/",
      verb: "DELETE",
      authentication: !!token,
      editable: true,
    },
    {
      working: true,
      url: "/api/accounts/",
      verb: "GET",
      authentication: !!token,
      editable: true,
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
      url: "/api/donation/",
      verb: "PUT",
      body: {
        username: "newUser",
      },
      authentication: !!token,
      editable: true,
    },
    {
      working: false,
      url: "/api/donation/",
      verb: "DELETE",
      authentication: !!token,
      editable: true,
    },
    {
      working: false,
      url: "/api/donation/",
      verb: "GET",
      authentication: !!token,
      editable: true,
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
      url: "/api/region/",
      verb: "PUT",
      body: {
        username: "newUser",
      },
      authentication: !!token,
      editable: true,
    },
    {
      working: false,
      url: "/api/region/",
      verb: "GET",
      authentication: !!token,
      editable: true,
    },
  ];

  const glassesRequests = [
    {
      working: true,
      url: "/api/glasses/",
      verb: "GET",
      authentication: !!token,
    },
    {
      working: true,
      url: "/api/glasses/",
      verb: "POST",
      body: {
        name: "test",
        size: 9,
        color: "red",
        perscription_range_upper: 0,
        perscription_range_lower: 0,
        inventory: 22,
        description: "test",
      },
      authentication: !!token,
    },
    {
      working: true,
      url: "/api/glasses/",
      verb: "GET",
      body: {
        username: "newUser",
      },
      authentication: !!token,
      editable: true,
    },
    {
      working: true,
      url: "/api/glasses/",
      verb: "PUT",
      body: {
        name: "newName",
        size: 10,
        color: "Teal",
        perscription_range_upper: 1,
        perscription_range_lower: -1,
        inventory: 100,
        description: "new desctiption",
      },
      authentication: !!token,
      editable: true,
    },
    {
      working: true,
      url: "/api/glasses/",
      verb: "PATCH",
      body: {
        name: "test",
        size: 9,
        color: "red",
        perscription_range_upper: 0,
        perscription_range_lower: 0,
        inventory: 22,
        description: "test",
      },
      authentication: !!token,
      editable: true,
    },
    {
      working: true,
      url: "/api/glasses/",
      verb: "DELETE",
      authentication: !!token,
      editable: true,
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
      <h3 className="text-4xl pl-8">{requestsObj[router].path}</h3>
      <div
        style={{
          height: window.screen.availHeight - window.screen.availHeight * 0.3,
        }}
        className={`flex w-full overflow-scroll flex-col items-center  `}
      >
        <div className="flex flex-col items-center h-full pt-2 space-y-3 w-full">
          {requestsObj[router].arr.map((request) => {
            return (
              <Requester
                key={
                  request.url + request.verb + (request?.editable ? "edit" : "")
                }
                axios={axios}
                {...request}
              />
            );
          })}
        </div>
      </div>
      <div className="flex justify-center p-4 ">
        <div className="flex w-full justify-between max-w-lg cursor-pointer">
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
    </div>
  );
}
