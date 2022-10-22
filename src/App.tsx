import Customize from "./components/Customize";
import Home from "./Home";
import Search from "./Search";

function App() {
  return (
    <div className="relative w-screen h-screen">
      <Home />
      <Search />
      <div className="absolute  bottom-5 right-5  ">
        <Customize />
      </div>
    </div>
  );
}

export default App;
