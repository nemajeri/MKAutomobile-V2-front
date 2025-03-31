import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import "./App.css";
import PageLayout from "@/layouts/PageLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/fahrzeugangebote" element={<div>fahrzeugangebote</div>} />
          <Route path="/finanzierung" element={<div>finanzierung</div>} />
          <Route path="/fahrzeugankauf" element={<div>fahrzeugankauf</div>} />
          <Route path="/galerie" element={<div>galerie</div>} />
          <Route path="/kontakt" element={<div>kontakt</div>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
