export type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={`bg-primary px-2 py-1 rounded-lg text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
