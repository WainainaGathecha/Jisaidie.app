import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { ListingsPage } from './pages/ListingsPage';
import { BusinessDetailPage } from './pages/BusinessDetailPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/business/:id" element={<BusinessDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
