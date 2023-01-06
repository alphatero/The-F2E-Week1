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
  useRefContext,
} from '@/components';

import './App.css';

function App() {
  const { mainRef } = useRefContext();
  return (
    <Base>
      <main className="flex h-full w-full flex-col" ref={mainRef}>
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
  );
}

export default App;
