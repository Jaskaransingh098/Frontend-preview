import React from "react";
import "./Rules.css";

function Rules() {
  const LegalDocIcon = () => (
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
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  );

  const LastUpdatedIcon = () => (
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
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );

  const CostsIcon = () => (
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
      <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
      <line x1="12" x2="12" y1="9" y2="13"></line>
      <line x1="12" x2="12.01" y1="17" y2="17"></line>
    </svg>
  );
  const PandemicIcon = () => (
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );
  const ForceMajeureIcon = () => (
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
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
  const MedicalIcon = () => (
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
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );
  const UnusedServicesIcon = () => (
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
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
    </svg>
  );

  return (
    <>
      <section className="rulesregulation-hero-section">
        <div className="rulesregulation-container">
          {/* Top Tag */}
          <div className="rulesregulation-tag rulesregulation-top-tag">
            <LegalDocIcon />
            <span>Legal Documentation</span>
          </div>

          {/* Main Heading */}
          <h1 className="rulesregulation-title">Rules & Regulations</h1>

          {/* Subtitle */}
          <p className="rulesregulation-subtitle">
            Important guidelines and policies for your RAAHI travel experience.
            Please read carefully before booking your adventure.
          </p>

          {/* Bottom Tag */}
          <div className="rulesregulation-tag rulesregulation-bottom-tag">
            <LastUpdatedIcon />
            <span>Last updated: January 2025</span>
          </div>
        </div>
      </section>
      <main className="rulesregulation-content-section">
        <div className="rulesregulation-policies-container">
          <div className="rulesregulation-section-header">
            <h2>Important Notes & Conditions</h2>
            <p>
              These terms and conditions govern your travel experience with
              RAAHI. Understanding these policies helps ensure a smooth and
              enjoyable journey for everyone.
            </p>
          </div>

          {/* Additional Costs & Conditions */}
          <div className="rulesregulation-policy-box rulesregulation-box-yellow">
            <div className="rulesregulation-policy-header">
              <CostsIcon />
              <h3>Additional Costs & Conditions</h3>
            </div>
            <ul className="rulesregulation-policy-list">
              <li>
                Any extra cost (Transportation / Accommodation) arising due to
                natural calamities like landslides, road blockage, political
                disturbances or change in law will be extra.
              </li>
              <li>
                Transfer & Sightseeing by vehicle on seat-in-coach basis.
                Vehicle is provided based on itinerary and not at your disposal.
              </li>
              <li>
                Trip schedule is subject to change due to weather, roads, or
                other unavoidable conditions. Please keep a buffer day or two.
              </li>
              <li>
                Images shown are for illustration purposes only and may differ
                from actual services.
              </li>
              <li>
                Team RAAHI reserves the right to correct any printing or pricing
                errors.
              </li>
              <li>
                Airport transfers and coach tours are based on all guests
                traveling together. No additional transfers will be provided for
                different flights.
              </li>
              <li>
                Additional charges apply for passengers who wish to extend their
                stay.
              </li>
            </ul>
          </div>

          {/* Pandemic & Cancellation Policies */}
          <div className="rulesregulation-policy-box rulesregulation-box-pink">
            <div className="rulesregulation-policy-header">
              <PandemicIcon />
              <h3>Pandemic & Cancellation Policies</h3>
            </div>
            <ul className="rulesregulation-policy-list">
              <li>
                In pandemic situations, the booking amount is non-refundable.
                Rescheduling is available.
              </li>
              <li>
                Changes in itinerary or hotel upgrades will incur additional
                charges, which will be informed in advance.
              </li>
            </ul>
          </div>

          {/* Tour Cancellation & Force Majeure */}
          <div className="rulesregulation-policy-box rulesregulation-box-blue">
            <div className="rulesregulation-policy-header">
              <ForceMajeureIcon />
              <h3>Tour Cancellation & Force Majeure</h3>
            </div>
            <ul className="rulesregulation-policy-list">
              <li>
                In case the Trek/tour gets cancelled cause of local lockdown or
                natural phenomena or any other reason beyond our control, we
                shall arrange for alternative treks or tour to a different
                place.
              </li>
              <li>
                In case, due to Government lockdown restrictions, we are unable
                to continue with any of the plan, covid cancellation policy will
                be applicable. If the participant is unwilling to go for the
                alternative tour/trek, there would be no refund or voucher
                issued as for this tour.
              </li>
              <li>
                All the services have to be arranged beforehand and cannot be
                shifted to any other date. No show and tour changes/cancellation
                due to bad weather or natural calamity will be non-refundable.
              </li>
              <li>
                No money shall be refunded in case a person is rescued and
                brought back to the base camp before the said date.
              </li>
              <li>
                If the travelers need to return before the trip ends, they shall
                have to bear all the expenses for accommodation and meals at
                respective or any other place.
              </li>
              <li>
                The services on the trek/tour are arranged for even if they go
                unused.
              </li>
            </ul>
          </div>

          {/* Medical Emergency & Injury */}
          <div className="rulesregulation-policy-box rulesregulation-box-green">
            <div className="rulesregulation-policy-header">
              <MedicalIcon />
              <h3>Medical Emergency & Injury</h3>
            </div>
            <ul className="rulesregulation-policy-list">
              <li>
                If any traveller feels unwell and has to be brought back to the
                base camp, all the charges, including the rescue fees,
                medication, Ambulance / Transport, Accommodation apart from the
                scheduled itinerary, Meals or any other medical or Miscellaneous
                expenses will have to be borne by the traveller.
              </li>
              <li>
                We have one backup plan by which people unwilling to continue to
                carry on with the trek/to can accompany the person heading back
                to the base camp with the team only once.
              </li>
              <li>
                If in case a second emergency occurs, the complete trek/tour
                will be terminated, and all the participants shall be
                immediately dropped back to the base camp.
              </li>
              <li>
                We are only liable to offer the services mentioned as per the
                itinerary and inclusions.
              </li>
            </ul>
          </div>

          {/* Unused Services Policy */}
          <div className="rulesregulation-policy-box rulesregulation-box-purple">
            <div className="rulesregulation-policy-header">
              <UnusedServicesIcon />
              <h3>Unused Services Policy</h3>
            </div>
            <ul className="rulesregulation-policy-list">
              <li>
                We shall not offer or pay any discounts or refunds for missed or
                unused services which were missed or unused by the client due to
                no fault of ours, or our representatives.
              </li>
              <li>
                This includes any termination of the client's participation in
                the tour product due to the client's own fault, negligence or
                breach of these terms.
              </li>
            </ul>
          </div>
        </div>
      </main>

      <section className="rulesregulation-cta-section">
        <div className="rulesregulation-cta-container">
          <h2>Questions About Our Terms?</h2>
          <p>
            If you have any questions or need clarification about any of these
            terms and conditions, please don't hesitate to contact our team
            before booking.
          </p>
          <div className="rulesregulation-cta-buttons">
            <button className="rulesregulation-cta-button-primary">
              <a href="/">Back to Home</a>
            </button>
            <button className="rulesregulation-cta-button-secondary">
              <a href="/contact">Contact Support</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Rules;
