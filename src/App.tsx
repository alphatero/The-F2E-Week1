import {
  Start,
  Question,
  Roles,
  Guide,
  Schedule,
  Rule,
  Base,
  Sponsor,
  Join,
  RefProvider,
} from '@/components';
import { useEffect, useRef } from 'react';
import './App.css';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/all';

function App() {
  return (
    <RefProvider>
      <Base>
        <main className="flex h-full w-full flex-col">
          <Start />
          <Question />
          <Roles />
          <Guide />
          <Schedule />
          <Rule />
          <Sponsor />
          <Join />
        </main>
      </Base>
    </RefProvider>
  );
}

export default App;
