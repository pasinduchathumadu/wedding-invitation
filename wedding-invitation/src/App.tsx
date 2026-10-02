import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { InvitationPage } from "./pages/InvitationPage";
import { NotFoundPage } from "./pages/NotFoundPage";
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/invite/kasun" replace />} />
        <Route path="/invite/:slug" element={<InvitationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}
