import clsx from "clsx";

export function Button({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx("bg-black p-4 font-semibold", className)}
      {...props}
    />
  );
}
