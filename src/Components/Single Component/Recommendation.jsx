import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Recommendation({ image, text, path }) {
    const navigate = useNavigate()
    const handleNaviate = (path) => {
        navigate(path)
    }
    return (
        <div className="flex flex-col gap-4 border border-[var(--var-red-col)]/90 items-center sm:max-w-sm bg-white rounded-lg shadow-md p-2">


            {/* Image section */}
            <div className="relative h-48 w-full rounded-md shadow-md overflow-hidden">
                <img
                    src={image}
                    alt={`${text} product`}
                    className="object-cover w-full h-full"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                    <span className="bg-[var(--var-red-col)]/80 text-white text-xs px-3 py-1 rounded-full capitalize shadow-md">
                        {text}
                    </span>

                </div>
            </div>

            <button
                onClick={()=>handleNaviate(path)}
                className="flex cursor-pointer w-full justify-center items-center gap-2 text-white bg-[var(--var-red-col)] px-5 py-2 rounded-md hover:bg-red-700 transition-colors shadow-md"
                aria-label={`Explore ${text} product`}
            >
                Explore <FaExternalLinkAlt />
            </button>
        </div>
    );
}
