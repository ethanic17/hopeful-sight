export function Requester({ url, verb }) {
  return (
    <div className="bg-red-200 p-2 rounded-lg flex items-center">
      <p className="bg-red-400 rounded-lg py-1 px-6 text-red-50">{verb}</p>
      <p className="px-3 font-semibold text-xl text-slate-800">{url}</p>
    </div>
  );
}
