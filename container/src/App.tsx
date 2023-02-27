import { Box, Spinner } from "@chakra-ui/react";
import React from "react";
import { Routes, Route } from "react-router-dom";

const AppTwo = React.lazy(() => import("app2/_types/AppTwo"));
const Select = React.lazy(() => import("app1/_types/components/Select"));

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
      <Box>
        <h2>Multiple microfrontend controls</h2>
        <Select onChange={(option) => console.log("control 1", option)} />
        <Select onChange={(option) => console.log("control 2", option)} />
      </Box>
    </>
  );
};

export default App;
