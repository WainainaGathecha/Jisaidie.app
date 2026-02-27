// Simple fuzzy search implementation
export const fuzzySearch = (query, items, searchFields) => {
  if (!query.trim()) return items;

  const lowerQuery = query.toLowerCase();

  return items.filter(item => {
    return searchFields.some(field => {
      const value = item[field];
      return value && value.toLowerCase().includes(lowerQuery);
    });
  });
};

// Filter businesses by category
export const filterByCategory = (businesses, category) => {
  if (!category || category === 'all') return businesses;
  return businesses.filter(b => b.category.toLowerCase() === category.toLowerCase());
};

// Filter businesses by neighborhood
export const filterByNeighborhood = (businesses, neighborhood) => {
  if (!neighborhood || neighborhood === 'all') return businesses;
  return businesses.filter(b => b.neighborhood.toLowerCase() === neighborhood.toLowerCase());
};

// Get unique neighborhoods
export const getUniqueNeighborhoods = (businesses) => {
  const neighborhoods = [...new Set(businesses.map(b => b.neighborhood))];
  return neighborhoods.sort();
};

// Get opening status for today
export const getOpeningStatus = (hours) => {
  const today = new Date().getDay();
  const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const dayName = dayNames[today];
  
  const hoursToday = hours[dayName];
  
  if (!hoursToday || hoursToday === 'Closed') {
    return { isOpen: false, hours: 'Closed' };
  }

  // Simple check - in production, would parse actual times
  return { isOpen: true, hours: hoursToday };
};
