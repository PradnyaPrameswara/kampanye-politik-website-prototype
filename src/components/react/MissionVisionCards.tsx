import React, { useState } from 'react';

export default function MissionVisionCards() {
  const [missionOpen, setMissionOpen] = useState(false);
  const [visionOpen, setVisionOpen] = useState(false);

  const toggleMission = () => {
    setMissionOpen((prev) => !prev);
  };

  const toggleVision = () => {
    setVisionOpen((prev) => !prev);
  };

  return (
    <div className="mission-bottom-content-wrapper">
      <div className="mission-card reveal-scale">
        <div className="mission-image-wraper">
          <img
            alt="Mission"
            className="mission-image"
            loading="lazy"
            sizes="(max-width: 479px) 93vw, (max-width: 991px) 94vw, 588px"
            src="/images/assets/66dc04d9dd607b08dfac0c60_Mission%20Image%202.webp"
          />
        </div>
        <div className="mission-card-content-wrapper">
          <h4 className="heading-style-h4">Mission</h4>
          <div
            className="mission-card-content overflow-hidden transition-all duration-500 ease-in-out"
            style={{ maxHeight: missionOpen ? '400px' : '50px' }}
          >
            <p className="text-size-regular">
              Our mission is to safeguard national sovereignty by executing strategic priorities under Asta Cita that serve all Indonesian citizens. We are committed to eradicating childhood stunting through daily nutritious meals, securing domestic food and energy self-sufficiency, and expanding downstream processing across strategic resources. By establishing transparent, accountable governance, we build an enduring foundation for national prosperity.
            </p>
          </div>
          <button
            type="button"
            className="mission-button bg-transparent border-none p-0 cursor-pointer text-left"
            onClick={toggleMission}
          >
            <div
              className="mission-button-text"
              style={{ display: missionOpen ? 'none' : 'block' }}
            >
              See more....
            </div>
            <div
              className="mission-button-text"
              style={{ display: missionOpen ? 'block' : 'none' }}
            >
              See less....
            </div>
          </button>
        </div>
      </div>

      <div className="mission-card reveal-scale">
        <div className="mission-image-wraper">
          <img
            alt="Vision"
            className="mission-image"
            loading="lazy"
            sizes="(max-width: 479px) 93vw, (max-width: 991px) 94vw, 588px"
            src="/images/assets/66dc04db185f32d46eb9e05f_Mission%20Image%2001.webp"
          />
        </div>
        <div className="mission-card-content-wrapper">
          <h4 className="heading-style-h4">Vision</h4>
          <div
            className="mission-card-content overflow-hidden transition-all duration-500 ease-in-out"
            style={{ maxHeight: visionOpen ? '400px' : '50px' }}
          >
            <p className="text-size-regular">
              Our vision is the realization of Indonesia Emas 2045: an advanced, equitable, and sovereign archipelagic nation where every family can thrive. We envision a self-reliant economy where domestic resources power domestic industry, and public services operate with integrity and digital efficiency. We aim to build a society where quality healthcare, modern education, and decent housing are accessible to every citizen from Sabang to Merauke. Together, we forge a stronger and united future.
            </p>
          </div>
          <button
            type="button"
            className="mission-button bg-transparent border-none p-0 cursor-pointer text-left"
            onClick={toggleVision}
          >
            <div
              className="mission-button-text"
              style={{ display: visionOpen ? 'none' : 'block' }}
            >
              See more....
            </div>
            <div
              className="mission-button-text"
              style={{ display: visionOpen ? 'block' : 'none' }}
            >
              See less....
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
