import { Routes, Route } from 'react-router-dom';
import ArtworkList from './components/ArtworkList';
import ArtworkDetails from './components/ArtworkDetails';
import About from './components/About';
import NotFound from './components/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ArtworkList />} />
      <Route path="/artwork/:id" element={<ArtworkDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
