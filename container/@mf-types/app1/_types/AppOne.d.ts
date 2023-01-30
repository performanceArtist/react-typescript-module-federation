import React from "react";
import { AppDeps } from "./deps";
export declare const AppContext: React.Context<AppDeps>;
declare const App: (props: {
    deps: AppDeps;
}) => JSX.Element;
export default App;
