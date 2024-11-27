export function FormBody({ children }) {
  return (
    <form
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={`bg-gradient-to-r from-blue-100 to-gray-200 p-7 rounded-xl w-full flex justify-center items-center flex-col space-y-10 shadow-lg`}
    >
      {children}
    </form>
  );
}
