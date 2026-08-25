import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Kaniniai',
  description: 'Privacy Policy for Kaniniai.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-[#05070B] min-h-screen pt-32 pb-24">
      <article className="max-w-3xl mx-auto px-6 lg:px-8">
        
        <div className="mb-12 border-b border-[#1C2633] pb-12">
          <Link 
            href="/contact" 
            className="inline-flex items-center text-sm font-mono text-primary hover:text-secondary transition-colors mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B] rounded-sm"
          >
            <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            BACK TO CONTACT
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F7FA] leading-tight mb-6">
            Privacy Policy
          </h1>
          
          <p className="text-xl text-[#9AA6B2] leading-relaxed">
            Information regarding how Kaniniai processes and manages data.
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none text-[#9AA6B2]">
          <h2 className="text-2xl font-bold text-[#F5F7FA] mt-10 mb-4 border-b border-[#1C2633] pb-2">Information We Collect</h2>
          <p className="text-base leading-relaxed mb-6">
            We collect information that you voluntarily provide to us when you express an interest in obtaining information about our services or otherwise contact us. The information we collect through our contact form includes:
          </p>
          <ul className="list-disc list-outside pl-6 mb-6 space-y-2 text-base">
            <li>Name</li>
            <li>Company</li>
            <li>Business email</li>
            <li>Job title</li>
            <li>Company size</li>
            <li>Industry</li>
            <li>Department</li>
            <li>Current technology</li>
            <li>Automation requirements</li>
            <li>Inquiry type</li>
            <li>Message content</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#F5F7FA] mt-10 mb-4 border-b border-[#1C2633] pb-2">How We Use Information</h2>
          <p className="text-base leading-relaxed mb-6">
            We use the information we collect or receive for the following purposes:
          </p>
          <ul className="list-disc list-outside pl-6 mb-6 space-y-2 text-base">
            <li>To respond to your inquiries and solve any potential issues you might have with the use of our services.</li>
            <li>To evaluate your project requirements and determine how our agentic AI solutions can meet your needs.</li>
            <li>To communicate with you about requested services, updates, or technical discussions.</li>
            <li>To operate, maintain, and improve our website and service offerings.</li>
            <li>To protect our website from abuse, fraud, or unauthorized access.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#F5F7FA] mt-10 mb-4 border-b border-[#1C2633] pb-2">Contact Form</h2>
          <p className="text-base leading-relaxed mb-6">
            Information submitted through the contact form on this website is transmitted to our configured email delivery provider for the sole purpose of receiving and responding to your inquiries. We treat all submitted information with strict confidentiality and process it solely to facilitate communication regarding your business needs.
          </p>

          <h2 className="text-2xl font-bold text-[#F5F7FA] mt-10 mb-4 border-b border-[#1C2633] pb-2">Email Communications</h2>
          <p className="text-base leading-relaxed mb-6">
            By submitting your contact information, you agree that we may use it to respond to your specific inquiry. We focus on direct, relevant communication regarding the services you have requested and do not use your information to send unsolicited mass marketing campaigns.
          </p>

          <h2 className="text-2xl font-bold text-[#F5F7FA] mt-10 mb-4 border-b border-[#1C2633] pb-2">Data Retention</h2>
          <p className="text-base leading-relaxed mb-6">
            We will only keep your information for as long as it is reasonably necessary for the purposes set out in this Privacy Policy, subject to applicable legal obligations. Once your inquiry has been resolved and if no ongoing business relationship is established, we will responsibly manage or delete your submitted information.
          </p>

          <h2 className="text-2xl font-bold text-[#F5F7FA] mt-10 mb-4 border-b border-[#1C2633] pb-2">Third-Party Services</h2>
          <p className="text-base leading-relaxed mb-6">
            We utilize secure third-party website hosting and email delivery infrastructure to operate this website and receive communications. We only share information with these service providers to the extent necessary to perform these technical functions on our behalf. We do not sell your data, nor do we employ unauthorized analytics, advertising networks, CRM tracking, or behavioral profiling systems.
          </p>

          <h2 className="text-2xl font-bold text-[#F5F7FA] mt-10 mb-4 border-b border-[#1C2633] pb-2">Security</h2>
          <p className="text-base leading-relaxed mb-6">
            We implement reasonable technical and organizational safeguards designed to protect the security of any information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure. We cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
          </p>

          <h2 className="text-2xl font-bold text-[#F5F7FA] mt-10 mb-4 border-b border-[#1C2633] pb-2">Your Choices</h2>
          <p className="text-base leading-relaxed mb-6">
            You may contact us at any time regarding the information you have submitted. If you wish to review, update, or request the deletion of the information we have received from you, please reach out to us using the contact details provided below.
          </p>

          <h2 className="text-2xl font-bold text-[#F5F7FA] mt-10 mb-4 border-b border-[#1C2633] pb-2">Changes to This Policy</h2>
          <p className="text-base leading-relaxed mb-6">
            We may update this Privacy Policy from time to time as our website, services, or technical infrastructure evolve. The updated version will be indicated by an updated revision date and will be effective as soon as it is accessible on this page. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.
          </p>

          <h2 className="text-2xl font-bold text-[#F5F7FA] mt-10 mb-4 border-b border-[#1C2633] pb-2">Contact</h2>
          <p className="text-base leading-relaxed mb-6">
            If you have questions or comments about this policy, or wish to communicate regarding your data, you may email us at:
          </p>
          <p className="text-base leading-relaxed mb-6">
            <a 
              href="mailto:afrosea27@gmail.com" 
              className="text-primary hover:text-secondary underline underline-offset-4 decoration-primary/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B] rounded-sm"
            >
              afrosea27@gmail.com
            </a>
          </p>
        </div>
        
      </article>
    </div>
  );
}
