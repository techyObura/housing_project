import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { OnboardingProvider } from "./pages/onboarding/OnboardingContext";

// Auth Pages
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import VerifyAccountPage from "./pages/auth/VerifyAccountPage";
// Tenant Pages
import TenantDashboard from "./pages/tenant/TenantDashboard";
import TenantListingsPage from "./pages/tenant/TenantListingsPage";
import TenantListingDetailPage from "./pages/tenant/TenantListingDetailPage";
import TenantPaymentsPage from "./pages/tenant/TenantPaymentsPage";
import TenantSupportPage from "./pages/tenant/TenantSupportPage";
import TenantProfilePage from "./pages/tenant/TenantProfilePage";
import TenantCommunityPage from "./pages/tenant/TenantCommunityPage";

// Landlord Pages
import LandlordDashboard from "./pages/landlord/LandlordDashboard";
import LandlordPropertiesPage from "./pages/landlord/LandlordPropertiesPage";
import LandlordPropertyDetailPage from "./pages/landlord/LandlordPropertyDetailPage";
import LandlordAddPropertyPage from "./pages/landlord/LandlordAddPropertyPage";
import LandlordTenantsPage from "./pages/landlord/LandlordTenantsPage";
import LandlordPaymentsPage from "./pages/landlord/LandlordPaymentsPage";
import LandlordSupportPage from "./pages/landlord/LandlordSupportPage";
import LandlordProfilePage from "./pages/landlord/LandlordProfilePage";

// Housekeeper Pages
import HousekeeperDashboard from "./pages/housekeeper/HousekeeperDashboard";
import HousekeeperTasksPage from "./pages/housekeeper/HousekeeperTasksPage";
import HousekeeperTaskDetailPage from "./pages/housekeeper/HousekeeperTaskDetailPage";
import HousekeeperEarningsPage from "./pages/housekeeper/HousekeeperEarningsPage";
import HousekeeperProfilePage from "./pages/housekeeper/HousekeeperProfilePage";

// Secure Meeting Registry (SMR)
import SMRDashboard from "./pages/smr/SMRDashboard";
import CreateMeetingEntryPage from "./pages/smr/CreateMeetingEntryPage";
import VerifyMeetingPage from "./pages/smr/VerifyMeetingPage";
import ReportIncidentPage from "./pages/smr/ReportIncidentPage";
import SMRAdminPage from "./pages/smr/SMRAdminPage";

// General App Pages
import HomePage from "./pages/general/HomePage";
import AboutPage from "./pages/general/AboutPage";
import ContactPage from "./pages/general/ContactPage";
import SearchPage from "./pages/general/SearchPage";
import NotificationsPage from "./pages/general/NotificationsPage";
import SettingsPage from "./pages/general/SettingsPage";
import OnboardingStart from "./pages/onboarding/OnboardingStart";
import OnboardingRole from "./pages/onboarding/OnboardingRole";
import OnboardingReview from "./pages/onboarding/OnboardingReview";
import OnboardingPersonalInfo from "./pages/onboarding/OnboardingPersonalInfo";
import OnboardingLocation from "./pages/onboarding/OnboardingLocation";
import OnboardingLandlordDetails from "./pages/onboarding/OnboardingLandlordDetails";
import OnboardingHousekeeperDetails from "./pages/onboarding/OnboardingHousekeeperDetails";

export default function App() {
  return (
    <OnboardingProvider>
      <Router>
        <Routes>
          {/* General */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/settings" element={<SettingsPage />} />

          {/* Auth */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/auth/forgot-password"
            element={<ForgotPasswordPage />}
          />
          <Route path="/verify-account" element={<VerifyAccountPage />} />
          {/* Onboarding */}
          <Route path="/onboarding/start" element={<OnboardingStart />} />
          <Route path="/onboarding/role" element={<OnboardingRole />} />
          <Route path="/onboarding/review" element={<OnboardingReview />} />
          <Route
            path="/onboarding/personal-info"
            element={<OnboardingPersonalInfo />}
          />
          <Route path="/onboarding/location" element={<OnboardingLocation />} />
          <Route
            path="/onboarding/landlord-details"
            element={<OnboardingLandlordDetails />}
          />
          <Route
            path="/onboarding/housekeeper-details"
            element={<OnboardingHousekeeperDetails />}
          />

          {/* Tenant */}
          <Route path="/tenant/dashboard" element={<TenantDashboard />} />
          <Route path="/tenant/listings" element={<TenantListingsPage />} />
          <Route
            path="/tenant/listings/:id"
            element={<TenantListingDetailPage />}
          />
          <Route path="/tenant/payments" element={<TenantPaymentsPage />} />
          <Route path="/tenant/support" element={<TenantSupportPage />} />
          <Route path="/tenant/profile" element={<TenantProfilePage />} />
          <Route path="/tenant/community" element={<TenantCommunityPage />} />

          {/* Landlord */}
          <Route path="/landlord/dashboard" element={<LandlordDashboard />} />
          <Route
            path="/landlord/properties"
            element={<LandlordPropertiesPage />}
          />
          <Route
            path="/landlord/properties/:id"
            element={<LandlordPropertyDetailPage />}
          />
          <Route
            path="/landlord/add-property"
            element={<LandlordAddPropertyPage />}
          />
          <Route path="/landlord/tenants" element={<LandlordTenantsPage />} />
          <Route path="/landlord/payments" element={<LandlordPaymentsPage />} />
          <Route path="/landlord/support" element={<LandlordSupportPage />} />
          <Route path="/landlord/profile" element={<LandlordProfilePage />} />

          {/* Housekeeper */}
          <Route
            path="/housekeeper/dashboard"
            element={<HousekeeperDashboard />}
          />
          <Route path="/housekeeper/tasks" element={<HousekeeperTasksPage />} />
          <Route
            path="/housekeeper/tasks/:id"
            element={<HousekeeperTaskDetailPage />}
          />
          <Route
            path="/housekeeper/earnings"
            element={<HousekeeperEarningsPage />}
          />
          <Route
            path="/housekeeper/profile"
            element={<HousekeeperProfilePage />}
          />

          {/* SMR */}
          <Route path="/smr" element={<SMRDashboard />} />
          <Route path="/smr/create" element={<CreateMeetingEntryPage />} />
          <Route path="/smr/verify" element={<VerifyMeetingPage />} />
          <Route path="/smr/report" element={<ReportIncidentPage />} />
          <Route path="/smr/admin" element={<SMRAdminPage />} />
        </Routes>
      </Router>
    </OnboardingProvider>
  );
}
