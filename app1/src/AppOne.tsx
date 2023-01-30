import { Box } from "@chakra-ui/react";
import React, { createContext } from "react";
import CounterAppOne from "./components/CounterAppOne";
import { AppDeps, mockDeps } from "./deps";

export const AppContext = createContext<AppDeps>(mockDeps);

const App = (props: { deps: AppDeps }) => {
  const { deps } = props;

  return (
    <AppContext.Provider value={deps}>
      <Box margin="1.2rem">
        <Box>APP-1</Box>
        <Box>
          <CounterAppOne />
        </Box>
      </Box>
    </AppContext.Provider>
  );
};

export default App;
