export const VIDEO_ASSETS = {
  // Use local path if file is small (< 5MB) and committed to git
  heroBackground: "/hero-bg.mp4",
  
  // For large files (> 50MB), it is highly recommended to use an external host 
  // like Cloudinary, AWS S3, or Vimeo. 
  // Replace these local paths with the external URLs once you have uploaded them.
  // Example: "https://res.cloudinary.com/your-cloud/video/upload/v1234/hapag-ai.mp4"
  projects: {
    hapagAi: "/hapag-ai-video.mp4",
    ontapCreatives: "/ontap-creatives-video.mp4",
    burnbox: "/burnboxvideo.mp4",
    mmorpg: "/mmorpg-video.mp4",
    aiPlmunTutor: "/ai-plmun-tutor-video.mp4",
  }
};
