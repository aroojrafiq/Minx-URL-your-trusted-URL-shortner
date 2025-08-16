export const metadata = {
  title: "About — Minx-URL",
  description: "About Minx-URL — mission, plans, pricing and GitHub link.",
};

function PricingCard({ title, price, bullets }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col">
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <div className="text-3xl font-bold mb-3">{price}</div>
      <ul className="mb-4 space-y-2 text-sm text-gray-700 flex-1">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-purple-600">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <button className="mt-auto bg-gradient-to-r from-purple-600 to-purple-500 text-white px-4 py-2 rounded-md">
        Choose
      </button>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="px-4 py-12 max-w-6xl mx-auto">
      <section className="text-center mb-10">
        <h1 className="text-3xl font-bold text-purple-800">About Minx-URL</h1>
        <p className="mt-2 text-sm text-gray-600 max-w-2xl mx-auto">
          Minx-URL is a lightweight URL shortener focused on speed, simplicity and privacy.
        </p>
        <div className="mt-4 flex justify-center gap-3">
          <a
            href="https://github.com/aroojrafiq"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-purple-700 shadow hover:shadow-md"
          >
            {/* GitHub icon (svg) */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 .5C5.7.5.8 5.4.8 11.7c0 4.8 3.1 8.8 7.4 10.2.5.1.7-.2.7-.5v-1.8c-3 .7-3.7-1.4-3.7-1.4-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6-.6 1.9-1 .2-.7.4-1.1.8-1.3-2.4-.3-4.9-1.2-4.9-5.4 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.5.1-3.2 0 0 .9-.3 3 1.1.9-.3 1.8-.4 2.8-.4s1.9.1 2.8.4c2.1-1.4 3-1.1 3-1.1.6 1.7.2 2.9.1 3.2.7.8 1.1 1.7 1.1 2.9 0 4.2-2.6 5.1-5 5.4.4.4.8 1 .8 2v3c0 .3.2.6.7.5 4.3-1.4 7.4-5.4 7.4-10.2C23.2 5.4 18.3.5 12 .5z" />
            </svg>
            View on GitHub
          </a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-purple-800 mb-4">Plans & Pricing</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PricingCard
            title="Free"
            price="Free"
            bullets={["Basic shortening", "Auto-generated aliases", "No analytics"]}
          />
          <PricingCard
            title="Pro"
            price="$4 / month"
            bullets={["Custom aliases", "Basic analytics", "Priority support"]}
          />
          <PricingCard
            title="Team"
            price="$20 / month"
            bullets={["Team management", "Branded domains", "Advanced analytics"]}
          />
        </div>
      </section>

      <section className="bg-purple-50 rounded-lg p-6">
        <h3 className="font-semibold mb-2">Mission</h3>
        <p className="text-sm text-gray-700">
          Minx-URL aims to give individuals and small teams an easy, privacy-minded
          way to shorten and share links. We intentionally start small and add features
          that are useful and trustworthy.
        </p>
      </section>
    </main>
  );
}
