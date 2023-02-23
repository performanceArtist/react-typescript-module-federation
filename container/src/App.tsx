import { Spinner } from "@chakra-ui/react";
import React from "react";
import { Routes, Route } from "react-router-dom";

const AppTwo = React.lazy(() => import("app2/_types/AppTwo"));

const App = () => {
  return (
    <>
      <h2>Container app</h2>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <React.Suspense fallback={<Spinner size="xl" />}>
                <AppTwo />
              </React.Suspense>
            </div>
          }
        />
        <Route path="app2" element={<AppTwo />} />
      </Routes>
    </>
  );
};

export default App;
