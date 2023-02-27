import { Box } from "@chakra-ui/react";
import React from "react";
import CounterAppOne, { CounterProps } from "./components/CounterAppOne";

const App = (props: CounterProps) => {
  return (
    <Box margin="1.2rem">
      <Box>APP-1</Box>
      <Box>
        <CounterAppOne {...props} />
      </Box>
    </Box>
  );
};

export default App;
