import { BrowserRouter, Routes, Route } from "react-router-dom";

import PaymentPartners from "./components/PaymentPartners";
import Trust from "./pages/Trust";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaymentPartners />} />
        <Route path="/trust" element={<Trust />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
