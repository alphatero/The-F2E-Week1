import { createContext, useContext, useRef, PropsWithChildren, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface RefContextTypes {
  bottomRef: RefObject<HTMLImageElement>;
  joinRef: RefObject<HTMLDivElement>;
  joinButtonRef: RefObject<HTMLDivElement>;
  desktopLogoRef: RefObject<HTMLDivElement>;
  deskBottomRef: RefObject<HTMLDivElement>;
  lineRef: RefObject<HTMLDivElement>;
}

const RefContext = createContext<RefContextTypes>({
  bottomRef: { current: null },
  joinRef: { current: null },
  joinButtonRef: { current: null },
  desktopLogoRef: { current: null },
  lineRef: { current: null },
  deskBottomRef: { current: null },
});
gsap.registerPlugin(ScrollTrigger);

export const RefProvider = ({ children }: PropsWithChildren) => {
  const bottomRef = useRef(null);
  const joinRef = useRef(null);
  const joinButtonRef = useRef(null);
  const desktopLogoRef = useRef(null);
  const lineRef = useRef(null);
  const deskBottomRef = useRef(null);

  return (
    <RefContext.Provider
      value={{
        bottomRef,
        joinRef,
        joinButtonRef,
        desktopLogoRef,
        lineRef,
        deskBottomRef,
      }}
    >
      {children}
    </RefContext.Provider>
  );
};

export const useRefContext = () => useContext(RefContext);
