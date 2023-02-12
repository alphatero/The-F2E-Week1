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
  Finish,
} from '@/components';

import './App.css';

function App() {
  return (
    <Base>
      <main className="flex h-full w-full flex-col">
        <Start />
        <Question />
        <Roles />
        <Guide />
        <Schedule />
        <Rule />
        <Sponsor />
        <Finish />
        <Join />
      </main>
    </Base>
  );
}

export default App;
