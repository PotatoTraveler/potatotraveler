// components/InstagramFeed.tsx
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface InstagramPost {
    id: string;
    media_url: string;
    caption?: string;
    permalink: string;
    timestamp: string;
}

interface InstagramFeedProps {
    accessToken: string;
    limit?: number;
    className?: string;
}

const InstagramFeed: React.FC<InstagramFeedProps> = ({
    accessToken,
    limit = 8,
    className = '',
}) => {
    const [posts, setPosts] = useState<InstagramPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchInstagramFeed = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,permalink&access_token=${accessToken}&limit=${limit}`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch Instagram feed');
                }

                const data = await response.json();
                setPosts(data.data);
            } catch (err) {
                setError('Error fetching Instagram feed');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (accessToken) {
            fetchInstagramFeed();
        }
    }, [accessToken, limit]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === posts.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? posts.length - 1 : prevIndex - 1
        );
    };

    if (loading) {
        return <div className="text-center p-8">Loading Instagram feed...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 p-8">{error}</div>;
    }

    if (posts.length === 0) {
        return <div className="text-center p-8">No Instagram posts found.</div>;
    }

    return (

        <div className="container mx-auto px-4">
            <h2 className="text-4xl text-center mb-6">Follow My Journey</h2>
            <p className="text-center text-lg mb-12">@potatotraveler</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                <div className={`relative overflow-hidden w-full ${className}`}>
                    <div className="flex items-center justify-between absolute top-1/2 transform -translate-y-1/2 w-full px-4 z-10">
                        <button
                            onClick={prevSlide}
                            className="bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
                            aria-label="Next image"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <div className="relative h-96 w-full overflow-hidden rounded-lg">
                            {posts.map((post, index) => (
                                <div
                                    key={post.id}
                                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                        }`}
                                >
                                    <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={post.media_url}
                                                alt={post.caption || 'Instagram post'}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                style={{ objectFit: 'cover' }}
                                                priority={index === currentIndex}
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                                <p className="text-white text-sm line-clamp-2">
                                                    {post.caption || 'Instagram post'}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center space-x-2">
                            {posts.map((_, index) => (
                                <button
                                    key={index}
                                    className={`h-2 rounded-full transition-all ${index === currentIndex ? 'w-6 bg-gray-800' : 'w-2 bg-gray-300'
                                        }`}
                                    onClick={() => setCurrentIndex(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 text-center">
                <a href="https://instagram.com/potatotraveler" target="_blank" rel="noopener noreferrer" className="btn">
                    Follow on Instagram
                </a>
            </div>
        </div>

    );
};

export default InstagramFeed;