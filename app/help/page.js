export const metadata = {
  title: "Help — Minx-URL",
  description: "How to use Minx-URL — shorten links, set alias, copy, and more.",
};

export default function HelpPage() {
  return (
    <main className="px-4 py-12 max-w-6xl mx-auto">
      <section className="text-center mb-10">
        <h1 className="text-3xl font-bold text-purple-800">Help — Minx-URL</h1>
        <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto">
          Quick instructions and frequently asked questions to get you started.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="font-semibold text-lg mb-3">How to shorten a URL</h2>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700">
            <li>Paste your long URL into the input box on the homepage.</li>
            <li>(Optional) Type an alias after <code>minx-url.com/</code>.</li>
            <li>Click <strong>Shorten URL</strong>. Your short link will appear below.</li>
            <li>Click the copy icon or the link to open it in a new tab.</li>
          </ol>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="font-semibold text-lg mb-3">Custom alias & collisions</h2>
          <p className="text-sm text-gray-700 mb-2">
            If the alias you choose is already taken, we’ll show an error. Try a different alias or let the system generate one automatically.
          </p>
          <p className="text-sm text-gray-700">
            Aliases can contain letters, numbers, hyphens, and underscores. Keep them short!
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 md:col-span-2">
          <h2 className="font-semibold text-lg mb-3">Analytics & tracking</h2>
          <p className="text-sm text-gray-700">
            Right now Minx-URL doesn’t collect advanced analytics. We plan to add click counts and referrer stats in a future release.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="font-semibold text-lg mb-3">Contact & support</h2>
          <p className="text-sm text-gray-700">
            For bugs or feature requests, open an issue on GitHub or email: <a href="mailto:hello@minx-url.com" className="underline">2024se5@student.uet.edu.pk</a>
          </p>
        </div>
      </section>

      <section className="mt-10 bg-purple-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-3">FAQ</h3>
        <div className="space-y-3 text-sm text-gray-700">
          <div>
            <strong>Q:</strong> Is there an API?<br />
            <strong>A:</strong> Not yet. API access is planned for the Pro tier.
          </div>
          <div>
            <strong>Q:</strong> Can I change a short link later?<br />
            <strong>A:</strong> Short links are permanent for now — delete & recreate if needed.
          </div>
        </div>
      </section>
    </main>
  );
}

