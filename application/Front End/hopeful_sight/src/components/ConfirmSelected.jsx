import { useSelector, useDispatch } from "react-redux";
import useAxiosWithToken from "../hooks/axios";
import { editAccount } from "../app/features/userSlice";

function getImgPath(isLoggedIn, url) {
  if (isLoggedIn) {
    return url.replace(import.meta.env.VITE_URL, "/src/pages/glassesImages/");
  }
  return url;
}

export function ConfirmSelected({ data, onCancel }) {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.user.userInfo.account);
  const axiosInter = useAxiosWithToken();
  async function onConfirm(e) {
    e.preventDefault();
    e.stopPropagation();
    let resp = await axiosInter.patch(
      `/api/donatees/${account.donatee.donatee_id}/`,
      {
        has_claimed: true,
      },
    );
    console.log({ ...account, donatee: resp.data });

    dispatch(editAccount({ ...account, donatee: resp.data }));
    onCancel();
  }

  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-70 fixed inset-0 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Confirm Your Selection
        </h2>

        <div className="flex flex-col items-center mb-6">
          <img
            src={getImgPath(true, data.image)}
            alt={data.name}
            className="w-32 h-32 object-contain rounded-md mb-4"
          />
          <h3 className="text-xl font-medium text-sky-600 mb-2">{data.name}</h3>
          <p className="text-gray-600 text-sm">{data.description}</p>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-lg transition-all"
          >
            Confirm
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-lg transition-all"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
