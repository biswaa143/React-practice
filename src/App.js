import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./component/Counter";
import Memo from "./component/Memo";
import ParentComponent from "./component/parent";
import CounterOne from "./component/customHooks/CounterOne";
import CounterTwo from "./component/customHooks/CounterTwo";
import CustomHooks from "./component/customHooks";
import ComA from "./component/urlParams/ComA";
import ComB from "./component/urlParams/ComB";
import ComD from "./component/ContextApi/ComD";
import ComC, { DataContext } from "./component/ContextApi/ComC";

const Form = lazy(() => import("./component/Form"));
const EffectExample = lazy(() => import("./component/EffectExample"));

const App = () => {
  const contextValue = "Hello from Context";


  return (
    <Router>
      <DataContext.Provider value={contextValue}>
        <div>
          <Counter />
          <Suspense fallback={<div>Please Wait... Your Form is loading</div>}>
            <Form />
          </Suspense>
          <Suspense
            fallback={<div>Please Wait... Your EffectExample is loading</div>}
          >
            <EffectExample />
          </Suspense>
          <Memo />
          <ParentComponent />
          <CounterOne />
          <CounterTwo />
          <CustomHooks />
        </div>
        <Routes>
          <Route path="/" element={<ComA />} />
          <Route path="/ComB/:data" element={<ComB />} />
          <Route path="/ComC" element={<ComC />} />
          <Route path="/ComD" element={<ComD />} />
        </Routes>
      </DataContext.Provider>
    </Router>
  );
};

export default App;
