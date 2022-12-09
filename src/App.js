import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import "./App.css";
import Transaction from "./Containers/Transaction";
import NotFoundPage from "./Containers/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - Transaction Status" defaultTitle="Innovation">
        <meta name="description" content="A Transaction Status" />
      </Helmet>

      <Routes>
        <Route path="/" element={<Transaction />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
