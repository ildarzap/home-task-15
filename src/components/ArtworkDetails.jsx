import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from './Loader';

const ArtworkDetails = () => {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        const response = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArtwork(data.data);
      } catch (err) {
        console.error(err);
        navigate('/404', { replace: true });
      } finally {
        setLoading(false);
      }
    };

    fetchArtwork();
  }, [id, navigate]);

  if (loading) return <Loader />;

  if (!artwork) return <p>Произведение искусства не найдено</p>;

  return (
    <div className="artwork-details">
      <h1>{artwork.title}</h1>
      {artwork.image_id && (
        <img
          src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
          alt={artwork.title}
        />
      )}
      <p>{artwork.artist_title}</p>
    </div>
  );
};

export default ArtworkDetails;
