import { FirstScreen, Base } from '@/components';
import './App.css';

function App() {
  return (
    <Base>
      <main className="flex h-full flex-col overflow-y-scroll pt-8">
        <FirstScreen />
        <div className="flex min-h-screen w-screen items-center justify-center">
          <div className="relative flex w-full flex-col items-center space-y-6">
            <div className="relative flex w-full items-center justify-center">
              <img
                className="h-[72px] w-full translate-y-2"
                src="/images/bg/bg_talking_c.png"
                alt=""
              />
              <p className="absolute text-2xl text-primary">你是否也有以下困擾？</p>
            </div>
            <div className="flex flex-col items-center space-y-2 px-5">
              <p className="text-xl text-highlight">羨慕別人的酷酷網頁動畫？</p>
              <img src="/images/main/question_1_m.png" alt="question_1" />
            </div>
          </div>
        </div>
      </main>
    </Base>
  );
}

export default App;
