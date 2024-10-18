export function EditableInputs({ hardCoded, setState, state }) {
  return (
    <input
      className="bg-transparent focus:outline-none w-20 "
      type="text"
      value={state}
      onChange={(e) => {
        setState(e.target.value);
      }}
    />
  );
}
