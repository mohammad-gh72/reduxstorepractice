function Button({ children, className, style, onClick }) {
  return (
    <button
      className={`${className} hover:opacity-95  cursor-pointer border-0 outline-0 min-w-[167px] h-[40px] px-4 bg-[var(--primary-color)]`}
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
