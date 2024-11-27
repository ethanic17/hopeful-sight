import { FaCheckCircle } from "react-icons/fa";

export function AlreadyClaimed() {
  return (
    <div className="bg-gray-50 rounded-lg shadow-lg p-8 max-w-lg mx-auto text-center">
      <div className="mb-6 text-green-500">
        <FaCheckCircle className="w-16 h-16 mx-auto" />
      </div>

      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Your Glasses Are on Their Way!
      </h2>

      <p className="text-lg text-gray-700 mb-6">
        You've already claimed your pair of glasses! We’re thrilled to support
        you on your journey to clearer vision.
      </p>

      <p className="text-md text-gray-600 mb-6">
        Thank you to our generous donors who made this possible. Your
        contribution is making a meaningful impact in someone's life, and we
        couldn't do this without you!
      </p>

      <p className="text-sm text-gray-500 mb-6">
        If you need further assistance or have any questions, don't hesitate to
        reach out to us. We're here to help!
      </p>

      <button className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-lg transition-all">
        Contact Support
      </button>
    </div>
  );
}
