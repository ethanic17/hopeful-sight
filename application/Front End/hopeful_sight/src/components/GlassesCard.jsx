import { RiAlarmFill, RiFireFill } from "react-icons/ri";
import { useSelector } from "react-redux";

function getImgPath(isLoggedIn, url) {
  if (isLoggedIn || url.includes(import.meta.env.VITE_URL)) {
    return url.replace(import.meta.env.VITE_URL, "/");
  }
  return url;
}

export function GlassesCard({ onClick, data }) {
  const isLoggedIn = useSelector((state) => state.user.userInfo.loggedIn);
  const isDonator = useSelector((state) => state.user.userInfo.donator);
  useSelector((state) => console.log(state.user.userInfo));

  return (
    <div className="relative flex flex-col w-full bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:shadow-xl hover:scale-102">
      {!isDonator && data.inventory === 0 && (
        <div className="h-full w-full bg-black/40 absolute top-0 left-0 rounded-lg flex items-center justify-center">
          <p className="text-white font-bold text-lg">Out Of Stock</p>
        </div>
      )}

      {/* Show the alarm icon if the inventory is less than or equal to 10 */}
      {data.inventory <= 10 && (
        <div className="absolute top-2 left-2">
          <div
            className={`flex items-center space-x-2 py-1 px-2 rounded-full ${
              isDonator || !isLoggedIn ? "bg-red-500" : "bg-orange-200"
            }`}
          >
            {isDonator || !isLoggedIn ? (
              <RiAlarmFill
                color="fef2f2"
                size="25"
                className="animate-pulse duration-700"
              />
            ) : (
              <RiFireFill color="rgb(124 45 18)" size="25" />
            )}
            <p
              className={`text-sm ${
                isDonator || !isLoggedIn ? "text-red-50" : "text-orange-900"
              }`}
            >
              {isDonator || !isLoggedIn
                ? "Needing Donation"
                : "Popular – Running Low"}
            </p>
          </div>
        </div>
      )}

      {/* Show the in stock icon if inventory is more than 0 */}
      {(isDonator || !isLoggedIn) && data.inventory > 0 && (
        <div className="absolute top-2 right-2">
          <div
            className={`flex items-center space-x-2 py-1 px-2 rounded-full ${
              isDonator || !isLoggedIn ? "bg-green-500" : "bg-green-200"
            }`}
          >
            <RiFireFill color="white" size="25" />
            <p
              className={`text-sm ${
                isDonator || !isLoggedIn ? "text-green-50" : "text-green-900"
              }`}
            >
              In Stock
            </p>
          </div>
        </div>
      )}

      {/* Show the image of the glasses */}
      <div className="w-full flex justify-center mb-4 flex-1 h-20">
        <img
          src={getImgPath(isLoggedIn, data.image)}
          alt={data.name}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-between min-h-32 flex-1 space-y-4">
        <h1 className="text-2xl font-bold text-black">
          {data.name || "Good Glasses"}
        </h1>
        <h2 className="text-base text-blue-600">
          {data.description || "No description available"}
        </h2>
        <h2 className="text-sm text-gray-800">
          Frame Width: {data.size ? `${data.size}mm` : "Not specified"}
        </h2>
        <button
          onClick={onClick.bind(this, data)}
          className="w-full mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-colors duration-300"
        >
          {isDonator || !isLoggedIn ? "Donate" : "Claim"}
        </button>
      </div>
    </div>
  );
}
