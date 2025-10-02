# AI Thief Detection System

A real-time object detection system built with Next.js and TensorFlow.js that uses your webcam to detect people and trigger audio alerts. This application is designed as a security monitoring tool that can identify when a person enters the camera's field of view.

## 🚀 Features

- **Real-time Object Detection**: Uses TensorFlow.js and COCO-SSD model for fast, client-side object detection
- **Person Detection**: Specifically highlights people with red bounding boxes and alerts
- **Audio Alerts**: Plays a chime sound when a person is detected (throttled to prevent spam)
- **Webcam Integration**: Direct access to your camera for live monitoring
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, gradient-styled interface with Tailwind CSS

## 🛠️ Technology Stack

- **Framework**: Next.js 15.3.4 with React 19
- **AI/ML**: TensorFlow.js with COCO-SSD object detection model
- **Styling**: Tailwind CSS 4
- **Camera**: React Webcam for video capture
- **Utilities**: Lodash for performance optimization

## 📋 Prerequisites

- Node.js (version 14 or higher)
- A webcam/camera
- Modern web browser with camera permissions

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/sayanadhi03/AI-Thief-Detector.git
cd object-detector
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🖥️ Usage

1. **Grant Camera Permissions**: When prompted, allow the application to access your camera
2. **Wait for Model Loading**: The AI model will load automatically (you'll see "Loading AI Model..." message)
3. **Start Monitoring**: Once loaded, the system will begin detecting objects in real-time
4. **Person Detection**: When a person is detected:
   - A red bounding box will appear around them
   - The detected area will have a red overlay
   - An audio alert will play (throttled to every 2 seconds)

## 📁 Project Structure

```
object-detector/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.js           # Root layout component
│   └── page.js             # Home page component
├── components/
│   └── object-detection.js # Main detection component
├── utils/
│   └── render-prediction.js # Canvas rendering utilities
├── public/
│   └── chime-alert-demo-309545.mp3 # Alert sound file
└── package.json            # Dependencies and scripts
```

## ⚙️ Configuration

### Detection Settings
- **Confidence Threshold**: Currently set to 0.6 (60% confidence)
- **Detection Interval**: Runs every 100ms for smooth real-time detection
- **Audio Throttle**: Alert sounds are limited to once every 2 seconds

### Customization Options
You can modify the detection behavior in `components/object-detection.js`:
- Change confidence threshold in the `net.detect()` call
- Adjust detection interval timing
- Modify audio alert frequency in `utils/render-prediction.js`

## 🎯 How It Works

1. **Model Loading**: The application loads the COCO-SSD model from TensorFlow.js
2. **Video Capture**: React Webcam captures live video from your camera
3. **Object Detection**: Every 100ms, the current video frame is analyzed
4. **Rendering**: Detected objects are drawn on an overlay canvas
5. **Alert System**: When a person is detected, visual and audio alerts are triggered

## 🔊 Audio Alerts

The system includes an audio alert feature that:
- Plays a chime sound when a person is detected
- Uses throttling to prevent continuous sound spam
- Can be customized by replacing the audio file in the `public` folder

## 🌐 Browser Support

This application works best in modern browsers that support:
- WebRTC (for camera access)
- Canvas API (for drawing detections)
- Web Audio API (for sound alerts)
- WebAssembly (for TensorFlow.js)

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
npm run start
```

### Other Platforms
The app can be deployed to any platform that supports Node.js applications.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## ⚠️ Privacy Note

This application processes video locally in your browser. No video data is sent to external servers. All object detection happens client-side using TensorFlow.js.

## 🐛 Troubleshooting

### Camera Not Working
- Ensure you've granted camera permissions
- Check if another application is using the camera
- Try refreshing the page

### Model Loading Issues
- Check your internet connection (model downloads from CDN)
- Clear browser cache and try again
- Ensure JavaScript is enabled

### Performance Issues
- Close other browser tabs/applications
- Lower the detection frequency by increasing the interval in `runCoco()`
- Consider using a more powerful device for better performance

## 📧 Contact

For questions or support, please open an issue on GitHub.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
