import { useState } from "react";
import { EditableInputs } from "./EditableInput";

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
  editable = false,
}) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const [status, setStatus] = useState();
  const [showInfo, setShowInfo] = useState(false);
  const [dynamicURL, setDynamicURL] = useState("{input}");
  const [editableBody, setEditableBody] = useState(
    JSON.stringify(body, null, 2),
  );
  const [validBody, setValidBody] = useState(true);

  async function fetchURL(e) {
    e.preventDefault();
    try {
      setLoading(true);
      setStatus();
      setData(undefined);
      let parsedBody = {};
      if (editableBody) {
        try {
          parsedBody = JSON.parse(editableBody);
        } catch (e) {
          setValidBody(false);
          return;
        }
      }

      let useableURL = dynamicURL;

      if (dynamicURL.at(-1) != "/" && dynamicURL.length != 0) {
        useableURL += "/";
      }
      const response = await axios[verb.toLowerCase()](
        url + (editable ? useableURL : ""),
        parsedBody,
      );
      setDynamicURL(useableURL);
      if (setParentData) {
        setParentData(response.data);
      }
      setStatus(response.status);
      setData(response.data);
      setShowInfo(true);
    } catch (e) {
      if (setParentData) {
        setParentData("");
      }
      console.log("Request failed:", e);
      setStatus(e?.response?.status || e?.code);
      setData(e?.response?.data || "");
      setShowInfo(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className={`${colors(verb).mainBG} p-2 rounded-lg border drop-shadow-md w-full lg:w-2/3 xl:w-1/2`}
    >
      <div className="flex justify-between flex-col-reverse gap-y-4 sm:flex-row sm:gap-y-1">
        <span className="flex place-items-center">
          <p
            className={`${colors(verb).verbBG} font-semibold rounded-md py-0.5 px-2 text-xs sm:text-sm`}
          >
            {!working && <span className="pr-1">🛠️</span>}
            {verb}
          </p>
          <p className="px-3 font-semibold text-sm sm:text-lg text-slate-700">
            <span className="flex">
              {url}
              {editable && (
                <EditableInputs setState={setDynamicURL} state={dynamicURL} />
              )}
            </span>
          </p>
        </span>
        <div className="flex space-x-3">
          {status && (
            <h3
              className={`font-semibold ${
                status >= 200 && status < 300
                  ? "border-l-2 border-green-700 px-2 py-0.5 text-green-50 bg-green-400 rounded-r-sm"
                  : "border-l-2 border-red-700 px-2 py-0.5 text-red-50 bg-red-400 rounded-r-sm"
              }`}
            >
              {status}
            </h3>
          )}
          {(body || data) && (
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="text-sm sm:text-lg  font-semibold bg-slate-700 rounded-lg  px-1 py-0.5 sm:px-3 text-slate-50"
            >
              {showInfo ? "Hide" : "Show"}
            </button>
          )}
          <button
            onClick={fetchURL}
            className={`${
              authentication
                ? "bg-green-50 text-slate-900 border border-slate-900"
                : "bg-gray-400 text-gray-50"
            } rounded-lg py-0.5 px-3 font-semibold`}
            disabled={!authentication}
          >
            {authentication ? "Fetch" : "No auth"}
          </button>
        </div>
      </div>
      {showInfo && (
        <div>
          {body && (
            <div className={`mt-4 ${colors(verb).secondaryBG} p-4 rounded-md`}>
              <h3 className="font-semibold">Request Body</h3>
              <textarea
                onFocus={() => {
                  setValidBody(true);
                }}
                className={`focus:outline-none resize-none w-full p-2 rounded-md text-sm ${validBody ? "bg-white/30" : "bg-red-400/40 text-red-700"} text-slate-700 overflow-auto`}
                rows={editableBody.split("\n").length}
                value={editableBody}
                onChange={(e) => setEditableBody(e.target.value)}
              />
            </div>
          )}
          {data && (
            <div className={`mt-4 ${colors(verb).secondaryBG} p-2 rounded-md`}>
              <div className="flex space-x-4 items-center">
                <h3 className="font-semibold">Response Data</h3>
              </div>
              <div className="p-2 text-slate-700">
                {loading && !data && "Loading..."}
                <pre>{JSON.stringify(data, null, 2)}</pre>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
