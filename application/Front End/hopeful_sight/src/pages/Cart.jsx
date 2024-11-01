/**
 * Cart component for handling glasses selection confirmation
 *
 * This component renders a form for users to input their personal details
 * before confirming their selection of glasses. It displays the selected glasses
 * and upon submission, redirects the user to a confirmation page.
 *
 * @returns {JSX.Element} The JSX element representing the form for glasses selection
 */

export function Cart() {
  /**
   * Handles the form submission.
   *
   * @param {React.FormEvent<HTMLFormElement>} event - The form event object.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    // Redirect to the confirmation page
    window.location.href = "/confirmation";
  };

  // Sample data for glasses selection
  const selectedGlasses = {
    name: "Ray Bans RF1243 Aviator 2",
    price: "$150",
    imageUrl: "src/pages/glassesImages/glass1image.jpg",
  };

  /**
   * Selected and rendered glasses information must be dynamic
   * based on the user's selection from the previous page.
   * In progress...
   * 
   * @returns {JSX.Element} The JSX element representing the specific glasses selected
   */

  // const selectedGlassesOne = {
  //   glassName: {glassesName},
  //   glassPrice: {glassesPrice},
  //   glassImage: {glassesImage}
  // };


  return (
    <div className="max-w-md mx-auto mt-10">
      {/* Box with the glasses selected */}
      <div className="bg-gray-100 rounded-lg p-4 mb-6 shadow-md">
        <h3 className="text-lg font-semibold mb-2">Your Selection:</h3>
        <div className="flex items-center">
          <img
            src={selectedGlasses.imageUrl}
            alt={selectedGlasses.name}
            className="w-100 h-20 object-cover mr-4"
          />
          <div>
            <p className="font-bold">{selectedGlasses.name}</p>
            <p>{selectedGlasses.price}</p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6"
      >
        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
          Confirm Your Glasses Selection
        </h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-800 text-sm font-bold mb-3"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-800 text-sm font-bold mb-3"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-800 text-sm font-bold mb-3"
          >
            Phone Number (100-100-1000):
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="address"
            className="block text-gray-800 text-sm font-bold mb-3"
          >
            Address:
          </label>
          <textarea
            id="address"
            name="address"
            required
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline h-10 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Confirm Selection
        </button>
      </form>
    </div>
  );
}
