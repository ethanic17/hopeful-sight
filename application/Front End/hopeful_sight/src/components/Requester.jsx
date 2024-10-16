import { useState } from "react";

function colors(verb) {
  switch (verb.toUpperCase()) {
    case "GET":
      return {
        verbBG: "bg-blue-500 text-blue-50",
        mainBG: "bg-blue-50 border-blue-700",
        secondaryBG: "bg-blue-100 border-blue-200",
      };
    case "POST":
      return {
        verbBG: "bg-green-500 text-green-50",
        mainBG: "bg-green-50 border-green-700",
        secondaryBG: "bg-green-100 border-green-200",
      };
    case "PUT":
      return {
        verbBG: "bg-yellow-500 text-yellow-50",
        mainBG: "bg-yellow-50 border-yellow-700",
        secondaryBG: "bg-yellow-100 border-yellow-200",
      };
    case "PATCH":
      return {
        verbBG: "bg-teal-500 text-teal-50",
        mainBG: "bg-teal-50 border-teal-700",
        secondaryBG: "bg-teal-100 border-teal-200",
      };
    case "DELETE":
      return {
        verbBG: "bg-red-500 text-red-50",
        mainBG: "bg-red-50 border-red-700",
        secondaryBG: "bg-red-100 border-red-200",
      };
    default:
      return {
        verbBG: "bg-gray-500 text-gray-50",
        mainBG: "bg-slate-100 border-slate-700",
        secondaryBG: "bg-slate-100 border-slate-200",
      };
  }
}

export function Requester({
  url,
  verb,
  body = undefined,
  authentication = 0,
  setParentData = undefined,
  axios,
  working = false,
}) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const [status, setStatus] = useState();
  const [showInfo, setShowInfo] = useState(true);

  async function fetchURL(e) {
    e.preventDefault();
    try {
      setLoading(true);
      setStatus();
      setData(undefined);
      if (!body) {
        body = {};
      }

      const response = await axios[verb.toLowerCase()](url, body);

      if (setParentData) {
        setParentData(response.data);
      }
      setStatus(response.status);
      setData(response.data);
    } catch (e) {
      console.error("Request failed:", e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className={`${colors(verb).mainBG} p-2 rounded-lg border  drop-shadow-md w-full lg:w-2/3 xl:w-1/2`}
    >
      <div className="flex justify-between">
        <span className="flex place-items-center">
          <p
            className={`${colors(verb).verbBG} font-semibold rounded-md py-0.5 px-4 text-sm`}
          >
            {verb}
          </p>
          <p className="px-3  font-semibold text-lg text-slate-700">
            {!working && "(not working) "}
            {url}
          </p>
        </span>
        <div className="space-x-3">
          {(body || data) && (
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="bg-teal-500 rounded-lg py-0.5 px-3 text-teal-50"
            >
              {showInfo ? "Hide" : "Show"}
            </button>
          )}
          <button
            onClick={fetchURL}
            className={`${
              authentication
                ? "bg-green-500 text-green-50"
                : "bg-gray-400 text-gray-50"
            } rounded-lg py-0.5 px-3`}
            disabled={!authentication}
          >
            {authentication ? "Fetch" : "No auth"}
          </button>
        </div>
      </div>
      {showInfo && (
        <div>
          {body && (
            <div className={`mt-4 ${colors(verb).secondaryBG} p-2 rounded-md`}>
              <h3 className="font-semibold">Request Body</h3>
              <div className="p-2 text-slate-700">
                {JSON.stringify(body, null, 10)}
              </div>
            </div>
          )}
          {loading && !data && (
            <div className={`mt-4 ${colors(verb).secondaryBG} p-2 rounded-md`}>
              <h3 className="font-semibold">Response Data</h3>
              <div className="p-2 text-slate-700">Loading ...</div>
            </div>
          )}
          {data && (
            <div className={`mt-4 ${colors(verb).secondaryBG} p-2 rounded-md`}>
              <div className="flex space-x-4 items-center">
                <h3 className="font-semibold">Response Data</h3>
                <h3
                  className={`font-semibold ${
                    status >= 200 && status < 300
                      ? "border-l-2 border-green-700 px-2 py-0.5 text-green-50 bg-green-400 rounded-r-sm"
                      : "border-l-2 border-red-700 px-2 py-0.5 text-red-50 bg-red-400 rounded-r-sm"
                  }`}
                >
                  {status}
                </h3>
              </div>
              <div className="p-2 text-slate-700">
                {JSON.stringify(data, null, 2)}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
