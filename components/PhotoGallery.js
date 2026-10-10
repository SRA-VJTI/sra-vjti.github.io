'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './PhotoGallery.module.css';

const galleries = [
  {
    title: 'Events',
    folder: 'events',
    photos: [
      ['wall-e-workshop-kits.jpg', 'WALL-E workshop kits ready for participants'],
      ['sra-board.jpg', 'SRA board'],
      ['mario-demo.gif', 'Robot demonstration in the lab'],
      ['pixels-pixel-art.jpg', 'Pixel art creations at Pixels'],
      ['wall-e-line-up.gif', 'WALL-E lineup'],
      ['walle-2.7.jpeg', 'WALL-E v2.7 assembled robot'],
      ['workshop-classroom.jpeg', 'Students attending an SRA workshop'],
      ['workshop-participants.jpeg', 'SRA team helping workshop participants'],
    ],
    previews: [6, 5, 1],
  },
  {
    title: 'Projects',
    folder: 'projects',
    photos: [
      ['ballerina-front-view.jpg', 'Front view of a camera-equipped mobile robot'],
      ['custom-boot.jpg', 'Custom Boot'],
      ['duck.jpeg', 'Duck'],
      ['micro-mouse.jpeg', 'Micro Mouse'],
      ['mcqueen.jpeg', 'McQueen'],
      ['auto-joystick.jpeg', 'Auto Joystick'],
      ['quadcopter-prototype.jpeg', 'Quadcopter prototype'],
      ['amazing-hand.jpeg', 'Amazing Hand'],
    ],
    previews: [0, 7, 1],
  },
];

const photoUrl = (gallery, index) =>
  `/static/images/home-gallery/${gallery.folder}/${gallery.photos[index][0]}`;

export default function PhotoGallery({ group, className = '' }) {
  const groupIndex = group === 'events' ? 0 : 1;
  const previewGallery = galleries[groupIndex];
  const [selection, setSelection] = useState(null);
  const dialogRef = useRef(null);
  const thumbnailRef = useRef(null);
  const touchStart = useRef(null);
  const wheelTime = useRef(0);
  const gallery = selection && galleries[selection.group];

  const move = (direction) => {
    setSelection((current) => {
      if (!current) return current;
      const count = galleries[current.group].photos.length;
      return { ...current, index: (current.index + direction + count) % count };
    });
  };

  useEffect(() => {
    if (!selection) return;
    const dialog = dialogRef.current;
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [selection?.group]);

  useEffect(() => {
    thumbnailRef.current?.scrollIntoView({
      block: 'nearest',
      inline: 'nearest',
    });
  }, [selection?.index, selection?.group]);

  return (
    <>
      <div className={styles.stackWrapper}>
        <button
          className={`photo-stack ${styles.stack} ${className}`}
          aria-label={`Open ${previewGallery.title} gallery, ${previewGallery.photos.length} photos`}
          onClick={() => setSelection({ group: groupIndex, index: previewGallery.previews[2] })}
        >
          {previewGallery.previews.slice(0, 3).map((index) => (
            <img key={index} src={photoUrl(previewGallery, index)} alt={previewGallery.photos[index][1]} loading='lazy' />
          ))}
        </button>
      </div>
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby={`gallery-title-${group}`}
        onCancel={() => setSelection(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelection(null);
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault();
            move(event.key === 'ArrowRight' ? 1 : -1);
          }
        }}
      >
        {gallery && (
          <div className={styles.viewer}>
            <div className={styles.toolbar}>
              <h2 id={`gallery-title-${group}`}>{gallery.title}</h2>
              <span aria-live='polite'>
                {selection.index + 1} / {gallery.photos.length}
              </span>
              <button
                aria-label='Close gallery'
                onClick={() => setSelection(null)}
                autoFocus
              >
                ✕
              </button>
            </div>
            <div
              className={styles.stage}
              onTouchStart={(event) => {
                touchStart.current = event.touches[0].clientX;
              }}
              onTouchEnd={(event) => {
                if (touchStart.current === null) return;
                const distance =
                  event.changedTouches[0].clientX - touchStart.current;
                if (Math.abs(distance) > 50) move(distance < 0 ? 1 : -1);
                touchStart.current = null;
              }}
              onWheel={(event) => {
                const delta =
                  Math.abs(event.deltaX) > Math.abs(event.deltaY)
                    ? event.deltaX
                    : event.deltaY;
                if (
                  Math.abs(delta) > 20 &&
                  Date.now() - wheelTime.current > 400
                ) {
                  wheelTime.current = Date.now();
                  move(delta > 0 ? 1 : -1);
                }
              }}
            >
              <button
                className={styles.previous}
                aria-label='Previous photo'
                onClick={() => move(-1)}
              >
                ‹
              </button>
              <div
                className={
                  gallery.folder === 'projects' && selection.index === 0
                    ? styles.landscapeFrame
                    : styles.photoFrame
                }
              >
                <img
                  src={photoUrl(gallery, selection.index)}
                  alt={gallery.photos[selection.index][1]}
                />
              </div>
              <button
                className={styles.next}
                aria-label='Next photo'
                onClick={() => move(1)}
              >
                ›
              </button>
            </div>
            <div
              className={styles.thumbnails}
              aria-label={`${gallery.title} thumbnails`}
            >
              {gallery.photos.map(([file, alt], index) => (
                <button
                  key={file}
                  ref={selection.index === index ? thumbnailRef : null}
                  aria-label={`View photo ${index + 1}: ${alt}`}
                  aria-pressed={selection.index === index}
                  onClick={() => setSelection({ ...selection, index })}
                >
                  <img src={photoUrl(gallery, index)} alt='' loading='lazy' />
                </button>
              ))}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
