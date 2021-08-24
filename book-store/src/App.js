import "bootstrap/dist/css/bootstrap.min.css";
// import horror from "../data/horror.json";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import LastestRelease from "./components/LastestRelease";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <LastestRelease />
      <Footer />
    </div>
  );
}

export default App;
