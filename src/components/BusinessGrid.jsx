import { BusinessCard } from './BusinessCard';

export function BusinessGrid({ businesses }) {
  if (businesses.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No businesses found</p>
        <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {businesses.map(business => (
        <BusinessCard key={business.id} business={business} />
      ))}
    </div>
  );
}
