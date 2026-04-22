'use client';

import { useState } from 'react';
import { portfolioItems, VideoType } from '@/lib/content';
import VideoModal from './VideoModal';

const PLATFORM_BADGE: Record<
  NonNullable<VideoType>,
  { label: string; bg: string }
> = {
  youtube: { label: 'YouTube', bg: 'bg-red-600' },
  'youtube-short': { label: 'Shorts', bg: 'bg-red-600' },
  tiktok: { label: 'TikTok', bg: 'bg-black' },
  vimeo: { label: 'Vimeo', bg: 'bg-[#1ab7ea]' },
};

function getThumbnail(
  videoUrl: string | null,
  videoType: VideoType,
  fallback: string | null
): string {
  if (!videoUrl) return fallback ?? '';

  if (videoType === 'youtube' || videoType === 'youtube-short') {
    const match = videoUrl.match(/embed\/([^?]+)/);
    if (match) return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
  }

  if (videoType === 'vimeo') {
    const match = videoUrl.match(/video\/(\d+)/);
    if (match) return `https://vumbnail.com/${match[1]}.jpg`;
  }

  return fallback ?? '';
}

export default function PortfolioSection() {
  const [activeVideo, setActiveVideo] = useState<{
    url: string;
    title: string;
    videoType: VideoType;
  } | null>(null);

  return (
    <section id="portfolio" className="py-24 px-6 bg-nude-100">
      <div className="max-w-5xl mx-auto">
        <p className="text-center font-sans text-sm tracking-widest uppercase text-burgundy-300 mb-3">
          Portfolio
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-center text-burgundy-600 mb-4">
          Moje realizacje
        </h2>
        <p className="text-center text-stone-500 font-sans mb-14 max-w-lg mx-auto">
          Każdy projekt tworzę z dbałością o autentyczność i estetykę.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolioItems.map((work) => {
            const thumbnail = getThumbnail(
              work.videoUrl,
              work.videoType,
              work.image
            );
            const badge = work.videoType
              ? PLATFORM_BADGE[work.videoType]
              : null;

            return (
              <div
                key={work.id}
                onClick={() => {
                  if (work.videoUrl) {
                    setActiveVideo({
                      url: work.videoUrl,
                      title: work.title,
                      videoType: work.videoType,
                    });
                  }
                }}
                className={`group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  work.videoUrl ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                {/* Miniatura */}
                <img
                  src={thumbnail}
                  alt={work.title}
                  loading="lazy"
                  style={
                    work.videoType === 'vimeo'
                      ? { objectPosition: 'center 18%' }
                      : undefined
                  }
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badge platformy */}
                {badge && (
                  <div className="absolute top-3 right-3">
                    <span
                      className={`${badge.bg} text-white text-xs font-sans font-medium px-2 py-1 rounded-full`}
                    >
                      {badge.label}
                    </span>
                  </div>
                )}

                {/* Play button */}
                {work.videoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center group-hover:bg-burgundy-500 transition-all duration-300 shadow-lg">
                      <svg
                        className="w-6 h-6 text-burgundy-500 group-hover:text-white ml-1 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Overlay info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-burgundy-700/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs text-rose-blush font-sans tracking-wider uppercase">
                    {work.type}
                  </span>
                  <h3 className="text-white font-serif text-lg mt-0.5">
                    {work.title}
                  </h3>
                  <p className="text-nude-200 text-sm font-sans">
                    {work.brand}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {activeVideo && (
        <VideoModal
          videoUrl={activeVideo.url}
          title={activeVideo.title}
          videoType={activeVideo.videoType}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </section>
  );
}
