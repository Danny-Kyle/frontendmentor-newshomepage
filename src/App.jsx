import Body from "./components/Body";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="justify-center items-center p-4">
      <Navbar />
      <div>
        <img src="/image-web-3-mobile.jpg" alt="mainpic" className="lg:hidden"/>
        <img src="/image-web-3-desktop.jpg" alt="mainpic" className="hidden md:flex md:w-[580px] md:h-80"/>
      </div>
      <Body />
    </main>
  );
}

export default App;
