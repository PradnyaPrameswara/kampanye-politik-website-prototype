import React from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@ui-sdk/react/dialog';
import { XIcon } from 'lucide-react';

interface VideoLightboxProps {
  thumbnailSrc: string;
  videoUrl: string;
  triggerLabel?: string;
}

export function VideoLightbox({ thumbnailSrc, videoUrl, triggerLabel = 'Saksikan' }: VideoLightboxProps) {
  const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
  let embedUrl = videoUrl;
  
  if (isYouTube) {
    const videoIdMatch = videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);

    if (videoIdMatch && videoIdMatch[1]) {
      embedUrl = `https://www.youtube.com/embed/${videoIdMatch[1]}?autoplay=1`;
    }
  }

  return (
    <Dialog>
      <DialogTrigger render={<button type="button" className="hero-lightbox w-inline-block w-lightbox text-left border-0 p-0 bg-transparent cursor-pointer relative" aria-label={triggerLabel} />}>
        <img 
          alt="Video utama" 
          className="hero-image transition-transform duration-500 hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none" 
          loading="lazy" 
          src={thumbnailSrc} 
        />
        <div className="hero-lightbox-content-wrapper pointer-events-none">
          <div>Special message</div>
          <div className="hero-lightbox-content">
            <div className="heading-style-h6 is-white">{triggerLabel}</div>
            <div className="hero-video">
              <img alt="" className="hero-video-image" loading="lazy" src="/icons/play-button.svg" />
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogBackdrop className="fixed inset-0 z-50 bg-black/10 supports-backdrop-filter:backdrop-blur-xs transition-opacity duration-100 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0" />
      <DialogContent className="fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-black border-none p-0 rounded-[0.75rem] overflow-hidden shadow-2xl ring-1 ring-foreground/10 transition duration-100 data-[starting-style]:opacity-0 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:scale-95">
        <DialogTitle className="sr-only">Pemutar Video</DialogTitle>
        <div className="relative pt-[56.25%] w-full">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={embedUrl}
            title="Pemutar video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <DialogClose className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-brand-red transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black" aria-label="Tutup">
          <XIcon className="w-6 h-6" />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

export default VideoLightbox;
