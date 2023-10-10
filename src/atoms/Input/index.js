const Input = ({ label,placeholder, sty, value, change, type, min }) => {
  return (
    <input
      className={`h-full w-full outline-none  border-0 py-2 pl-1 ${sty}`} placeholder={placeholder} value={value} onChange={change}
      type={type}
      min={min}
    />
  );
};

export default Input;
