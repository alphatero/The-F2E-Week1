import {
  createContext,
  useContext,
  useRef,
  PropsWithChildren,
  RefObject,
  MutableRefObject,
} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface RefContextTypes {
  readyRef: RefObject<HTMLButtonElement>;
  bottomRef: RefObject<HTMLImageElement>;
  startRef: RefObject<HTMLDivElement>;
  questionRef: RefObject<HTMLDivElement>;
  questionRefs: RefObject<HTMLDivElement>;
  mainRef: RefObject<HTMLDivElement>;
  joinRef: RefObject<HTMLDivElement>;
  joinButtonRef: RefObject<HTMLDivElement>;
  desktopLogoRef: RefObject<HTMLDivElement>;
  cloudRef: RefObject<HTMLDivElement>;
  readyTextRef: RefObject<HTMLDivElement>;
  usersRef: RefObject<HTMLUListElement>;
  startBgRef: RefObject<HTMLImageElement>;
  startLogoRef: RefObject<HTMLDivElement>;
  lightsRef: MutableRefObject<HTMLElement[]>;
  questionCardsRef: MutableRefObject<HTMLElement[]>;
  questionDecorationsRef: RefObject<HTMLDivElement>;
  roleTitleRef: RefObject<HTMLDivElement>;
  rolesRef: MutableRefObject<HTMLElement[]>;
  guideTitleRef: RefObject<HTMLDivElement>;
  guidesRef: MutableRefObject<HTMLElement[]>;
  scheduleTitleRef: RefObject<HTMLDivElement>;
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
  desktopLogoRef: { current: null },
  cloudRef: { current: null },
  readyTextRef: { current: null },
  usersRef: { current: null },
  startBgRef: { current: null },
  startLogoRef: { current: null },
  lightsRef: { current: [] },
  questionCardsRef: { current: [] },
  questionDecorationsRef: { current: null },
  roleTitleRef: { current: null },
  rolesRef: { current: [] },
  guideTitleRef: { current: null },
  guidesRef: { current: [] },
  scheduleTitleRef: { current: null },
});
gsap.registerPlugin(ScrollTrigger);

export const RefProvider = ({ children }: PropsWithChildren) => {
  const readyRef = useRef(null);
  const bottomRef = useRef(null);
  const startRef = useRef<HTMLDivElement>(null);
  const questionRef = useRef(null);
  const questionRefs = useRef(null);
  const mainRef = useRef(null);
  const joinRef = useRef(null);
  const joinButtonRef = useRef(null);
  const desktopLogoRef = useRef(null);
  const cloudRef = useRef<HTMLDivElement>(null);
  const readyTextRef = useRef<HTMLDivElement>(null);
  const usersRef = useRef<HTMLUListElement>(null);
  const startBgRef = useRef<HTMLImageElement>(null);
  const startLogoRef = useRef<HTMLDivElement>(null);
  const lightsRef = useRef([]);
  const questionCardsRef = useRef([]);
  const questionDecorationsRef = useRef<HTMLDivElement>(null);
  const roleTitleRef = useRef<HTMLDivElement>(null);
  const rolesRef = useRef([]);
  const guideTitleRef = useRef<HTMLDivElement>(null);
  const guidesRef = useRef([]);
  const scheduleTitleRef = useRef<HTMLDivElement>(null);

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
        desktopLogoRef,
        cloudRef,
        readyTextRef,
        usersRef,
        startBgRef,
        startLogoRef,
        lightsRef,
        questionCardsRef,
        questionDecorationsRef,
        roleTitleRef,
        rolesRef,
        guideTitleRef,
        guidesRef,
        scheduleTitleRef,
      }}
    >
      {children}
    </RefContext.Provider>
  );
};

export const useRefContext = () => useContext(RefContext);
