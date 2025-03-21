import { useEffect, useState } from 'react';
import Image from 'next/image';
import { InstagramMedia } from '../types/instagram';

interface InstagramFeedProps {
  accessToken: string;
}

const InstagramFeed = ({ accessToken }: InstagramFeedProps) => {
  const [media, setMedia] = useState<InstagramMedia[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch(`/api/instagram?access_token=${accessToken}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram media');
        }
        
        const data = await response.json();
        setMedia(data.data);
      } catch (err) {
        setError('Failed to load Instagram feed');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, [accessToken]);

  if (loading) return <div>Loading Instagram feed...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!media.length) return <div>No media found</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {media.map((item) => (
        <a 
          key={item.id} 
          href={item.permalink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          {item.media_type === 'VIDEO' ? (
            <video 
              src={item.media_url} 
              controls 
              className="w-full h-64 object-cover"
            />
          ) : (
            <div className="relative w-full h-64">
              <Image
                src={item.media_url}
                alt={item.caption || 'Instagram post'}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
          <p className="mt-2 text-sm truncate">{item.caption || 'Instagram post'}</p>
        </a>
      ))}
    </div>
  );
};

export default InstagramFeed;