import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

interface VideoLightboxProps {
  thumbnailSrc: string;
  videoUrl: string;
  triggerLabel?: string;
}

export function VideoLightbox({ thumbnailSrc, videoUrl, triggerLabel = 'Watch' }: VideoLightboxProps) {
  const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
  let embedUrl = videoUrl;
  
  if (isYouTube) {
    const videoIdMatch = videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);

    if (videoIdMatch && videoIdMatch[1]) {
      embedUrl = `https://www.youtube.com/embed/${videoIdMatch[1]}?autoplay=1`;
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button" className="hero-lightbox w-inline-block w-lightbox text-left border-0 p-0 bg-transparent cursor-pointer relative" aria-label={triggerLabel}>
          <img 
            alt="Hero Video" 
            className="hero-image transition-transform duration-500 hover:scale-105" 
            loading="lazy" 
            src={thumbnailSrc} 
          />
          <div className="hero-lightbox-content-wrapper pointer-events-none">
            <div>Special massege</div>
            <div className="hero-lightbox-content">
              <h6 className="heading-style-h6 is-white">{triggerLabel}</h6>
              <div className="hero-video">
                <img alt="" className="hero-video-image" loading="lazy" src="/icons/play-button.svg" />
              </div>
            </div>
          </div>
        </button>
      </Dialog.Trigger>
      
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 z-50 animate-in fade-in" />
        <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90vw] max-w-4xl z-50 bg-black rounded-[0.75rem] overflow-hidden shadow-2xl focus:outline-none animate-in zoom-in-95">
          <div className="relative pt-[56.25%] w-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={embedUrl}
              title="Video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <Dialog.Close asChild>
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-brand-red transition-colors focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon className="w-6 h-6" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default VideoLightbox;
