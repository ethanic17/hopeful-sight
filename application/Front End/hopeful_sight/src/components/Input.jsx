import { useState, useRef, useEffect } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";

export function Input({
  className,
  title,
  label,
  value,
  setValue,
  required,
  type,
  icon: Icon,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef(null);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  useEffect(() => {
    const handleFocusOut = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleFocusOut);
    return () => {
      document.removeEventListener("mousedown", handleFocusOut);
    };
  }, []);

  return (
    <div className="my-5 w-full">
      <div className="relative" onClick={() => inputRef.current.focus()}>
        <label
          htmlFor={title}
          className={`absolute left-3 z-10 transition-all duration-200 ${
            isFocused || value !== ""
              ? "-top-5 text-xs bg-transparent px-1 text-blue-600"
              : `top-3 text-gray-500  ${Icon ? "pl-10" : ""}`
          }`}
        >
          {label}
          {required && <span className="text-red-600 ml-1">*</span>}
        </label>
        <div className="relative">
          {Icon && (
            <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          )}
          <input
            id={title}
            ref={inputRef}
            type={type === "password" && !showPassword ? "password" : "text"}
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => setValue(e.target.value)}
            required={required}
            placeholder={isFocused ? title : ""}
            className={`w-full align-center rounded-md border border-gray-300 py-2 px-3 pt-4 shadow-sm transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
              Icon ? "pl-10" : ""
            } ${className}`}
          />
          {type === "password" && (
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaRegEyeSlash size={18} />
              ) : (
                <FaRegEye size={18} />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
