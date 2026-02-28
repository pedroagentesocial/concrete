import { useState, type ChangeEvent } from "react";
import Button from "./Button";

type QuoteFormLabels = {
	title: string;
	fields: {
		name: string;
		company: string;
		email: string;
		phone: string;
		service: string;
		message: string;
	};
	placeholders: {
		name: string;
		company: string;
		email: string;
		phone: string;
		service: string;
		message: string;
	};
	services: string[];
	submit: string;
	success: string;
	error?: string;
};

type QuoteFormProps = {
	labels: QuoteFormLabels;
};

const initialState = {
	name: "",
	company: "",
	email: "",
	phone: "",
	service: "",
	message: ""
};

const QuoteForm = ({ labels }: QuoteFormProps) => {
	const [formState, setFormState] = useState(initialState);
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target;
		setFormState((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const required = ["name", "company", "email", "phone", "service", "message"] as const;
		const missing = required.some((k) => !formState[k]);
		if (missing) {
			setError(labels.error ?? "Please complete all required fields.");
			setSubmitted(false);
			return;
		}
		setError(null);
		setSubmitted(true);
		setFormState(initialState);
	};

	return (
		<div className="rounded-2xl border border-muted bg-surface p-6">
			<h3 className="text-lg font-semibold text-text">{labels.title}</h3>
			<form className="mt-6 space-y-6" onSubmit={handleSubmit}>
				<div className="grid gap-4 md:grid-cols-2">
					<label className="text-sm font-medium text-text">
						{labels.fields.name}
						<input
							className="mt-2 w-full rounded-2xl border border-muted bg-bg px-4 py-3 text-sm text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
							name="name"
							value={formState.name}
							onChange={handleChange}
							placeholder={labels.placeholders.name}
							required
						/>
					</label>
					<label className="text-sm font-medium text-text">
						{labels.fields.company}
						<input
							className="mt-2 w-full rounded-2xl border border-muted bg-bg px-4 py-3 text-sm text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
							name="company"
							value={formState.company}
							onChange={handleChange}
							placeholder={labels.placeholders.company}
							required
						/>
					</label>
				</div>
				<div className="grid gap-4 md:grid-cols-2">
					<label className="text-sm font-medium text-text">
						{labels.fields.email}
						<input
							className="mt-2 w-full rounded-2xl border border-muted bg-bg px-4 py-3 text-sm text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
							name="email"
							type="email"
							value={formState.email}
							onChange={handleChange}
							placeholder={labels.placeholders.email}
							required
						/>
					</label>
					<label className="text-sm font-medium text-text">
						{labels.fields.phone}
						<input
							className="mt-2 w-full rounded-2xl border border-muted bg-bg px-4 py-3 text-sm text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
							name="phone"
							value={formState.phone}
							onChange={handleChange}
							placeholder={labels.placeholders.phone}
							required
						/>
					</label>
				</div>
				<label className="text-sm font-medium text-text">
					{labels.fields.service}
					<select
						className="mt-2 w-full rounded-2xl border border-muted bg-bg px-4 py-3 text-sm text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
						name="service"
						value={formState.service}
						onChange={handleChange}
						required
					>
						<option value="">{labels.placeholders.service}</option>
						{labels.services.map((service) => (
							<option key={service} value={service}>
								{service}
							</option>
						))}
					</select>
				</label>
				<label className="text-sm font-medium text-text">
					{labels.fields.message}
					<textarea
						className="mt-2 min-h-[120px] w-full rounded-2xl border border-muted bg-bg px-4 py-3 text-sm text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
						name="message"
						value={formState.message}
						onChange={handleChange}
						placeholder={labels.placeholders.message}
						required
					/>
				</label>
				<Button type="submit" className="w-full" variant="primary">
					{labels.submit}
				</Button>
				{error ? (
					<p className="text-sm font-medium text-red-700" role="alert">
						{error}
					</p>
				) : null}
				{submitted ? (
					<p className="text-sm font-medium text-brand" role="status">
						{labels.success}
					</p>
				) : null}
			</form>
		</div>
	);
};

export default QuoteForm;
