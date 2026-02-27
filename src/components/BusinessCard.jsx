import { Star, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getOpeningStatus } from '../utils/searchHelpers';

export function BusinessCard({ business }) {
  const { isOpen, hours } = getOpeningStatus(business.hours);

  return (
    <Link
      to={`/business/${business.id}`}
      className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-200 flex flex-col h-full"
    >
      {/* Image */}
      <div className="w-full h-40 bg-gray-200 overflow-hidden">
        <img
          src={business.image}
          alt={business.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Header */}
        <div className="mb-2">
          <h3 className="font-bold text-base line-clamp-2 mb-1">{business.name}</h3>
          <p className="text-sm text-gray-600">{business.subcategory}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <Star size={16} fill="gold" className="text-yellow-500" />
          <span className="text-sm font-medium">{business.rating}</span>
        </div>

        {/* Status */}
        <div className="mb-3">
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
            isOpen 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {isOpen ? 'Open' : 'Closed'}
          </div>
        </div>

        {/* Quick info */}
        <div className="space-y-2 text-sm text-gray-600 mt-auto">
          <div className="flex items-center gap-2 line-clamp-1">
            <Clock size={14} className="flex-shrink-0" />
            <span className="truncate">{hours}</span>
          </div>
          <div className="flex items-center gap-2 line-clamp-1">
            <Phone size={14} className="flex-shrink-0" />
            <span className="truncate">{business.phone}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
