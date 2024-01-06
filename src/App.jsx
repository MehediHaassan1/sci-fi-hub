import "./App.css";
import Blogs from "./components/Blogs";
import Header from "./components/Header";

function App() {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Header></Header>
            <Blogs></Blogs>
        </div>
    );
}

export default App;
