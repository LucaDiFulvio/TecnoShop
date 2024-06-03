'use client'
import Image from 'next/image';
import styles from './Banner.module.css';
import { useEffect } from 'react';
import { Suspense } from 'react';

export default function Banner() {
    let slideIndex: number = 1;

    useEffect(() => {
        showSlides(slideIndex);
    }, []);

    // Next/previous controls
    function plusSlides(n: number): void {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n: number): void {
        showSlides(slideIndex = n);
    }

    function showSlides(n: number): void {
        if (typeof document !== 'undefined') {
            let i: number;
            let slides: HTMLCollectionOf<Element> = document.getElementsByClassName(styles.mySlides);
            
            if (n > slides.length) { slideIndex = 1; }
            if (n < 1) { slideIndex = slides.length; }
            for (i = 0; i < slides.length; i++) {
                (slides[i] as HTMLElement).style.display = "none";
            }
            
            (slides[slideIndex - 1] as HTMLElement).style.display = "block";
            
        }
    }
    function Loading() {
        return <h2>🌀 Loading...</h2>;
      }
    return (
 
        <div className={styles.slideshowContainer}>
            {/* Full-width images with number and caption text */}
            <div className={`${styles.mySlides} ${styles.fade}`}>
                <Suspense fallback={<Loading />}>
                <Image src="https://res.cloudinary.com/degp5sdud/image/upload/v1713807213/Captura_de_pantalla_2024-04-22_191528_axokgn.png" alt='slideimg1' width={1400} height={96} loading="lazy"/>
                </Suspense>            
            </div>

            <div className={`${styles.mySlides} ${styles.fade}`}>
                <Image src="https://res.cloudinary.com/degp5sdud/image/upload/v1713807212/Captura_de_pantalla_2024-04-22_191507_oe2vyh.png"alt='slideimg2' width={1400} height={96} loading="lazy"/>
            </div>

            <div className={`${styles.mySlides} ${styles.fade}`}>
                <Image src="https://res.cloudinary.com/degp5sdud/image/upload/v1713807215/Captura_de_pantalla_2024-04-22_192328_pn6vda.png"alt='slideimg3' width={1400} height={96} loading="lazy"/>
            </div>

            {/* Next and previous buttons */}
            <button className={styles.prev} onClick={() => plusSlides(-1)}>&#10094;</button >
            <button  className={styles.next} onClick={() => plusSlides(1)}>&#10095;</button >
        </div>

    );
}
