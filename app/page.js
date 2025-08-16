"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function HomePage() {
  const [longUrl, setLongUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = async () => {
    if (!longUrl.trim()) {
      toast.error("Please enter a valid URL");
      return;
    }

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          longUrl: longUrl.trim(),
          shortUrl: alias.trim() || undefined
        })
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        toast.error(data.message || "Failed to shorten URL");
        return;
      }

      toast.success("URL shortened successfully!");
      setShortUrl(`${window.location.origin}/${data.shortUrl}`);
      setLongUrl("");
      setAlias("");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <Toaster position="top-center" />
      <h1 className="text-4xl font-bold text-center mb-6">
        The Minx-URL Shortener
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <input
          type="url"
          placeholder="Enter long link here"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
        />

        <div className="flex gap-2 mb-4">
          <span className="bg-gray-100 border border-gray-300 px-3 py-2 rounded-md">
            minx-url.com/
          </span>
          <input
            type="text"
            placeholder="Enter shortUrl"
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            className="flex-1 border border-gray-300 rounded-md px-4 py-2"
          />
        </div>

        <button
          onClick={handleShorten}
          className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
        >
          Shorten URL
        </button>

        {shortUrl && (
          <div className="mt-4 p-3 bg-green-100 border border-green-300 rounded-md">
            <p className="text-green-800 font-semibold">Short URL:</p>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
