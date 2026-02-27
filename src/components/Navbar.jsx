import { ChevronLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {!isHome && (
            <button
              onClick={() => window.history.back()}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Go back"
            >
              <ChevronLeft size={24} className="text-gray-700" />
            </button>
          )}
          <Link to="/" className="font-bold text-lg text-blue-600 mobile-safe">
            Jisaidie
          </Link>
        </div>
      </div>
    </nav>
  );
}
