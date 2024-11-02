/**
 * Renders and displays a div component for displaying glasses information
 * @param {Object} props.data  An object containing glasses data
 *
 * @param {string} props.data.img  The URL for the glasses image (alias for img or imageUrl)
 * @param {string} props.data.imageUrl  The URL for the glasses image
 * @param {string} props.data.name  The name of the glasses
 * @param {string} props.data.description  A  description of the glasses
 * @param {string} props.data.size  The frame width of the glasses
 *
 * @returns {JSX.Element} A JSX element representing the glasses card
 * @example  <GlassesCard data={glasses[i]} />
 *
 */

export function GlassesCard({ data }) {
  return (
    <div className="w-fit bg-stone-200 p-2 drop-shadow-sm hover:drop-shadow-xl">
      <div className="relative w-[300px] h-[250px] mb-2">
        {}
        {}
        <img
          src={data.img || data.imageUrl}
          alt={data.name}
          className="object-cover w-full h-full bg-stone-400"
        />
      </div>

      <h1 className="text-lg font-bold">{data.name}</h1>
      <h2 className="text-sm">{data.description}</h2>
      <h2 className="text-sm">Frame Width: {data.size}</h2>

      <button
        className="w-full mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        // onClick={() => alert(`You clicked on ${data.name}!`)}
        // onClick redirect to cart page
        onClick={() => (window.location.href = "/cart")}
      >
        Add to Cart
      </button>
    </div>
  );
}
