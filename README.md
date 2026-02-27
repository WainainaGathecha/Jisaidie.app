# Jisaidie MVP - Discover Local Businesses in Juja

A mobile-first web application for discovering local businesses and services in Juja. Built to solve the problem of finding reliable local services like salons, electronic shops, hardware stores, furniture shops, and more - all in one searchable directory.

**[See the Development Approach](./README_APPROACH.md)** for detailed planning and future feature guides.

## The Problem

Campus students struggle to find basic local services:
- Where can I get my hair done?
- Which hardware stores are nearby?
- Where's a good place to eat?
- Which salons are open on weekends?

Google Maps is cluttered and generic. Word-of-mouth is unreliable. Jisaidie solves this with a curated, mobile-first directory for Juja.

## The Solution

Jisaidie is a fast, simple directory of local businesses organized by category with powerful search and filtering. No ads. No clutter. Just local businesses you can trust immediately.

## MVP Features (Phase 1)

✅ **Business Directory** - Browse 12+ curated local businesses
✅ **Search** - Find by business name or service type
✅ **Category Browsing** - Filter by Beauty, Food, Hardware, Electronics, Furniture, Health & Fitness, Retail, Services
✅ **Neighborhood Filtering** - Filter by location/area
✅ **Business Details** - View address, phone, hours, services, description
✅ **Mobile-Responsive** - Optimized for phones (touch-friendly, fast)
✅ **Direct Contact** - Call and WhatsApp buttons for quick communication

## Future Features (Phase 2)

📌 **Bookmarks** - Save favorite businesses
⭐ **Ratings & Reviews** - User-submitted reviews
🗺️ **Google Maps Integration** - View locations on a map
👥 **Crowdsourced Listings** - Users can add new businesses
💾 **Backend Database** - Migrate from JSON to Firebase

See [README_APPROACH.md](./README_APPROACH.md) for detailed implementation guides.

## Tech Stack

**Frontend:**
- React 18 (with Vite for fast development)
- React Router v6 (for navigation)
- Tailwind CSS (mobile-first styling)
- Lucide React (icons)

**Data:**
- JSON (`src/data/businesses.json`) - lightweight, version-controlled
- No backend needed yet (will migrate to Firebase in Phase 2)

**Deployment:**
- Vercel (free, automatic deployments)

**Development:**
- Node.js 16+ with npm
- Vite (modern build tool)

## Project Structure

```
jisaidie-app/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Header with navigation
│   │   ├── SearchBar.jsx       # Search input
│   │   ├── CategoryFilter.jsx  # Category selection tabs
│   │   ├── NeighborhoodFilter.jsx # Location dropdown
│   │   ├── BusinessCard.jsx    # Listing card component
│   │   └── BusinessGrid.jsx    # Grid layout for cards
│   │
│   ├── pages/
│   │   ├── HomePage.jsx          # Home page with categories
│   │   ├── ListingsPage.jsx      # Search results with filters
│   │   └── BusinessDetailPage.jsx # Full business information
│   │
│   ├── hooks/
│   │   └── useSearch.js        # Search and filter logic
│   │
│   ├── utils/
│   │   └── searchHelpers.js    # Search, filter, helper functions
│   │
│   ├── data/
│   │   ├── businesses.json     # All business data
│   │   └── categories.json     # Category definitions
│   │
│   ├── App.jsx                 # Router setup
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles + Tailwind
│
├── index.html                  # HTML template
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind customization
├── postcss.config.js           # PostCSS config
├── .gitignore
└── README.md
```

## Data Structure

All business data is stored in `src/data/businesses.json`:

```json
{
  "id": 1,
  "name": "Studio Glam Salon",
  "category": "Beauty",
  "subcategory": "Salon",
  "neighborhood": "Downtown Juja",
  "address": "123 Main Street, Juja",
  "phone": "+254 700 000 001",
  "whatsapp": "+254 700 000 001",
  "hours": {
    "monday": "9:00 AM - 7:00 PM",
    "tuesday": "9:00 AM - 7:00 PM",
    ...
  },
  "services": ["Hair Cutting", "Hair Coloring", "Manicure"],
  "description": "Full-service salon specializing in modern cuts.",
  "image": "https://images.unsplash.com/...",
  "rating": 4.5
}
```

**Categories available:** Beauty, Food & Drinks, Hardware, Furniture, Electronics, Health & Fitness, Retail, Services

## Installation & Setup

