import { Spinner } from "@chakra-ui/react";
import { ClickService } from "app2/_types/service/clickService";
import React, { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";

const AppOne = React.lazy(() => import("app1/_types/AppOne"));
const AppTwo = React.lazy(() => import("app2/_types/AppTwo"));

type PropsFrom<T> = T extends React.LazyExoticComponent<(props: infer T) => any>
  ? T
  : never;

type AppOneDeps = PropsFrom<typeof AppOne>["deps"];

const toAppOneDeps = (service: ClickService): AppOneDeps => {
  const { count, click } = service;

  return { app2Click: click, app2Count: count };
};

const App = () => {
  const [clickService, setClickService] = useState<ClickService | null>(null);

  import("app2/_types/service/clickService").then((service) =>
    setClickService(service.clickService)
  );

  const appOneDeps = useMemo(
    () => (clickService ? toAppOneDeps(clickService) : null),
    [clickService]
  );

  if (appOneDeps === null) {
    return <Spinner size="xl" />;
  } else {
    return (
      <>
        <h2>Title</h2>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <React.Suspense fallback={<Spinner size="xl" />}>
                  <AppOne deps={appOneDeps} />
                </React.Suspense>
                <React.Suspense fallback={<Spinner size="xl" />}>
                  <AppTwo />
                </React.Suspense>
              </div>
            }
          />
          <Route path="app1" element={<AppOne deps={appOneDeps} />} />
          <Route path="app2" element={<AppTwo />} />
        </Routes>
      </>
    );
  }
};

export default App;
