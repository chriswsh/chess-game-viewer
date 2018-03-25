import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
// import { createBrowserHistory, createHashHistory } from "history";

import registerServiceWorker from "./registerServiceWorker";

import Routes from "./routes";

// const history = createBrowserHistory();
// const oldHistory = createHashHistory();

ReactDOM.render(<Routes />, document.getElementById("root"));
registerServiceWorker();
