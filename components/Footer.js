export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Minx-URL. All rights reserved.
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Built with ❤️ using Next.js
        </p>
      </div>
    </footer>
  );
}
