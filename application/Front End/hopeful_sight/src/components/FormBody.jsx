export function FormBody({ children }) {
  return (
    <div className="flex justify-center h-full w-full items-center">
      <form
        onClick={(e) => {
          e.stopPropagation();
          console.log("clicked");
        }}
        className="bg-gradient-to-r from-blue-100 to-gray-200 p-7 rounded-xl w-1/2 flex justify-center items-center flex-col space-y-10 shadow-lg"
      >
        {children}
      </form>
    </div>
  );
}
