import React from "react";
export default function MDXImg(props) {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text

    <span className="relative block">
      <span className="block overflow-hidden">
        <img loading="lazy" {...props} className="pointer-events-none block h-auto w-auto rounded-lg object-cover object-center" />
      </span>
      <img loading="lazy" {...props} className="pointer-events-none absolute inset-0 -z-10 h-auto w-auto blur-xl saturate-[1.3]" />
    </span>
  );
}
