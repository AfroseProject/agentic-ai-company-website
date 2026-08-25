import { Hero } from "@/components/hero/hero";
import { ValueProposition } from "@/components/home/value-proposition";
import { Capabilities } from "@/components/home/capabilities";
import { AgentAsAService } from "@/components/home/agent-as-a-service";
import { SecurityGovernance } from "@/components/home/security-governance";
import { ReferenceArchitectures } from "@/components/home/reference-architectures";
import { FinalCta } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ValueProposition />
      <Capabilities />
      <AgentAsAService />
      <SecurityGovernance />
      <ReferenceArchitectures />
      <FinalCta />
      {/* Homepage sections will be implemented in future phases */}
    </div>
  );
}
