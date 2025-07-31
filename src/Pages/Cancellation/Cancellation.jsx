import React from "react";
import "./Cancellation.css";

function Cancellation() {
  const FinancialPoliciesIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6z"></path>
      <path d="M2 10v10h20V10"></path>
      <path d="M6 12h2v6H6z"></path>
      <path d="M11 12h2v6h-2z"></path>
      <path d="M16 12h2v6h-2z"></path>
    </svg>
  );

  const ReadCarefullyIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
  );

  const CalendarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );

  const MinFeeIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
  );

  const LockdownIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  );

  const PaymentPolicyIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  );
  const Instalment1Icon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
      <path d="M8 14h.01"></path>
      <path d="M12 14h.01"></path>
      <path d="M16 14h.01"></path>
      <path d="M8 18h.01"></path>
      <path d="M12 18h.01"></path>
      <path d="M16 18h.01"></path>
    </svg>
  );
  const Instalment2Icon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
  const Instalment3Icon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
    </svg>
  );
  const FinalInstalmentIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );

  return (
    <>
      <section className="cancellation-payment-hero-section">
        <div className="cancellation-payment-container">
          {/* Top Tag */}
          <div className="cancellation-payment-tag">
            <FinancialPoliciesIcon />
            <span>Financial Policies</span>
          </div>

          {/* Main Heading */}
          <h1 className="cancellation-payment-title">
            Cancellation{" "}
            <span className="cancellation-payment-ampersand">&</span> Payment
          </h1>

          {/* Subtitle */}
          <p className="cancellation-payment-subtitle">
            Clear and transparent policies for cancellations and payments. Plan
            your adventure with confidence knowing exactly what to expect.
          </p>

          {/* Bottom Info */}
          <div className="cancellation-payment-bottom-info">
            <button className="cancellation-payment-button">
              <ReadCarefullyIcon />
              <span>Read Carefully</span>
            </button>
            <span className="cancellation-payment-effective-date">
              Effective Immediately
            </span>
          </div>
        </div>
      </section>
      <main className="cancellation-payment-content-section">
        <div className="cancellation-payment-policy-container">
          <div className="cancellation-payment-section-header">
            <CalendarIcon />
            <h2>Cancellation Policy</h2>
            <p>
              Cancellation charges vary based on when you cancel your booking
            </p>
          </div>

          <div className="cancellation-payment-min-fee-box">
            <MinFeeIcon />
            <div>
              <h4>Minimum Cancellation Fee</h4>
              <p>10% or INR 3,000 (whichever is maximum) per person per tour</p>
            </div>
          </div>

          <div className="cancellation-payment-charges-grid">
            <div className="cancellation-payment-charge-card card-green">
              <h3>25%</h3>
              <p>45-30 days before tour departure</p>
            </div>
            <div className="cancellation-payment-charge-card card-yellow">
              <h3>50%</h3>
              <p>30-15 days before tour departure</p>
            </div>
            <div className="cancellation-payment-charge-card card-orange">
              <h3>75%</h3>
              <p>15-5 days before tour departure</p>
            </div>
            <div className="cancellation-payment-charge-card card-red">
              <h3>100%</h3>
              <p>Within 5 days & no-show tour departure</p>
            </div>
          </div>

          <div className="cancellation-payment-lockdown-box">
            <LockdownIcon />
            <div>
              <h4>Lockdown Cancellation</h4>
              <p>
                If the tour is cancelled due to lockdown restrictions, the paid
                amount will be carry-forwarded to any of our future treks or
                tours.
              </p>
            </div>
          </div>
        </div>
      </main>
      <section className="payment-policy-section">
        <div className="payment-policy-container">
              <p>&#8377;</p>
          {/* Header of the section */}
          <div className="payment-section-header">
            {/* <PaymentPolicyIcon /> */}
            <h2>Payment Policy</h2>
            <p>Structured payment schedule to make your booking convenient</p>
          </div>

          {/* Grid layout for instalment cards */}
          <div className="instalment-grid">
            {/* Card 1 */}
            <div className="instalment-card">
              <div className="instalment-icon">
                <Instalment1Icon />
              </div>
              <div className="instalment-details">
                <h4>1st Instalment</h4>
                <p>At booking</p>
              </div>
              <div className="instalment-percentage">30%</div>
            </div>

            {/* Card 2 */}
            <div className="instalment-card">
              <div className="instalment-icon">
                <Instalment2Icon />
              </div>
              <div className="instalment-details">
                <h4>2nd Instalment</h4>
                <p>30 days prior</p>
              </div>
              <div className="instalment-percentage">40%</div>
            </div>

            {/* Card 3 */}
            <div className="instalment-card">
              <div className="instalment-icon">
                <Instalment3Icon />
              </div>
              <div className="instalment-details">
                <h4>3rd Instalment</h4>
                <p>29-15 days prior</p>
              </div>
              <div className="instalment-percentage">20%</div>
            </div>

            {/* Card 4 */}
            <div className="instalment-card">
              <div className="instalment-icon">
                <FinalInstalmentIcon />
              </div>
              <div className="instalment-details">
                <h4>Final Instalment</h4>
                <p>15 days prior</p>
              </div>
              <div className="instalment-percentage">10%</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cancellation-cta-section">
        <div className="cancellation-cta-container">
          <h2>Ready to Book Your Adventure?</h2>
          <p>
            Now that you understand our policies, you can book with confidence.
            Start planning your next unforgettable journey with RAAHi.
          </p>
          <div className="cancellation-cta-buttons">
            <button className="cancellation-cta-button-primary">
              Explore Tours
            </button>
            <button className="cancellation-cta-button-secondary">
              View Terms & Conditions
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cancellation;
