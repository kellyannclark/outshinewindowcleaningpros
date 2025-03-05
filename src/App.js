import React from "react";
import Header from "./components/Header"; // ✅ Import the Header
import './App.css';
import './index.css';



function App() {
  return (
    <div className="App">
      <Header />  {/* ✅ Now your header will actually be displayed */}
    </div>
  );
}

export default App;
