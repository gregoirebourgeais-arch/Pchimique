import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrainingBooklet from "@/pages/TrainingBooklet";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TrainingBooklet />} />
          <Route path="/page/:pageId" element={<TrainingBooklet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
