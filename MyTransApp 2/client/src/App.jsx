import {Welcome, Home, Neeche } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Home />
      <Welcome />
      <Neeche />
    </div>
  </div>
);

export default App;
