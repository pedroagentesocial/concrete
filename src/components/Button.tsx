import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

type ButtonProps = PropsWithChildren<
	{
		variant?: ButtonVariant;
		sheen?: boolean;
		className?: string;
	} & ButtonHTMLAttributes<HTMLButtonElement>
>;

const base =
	"group relative overflow-hidden inline-flex items-center justify-center h-11 px-5 rounded-2xl text-sm font-semibold text-white transition-all duration-200 ease-out " +
	"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg " +
	"hover:-translate-y-0.5 hover:scale-[1.01] active:translate-y-0 active:scale-[0.99] " +
	"disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";

const variants: Record<ButtonVariant, string> = {
	primary: "bg-primary hover:brightness-110",
	secondary: "bg-secondary hover:brightness-110",
	outline: "bg-transparent border border-primary hover:bg-primary/10",
	ghost: "bg-transparent hover:bg-primary/10"
};

const Button = ({ variant = "primary", sheen, className, children, ...props }: ButtonProps) => {
	const enableSheen = sheen ?? (variant === "primary");
	const classes = [base, variants[variant], className].filter(Boolean).join(" ");
	return (
		<button {...props} className={classes}>
			{enableSheen ? (
				<span
					aria-hidden="true"
					className="-left-1/3 pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-white/15 transition-transform duration-500 ease-out translate-x-0 group-hover:translate-x-[220%]"
				/>
			) : null}
			<span className="relative z-10">{children}</span>
		</button>
	);
};

export default Button;
