import { useState, useMemo } from 'react';
import { fuzzySearch, filterByCategory, filterByNeighborhood } from '../utils/searchHelpers';

export const useSearch = (businesses) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('all');

  const filtered = useMemo(() => {
    let results = businesses;

    // Apply search filter
    if (searchQuery.trim()) {
      results = fuzzySearch(
        searchQuery,
        results,
        ['name', 'category', 'description', 'services']
      );
    }

    // Apply category filter
    results = filterByCategory(results, selectedCategory);

    // Apply neighborhood filter
    results = filterByNeighborhood(results, selectedNeighborhood);

    return results;
  }, [businesses, searchQuery, selectedCategory, selectedNeighborhood]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedNeighborhood('all');
  };

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedNeighborhood,
    setSelectedNeighborhood,
    filtered,
    clearFilters,
    resultCount: filtered.length
  };
};
