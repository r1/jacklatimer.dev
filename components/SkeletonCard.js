import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonCard = () => {
  return (
    <section className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16 pr-6">
      <SkeletonTheme color="#040404" highlightColor="#050505">
        {Array(1)
          .fill()
          .map(() => (
            <Skeleton duration={1} height={300} width={300} />
          ))}
      </SkeletonTheme>
    </section>
  );
};

export default SkeletonCard;
