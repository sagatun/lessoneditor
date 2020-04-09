import 'bootstrap/dist/css/bootstrap.css';
import "semantic-ui-css/semantic.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";


ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
