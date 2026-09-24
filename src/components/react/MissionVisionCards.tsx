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
              Our mission is anchored in Asta Cita: the 8 strategic pillars to fortify national defense, achieve total food and energy self-sufficiency, accelerate downstream industrialization across 26 commodities, eradicate childhood stunting through Makan Bergizi Gratis for 82 million beneficiaries, and establish clean, digital governance.
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
              Our vision is the realization of Indonesia Emas 2045: a sovereign, self-reliant, advanced, and equitable archipelagic power where every citizen enjoys food security, top-tier healthcare, quality education, 3 million new homes annually, and social justice from Sabang to Merauke.
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
