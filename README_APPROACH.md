# Jisaidie.app - MVP Development Approach

**Project Goal:** Create a local business directory MVP for campus students to easily discover and find local services in Juja.

**Development Philosophy:** User-first, mobile-first, lean MVP → iterate based on feedback.

---

## Table of Contents
1. [MVP Overview](#mvp-overview)
2. [Core Features](#core-features)
3. [Design Principles](#design-principles)
4. [Tech Stack](#tech-stack)
5. [Project Structure](#project-structure)
6. [Development Timeline](#development-timeline)
7. [Data Model](#data-model)
8. [Future Feature Guides](#future-feature-guides)
9. [Success Metrics](#success-metrics)

---

## MVP Overview

**Target Users:** Campus students (16-25 years old, primarily mobile users)

**Problem Solved:** Finding local services (salons, hardware, food, etc.) in Juja is time-consuming and unreliable.

**Solution:** A fast, mobile-first directory where students can search, browse by category, filter by neighborhood, and view business details.

**Launch Timeline:** 2-3 weeks of iterative development with user testing

---

## Core Features

### Phase 1: Foundation (Week 1)
- [x] Business directory UI (card-based layout)
- [x] Search functionality (by business name, service type)
- [x] Category browsing (Beauty, Hardware, Food, etc.)
- [x] Mobile-responsive design (mobile-first CSS)

### Phase 2: Details & Filtering (Week 2)
- [x] Business detail pages (full info: phone, hours, address, services)
- [x] Neighborhood filter
- [x] Filter UI with clear/reset functionality
- [x] Routing (Home → Listings → Detail pages)

### Phase 3: Polish & Deploy (Week 2-3)
- [x] User testing with 5+ campus students
- [x] Bug fixes & UX improvements
- [x] Mobile optimization pass
- [x] Deploy to Vercel
- [ ] Gather feedback for Phase 2

---

## Design Principles

### 1. **Mobile-First (Non-Negotiable)**
- Design starts with 320px viewport (smallest phones)
- Touch-friendly buttons (min 44×44px)
- Vertical scrolling primary interaction
- Minimize horizontal scrolling entirely
- Fast load times (target: <2s on 4G)

### 2. **Simplicity Over Completeness**
- Do one thing well: help users find a business
- Every feature must answer: "Would a campus student miss this?"
- If unsure, cut it from MVP and add based on feedback

### 3. **Offline-Friendly**
- Data stored in JSON → no backend dependencies
- Works even if internet flickers
- Fast because no network latency

### 4. **Discoverability**
- Students should be able to:
  - **Browse** categories without searching (explore mode)
  - **Search** when they know what they want
  - **Filter** by location if they care about proximity

---

## Tech Stack

**Frontend:**
- **React 18** (Vite) — Component-based, good for mobile UIs
- **React Router v6** — Client-side routing (no backend needed)
- **Tailwind CSS** — Utility-first styling, mobile-responsive by default
- **Lucide React** — Icons for categories, native feeling

**Data:**
- **JSON** (`businesses.json`) — Simple, version-controllable, no DB setup needed
- Hosted in repo, loaded on app startup

**Deployment:**
- **Vercel** — Free, automatic deployments from GitHub, fast in Africa

**No Backend Needed Yet** — When we reach 50+ users regularly requesting edits, we'll add Firebase.

---

## Project Structure

```
jisaidie-app/
├── public/
│   └── images/
│       └── [business images]
│
├── src/
│   ├── data/
│   │   ├── businesses.json       # All business data
│   │   └── categories.json       # Category definitions
│   │
│   ├── components/
│   │   ├── Navbar.jsx            # Header with logo/back button
│   │   ├── SearchBar.jsx         # Search input
│   │   ├── CategoryFilter.jsx    # Category tabs
│   │   ├── NeighborhoodFilter.jsx # Location dropdown
│   │   ├── BusinessCard.jsx      # Listing card component
│   │   ├── BusinessGrid.jsx      # Grid layout
│   │   └── FilterPanel.jsx       # Mobile filter drawer
│   │
│   ├── pages/
│   │   ├── HomePage.jsx          # Hero + featured categories
│   │   ├── ListingsPage.jsx      # Search results + filters
│   │   └── BusinessDetailPage.jsx # Full business info
│   │
│   ├── hooks/
│   │   ├── useSearch.js          # Search logic
│   │   └── useFilter.js          # Filter logic
│   │
│   ├── utils/
│   │   └── searchHelpers.js      # Fuzzy search, helpers
│   │
│   ├── App.jsx                   # Router setup
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles + Tailwind
│
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## Development Timeline

### Week 1: Core MVP
- Day 1-2: Project setup (React + Vite + Tailwind)
- Day 3: Component structure (SearchBar, CategoryFilter, BusinessCard)
- Day 4: Search & filter logic
- Day 5: Mobile optimization pass
- **Deliverable:** Working app, test with 3 users

### Week 2: Refinement
- Day 1-2: Business detail pages + full routing
- Day 3: Neighborhood filter
- Day 4: Bug fixes, UX improvements
- Day 5: Mobile testing on real phones
- **Deliverable:** MVP ready for wider testing

### Week 3: Launch
- Day 1-2: Deploy to Vercel
- Day 3-4: User testing (10+ students)
- Day 5: Gather feedback, plan Phase 2
- **Deliverable:** Live MVP + feedback roadmap

---

## Data Model

### `businesses.json` Structure

```json
{
  "businesses": [
    {
      "id": 1,
      "name": "Studio Glam Salon",
      "category": "Beauty",
      "subcategory": "Salon",
      "neighborhood": "Downtown Juja",
      "address": "123 Main Street, Juja",
      "phone": "+254 700 000 000",
      "whatsapp": "+254 700 000 000",
      "hours": {
        "monday": "9:00 AM - 7:00 PM",
        "tuesday": "9:00 AM - 7:00 PM",
        "wednesday": "9:00 AM - 7:00 PM",
        "thursday": "9:00 AM - 7:00 PM",
        "friday": "9:00 AM - 9:00 PM",
        "saturday": "10:00 AM - 8:00 PM",
        "sunday": "Closed"
      },
      "services": ["Hair Cutting", "Hair Coloring", "Manicure", "Pedicure"],
      "description": "Full-service salon specializing in modern cuts and color treatments.",
      "image": "/images/studio-glam.jpg",
      "rating": 4.5,
      "reviewCount": 12
    }
  ]
}
```

### `categories.json` Structure

```json
{
  "categories": [
    {
      "id": "beauty",
      "name": "Beauty",
      "icon": "Sparkles",
      "color": "pink"
    },
    {
      "id": "food",
      "name": "Food & Drinks",
      "icon": "UtensilsCrossed",
      "color": "orange"
    }
  ]
}
```

---

## Future Feature Guides

### 1. Adding Bookmarks/Favorites

**Database Changes:**
```javascript
// Add to businesses.json
{
  "id": 1,
  "name": "Studio Glam Salon",
  "isFavorite": false  // New field
}
```

**Implementation Steps:**

1. **Create `useBookmarks` hook:**
```javascript
// hooks/useBookmarks.js
export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('jisaidie-bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleBookmark = (businessId) => {
    setBookmarks(prev => 
      prev.includes(businessId)
        ? prev.filter(id => id !== businessId)
        : [...prev, businessId]
    );
  };

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('jisaidie-bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  return { bookmarks, toggleBookmark, isSaved: (id) => bookmarks.includes(id) };
}
```

2. **Add bookmark button to BusinessCard:**
```javascript
// components/BusinessCard.jsx
import { Heart } from 'lucide-react';

export function BusinessCard({ business }) {
  const { bookmarks, toggleBookmark } = useBookmarks();
  const isSaved = bookmarks.includes(business.id);

  return (
    <div className="card">
      <button
        onClick={() => toggleBookmark(business.id)}
        className="absolute top-2 right-2"
      >
        <Heart 
          size={20} 
          fill={isSaved ? "red" : "none"} 
          color={isSaved ? "red" : "gray"}
        />
      </button>
      {/* Rest of card */}
    </div>
  );
}
```

3. **Add "Saved" filter to ListingsPage:**
```javascript
// pages/ListingsPage.jsx
const [showOnlySaved, setShowOnlySaved] = useState(false);

const filtered = showOnlySaved 
  ? businesses.filter(b => bookmarks.includes(b.id))
  : businesses; // existing filter logic
```

4. **Testing:**
   - Click heart on 3 different businesses
   - Refresh page → bookmarks should persist
   - Toggle filter on/off
   - Verify count updates

**Time Estimate:** 2-3 hours

---

### 2. Adding Ratings & Reviews

**Database Schema:**
```javascript
// Add new collection to data/reviews.json
{
  "reviews": [
    {
      "id": "review-1",
      "businessId": 1,
      "rating": 5,
      "comment": "Amazing service!",
      "author": "Anonymous",
      "timestamp": "2026-02-27T10:30:00Z",
      "helpful": 3
    }
  ]
}
```

**Implementation Steps:**

1. **Create review context** (since multiple components need this):
```javascript
// contexts/ReviewContext.jsx
import { createContext, useState, useEffect } from 'react';
import reviewsData from '../data/reviews.json';

export const ReviewContext = createContext();

export function ReviewProvider({ children }) {
  const [reviews, setReviews] = useState(reviewsData.reviews);

  const addReview = (businessId, { rating, comment, author }) => {
    const newReview = {
      id: `review-${Date.now()}`,
      businessId,
      rating,
      comment,
      author,
      timestamp: new Date().toISOString(),
      helpful: 0
    };
    setReviews([...reviews, newReview]);
    // In Phase 2: POST to backend
  };

  const getBusinessReviews = (businessId) => {
    return reviews.filter(r => r.businessId === businessId);
  };

  const getAverageRating = (businessId) => {
    const businessReviews = getBusinessReviews(businessId);
    if (businessReviews.length === 0) return 0;
    const sum = businessReviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / businessReviews.length).toFixed(1);
  };

  return (
    <ReviewContext.Provider value={{ 
      addReview, 
      getBusinessReviews, 
      getAverageRating 
    }}>
      {children}
    </ReviewContext.Provider>
  );
}
```

2. **Create ReviewList component:**
```javascript
// components/ReviewList.jsx
import { useContext } from 'react';
import { ReviewContext } from '../contexts/ReviewContext';
import { Star } from 'lucide-react';

export function ReviewList({ businessId }) {
  const { getBusinessReviews } = useContext(ReviewContext);
  const reviews = getBusinessReviews(businessId);

  return (
    <div className="space-y-4">
      {reviews.map(review => (
        <div key={review.id} className="border-l-4 border-yellow-400 pl-4 py-2">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < review.rating ? "gold" : "none"}
                  color={i < review.rating ? "gold" : "gray"}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">{review.author}</span>
          </div>
          <p className="text-sm mt-2">{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
```

3. **Add ReviewForm component:**
```javascript
// components/ReviewForm.jsx
import { useState, useContext } from 'react';
import { ReviewContext } from '../contexts/ReviewContext';
import { Star } from 'lucide-react';

export function ReviewForm({ businessId }) {
  const { addReview } = useContext(ReviewContext);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(businessId, {
      rating,
      comment,
      author: 'Anonymous'
    });
    setComment('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded-lg">
      <label className="block text-sm font-semibold mb-2">Rate this business</label>
      <div className="flex gap-2 mb-4">
        {[1, 2, 3, 4, 5].map(star => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            className="p-1"
          >
            <Star 
              size={24}
              fill={star <= rating ? "gold" : "none"}
              color={star <= rating ? "gold" : "gray"}
            />
          </button>
        ))}
      </div>

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Share your experience..."
        className="w-full p-2 border rounded-lg mb-2"
        rows="4"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold"
        disabled={!comment.trim()}
      >
        Submit Review
      </button>

      {submitted && <p className="text-green-600 text-sm mt-2">✓ Review posted!</p>}
    </form>
  );
}
```

4. **Integrate into BusinessDetailPage:**
```javascript
// pages/BusinessDetailPage.jsx
import { ReviewList } from '../components/ReviewList';
import { ReviewForm } from '../components/ReviewForm';

export function BusinessDetailPage() {
  // ... existing code
  
  return (
    <div>
      {/* Business info */}
      
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Reviews</h2>
        <ReviewForm businessId={business.id} />
        <div className="mt-6">
          <ReviewList businessId={business.id} />
        </div>
      </div>
    </div>
  );
}
```

5. **Testing:**
   - Submit a review on any business
   - Refresh page → review should persist
   - Submit multiple reviews, verify they stack
   - Click helpful button (add logic)

**Time Estimate:** 4-5 hours

---

### 3. Adding Google Maps Integration

**Setup:**

1. **Get Google Maps API Key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create project "Jisaidie"
   - Enable Maps JavaScript API + Places API
   - Create API key (restrict to your domain later)

2. **Install dependency:**
```bash
npm install @react-google-maps/api
```

3. **Create MapComponent:**
```javascript
// components/BusinessMap.jsx
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '8px'
};

const jujaBounds = {
  center: { lat: -0.6, lng: 37.1 }, // Juja coordinates
  zoom: 13
};

export function BusinessMap({ business }) {
  if (!business.coordinates) return null;

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={business.coordinates}
        zoom={15}
      >
        <Marker
          position={business.coordinates}
          label={business.name[0]}
          title={business.name}
        />
      </GoogleMap>
    </LoadScript>
  );
}
```

4. **Update businesses.json with coordinates:**
```json
{
  "id": 1,
  "name": "Studio Glam Salon",
  "coordinates": {
    "lat": -0.601355,
    "lng": 37.079932
  }
}
```

5. **Add to BusinessDetailPage:**
```javascript
import { BusinessMap } from '../components/BusinessMap';

export function BusinessDetailPage() {
  return (
    <div>
      {/* Address section */}
      <div className="my-6">
        <h3 className="font-bold mb-3">Location</h3>
        <BusinessMap business={business} />
        <p className="text-sm text-gray-600 mt-2">{business.address}</p>
      </div>
    </div>
  );
}
```

6. **Add "Get Directions" button:**
```javascript
<a
  href={`https://maps.google.com/?q=${encodeURIComponent(business.address)}`}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-3 rounded-lg font-semibold"
>
  <MapPin size={20} />
  Get Directions
</a>
```

7. **Environment Setup:**
```env
# .env.local
VITE_GOOGLE_MAPS_KEY=your_api_key_here
```

**Notes:**
- Maps API is free up to 28,000+ monthly usage
- "Get Directions" link works even without API
- Add coordinates to businesses.json in batches (30 min per 10 businesses)

**Time Estimate:** 3-4 hours

---

## Success Metrics

### MVP Launch Success
- ✅ App is live and accessible
- ✅ Search works (finds businesses in <500ms)
- ✅ Mobile feels native (no zoom required, fast scrolling)
- ✅ 5 campus students can use it without instructions

### Week 2 Goals
- 10+ unique daily users
- Average session time > 2 minutes
- 70%+ search success rate (users find what they wanted)
- 0 reported critical bugs

### Month 1 Goals
- 50+ weekly active users
- 5+ businesses get visits from the app (via phone calls)
- Repeat usage rate > 30% (users come back)
- Organic referrals from friends (overhear: "Just use Jisaidie")

### Beyond
- When we have >100 weekly users: add bookmarks
- When we have >500 weekly users: add reviews
- When we have >1000 weekly users: consider database + user authentication

---

## Notes for Implementation

1. **Mobile Testing:** Test on actual phones at 3G speeds early and often
2. **Accessibility:** Ensure buttons are 44×44px, text is readable without zooming
3. **Performance:** Use React.memo for expensive components, lazy load images
4. **Data Validation:** Validate all JSON data on app startup
5. **Error Handling:** Show friendly errors ("Oops, something went wrong")

---

**Next Step:** Once this approach is approved, proceed with project setup and MVP implementation.

