// src/components/auth/AuthLayout.jsx

import "../../css/auth.css";

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-wrapper container-fluid p-0">
      <div className="row g-0 min-vh-100">

        {/* Left Branding */}
        <div className="col-lg-6 d-none d-lg-flex auth-banner">

          <div className="banner-content text-white">

            <h1 className="fw-bold mb-4">
              TexoTrade
            </h1>

            <h2 className="fw-semibold mb-3">
              Premium B2B Textile Marketplace
            </h2>

            <p className="lead">
              Connect with trusted textile manufacturers,
              wholesalers and buyers across India through one
              powerful marketplace.
            </p>

            <div className="feature-list mt-5">

              <div>✔ Verified Suppliers</div>

              <div>✔ Secure Transactions</div>

              <div>✔ Bulk Orders</div>

              <div>✔ Fast RFQ Process</div>

            </div>

          </div>

        </div>

        {/* Right Form */}

        <div className="col-lg-6 d-flex align-items-center justify-content-center auth-form-section">

          {children}

        </div>

      </div>
    </div>
  );
};

export default AuthLayout;