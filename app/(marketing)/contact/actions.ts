"use server";
import { Resend } from "resend";

export type ContactFormState = {
  success?: boolean;
  message?: string;
  errors?: Record<string, string[]>;
};

/**
 * Escape user-provided values before inserting them into HTML.
 * Prevents submitted HTML from being interpreted as markup
 * inside the email.
 */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "");
  const company = String(formData.get("company") ?? "");
  const email = String(formData.get("email") ?? "");
  const title = String(formData.get("title") ?? "");
  const size = String(formData.get("size") ?? "");
  const industry = String(formData.get("industry") ?? "");
  const automate = String(formData.get("automate") ?? "");
  const department = String(formData.get("department") ?? "");
  const tech = String(formData.get("tech") ?? "");
  const inquiryType = String(formData.get("inquiryType") ?? "");
  const message = String(formData.get("message") ?? "");

  const errors: Record<string, string[]> = {};

  if (!name || name.trim() === "") errors.name = ["Name is required."];
  if (!email || !email.includes("@")) errors.email = ["A valid business email is required."];
  if (!company || company.trim() === "") errors.company = ["Company is required."];
  if (!inquiryType || inquiryType === "") errors.inquiryType = ["Please select an inquiry type."];

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the errors in the form.",
      errors,
    };
  }

// Escape every user-controlled value before inserting it into HTML.
  const safeName = escapeHtml(name);
  const safeCompany = escapeHtml(company);
  const safeEmail = escapeHtml(email);
  const safeTitle = escapeHtml(title);
  const safeSize = escapeHtml(size);
  const safeIndustry = escapeHtml(industry);
  const safeAutomate = escapeHtml(automate);
  const safeDepartment = escapeHtml(department);
  const safeTech = escapeHtml(tech);
  const safeInquiryType = escapeHtml(inquiryType);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  try {

const resend = new Resend(process.env.RESEND_API_KEY);

const { error } = await resend.emails.send({
  from: "Kaniniai Website <hello@contact.kaniniai.com>",
  to: ["afroseprojectbiz@gmail.com"],
  replyTo: email.trim(),
  subject: `New website inquiry — ${company.trim()}`,
  html: `
    <h2>New Kaniniai website inquiry</h2>
    <p><strong>Name:</strong> ${safeName}</p>
    <p><strong>Company:</strong> ${safeCompany}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    <p><strong>Job Title:</strong> ${safeTitle}</p>
    <p><strong>Company Size:</strong> ${safeSize}</p>
    <p><strong>Industry:</strong> ${safeIndustry}</p>
    <p><strong>What to automate:</strong> ${safeAutomate}</p>
    <p><strong>Department:</strong> ${safeDepartment}</p>
    <p><strong>Current Tech:</strong> ${safeTech}</p>
    <p><strong>Inquiry Type:</strong> ${safeInquiryType}</p>
    <p><strong>Message:</strong> ${safeMessage}</p>
  `,
});

if (error) {
  console.error("Resend error:", error);

  return {
    success: false,
    message: error.message || "We couldn't submit your request. Please try again.",
    errors: {},
  };
}

  
  return {
    success: true,
    message: "Thank you for reaching out. An AI engineering specialist will contact you shortly.",
    errors: {},
  };
}
catch (error) {
    console.error("Contact form error:", error);

    return {
      success: false,
      message: "We couldn't submit your request. Please try again.",
      errors: {},
    };
  }
}