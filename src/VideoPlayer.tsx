import React, { useEffect, useRef } from 'react';
import videojs, { VideoJsPlayerOptions } from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-contrib-ads/dist/videojs-contrib-ads.css';

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Initialize Video.js with IMA plugin
    const playerOptions: VideoJsPlayerOptions = {
      controls: true,
      fluid: true,
    };

    const player = videojs(videoRef.current, playerOptions);

    // Add IMA plugin configuration
    player.ima({
      id: 'your-ima-ad-unit-id', // in demo 'content_video' is the ID

      //adTagUrl: 'your-ad-tag-url', // Your Ad tag need to replace as follows;
"https://pubads.g.doubleclick.net/gampad/ads?iu=/69550299/teuteuftest&description_url=[placeholder]&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&env=vp&unviewed_position_start=1&impl=s&correlator=" +
    "iu=/21775744923/external/single_ad_samples&sz=640x480&" +
    "cust_params=sample_ct%3Dlinear&ciu_szs=300x250%2C728x90&gdfp_req=1&" +
    "output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=",

    });

    // Load Video Source
    player.src('your-video-source-url'); // replace with your content url

    // Dispose of the player when the component is unmounted
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, []);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js"></video>
    </div>
  );
};

export default VideoPlayer;
