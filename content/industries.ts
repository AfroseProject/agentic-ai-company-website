export interface IndustryAgent {
  name: string;
  description: string;
}

export interface IndustryData {
  id: string;
  name: string;
  slug: string;
  description: string;
  challenges: string[];
  opportunities: string[];
  exampleAgents: IndustryAgent[];
  exampleWorkflows: string[];
  securityConsiderations: string[];
}

export const industries: IndustryData[] = [
  {
    id: "technology",
    name: "Technology",
    slug: "technology",
    description: "Scale software engineering, cloud operations, and IT service management with specialized AI agents.",
    challenges: [
      "Managing complex, ephemeral cloud infrastructure and incident response.",
      "High volume of repetitive L1/L2 engineering support requests.",
      "Ensuring consistent security and compliance across rapid deployments."
    ],
    opportunities: [
      "Automated incident triage and autonomous, policy-driven remediation.",
      "AI-driven code review, vulnerability scanning, and QA workflows.",
      "Continuous deployment orchestration via agentic systems."
    ],
    exampleAgents: [
      { name: "DevOps Agent", description: "Monitors CI/CD pipelines, analyzes failed builds, and proposes infrastructure fixes." },
      { name: "Security Operations Agent", description: "Triages alerts from SIEM platforms and correlates threat intelligence in real-time." }
    ],
    exampleWorkflows: [
      "System Alert → Log Analysis → Root Cause Identification → Remediation Proposal → Human Approval → Resolution Execution",
      "Employee IT Request → Identity Verification → Diagnostic Query → Policy Check → Automated Configuration Fix"
    ],
    securityConsiderations: [
      "Strict IAM role assumption (Least Privilege) for infrastructure modifications.",
      "VPC and network boundary enforcement for internal tool API access.",
      "Immutable audit logging for all source code and production environment interactions."
    ]
  },
  {
    id: "bfsi",
    name: "Banking & Financial Services",
    slug: "bfsi",
    description: "Secure, compliant AI agents for financial operations, risk management, and algorithmic reconciliation.",
    challenges: [
      "Strict regulatory and compliance requirements across global jurisdictions.",
      "Manual, error-prone data reconciliation across legacy mainframe systems.",
      "High operational costs in fraud detection and customer KYC (Know Your Customer) processes."
    ],
    opportunities: [
      "Real-time transaction analysis and automated fraud mitigation protocols.",
      "Intelligent document processing for loan origination, underwriting, and claims.",
      "Automated regulatory reporting and continuous audit trail generation."
    ],
    exampleAgents: [
      { name: "Compliance Agent", description: "Continuously monitors communications and transactions for regulatory drift." },
      { name: "Reconciliation Agent", description: "Matches complex ledger entries across disparate financial databases." }
    ],
    exampleWorkflows: [
      "Transaction Flagged → Context Retrieval → Risk Scoring → Action (Freeze/Allow) → Report Generation",
      "KYC Document Upload → OCR & Entity Extraction → Database Verification → Approval Routing"
    ],
    securityConsiderations: [
      "Data residency enforcement and PII/MNPI redaction prior to LLM processing.",
      "Air-gapped deployment options for highly sensitive financial workflows.",
      "Mandatory human-in-the-loop authorization for financial transactions over predefined risk thresholds."
    ]
  },
  {
    id: "healthcare",
    name: "Healthcare",
    slug: "healthcare",
    description: "Agentic automation for clinical operations, revenue cycle management, and patient administration.",
    challenges: [
      "Navigating complex HIPAA and patient privacy regulations.",
      "Heavy administrative burden causing clinician burnout.",
      "Inefficient claims processing and revenue cycle management."
    ],
    opportunities: [
      "Automated medical coding and billing reconciliation.",
      "Intelligent patient intake, scheduling, and follow-up routing.",
      "Clinical documentation assistance and EHR data extraction."
    ],
    exampleAgents: [
      { name: "Revenue Cycle Agent", description: "Analyzes denied claims, cross-references clinical notes, and prepares appeals." },
      { name: "Clinical Intake Agent", description: "Pre-processes patient data and flags potential risk factors for human review." }
    ],
    exampleWorkflows: [
      "Claim Denial Received → Reason Code Analysis → EHR Data Retrieval → Appeal Drafting → Specialist Review",
      "Patient Referral → Network Verification → Scheduling Matrix Optimization → Appointment Confirmation"
    ],
    securityConsiderations: [
      "Strict HIPAA compliance and BAA-covered infrastructure.",
      "PHI (Protected Health Information) detection and masking at the orchestration layer.",
      "Agent access controls restricted strictly to the patient's specific care context."
    ]
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    slug: "manufacturing",
    description: "Optimize supply chains, predictive maintenance, and quality control with autonomous agents.",
    challenges: [
      "Supply chain volatility and demand forecasting inaccuracies.",
      "Unplanned equipment downtime and inefficient maintenance scheduling.",
      "Siloed operational technology (OT) and information technology (IT) systems."
    ],
    opportunities: [
      "Predictive maintenance scheduling based on IoT sensor telemetry.",
      "Autonomous inventory reordering and supply chain risk monitoring.",
      "Automated quality assurance reporting and defect analysis."
    ],
    exampleAgents: [
      { name: "Supply Chain Agent", description: "Monitors global logistics data and proactively flags material shortages." },
      { name: "Maintenance Operations Agent", description: "Correlates machine telemetry with maintenance logs to schedule proactive repairs." }
    ],
    exampleWorkflows: [
      "IoT Sensor Anomaly → Predictive Model Trigger → Maintenance Manual Retrieval → Work Order Generation",
      "Supplier Delay Detected → Impact Analysis → Alternate Sourcing Query → Purchase Order Drafting"
    ],
    securityConsiderations: [
      "Secure bridging between OT network sensors and IT cloud environments.",
      "Protection of proprietary manufacturing processes and CAD designs.",
      "Failsafe mechanisms ensuring agents cannot directly manipulate physical machinery controls."
    ]
  },
  {
    id: "retail",
    name: "Retail",
    slug: "retail",
    description: "Intelligent inventory management, personalized customer operations, and merchandising automation.",
    challenges: [
      "Complex omnichannel inventory synchronization.",
      "High volume of seasonal customer support inquiries.",
      "Dynamic pricing and margin optimization at scale."
    ],
    opportunities: [
      "Hyper-personalized customer support and automated returns processing.",
      "Algorithmic markdown and pricing adjustments based on real-time demand.",
      "Autonomous vendor management and stock replenishment."
    ],
    exampleAgents: [
      { name: "Merchandising Agent", description: "Analyzes sales velocity and competitor pricing to recommend markdowns." },
      { name: "Customer Operations Agent", description: "Handles complex order modifications and return logistics autonomously." }
    ],
    exampleWorkflows: [
      "Return Request → Policy Verification → Return Label Generation → Inventory Restock Flagging → Refund Authorization",
      "Stock Depletion Alert → Demand Forecast Query → Supplier API Call → Reorder Submission"
    ],
    securityConsiderations: [
      "PCI-DSS compliance for agents handling customer transaction data.",
      "Rate limiting and fraud detection on agent-driven customer interactions.",
      "Strict brand-voice guardrails and hallucination prevention in customer-facing tools."
    ]
  },
  {
    id: "logistics",
    name: "Logistics",
    slug: "logistics",
    description: "Route optimization, fleet management, and autonomous freight brokerage.",
    challenges: [
      "Routing inefficiencies due to real-time weather and traffic variables.",
      "Manual, high-friction freight brokerage and capacity matching.",
      "Complex customs compliance and cross-border documentation."
    ],
    opportunities: [
      "Dynamic route recalculation and fleet utilization optimization.",
      "Automated matching of freight loads to available carrier capacity.",
      "Intelligent generation and verification of shipping manifests and customs documents."
    ],
    exampleAgents: [
      { name: "Routing Agent", description: "Continuously analyzes geospatial data to optimize active delivery routes." },
      { name: "Brokerage Agent", description: "Negotiates carrier rates and matches loads based on historical pricing data." }
    ],
    exampleWorkflows: [
      "Load Posted → Capacity Database Query → Rate Calculation → Carrier Outreach → Booking Confirmation",
      "Transit Delay Detected → SLA Impact Analysis → Customer Notification Trigger → Alternate Routing Proposal"
    ],
    securityConsiderations: [
      "Protection of sensitive carrier pricing and customer contract data.",
      "API security for integrations with external ELD (Electronic Logging Device) providers.",
      "Geospatial data privacy controls."
    ]
  },
  {
    id: "professional-services",
    name: "Professional Services",
    slug: "professional-services",
    description: "Scale consulting, legal, and accounting operations through intelligent knowledge agents.",
    challenges: [
      "High cost of manual document review, legal discovery, and audit processes.",
      "Knowledge silos across different client engagements and practice areas.",
      "Inefficient proposal generation and resource allocation."
    ],
    opportunities: [
      "Automated contract analysis, redlining, and compliance checking.",
      "Intelligent knowledge retrieval across historical firm engagements.",
      "AI-assisted audit sampling and financial anomaly detection."
    ],
    exampleAgents: [
      { name: "Knowledge Agent", description: "Retrieves relevant case law, prior proposals, or firm IP to assist practitioners." },
      { name: "Audit Agent", description: "Scans financial documents to flag irregularities and prepare standard audit workpapers." }
    ],
    exampleWorkflows: [
      "RFP Received → Requirements Extraction → Firm Experience Query → Draft Proposal Generation → Partner Review",
      "Contract Uploaded → Clause Extraction → Risk Policy Comparison → Redline Generation"
    ],
    securityConsiderations: [
      "Strict client data isolation (multi-tenancy) preventing cross-pollination of knowledge.",
      "Attorney-client privilege preservation and discoverability controls.",
      "Role-based access control (RBAC) ensuring agents only surface data the requesting user is authorized to see."
    ]
  }
];

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industries.find(industry => industry.slug === slug);
}
