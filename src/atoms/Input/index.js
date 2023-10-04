const Input = ({ label,placeholder, sty }) => {
  return (
    <input
      className={`h-full w-full outline-none  border-0 py-2 pl-1 ${sty}`} placeholder={placeholder}
    />
  );
};

export default Input;
