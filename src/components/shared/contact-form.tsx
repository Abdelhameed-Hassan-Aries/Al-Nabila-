"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import type { Dictionary, Locale } from "@/lib/i18n/dictionaries";

type ContactFormDictionary =
  | Dictionary["contact"]["form"]
  | Dictionary["home"]["contact"];

type ContactFormProps = {
  dictionary: ContactFormDictionary;
  locale: Locale;
  className?: string;
};

const ContactForm = ({ dictionary, locale, className }: ContactFormProps) => {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitted");
  };

  return (
    <motion.form
      className={clsx("contact-form", className)}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-live="polite"
    >
      {dictionary.fields.map((field) => {
        const id = `contact-${locale}-${field.name}`;
        const isTextarea = field.type === "textarea";
        const isSelect = field.type === "select" && field.options;

        if (isTextarea) {
          return (
            <label key={field.name} htmlFor={id}>
              <span
                style={{
                  display: "block",
                  marginBottom: "0.35rem",
                  fontWeight: 500,
                }}
              >
                {field.label}
              </span>
              <textarea
                id={id}
                name={field.name}
                placeholder={field.placeholder}
                required
              />
            </label>
          );
        }

        if (isSelect) {
          return (
            <label key={field.name} htmlFor={id}>
              <span
                style={{
                  display: "block",
                  marginBottom: "0.35rem",
                  fontWeight: 500,
                }}
              >
                {field.label}
              </span>
              <select id={id} name={field.name} defaultValue="" required>
                <option value="" disabled>
                  {field.placeholder}
                </option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          );
        }

        return (
          <label key={field.name} htmlFor={id}>
            <span
              style={{
                display: "block",
                marginBottom: "0.35rem",
                fontWeight: 500,
              }}
            >
              {field.label}
            </span>
            <input
              id={id}
              type={field.type ?? "text"}
              name={field.name}
              placeholder={field.placeholder}
              required
            />
          </label>
        );
      })}
      <button
        type="submit"
        className="button-primary"
        style={{ width: "100%", marginTop: "0.5rem" }}
      >
        {dictionary.submitLabel}
      </button>
      {status === "submitted" && (
        <p
          style={{
            color: "var(--accent)",
            fontWeight: 600,
            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          {dictionary.successMessage}
        </p>
      )}
    </motion.form>
  );
};

export default ContactForm;
