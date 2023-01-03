import { createContext, useContext, useEffect, useRef, PropsWithChildren, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

interface RefContextTypes {
  readyRef: RefObject<HTMLButtonElement>;
  bottomRef: RefObject<HTMLImageElement>;
  startRef: RefObject<HTMLDivElement>;
  questionRef: RefObject<HTMLDivElement>;
  questionRefs: RefObject<HTMLLIElement>;
  mainRef: RefObject<HTMLElement>;
  joinRef: RefObject<HTMLDivElement>;
  joinButtonRef: RefObject<HTMLDivElement>;
}

const RefContext = createContext<RefContextTypes>({
  readyRef: { current: null },
  bottomRef: { current: null },
  startRef: { current: null },
  questionRef: { current: null },
  questionRefs: { current: null },
  mainRef: { current: null },
  joinRef: { current: null },
  joinButtonRef: { current: null },
});

// function animated(element: HTMLElement) {
//   let x = 0;

//   //依照條件設定x初始值
//   if (element.classList.contains('from-left')) {
//     x = -100;
//   } else if (element.classList.contains('from-right')) {
//     x = 100;
//   }

//   //設定元素初始值
//   element.style.transform = `translate(${x}px, 0px)`;
//   gsap.fromTo(
//     element,
//     { x: x, y: 0, opacity: 0, visibility: 'hidden' },
//     {
//       duration: 1,
//       delay: 0.2,
//       x: 0,
//       y: 0,
//       visibility: 'visible',
//       opacity: '1',
//       ease: 'expo',
//       overwrite: 'auto',
//     }
//   );
// }
// function hide(element: HTMLElement) {
//   gsap.set(element, { opacity: 0 });
// }

export const RefProvider = ({ children }: PropsWithChildren) => {
  const readyRef = useRef(null);
  const bottomRef = useRef(null);
  const startRef = useRef(null);
  const questionRef = useRef(null);
  const questionRefs = useRef(null);
  const mainRef = useRef(null);
  const joinRef = useRef(null);
  const joinButtonRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const readyEl = readyRef.current;
    const bottomEl = bottomRef.current;
    const startEl = startRef.current;
    const joinEl = joinRef.current;
    const joinButtonEl = joinButtonRef.current;
    const questionEl = questionRef.current;

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

    ScrollTrigger.create({
      trigger: joinEl,
      scrub: true,
      // markers: true,
      start: 'top center',
      end: 'bottom center',
      animation: gsap.fromTo(bottomEl, { scale: 0.5, duration: 2 }, { scale: 1 }),
    });
    ScrollTrigger.create({
      trigger: questionEl,
      scrub: true,
      start: 'top center',
      end: 'bottom center',
      animation: gsap.fromTo(
        joinButtonEl,
        { opacity: 0, visibility: 'hidden' },
        { opacity: 1, visibility: 'visible' }
      ),
    });

    ScrollTrigger.create({
      trigger: joinEl,
      scrub: true,
      // markers: true,
      start: 'top center',
      end: 'bottom center',
      animation: gsap.fromTo(joinButtonEl, { opacity: 1 }, { opacity: 0, visibility: 'hidden' }),
    });
  }, []);

  return (
    <RefContext.Provider
      value={{
        readyRef,
        bottomRef,
        startRef,
        questionRef,
        questionRefs,
        mainRef,
        joinRef,
        joinButtonRef,
      }}
    >
      {children}
    </RefContext.Provider>
  );
};

export const useRefContext = () => useContext(RefContext);
