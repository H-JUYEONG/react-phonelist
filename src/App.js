import { BrowserRouter, Routes, Route } from "react-router-dom";

import PhoneList from "./pages/PhoneList";
import ItemPerson from "./pages/ItemPerson";

import Company from "./pages/Company";
import Company2 from "./pages/Company2";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PhoneList />} />
          <Route path="/itemperson" element={<ItemPerson />} />

          <Route path="/company" element={<Company />} />
          <Route path="/company2" element={<Company2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
