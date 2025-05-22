import React from "react";

export default function LocationCard({ location, image }) {
    return (
        <div className="flex flex-col items-center border-[1px] border-[var(--var-red-col)] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 p-1 w-full max-w-sm bg-white">
            <img
                src={image}
                alt="Display Center"
                className="w-full h-48 object-cover rounded-t-lg mb-2"
            />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                <span className="text-black font-medium text-base sm:text-lg">
                    Display Center:
                </span>
                <span className="font-bold text-[var(--var-red-col)] text-lg sm:text-xl">
                    {location}
                </span>
            </div>
        </div>
    );
}
