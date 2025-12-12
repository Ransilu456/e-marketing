"use client";

import React from "react";

export default function RevealInitClient() {
    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.09 }
        );

        document.querySelectorAll(".reveal-up").forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return null;
};