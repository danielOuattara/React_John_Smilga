import Title from "./components/Title";
import {
  /* FirstRequest, */
  /* Headers, */
  /* PostRequest, */
  /* GlobalInstance, */
  /* CustomInstance, */
  Interceptors,
} from "./examples";

import "./axios/global";

function App() {
  return (
    <main>
      <Title />
      {/* <FirstRequest /> */}
      {/* <Headers /> */}
      {/* <PostRequest /> */}
      {/* <GlobalInstance /> */}
      {/* <CustomInstance /> */}
      <Interceptors />
    </main>
  );
}

export default App;
