import { Box } from "@chakra-ui/react";
import React, { useMemo } from "react";
import CounterAppTwo from "./components/CounterAppTwo";
import { clickServiceContext, makeClickService } from "./service/clickService";

const AppOne = React.lazy(() => import("app1/_types/AppOne"));

const App = (props: { title?: string }) => {
  const clickService = useMemo(makeClickService, []);

  return (
    <Box margin="1.2rem">
      APP-2
      <Box>
        <AppOne
          deps={{
            app2Count: clickService.count,
            app2Click: clickService.click,
          }}
        />
      </Box>
      <Box>
        <clickServiceContext.Provider value={clickService}>
          <CounterAppTwo />
        </clickServiceContext.Provider>
      </Box>
    </Box>
  );
};

export default App;
