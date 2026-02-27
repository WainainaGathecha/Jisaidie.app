import { Search, X } from 'lucide-react';

export function SearchBar({ value, onChange, placeholder = "Search businesses..." }) {
  return (
    <div className="relative w-full">
      <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
        <Search size={20} className="text-gray-400 flex-shrink-0" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none mx-3 text-base"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="p-1 hover:bg-gray-300 rounded transition-colors"
            aria-label="Clear search"
          >
            <X size={18} className="text-gray-500" />
          </button>
        )}
      </div>
    </div>
  );
}
