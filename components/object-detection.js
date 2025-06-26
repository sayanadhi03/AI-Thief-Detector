"use client";

import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { load as cocoSSDLoad } from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
import { renderPredictions } from "@/utils/render-prediction";

let detectInterval;

const ObjectDetection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  async function runCoco() {
    setIsLoading(true);
    const net = await cocoSSDLoad();
    setIsLoading(false);

    detectInterval = setInterval(() => {
      runObjectDetection(net);
    }, 100);
  }

  async function runObjectDetection(net) {
    if (canvasRef.current && webcamRef.current?.video?.readyState === 4) {
      canvasRef.current.width = webcamRef.current.video.videoWidth;
      canvasRef.current.height = webcamRef.current.video.videoHeight;

      const detectedObjects = await net.detect(
        webcamRef.current.video,
        undefined,
        0.6
      );
      const context = canvasRef.current.getContext("2d");
      renderPredictions(detectedObjects, context);
    }
  }

  useEffect(() => {
    runCoco();

    return () => clearInterval(detectInterval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      {isLoading ? (
        <p className="text-white text-lg mt-2">Loading AI Model...</p>
      ) : (
        <div className="relative flex justify-center items-center gradient p-1.5 rounded-md mt-4">
          <Webcam
            ref={webcamRef}
            className="rounded-md w-full lg:h-[720px]"
            muted
          />
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 z-50 w-full lg:h-[720px]"
          />
        </div>
      )}
    </div>
  );
};

export default ObjectDetection;
