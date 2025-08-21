import { Navigate, Route, Routes } from "react-router-dom";

import DocRouter from "@/platforms/demo/router";
// import LandingRouter from "@/platforms/landing/router";

function App() {
  return (
    <Routes>
      {/* <Route path="/*" element={<LandingRouter />} /> */}
      <Route path="/docs/*" element={<DocRouter />} />
      <Route path="*" element={<Navigate to="/docs" replace />} />
    </Routes>
  );
}

export default App;
