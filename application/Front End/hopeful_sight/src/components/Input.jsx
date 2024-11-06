export function Input({
  className,
  state,
  setState,
  placeholder,
  type = "text",
  label = "",
  options = [],
}) {
  return (
    <div className="w-full flex justify-center">
      {label && <label htmlFor={label}>{label}</label>}
      {type === "file" ? (
        <div className="relative">
          <input
            id={label}
            type={type}
            className={`max-w-md py-3 px-4 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
            placeholder={placeholder}
            onChange={(e) => setState(e.target.files[0])}
          />
          <span className="absolute right-0 top-0 mt-3 mr-3">
            {state && state.name}
          </span>
        </div>
      ) : type === "radio" ? (
        <div>
          {options.map((option) => (
            <label key={option.value} htmlFor={option.value}>
              <input
                id={option.value}
                type={type}
                className={`mr-2 ${className}`}
                value={option.value}
                checked={state === option.value}
                onChange={(e) => setState(e.target.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      ) : (
        <input
          id={label}
          type={type}
          className={`max-w-md py-3 px-4 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
          placeholder={placeholder}
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      )}
    </div>
  );
}
