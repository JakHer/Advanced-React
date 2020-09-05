import { useEffect } from "react";
import { TimelineMax } from "gsap/gsap-core";

export const DetectClose = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(false);
    };

    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [handler, ref]);
};

export const ModalAnimation = (tl, modalAnimation) => {
  useEffect(() => {
    tl.current = new TimelineMax({ paused: true }).from([modalAnimation.current], 2, { y: `-200%`, display: "none" });
  }, [modalAnimation, tl]);
};

export const TollTipAnimation = (tl, modalAnimation) => {
  useEffect(() => {
    tl.current = new TimelineMax({ paused: true }).from([modalAnimation.current], 0.5, { y: `-100%`, display: "none", opacity: 0 });
  }, [modalAnimation, tl]);
};
