export function Button({ onClick, children, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-light py-2 px-4 rounded text-xl  ${className}`}
    >
      {children}
    </button>
  );
}
