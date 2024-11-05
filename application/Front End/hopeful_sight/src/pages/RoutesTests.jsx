import { useState } from "react";
import { Requester } from "../components/Requester";

export function RoutesTest() {
  const [router, setRouter] = useState(0);
  const authRequests = [
    {
      working: true,
      url: "/auth/token/login/",
      verb: "POST",
      body: { username: "admin", password: "admin" },
    },
    {
      working: true,
      url: "/auth/token/logout/",
      verb: "POST",
    },

    {
      working: true,
      url: "/auth/users/me/",
      verb: "GET",
    },
  ];

  const userRequests = [
    {
      working: true,
      url: "/api/users/",
      verb: "GET",
    },
    {
      working: true,
      url: "/api/users/",
      verb: "POST",
      body: {
        username: "newUser",
        email: "email@email.com",
      },
    },
    {
      working: true,
      url: "/api/users/",
      verb: "PUT",
      body: {
        username: "newUser",
      },
      editable: true,
    },
    {
      working: true,
      url: "/api/users/",
      verb: "DELETE",
      editable: true,
    },
    {
      working: true,
      url: "/api/users/",
      verb: "GET",
      editable: true,
    },
  ];

  const donateeRequests = [
    {
      working: true,
      url: "/api/donatees/",
      verb: "GET",
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
      editable: true,
    },
    {
      working: false,
      url: "/api/donatees/",
      verb: "DELETE",
      editable: true,
    },
    {
      working: true,
      url: "/api/donatees/",
      verb: "GET",
      editable: true,
    },
  ];

  const donatorRequests = [
    {
      working: true,
      url: "/api/donators/",
      verb: "GET",
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
      editable: true,
    },
    {
      working: true,
      url: "/api/donators/",
      verb: "DELETE",
      editable: true,
    },
    {
      working: true,
      url: "/api/donators/",
      verb: "GET",
      editable: true,
    },
  ];

  const accountRequests = [
    {
      working: true,
      url: "/api/accounts/",
      verb: "GET",
    },
    {
      working: true,
      url: "/api/accounts/",
      verb: "POST",
      body: {
        phone_number: "(707)111-1111",
        address: "12 st street",
        city: "Santa Rosa",
        state: "CA",
        zip_code: "121211",
      },
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
      editable: true,
    },
    {
      working: true,
      url: "/api/accounts/",
      verb: "DELETE",
      editable: true,
    },
    {
      working: true,
      url: "/api/accounts/",
      verb: "GET",
      editable: true,
    },
  ];

  const donationRequests = [
    {
      working: false,
      url: "/api/donation/",
      verb: "GET",
    },
    {
      working: false,
      url: "/api/donation/",
      verb: "POST",
      body: {
        username: "newUser",
        email: "email@email.com",
      },
    },
    {
      working: false,
      url: "/api/donation/",
      verb: "PUT",
      body: {
        username: "newUser",
      },
      editable: true,
    },
    {
      working: false,
      url: "/api/donation/",
      verb: "DELETE",
      editable: true,
    },
    {
      working: false,
      url: "/api/donation/",
      verb: "GET",
      editable: true,
    },
  ];

  const regionRequests = [
    {
      working: false,
      url: "/api/region/",
      verb: "GET",
    },
    {
      working: false,
      url: "/api/region/",
      verb: "POST",
      body: {
        username: "newUser",
        email: "email@email.com",
      },
    },
    {
      working: false,
      url: "/api/region/",
      verb: "PUT",
      body: {
        username: "newUser",
      },
      editable: true,
    },
    {
      working: false,
      url: "/api/region/",
      verb: "GET",
      editable: true,
    },
  ];

  const glassesRequests = [
    {
      working: true,
      url: "/api/glasses/",
      verb: "GET",
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
    },
    {
      working: true,
      url: "/api/glasses/",
      verb: "GET",
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
        inventory: 100,
        description: "new desctiption",
      },
      editable: true,
    },
    {
      working: true,
      url: "/api/glasses/",
      verb: "PATCH",
      body: {
        name: "newName",
        size: 10,
        color: "Teal",
        inventory: 100,
        description: "new desctiption",
      },
      editable: true,
    },
    {
      working: true,
      url: "/api/glasses/",
      verb: "DELETE",
      editable: true,
    },
  ];

  const requestsObj = [
    { path: "/auth", arr: authRequests },
    { path: "/user", arr: userRequests },
    { path: "/donatee", arr: donateeRequests },
    { path: "/donator", arr: donatorRequests },
    { path: "/account", arr: accountRequests },
    // { path: "/donation", arr: donationRequests },
    // { path: "/region", arr: regionRequests },
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
