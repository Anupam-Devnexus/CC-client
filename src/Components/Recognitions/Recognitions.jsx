import React from "react";

export default function Recognitions({ title, data }) {
    return (
        <section className="px-4 py-6 w-full" aria-labelledby="recognitions-heading">
            <h2
                id="recognitions-heading"
                className="text-2xl sm:text-3xl font-bold text-center text-[var(--var-red-col)] mb-6"
            >
                {title}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {data?.map((item, index) => (
                    <article
                        key={index}
                        className="flex flex-col items-center text-center gap-2 p-2 rounded-lg hover:shadow-md shadow-red-800 transition-shadow duration-300"
                    >
                        <img
                            src={item.image}
                            alt={item.name || `Recognition ${index + 1}`}
                            className="h-60 w-full object-fill rounded-md border"
                            loading="lazy"
                        />
                        <span className="text-sm font-semibold text-gray-800">
                            {item.name || "Unnamed Recognition"}
                        </span>
                    </article>
                ))}
            </div>
        </section>
    );
}
