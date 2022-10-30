import "./App.css";
import "./Components/Sidebar";
import "./Components/Chatbox";
import Sidebar from "./Components/Sidebar";
import Chatbox from "./Components/Chatbox";

function App() {
  return (
    <div className="app">
      <div className="green"></div>
      <div className="chat-container">
        <Sidebar />
        <Chatbox />
      </div>
    </div>
  );
}

export default App;
