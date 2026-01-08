import "@/App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import TrainingBooklet from "@/pages/TrainingBooklet";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <HashRouter>
        <Routes>
          <Route path="/" element={<TrainingBooklet />} />
          <Route path="/page/:pageId" element={<TrainingBooklet />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
