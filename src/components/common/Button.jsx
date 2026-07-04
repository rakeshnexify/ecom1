import { Link } from "react-router";

function Button({
  children,
  to,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition duration-200";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
    secondary:
      "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={buttonClasses} {...props}>
      {children}
    </button>
  );
}

export default Button;