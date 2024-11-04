export function Overlay({ children, setShow }) {
  return (
    <div
      onClick={() => setShow(false)}
      className="bg-black/50 h-screen backdrop-blur-sm w-screen z-30 absolute top-0 left-0"
    >
      {children}
    </div>
  );
}
