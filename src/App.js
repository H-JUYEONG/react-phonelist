import { BrowserRouter, Routes, Route } from "react-router-dom";

import PhoneList from "./pages/PhoneList";
import ItemPerson from "./pages/ItemPerson";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PhoneList />} />
          <Route path="/itemperson" element={<ItemPerson />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
