export function Input({ state, setState, placeholder, type = "text" }) {
  return (
    <input
      type={type}
      className="max-w-md py-3 px-4 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder={placeholder}
      value={state}
      onChange={(e) => setState(e.target.value)}
    />
  );
}
