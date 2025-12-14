// src/components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-400 py-6 mt-12 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">
            Developed for Web Programming SE 3355 Midterm Project by Beyza Türk
          </p>
          <p className="text-sm">
            Data provided by{" "}
            <a
              href="https://rickandmortyapi.com/"
              target="_blank"
              rel="noreferrer"
              className="text-green-400 hover:text-green-300 transition"
            >
              The Rick and Morty API
            </a>
          </p>
          <p className="text-xs mt-4 text-gray-600">
            &copy; {new Date().getFullYear()}   Beyza Türk. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }