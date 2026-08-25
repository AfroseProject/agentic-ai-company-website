"use client";

import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";
import { SelectNative } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { submitContactForm, type ContactFormState } from "./actions";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button 
      type="submit" 
      variant="primary" 
      size="lg" 
      className="w-full mt-6 font-bold tracking-wider"
      disabled={pending}
    >
      {pending ? "SUBMITTING..." : "START THE CONVERSATION"}
    </Button>
  );
}

export function ContactForm() {
  const initialState: ContactFormState = { success: false, errors: {} };
  const [state, formAction] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="p-8 border border-primary/30 bg-[#0B0F16] rounded-lg text-center shadow-[0_0_30px_rgba(79,140,255,0.05)] animate-fade-in">
        <svg aria-hidden="true" className="w-16 h-16 text-primary mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-2xl font-bold text-[#F5F7FA] mb-2">Request Received</h3>
        <p className="text-[#9AA6B2]">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.message && !state.success && (
        <div className="p-4 bg-red-900/20 border border-red-500/50 rounded-sm text-red-200 text-sm">
          {state.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-[#F5F7FA]">Name <span className="text-primary">*</span></label>
          <Input id="name" name="name" placeholder="First and Last Name" required />
          {state.errors?.name && <p className="text-red-400 text-xs mt-1">{state.errors.name[0]}</p>}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-[#F5F7FA]">Business Email <span className="text-primary">*</span></label>
          <Input id="email" name="email" type="email" placeholder="name@company.com" required />
          {state.errors?.email && <p className="text-red-400 text-xs mt-1">{state.errors.email[0]}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-[#F5F7FA]">Company <span className="text-primary">*</span></label>
          <Input id="company" name="company" placeholder="Organization Name" required />
          {state.errors?.company && <p className="text-red-400 text-xs mt-1">{state.errors.company[0]}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="title" className="text-sm font-medium text-[#F5F7FA]">Job Title</label>
          <Input id="title" name="title" placeholder="Director of IT" />
        </div>

        <div className="space-y-2">
          <label htmlFor="size" className="text-sm font-medium text-[#F5F7FA]">Company Size</label>
          <SelectNative id="size" name="size" defaultValue="">
            <option value="" disabled>Select company size...</option>
            <option value="1-50">1-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="201-1000">201-1000 employees</option>
            <option value="1001-5000">1001-5000 employees</option>
            <option value="5000+">5000+ employees</option>
          </SelectNative>
        </div>

        <div className="space-y-2">
          <label htmlFor="industry" className="text-sm font-medium text-[#F5F7FA]">Industry</label>
          <SelectNative id="industry" name="industry" defaultValue="">
            <option value="" disabled>Select industry...</option>
            <option value="Technology">Technology</option>
            <option value="Financial Services">Financial Services</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Retail">Retail</option>
            <option value="Other">Other</option>
          </SelectNative>
        </div>
      </div>

      <div className="border-t border-[#1C2633] pt-6 mt-6">
        <div className="space-y-2 mb-6">
          <label htmlFor="inquiryType" className="text-sm font-medium text-[#F5F7FA]">How can we help you? <span className="text-primary">*</span></label>
          <SelectNative id="inquiryType" name="inquiryType" defaultValue="" required>
            <option value="" disabled>Select an inquiry type...</option>
            <option value="AI Strategy">AI Strategy</option>
            <option value="Custom AI Agent">Custom AI Agent</option>
            <option value="Agent-as-a-Service">Agent-as-a-Service</option>
            <option value="IT Service Desk">IT Service Desk</option>
            <option value="Security / SOC">Security / SOC</option>
            <option value="AI Automation">AI Automation</option>
            <option value="AI Engineering">AI Engineering</option>
            <option value="AI Security">AI Security</option>
            <option value="Other">Other</option>
          </SelectNative>
          {state.errors?.inquiryType && <p className="text-red-400 text-xs mt-1">{state.errors.inquiryType[0]}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <label htmlFor="automate" className="text-sm font-medium text-[#F5F7FA]">What are you looking to automate?</label>
            <Input id="automate" name="automate" placeholder="e.g. Ticket triaging" />
          </div>
          <div className="space-y-2">
            <label htmlFor="department" className="text-sm font-medium text-[#F5F7FA]">Which department?</label>
            <Input id="department" name="department" placeholder="e.g. IT, Security, HR" />
          </div>
        </div>
        
        <div className="space-y-2 mb-6">
          <label htmlFor="tech" className="text-sm font-medium text-[#F5F7FA]">Current Technology Environment</label>
          <Input id="tech" name="tech" placeholder="e.g. AWS, ServiceNow, Okta" />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-[#F5F7FA]">Additional details</label>
          <textarea 
            id="message" 
            name="message" 
            className="flex min-h-[120px] w-full rounded-sm border border-border bg-surface px-3 py-2 text-sm text-foreground placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent resize-y"
            placeholder="Tell us more about your requirements..."
          ></textarea>
        </div>
      </div>

      <SubmitButton />
      
      <p className="text-xs text-[#9AA6B2] text-center mt-4">
        By submitting this form, you agree to our privacy policy. Your information is securely processed.
      </p>
    </form>
  );
}
