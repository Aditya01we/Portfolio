export function Button({
  as = "a",
  href = "#",
  onClick,
  children,
  variant = "primary",
}) {

  const buttonClass =
    variant === "ghost"
      ? "btn btn--ghost"
      : "btn btn--primary";

  if (as === "button") {

    return (
      <button
        type="button"
        className={buttonClass}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      className={buttonClass}
      onClick={onClick}
    >
      {children}
    </a>
  );
}