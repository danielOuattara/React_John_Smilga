import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

//------------------------------------------------------------------
//--- @tanstack/react-query

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient();
// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <QueryClientProvider client={queryClient}>
//     <App />
//   </QueryClientProvider>,
// );

//------------------------------------------------------------------
//--- rtk

// import { Provider } from "react-redux";
// import store from "./09-rtk/store.ts";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// );

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
