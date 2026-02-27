import { useSearchParams, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { SearchBar } from '../components/SearchBar';
import { CategoryFilter } from '../components/CategoryFilter';
import { NeighborhoodFilter } from '../components/NeighborhoodFilter';
import { BusinessGrid } from '../components/BusinessGrid';
import { useSearch } from '../hooks/useSearch';
import businessesData from '../data/businesses.json';

export function ListingsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const initialCategory = searchParams.get('category') || 'all';

  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedNeighborhood,
    setSelectedNeighborhood,
    filtered,
    clearFilters,
    resultCount
  } = useSearch(businessesData);

  // Set initial category from URL
  if (selectedCategory !== initialCategory && initialCategory !== 'all') {
    setSelectedCategory(initialCategory);
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category !== 'all') {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  const handleClearFilters = () => {
    clearFilters();
    setSearchParams({});
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'all' || selectedNeighborhood !== 'all';

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-4">
        {/* Search Bar */}
        <div className="mb-5">
          <SearchBar 
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Find a business or service..."
          />
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-4 mb-5 space-y-3">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
          />

          <NeighborhoodFilter
            businesses={businessesData}
            selectedNeighborhood={selectedNeighborhood}
            onSelectNeighborhood={setSelectedNeighborhood}
          />

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <button
              onClick={handleClearFilters}
              className="w-full flex items-center justify-center gap-2 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={18} />
              Clear All Filters
            </button>
          )}
        </div>

        {/* Results Count */}
        {resultCount > 0 && (
          <p className="text-sm text-gray-600 mb-4">
            Found {resultCount} business{resultCount !== 1 ? 'es' : ''}
          </p>
        )}

        {/* Business Grid */}
        <BusinessGrid businesses={filtered} />
      </div>
    </div>
  );
}
