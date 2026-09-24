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
            src="/images/webflow/66dc04d9dd607b08dfac0c60_Mission%20Image%202.webp"
          />
        </div>
        <div className="mission-card-content-wrapper">
          <h4 className="heading-style-h4">Mission</h4>
          <div
            className="mission-card-content overflow-hidden transition-all duration-500 ease-in-out"
            style={{ maxHeight: missionOpen ? '400px' : '50px' }}
          >
            <p className="text-size-regular">
              Our mission is to empower every citizen by fostering an inclusive, transparent, and accountable government that serves the people. We are committed to promoting justice, equality, and opportunity for all, ensuring that every voice is heard and every community is represented. By championing policies that prioritize the well-being of individuals and families, we strive to create a sustainable and prosperous future for our nation.
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
            src="/images/webflow/66dc04db185f32d46eb9e05f_Mission%20Image%2001.webp"
          />
        </div>
        <div className="mission-card-content-wrapper">
          <h4 className="heading-style-h4">Vision</h4>
          <div
            className="mission-card-content overflow-hidden transition-all duration-500 ease-in-out"
            style={{ maxHeight: visionOpen ? '400px' : '50px' }}
          >
            <p className="text-size-regular">
              Our vision is to build a fair and just society where every individual has the opportunity to thrive. We envision a future where government works for the people, guided by the principles of democracy, human rights, and social responsibility. We aim to create a community united by shared values, where diversity is celebrated, and every person has a role in shaping the future. Together, we will work towards a nation that is stronger, more resilient, and inclusive.
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
