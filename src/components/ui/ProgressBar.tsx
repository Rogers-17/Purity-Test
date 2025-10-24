"use client"
import React from "react";

interface ProgressBarProps {
    progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ( {progress} ) => {
    return (
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div className="bg-yellow-300 h-3 transition-all duration-500 ease-out"
            style={{ width: `${progress}%`}}
            />
        </div>
    );
}

