import { useEffect, useRef } from "react";
import cx from "./ContentAnimationWrapper.module.scss";

export type ContentAnimationWrapperProps = {
  children: React.ReactNode;
  enterAnimation: ContentEnterAnimation;
};

export type ContentEnterAnimation = "FromLeft" | "FromRight" | "None";

export const ContentAnimationWrapper = ({
  children,
  enterAnimation,
}: ContentAnimationWrapperProps) => {
  const animationClassMatrix: Record<ContentEnterAnimation, string> = {
    FromLeft: cx.fromLeft,
    FromRight: cx.fromRight,
    None: "",
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          content.classList.add(cx.animate);
        }
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div
        className={[cx.content, animationClassMatrix[enterAnimation]].join(" ")}
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  );
};
