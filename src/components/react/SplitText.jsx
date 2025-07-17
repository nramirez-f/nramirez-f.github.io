import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitTextPlugin from "gsap/dist/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitTextPlugin);

const SplitText = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const ref = useRef(null);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current || !text) return;

    const el = ref.current;
    if (splitType === "lines") el.style.position = "relative";

    let splitter;
    try {
      splitter = new SplitTextPlugin(el, {
        type: splitType,
        absolute: splitType === "lines",
        linesClass: "split-line",
      });
    } catch (error) {
      console.error("Error creating SplitText:", error);
      return;
    }

    const targets = {
      lines: splitter.lines,
      words: splitter.words,
      chars: splitter.chars,
    }[splitType] || splitter.chars;

    if (!targets?.length) {
      console.warn("No targets found for SplitText");
      splitter.revert();
      return;
    }

    targets.forEach((t) => {
      t.style.willChange = "transform, opacity";
    });

    const startPct = (1 - threshold) * 100;
    const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
    const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
    const marginUnit = marginMatch ? marginMatch[2] || "px" : "px";
    const sign = marginValue < 0 ? `-=${Math.abs(marginValue)}${marginUnit}` : `+=${marginValue}${marginUnit}`;
    const start = `top ${startPct}%${sign}`;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
        once: true,
        onToggle: (self) => (scrollTriggerRef.current = self),
      },
      onComplete: () => {
        gsap.set(targets, {
          ...to,
          clearProps: "willChange",
        });
        onLetterAnimationComplete?.();
      },
    });

    tl.set(targets, { ...from, force3D: true });
    tl.to(targets, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      force3D: true,
    });

    return () => {
      tl.kill();
      scrollTriggerRef.current?.kill();
      gsap.killTweensOf(targets);
      splitter?.revert();
    };
  }, [
    text,
    delay,
    duration,
    ease,
    splitType,
    from,
    to,
    threshold,
    rootMargin,
    onLetterAnimationComplete,
  ]);

  return (
    <p
      ref={ref}
      className={`split-parent overflow-hidden inline-block whitespace-normal ${className}`}
      style={{ textAlign, wordWrap: "break-word" }}
    >
      {text}
    </p>
  );
};

export default SplitText;
