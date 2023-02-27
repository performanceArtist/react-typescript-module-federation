import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import CounterAppTwo from "./components/CounterAppTwo";

const AppOne = React.lazy(() => import("app1/_types/AppOne"));

const App = (props: { title?: string }) => {
  const [count, setCount] = useState(0);

  return (
    <Box margin="1.2rem">
      <Box>APP-2</Box>
      <AppOne
        remoteCount={count}
        onClick={() => {
          setCount((count) => count + 1);
        }}
      />
      <Box>APP-2 component</Box>
      <Box>
        <CounterAppTwo count={count} setCount={setCount} />
      </Box>
    </Box>
  );
};

export default App;
