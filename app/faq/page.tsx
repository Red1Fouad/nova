import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Megaman Nova",
};

const faqs = [
  {
    question: "What is Megaman Nova?",
    answer:
      "Megaman Nova is a non-profit, fan-made game created by The Red Soda Team. It's a new adventure that pushes the Blue Bomber to his limits in unfamiliar and challenging worlds.",
  },
  {
    question: "Is this an official Capcom game?",
    answer:
      "No, this is a fan project created out of passion for the Megaman series. It is not affiliated with or endorsed by Capcom. All Megaman characters and concepts are property of Capcom.",
  },
  {
    question: "When will the game be released?",
    answer:
      "The game is currently in development. We are a small team working in our free time. Please follow our Discord for the latest updates on progress and release dates. We don't have a fixed release date yet.",
  },
  {
    question: "What platforms will it be available on?",
    answer:
      "Our primary target platform is Windows PC. We may explore other platforms after the initial release, but there are no concrete plans at this time.",
  },
  {
    question: "How much will it cost?",
    answer:
      "Megaman Nova will be completely free to download and play. As a non-profit fan project, we cannot and will not charge money for the game.",
  },
  {
    question: "How can I support the project?",
    answer:
      "The best way to support us is to join our community on Discord, share the project with your friends, and give us feedback during public tests. We are not accepting monetary donations.",
  },
];

export default function FaqPage() {
  return (
    <div className="min-h-[calc(100vh-81px)] py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-cyber-blue mb-12 drop-shadow-[0_0_10px_rgba(0,232,240,0.5)]">
          Frequently Asked Questions
        </h1>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black/60 border border-cyber-blue/30 rounded-lg p-6 backdrop-blur-sm transition-all hover:border-cyber-blue/70 hover:shadow-[0_0_15px_rgba(0,232,240,0.3)]"
            >
              <h2 className="text-xl font-semibold text-white mb-2">
                {faq.question}
              </h2>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
