import * as LucideIcons from 'lucide-react';
import categories from '../data/categories.json';

export function CategoryFilter({ selectedCategory, onSelectCategory }) {
  const handleScroll = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full -mx-4 px-4 overflow-x-auto scrollbar-hide">
      <div className="flex gap-2 min-w-max pb-2" onWheel={handleScroll}>
        {/* All button */}
        <button
          onClick={() => onSelectCategory('all')}
          className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all flex-shrink-0 ${
            selectedCategory === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          All
        </button>

        {/* Category buttons */}
        {categories.map(category => {
          const IconComponent = LucideIcons[category.icon];
          const isSelected = selectedCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all flex items-center gap-2 flex-shrink-0 ${
                isSelected
                  ? `bg-${category.color}-600 text-white`
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {IconComponent && <IconComponent size={18} />}
              {category.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Add this CSS to hide scrollbar
const style = document.createElement('style');
style.textContent = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
document.head.appendChild(style);
