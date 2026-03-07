'use client';

import { useEffect } from 'react';
import { VideoType } from '@/lib/content';

type VideoModalProps = {
  videoUrl: string;
  title: string;
  videoType: VideoType;
  onClose: () => void;
};

const config = {
  youtube: {
    maxWidth: 'max-w-3xl',
    aspectRatio: 'aspect-video',
  },
  'youtube-short': {
    maxWidth: 'max-w-sm',
    aspectRatio: 'aspect-[9/16]',
  },
  tiktok: {
    maxWidth: 'max-w-sm',
    aspectRatio: 'aspect-[9/16]',
  },
  vimeo: {
    maxWidth: 'max-w-sm',
    aspectRatio: 'aspect-[9/16]',
  },
};

function buildEmbedUrl(url: string, videoType: VideoType): string {
  if (videoType === 'youtube' || videoType === 'youtube-short') {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}rel=0&modestbranding=1`;
  }
  if (videoType === 'vimeo') {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}muted=0`;
  }
  return url;
}

function PlatformIcon({ videoType }: { videoType: VideoType }) {
  if (videoType === 'tiktok') {
    return (
      <svg
        className="w-4 h-4 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.74a4.85 4.85 0 01-1.01-.05z" />
      </svg>
    );
  }

  if (videoType === 'vimeo') {
    return (
      <svg
        className="w-4 h-4 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 13.4C4.603 10.812 3.834 9.516 3.01 9.516c-.179 0-.806.378-1.881 1.132L0 9.48c1.185-1.044 2.351-2.084 3.501-3.128C5.08 4.908 6.266 4.16 7.05 4.09c1.871-.18 3.013 1.1 3.456 3.832.462 2.913.782 4.722.998 5.424.555 2.513 1.165 3.768 1.834 3.768.52 0 1.298-.824 2.355-2.477 1.054-1.652 1.621-2.91 1.7-3.756.154-1.42-.41-2.134-1.7-2.134-.605 0-1.23.14-1.868.415 1.24-4.053 3.596-6.025 7.085-5.927 2.58.07 3.798 1.748 3.667 5.181z" />
      </svg>
    );
  }

  // YouTube (youtube + youtube-short)
  return (
    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function VideoModal({
  videoUrl,
  title,
  videoType,
  onClose,
}: VideoModalProps) {
  const layout = config[videoType ?? 'youtube'];
  const embedUrl = buildEmbedUrl(videoUrl, videoType);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div
        className={`relative z-10 w-full ${layout.maxWidth} rounded-2xl overflow-hidden shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-burgundy-600">
          <div className="flex items-center gap-2">
            <PlatformIcon videoType={videoType} />
            <h3 className="font-serif text-white text-lg">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Video */}
        <div className={`${layout.aspectRatio} bg-black`}>
          <iframe
            src={embedUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-nude-100 flex items-center justify-between">
          <p className="text-xs text-stone-400 font-sans">
            Naciśnij Esc lub kliknij poza okno aby zamknąć
          </p>
          <button
            onClick={onClose}
            className="text-xs text-burgundy-500 hover:text-burgundy-600 font-sans font-medium transition-colors"
          >
            Zamknij ✕
          </button>
        </div>
      </div>
    </div>
  );
}
