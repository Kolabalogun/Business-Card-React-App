import TopInfo from "./components/top-info";
import "./components/style.css";
import About from "./components/about";
import Interest from "./components/interest";
import Footer from "./components/footer";
function App() {
  return (
    <div className="container">
      <div className="main">
        <TopInfo />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  );
}

export default App;