### Prerequisites
- Node.js 16+ (download from [nodejs.org](https://nodejs.org))
- npm (comes with Node.js)
- Git

### Quick Start

1. **Clone the repository** (or use your current directory)
   ```bash
   cd jisaidie-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## How to Deploy

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy" (Vercel auto-detects React + Vite)
5. Share your live URL!

## Development Workflow

### Adding a New Business

Edit `src/data/businesses.json` and add an object:

```json
{
  "id": 13,
  "name": "Your Business Name",
  "category": "Beauty",
  "subcategory": "Salon",
  "neighborhood": "Downtown Juja",
  "address": "123 Street Name",
  "phone": "+254 700 000 000",
  "whatsapp": "+254 700 000 000",
  "hours": {
    "monday": "9:00 AM - 6:00 PM",
    "tuesday": "9:00 AM - 6:00 PM",
    "wednesday": "9:00 AM - 6:00 PM",
    "thursday": "9:00 AM - 6:00 PM",
    "friday": "9:00 AM - 7:00 PM",
    "saturday": "10:00 AM - 6:00 PM",
    "sunday": "Closed"
  },
  "services": ["Service 1", "Service 2"],
  "description": "Brief description",
  "image": "https://images.unsplash.com/...",
  "rating": 4.5
}
```

Save and the app will automatically reload.

### Adding a New Category

Edit `src/data/categories.json`:

```json
{
  "id": "your-category",
  "name": "Category Name",
  "icon": "IconName",  // From lucide-react
  "color": "color-name"
}
```

Available icons: See [lucide.dev](https://lucide.dev)

## Development Timeline

| Phase | Duration | Focus |
|-------|----------|-------|
| **Phase 1** | Week 1-2 | MVP with search, categories, neighborhoods, mobile optimization |
| **Phase 2** | Week 3-4 | User testing, bookmarks feature, ratings/reviews |
| **Phase 3** | Week 5+ | Google Maps, backend database, crowdsourced listings |

Currently: **✅ Phase 1 Complete** (MVP launched)

## Mobile-First Design

Jisaidie is optimized for mobile phones (the primary use case):

✅ Touch-friendly buttons (minimum 44×44px)
✅ Responsive layout (320px+)
✅ Fast load times (< 2 seconds on 4G)
✅ Minimal data usage
✅ Works on older phones
✅ No horizontal scrolling

## Features Explained

### 🔍 Search
Type any business name, category, or service. Real-time fuzzy search finds matches instantly.

### 🏷️ Categories
Browse by type (Beauty, Food, Hardware, etc.) without searching. Great for discovering new places.

### 📍 Neighborhood Filter
Filter businesses by area to find what's near you.

### 📞 Direct Contact
- **Call button** - Dials the business phone directly
- **WhatsApp button** - Opens WhatsApp chat
- **Share button** - Share business details with friends

### ⏰ Hours & Status
See if a business is open today and view complete operating hours.

## Future Expansion Guide

See **[README_APPROACH.md](./README_APPROACH.md)** for detailed implementation guides on:

📌 **Adding Bookmarks** - Save favorite businesses
⭐ **Adding Ratings & Reviews** - User feedback system
🗺️ **Adding Google Maps** - Interactive location view
🔐 **Adding Authentication** - User accounts with Firebase
💾 **Migrating to Database** - Scale beyond JSON storage

Each guide includes:
- Database schema changes
- Component code examples
- Step-by-step implementation
- Testing checklist
- Time estimates

## Success Metrics

**Week 1:** App is live and users can find relevant businesses
**Month 1:** 50+ campus students using it weekly
**Month 3:** Businesses reporting customer visits from Jisaidie
**Long-term:** Becomes the go-to resource for finding local services in Juja

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- --port 3001
```

**Changes not showing?**
- Clear browser cache (Ctrl+Shift+Del)
- Restart dev server (press `r` in terminal)
- Check browser console for errors

**Module not found errors?**
```bash
rm -rf node_modules
npm install
```

## Contributing

Found a bug or have a suggestion? 

1. Create an issue describing the problem
2. Fork the repo
3. Create a feature branch
4. Submit a pull request

## License

MIT - Feel free to use this project for learning or as a starter template.

---

**Built for campus students in Juja. Made with ❤️ by Wainaina Gathecha**

Questions? Open an issue or reach out. This project is open to feedback and community contributions.

### Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [React Router](https://reactrouter.com)
- [Lucide Icons](https://lucide.dev)
