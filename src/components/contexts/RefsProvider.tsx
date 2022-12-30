import { createContext, useContext, useEffect, useRef, PropsWithChildren, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

interface RefContextTypes {
  readyRef: RefObject<HTMLButtonElement>;
  bottomRef: RefObject<HTMLImageElement>;
  startRef: RefObject<HTMLDivElement>;
  questionRef: RefObject<HTMLDivElement>;
  questionRefs: RefObject<[]>;
}

const RefContext = createContext<RefContextTypes>({
  readyRef: { current: null },
  bottomRef: { current: null },
  startRef: { current: null },
  questionRef: { current: null },
  questionRefs: { current: null },
});

function animated(element: HTMLElement) {
  gsap.fromTo(element, { opacity: 1 }, { opacity: 0 });
}
function hide(element: HTMLElement) {
  gsap.set(element, { opacity: 1 });
}

export const RefProvider = ({ children }: PropsWithChildren) => {
  const readyRef = useRef(null);
  const bottomRef = useRef(null);
  const startRef = useRef(null);
  const questionRef = useRef(null);
  const questionRefs = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const readyEl = readyRef.current;
    const bottomEl = bottomRef.current;
    const startEl = startRef.current;
    const questionEl = questionRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: questionEl,
        markers: true,
        scrub: true,
        pin: true,
        start: 'top center',
        end: 'top 40%',
        // end: 'top center',
      },
    });

    tl.from(questionEl, { opacity: 0 }).to(questionEl, { opacity: 1, yPercent: -20 });

    // .to(questionEl, { yPercent: 100 });

    // tl.from(readyEl, {
    //   // position: 'absolute',
    //   opacity: 1,
    // }).to(readyEl, {
    //   opacity: 0,
    //   duration: 0.6,
    // });
    // gsap.fromTo(readyEl, { opacity: 1 }, { opacity: 0, duration: 0.5 });
    ScrollTrigger.create({
      trigger: readyEl,
      scrub: true,
      start: 'top 30%',
      end: 'top 20%',
      animation: gsap.fromTo(readyEl, { opacity: 1, duration: 0.5 }, { opacity: 0 }),
    });

    ScrollTrigger.create({
      trigger: startEl,
      scrub: true,
      start: 'top center',
      end: 'bottom center',
      animation: gsap.fromTo(bottomEl, { scale: 1.5 }, { scale: 0.5, duration: 2 }),
    });
  }, []);

  return (
    <RefContext.Provider value={{ readyRef, bottomRef, startRef, questionRef, questionRefs }}>
      {children}
    </RefContext.Provider>
  );
};

export const useRefContext = () => useContext(RefContext);
