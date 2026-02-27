import { MapPin } from 'lucide-react';
import { getUniqueNeighborhoods } from '../utils/searchHelpers';

export function NeighborhoodFilter({ businesses, selectedNeighborhood, onSelectNeighborhood }) {
  const neighborhoods = getUniqueNeighborhoods(businesses);

  return (
    <div className="flex items-center gap-2">
      <MapPin size={20} className="text-gray-600 flex-shrink-0" />
      <select
        value={selectedNeighborhood}
        onChange={(e) => onSelectNeighborhood(e.target.value)}
        className="flex-1 px-3 py-2 bg-gray-100 border-0 rounded-lg outline-none text-base"
      >
        <option value="all">All Neighborhoods</option>
        {neighborhoods.map(neighborhood => (
          <option key={neighborhood} value={neighborhood}>
            {neighborhood}
          </option>
        ))}
      </select>
    </div>
  );
}
