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
  Loading,
} from '@/components';

import './App.css';

function App() {
  return (
    <Base>
      <main className="flex h-full w-full flex-col">
        <Loading />
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
