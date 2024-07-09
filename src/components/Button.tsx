interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  isArrow?: boolean;
}

function Button({ text, className, onClick, isArrow }: ButtonProps) {
  return (
    <button className={`btn-global ${className}`} onClick={onClick}>
      {text}
      &nbsp;&nbsp;
      {isArrow && <i className="fas fa-arrow-right"></i>}
    </button>
  );
}

export default Button;
