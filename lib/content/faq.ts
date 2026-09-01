export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "How do you price?",
    answer:
      "Scope-dependent — discussed on the intro call once I understand the problem. No public rate card; every engagement is different.",
  },
  {
    question: "What timezone are you in?",
    answer:
      "Egypt (EET/EEST). Flexible overlap with US East and European business hours.",
  },
  {
    question: "What's the minimum engagement?",
    answer:
      "No hard minimum. Scoped work — a feature, an audit, a rescue — is welcome alongside longer contracts.",
  },
  {
    question: "Are you available now?",
    answer:
      "Yes — available for new contract and advisory work alongside current employment at Magentic AI.",
  },
  {
    question: "What happens on the first call?",
    answer:
      "30 minutes. I'll ask about your product, team, timeline, and technical constraints. You'll know within the call whether I'm the right fit.",
  },
  {
    question: "What if the project goes wrong?",
    answer:
      "Clear written scope upfront, checkpoint reviews, and you keep all code and documentation regardless. I don't do open-ended retainers without defined deliverables.",
  },
];
