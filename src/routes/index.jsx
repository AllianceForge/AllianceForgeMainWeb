import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LegalPageLayout from "../layouts/LegalPageLayout";
import TransparencyPage from "../pages/TransparencyPage";
import PrivacyPage from "../pages/PrivacyPage";
import TermsPage from "../pages/TermsPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/legal" element={<LegalPageLayout />}>
          <Route path="transparency" element={<TransparencyPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
