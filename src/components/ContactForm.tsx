import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import Button from "./Button";
import { contactInfo } from "../data/contactInfo";
import { t, type Lang } from "../i18n";

type Props = {
  lang: Lang;
};

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  cityOrZip: string;
  message: string;
  consent: boolean;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  projectType: "",
  cityOrZip: "",
  message: "",
  consent: false
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm = ({ lang }: Props) => {
  const labels = useMemo(() => t(lang, "pages.contact.form") as any, [lang]);
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<keyof FormState, string | null>>({
    fullName: null,
    email: null,
    phone: null,
    projectType: null,
    cityOrZip: null,
    message: null,
    consent: null
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = event.target;
    const { name, value, type } = target;
    const nextValue = type === "checkbox" && target instanceof HTMLInputElement ? target.checked : value;
    setValues((prev) => ({
      ...prev,
      [name]: nextValue
    }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validate = () => {
    const nextErrors: Record<keyof FormState, string | null> = {
      fullName: values.fullName ? null : labels.validation.required,
      email: values.email ? (emailRegex.test(values.email) ? null : labels.validation.email) : labels.validation.required,
      phone: values.phone
        ? values.phone.replace(/\D/g, "").length >= 7
          ? null
          : labels.validation.phone
        : null,
      projectType: values.projectType ? null : labels.validation.required,
      cityOrZip: null,
      message: values.message
        ? values.message.trim().length >= 15
          ? null
          : labels.validation.messageShort
        : labels.validation.required,
      consent: null
    };
    setErrors(nextErrors);
    return Object.values(nextErrors).every((val) => !val);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);
    if (!validate()) {
      setStatus("error");
      return;
    }
    setSubmitting(true);
    const subject = encodeURIComponent(labels.submit.subject);
    const body = encodeURIComponent(
      `${labels.fields.fullName}: ${values.fullName}\n` +
        `${labels.fields.email}: ${values.email}\n` +
        `${labels.fields.phone}: ${values.phone || "-"}\n` +
        `${labels.fields.projectType}: ${values.projectType}\n` +
        `${labels.fields.cityOrZip}: ${values.cityOrZip || "-"}\n` +
        `${labels.fields.message}: ${values.message}\n` +
        `${labels.fields.consent}: ${values.consent ? labels.submit.consentYes : labels.submit.consentNo}\n`
    );
    const mailto = `${contactInfo.emailHref}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    setSubmitting(false);
    setStatus("success");
    setValues(initialState);
  };

  const inputBase =
    "mt-2 h-11 w-full rounded-2xl border border-muted bg-white px-4 text-sm text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2";

  return (
    <div className="rounded-2xl border border-muted bg-surface p-8">
      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-6 md:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-text">
            <span>{labels.fields.fullName}</span>
            <input
              className={inputBase}
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              placeholder={labels.placeholders.fullName}
              required
            />
            {errors.fullName ? <p className="text-sm text-red-700">{errors.fullName}</p> : null}
          </label>
          <label className="space-y-2 text-sm font-medium text-text">
            <span>{labels.fields.email}</span>
            <input
              className={inputBase}
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder={labels.placeholders.email}
              required
            />
            {errors.email ? <p className="text-sm text-red-700">{errors.email}</p> : null}
          </label>
          <label className="space-y-2 text-sm font-medium text-text">
            <span>{labels.fields.phone}</span>
            <input
              className={inputBase}
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder={labels.placeholders.phone}
            />
            {errors.phone ? <p className="text-sm text-red-700">{errors.phone}</p> : null}
          </label>
          <label className="space-y-2 text-sm font-medium text-text">
            <span>{labels.fields.projectType}</span>
            <select
              className={inputBase}
              name="projectType"
              value={values.projectType}
              onChange={handleChange}
              required
            >
              <option value="">{labels.placeholders.projectType}</option>
              {labels.projectTypes.map((item: string) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {errors.projectType ? <p className="text-sm text-red-700">{errors.projectType}</p> : null}
          </label>
          <label className="space-y-2 text-sm font-medium text-text">
            <span>{labels.fields.cityOrZip}</span>
            <input
              className={inputBase}
              name="cityOrZip"
              value={values.cityOrZip}
              onChange={handleChange}
              placeholder={labels.placeholders.cityOrZip}
            />
          </label>
        </div>
        <label className="space-y-2 text-sm font-medium text-text">
          <span>{labels.fields.message}</span>
          <textarea
            className="mt-2 min-h-[140px] w-full rounded-2xl border border-muted bg-white px-4 py-3 text-sm text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
            name="message"
            value={values.message}
            onChange={handleChange}
            placeholder={labels.placeholders.message}
            required
          />
          {errors.message ? <p className="text-sm text-red-700">{errors.message}</p> : null}
        </label>
        <label className="flex items-start gap-3 text-sm text-text/80">
          <input
            type="checkbox"
            name="consent"
            checked={values.consent}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border border-muted"
          />
          <span>{labels.fields.consent}</span>
        </label>
        <div className="flex flex-col gap-4">
          <Button type="submit" variant="primary" className="h-12">
            {submitting ? labels.submit.sending : labels.submit.idle}
          </Button>
          {status === "success" ? (
            <div className="rounded-2xl border border-muted bg-white p-4">
              <p className="text-sm font-semibold text-text">{labels.status.successTitle}</p>
              <p className="mt-1 text-sm text-text/80">{labels.status.successBody}</p>
            </div>
          ) : null}
          {status === "error" ? (
            <div className="rounded-2xl border border-muted bg-white p-4">
              <p className="text-sm font-semibold text-text">{labels.status.errorTitle}</p>
              <p className="mt-1 text-sm text-text/80">{labels.status.errorBody}</p>
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
