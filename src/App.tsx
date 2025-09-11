import React from "react";
import RenderExample from "./materi/1-Conditional-Rendering/RenderExample";
import {
  Message,
  UserGreeting,
  UserScore,
  Dashboard,
} from "./materi/1-Conditional-Rendering/ConditionalRendering";
import Counter from "./materi/2-setState-Asynchronous/Counter";
import { BatchedStateUpdates } from "./materi/3-Batching/BatchedStateUpdates";
import FragmentExample from "./materi/4-React-Fragment/FragmentExample";
import ListWithFragment from "./materi/4-React-Fragment/ListWithFragment";
import {
  ConditionalHookExampleWrong,
  ConditionalHookExampleRight,
  InvalidHookUsage,
} from "./materi/5-Hooks-Rules/HooksRules";
import CounterComponent from "./materi/5-Hooks-Rules/CustomHooks";

const App: React.FC = () => {
  return (
    <div>
      <RenderExample />
      <Message unreadCount={0} />
      <UserGreeting name="Ucup" />
      <UserScore score={0} />
      <Dashboard
        unreadMsg={10}
        username="Dicky"
        points={100}
        errorMsg={"Ada yang salah nich"}
      />
      <Counter />
      <BatchedStateUpdates />
      <FragmentExample />
      <ListWithFragment />

      <ConditionalHookExampleWrong />
      <ConditionalHookExampleRight />
      <InvalidHookUsage />
      <CounterComponent />
    </div>
  );
};

export default App;
