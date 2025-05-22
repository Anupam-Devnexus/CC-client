import React from "react";
import Button from "../Buttons/Button1";

export default function InfrastructureCards({ image, infrastructure }) {
  return (
    <article
      className="h-70 w-full flex items-center justify-center rounded-lg shadow-md overflow-hidden relative"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label={infrastructure}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-4">
        <h2 className="font-bold text-white text-xl mb-2">{infrastructure}</h2>
        <Button text="Explore" className="cursor-pointer" />
      </div>
    </article>
  );
}
