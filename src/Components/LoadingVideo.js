import React, { useState, useEffect, useRef, cloneElement } from 'react';
import '../App.css';
import VideoCarga from '../Archivos/Videos/charge.mp4'

function LoadingVideo({ children }) {
    const [loading, setLoading] = useState(true);
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        const handleVideoEnd = () => {
            setLoading(false);
            videoElement.pause();
            videoElement.currentTime = videoElement.duration - 1;
        };
        videoElement.addEventListener('ended', handleVideoEnd);

        return () => {
            videoElement.removeEventListener('ended', handleVideoEnd);
        };
    }, []);

    return (
        <>
            {loading ? (
                <div className="loading-screen">
                    <video autoPlay muted ref={videoRef}>
                        <source src={VideoCarga} type="video/mp4" />
                    </video>
                </div>
            ) : (
                <div className="content">
                    {cloneElement(children, { loading })}
                </div>
            )}
        </>
    );
}

export default LoadingVideo;
