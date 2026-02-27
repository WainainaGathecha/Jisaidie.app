import { useParams, useNavigate } from 'react-router-dom';
import { Phone, Clock, MapPin, Share2, Star } from 'lucide-react';
import businessesData from '../data/businesses.json';
import { getOpeningStatus } from '../utils/searchHelpers';

export function BusinessDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const business = businessesData.find(b => b.id === parseInt(id));

  if (!business) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 text-lg mb-4">Business not found</p>
          <button
            onClick={() => navigate('/listings')}
            className="text-blue-600 font-semibold hover:underline"
          >
            Back to Listings
          </button>
        </div>
      </div>
    );
  }

  const { isOpen, hours } = getOpeningStatus(business.hours);

  const handleCall = () => {
    window.location.href = `tel:${business.phone}`;
  };

  const handleWhatsApp = () => {
    const message = `Hello, I'm calling from Jisaidie app. I'm interested in ${business.name}.`;
    const phoneNumber = business.whatsapp.replace(/[^\d+]/g, '');
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: business.name,
          text: `Check out ${business.name} on Jisaidie`,
          url: window.location.href
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Hero Image */}
        <div className="w-full h-64 sm:h-72 bg-gray-200 overflow-hidden">
          <img
            src={business.image}
            alt={business.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="px-4 py-6">
          {/* Header */}
          <div className="bg-white rounded-lg p-4 -mt-12 relative z-10 mb-4 shadow">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{business.name}</h1>
            <p className="text-gray-600 mb-3">{business.category} • {business.subcategory}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <Star size={20} fill="gold" className="text-yellow-500" />
              <span className="font-semibold text-lg">{business.rating}</span>
            </div>

            {/* Status Badge */}
            <div className={`inline-block px-4 py-2 rounded-full font-semibold ${
              isOpen 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {isOpen ? '✓ Open' : '✕ Closed'}
            </div>
          </div>

          {/* Description */}
          {business.description && (
            <div className="bg-white rounded-lg p-4 mb-4 shadow">
              <h2 className="font-bold text-lg mb-2">About</h2>
              <p className="text-gray-700">{business.description}</p>
            </div>
          )}

          {/* Services */}
          {business.services && business.services.length > 0 && (
            <div className="bg-white rounded-lg p-4 mb-4 shadow">
              <h2 className="font-bold text-lg mb-3">Services</h2>
              <div className="flex flex-wrap gap-2">
                {business.services.map((service, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Contact Information */}
          <div className="bg-white rounded-lg p-4 mb-4 shadow">
            <h2 className="font-bold text-lg mb-4">Contact</h2>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{business.phone}</p>
                  <button
                    onClick={handleCall}
                    className="text-blue-600 text-sm hover:underline"
                  >
                    Call
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{business.address}</p>
                  <p className="text-sm text-gray-600">{business.neighborhood}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-white rounded-lg p-4 mb-4 shadow">
            <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Clock size={20} className="text-blue-600" />
              Hours
            </h2>

            <div className="space-y-2">
              {Object.entries(business.hours).map(([day, time]) => (
                <div key={day} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                  <span className="capitalize font-medium text-gray-700">{day}</span>
                  <span className="text-gray-600">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-white rounded-lg p-4 mb-6 shadow sticky bottom-4 space-y-2">
            <button
              onClick={handleCall}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors active:scale-95 flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Now
            </button>

            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors active:scale-95"
            >
              WhatsApp
            </button>

            <button
              onClick={handleShare}
              className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors active:scale-95 flex items-center justify-center gap-2"
            >
              <Share2 size={20} />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
