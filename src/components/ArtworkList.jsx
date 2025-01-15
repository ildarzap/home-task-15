import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const ArtworkList = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await fetch('https://api.artic.edu/api/v1/artworks?limit=10');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArtworks(data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, []);

  if (loading) return <Loader />;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <ul className="artwork-list">
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <Link to={`/artwork/${artwork.id}`}>{artwork.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ArtworkList;
