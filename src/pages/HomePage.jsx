import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import categories from '../data/categories.json';

export function HomePage() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate(`/listings?category=${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Local Businesses in Juja
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover salons, restaurants, electronic stores, and more—all curated for campus students.
          </p>

          {/* Search CTA */}
          <button
            onClick={() => navigate('/listings')}
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-3 hover:bg-blue-700 transition-colors active:scale-95"
          >
            <Search size={20} />
            Start Searching
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {categories.map(category => {
              const IconComponent = LucideIcons[category.icon];

              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-lg hover:scale-105 transition-all active:scale-95"
                >
                  {IconComponent && (
                    <div className={`text-${category.color}-600 mb-2`}>
                      <IconComponent size={32} />
                    </div>
                  )}
                  <p className="text-sm font-semibold text-gray-800 text-center">
                    {category.name}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="px-4 py-8 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Jisaidie Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
              <h3 className="font-bold text-lg mb-2">Search or Browse</h3>
              <p className="text-gray-600">Find businesses by category or use the search bar</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <h3 className="font-bold text-lg mb-2">View Details</h3>
              <p className="text-gray-600">Check hours, location, phone number, and services</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <h3 className="font-bold text-lg mb-2">Get in Touch</h3>
              <p className="text-gray-600">Call or WhatsApp to book or ask questions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-4 py-6">
        <div className="max-w-4xl mx-auto text-center text-gray-600 text-sm">
          <p>Made for campus students. Built to help you find what you need.</p>
          <p className="mt-2">Jisaidie © 2026</p>
        </div>
      </footer>
    </div>
  );
}
