import { profile, skillGroups, projects } from "@/lib/data";

export const quickQuestions = [
  "What does Nihal specialize in?",
  "Tell me about the projects",
  "What tools does Nihal use?",
  "How can I hire Nihal?"
];

function includesAny(text: string, terms: string[]) {
  return terms.some((term) => text.includes(term));
}

export function getAssistantReply(rawInput: string): string {
  const input = rawInput.toLowerCase();

  if (includesAny(input, ["hire", "contact", "email", "reach", "fiverr", "work with"])) {
    return `You can reach out directly at ${profile.email} or start an order on Fiverr: ${profile.fiverr}`;
  }

  if (includesAny(input, ["project", "work", "portfolio", "case study", "example"])) {
    const list = projects.map((p) => `${p.title} — ${p.description}`).join("\n\n");
    return `Here are a couple of recent projects:\n\n${list}`;
  }

  if (includesAny(input, ["tool", "software", "stack", "program", "app"])) {
    const tools = skillGroups.find((g) => g.label === "Tools & Software");
    return `The regular toolkit includes ${tools?.items.join(", ")}.`;
  }

  if (includesAny(input, ["certif", "qualif", "credential"])) {
    const cert = skillGroups.find((g) => g.label === "Certifications");
    return cert?.items.join(", ") ?? "Certified in Advanced Graphic Design & AI-Driven Visual Design.";
  }

  if (includesAny(input, ["skill", "expert", "good at", "specializ", "specialty", "specialise"])) {
    const core = skillGroups.find((g) => g.label === "Core Expertise");
    return `Core strengths are ${core?.items.join(", ")}.`;
  }

  if (includesAny(input, ["who", "about", "background", "bio"])) {
    return profile.about;
  }

  if (includesAny(input, ["hi", "hello", "hey"])) {
    return `Hey! I'm a small assistant trained on ${profile.name}'s profile. Ask me about the projects, skills, or how to get in touch.`;
  }

  return `I don't have a specific answer for that yet, but I can tell you about ${profile.name}'s projects, skills, or how to get in touch — just ask.`;
}
