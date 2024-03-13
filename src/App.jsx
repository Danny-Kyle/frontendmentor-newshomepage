import Body from "./components/Body";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="justify-center items-center md:mx-24 p-4">
      <Navbar />
      <div>
        <img src="/image-web-3-mobile.jpg" alt="mainpic" className="flex md:hidden"/>
        <img src="/image-web-3-desktop.jpg" alt="mainpic" className="md:mx-24 md:flex hidden md:w-3/4 md:h-80"/>
      </div>
      <Body />
    </main>
  );
}

export default App;
