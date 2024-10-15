import React, { useEffect, useRef, useState } from 'react';
import './tester.scss';
import Navbar from "../navbar/Navbar";
import { readRemoteFile, usePapaParse } from 'react-papaparse';
// import csvData from "./data.csv";

const Test = () => {

  const { readString } = usePapaParse();
  const csvLink = 'https://webmaster.pornlib.com/?show=export&action=generate&aid=399&channel=!&protocol=https&pr=0&cnt=100&tmb=0&tcnt=1&ord=0&rating=0&delimeter=%7C&el=0&fr=0&f=&field1=1&field2=2&field3=3&field4=4&field5=5&field7=7&field10=10&field11=11&field12=12&field13=13';

  const csvData = `VID|URL|THUMBS|TITLE|CHANNEL|LENGHT|DATE|PORNSTARS|MAIN_THUMB|VIDEO_TRAILER
571863|https://prlvid.com/v/cyVL|https://pics.pornlib.com/media/videos/tmb/571863/1.jpg,https://pics.pornlib.com/media/videos/tmb/571863/2.jpg,https://pics.pornlib.com/media/videos/tmb/571863/3.jpg,https://pics.pornlib.com/media/videos/tmb/571863/4.jpg,https://pics.pornlib.com/media/videos/tmb/571863/5.jpg|Teen slut covered in cum and piss after hard anal pounding|Anal,Brunette,Doggystyle,Fetish,HD,Teen|5:31|2024-10-08||https://pics.pornlib.com/media/videos/tmb/571863/18.jpg|https://pics.pornlib.com/media/videos/tmb/571863/571863.mp4
`

  const CSVString = `Column 1,Column 2,Column 3,Column 4
  1-1,1-2,1-3,1-4
  2-1,2-2,2-3,2-4
  3-1,3-2,3-3,3-4
  4,5,6,7`;

  const [data, setData] = useState([])

  useEffect(() => {
    // Parse CSV data when component mounts
    readString(csvData, {
      header: true, // Set header to true to use the first row as the header
      complete: (results) => {
        setData(results.data); // Set the parsed CSV data into state
      },
    });
  }, []);

  const videoRef = useRef(null); // Create a reference for the video element
  const [isUserInteracted, setIsUserInteracted] = useState(false);

  useEffect(() => {
    // Listen for any user interaction (click, keypress) to allow playing the video
    const handleUserInteraction = () => {
      setIsUserInteracted(true); // Mark user as interacted
      window.removeEventListener('click', handleUserInteraction); // Remove listener once interacted
    };

    window.addEventListener('click', handleUserInteraction);

    return () => {
      window.removeEventListener('click', handleUserInteraction); // Cleanup listener
    };
  }, []);

  // Function to handle video playback on hover
  const handleMouseEnter = () => {
    if (videoRef.current && isUserInteracted) {
      videoRef.current.play().catch((error) => {
        console.error("Playback error:", error);
      }); // Play video on hover if the user interacted
      console.log("play");

    }
  };

  // Function to handle stopping the video when the mouse leaves
  const handleMouseLeave = () => {
    if (videoRef.current && isUserInteracted) {
      videoRef.current.pause(); // Pause video when hover stops
      videoRef.current.currentTime = 0; // Reset video to the start
    }
  };

  return (
    <>
      <Navbar />
      {/* <button onClick={handleString}>Click to Parse</button> */}
      <div className="tube">
        {data.length > 0 && data.map((video, index) => (
          <div key={index} className="video-item">
            <div className='video-details' id='viddet' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              {/* Video thumbnail */}
              {video.THUMBS && video.THUMBS.split(',').map((thumb, idx) => (
                <img key={idx} src={thumb.trim()} alt={`Thumbnail ${idx + 1}`} style={{ width: '100px', marginRight: '10px' }} />
              ))}
              <video id='vid' width="320" height="240" ref={videoRef} controls>
                <source src={video.VIDEO_TRAILER} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <button onClick={handleMouseEnter}>Play Video</button>


            {/* Display video details */}
            <div className="details">
              <p className='channel'>
                <img src={video.MAIN_THUMB} alt="" />
              </p>
              <div className="text">
                <h2>{video.TITLE}</h2>
                <p>Length: {video.LENGHT}</p>
                <p>Date: {video.DATE}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </>
  )
};

export default Test;