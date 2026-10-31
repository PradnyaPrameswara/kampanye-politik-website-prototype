import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
      <Card className="mission-card reveal-scale border-0 bg-transparent shadow-none p-0">
        <div className="mission-image-wraper">
          <img
            alt="Mission"
            className="mission-image"
            loading="lazy"
            sizes="(max-width: 479px) 93vw, (max-width: 991px) 94vw, 588px"
            src="/images/assets/66dc04d9dd607b08dfac0c60_Mission%20Image%202.webp"
          />
        </div>
        <CardContent className="mission-card-content-wrapper p-0">
          <h4 className="heading-style-h4">Mission</h4>
          <div
            className="mission-card-content overflow-hidden transition-all duration-500 ease-in-out"
            style={{ maxHeight: missionOpen ? '400px' : '50px' }}
          >
            <p className="text-size-regular">
              Our mission is to safeguard national sovereignty by executing strategic priorities under Asta Cita that serve all Indonesian citizens. We are committed to eradicating childhood stunting through daily nutritious meals, securing domestic food and energy self-sufficiency, and expanding downstream processing across strategic resources. By establishing transparent, accountable governance, we build an enduring foundation for national prosperity.
            </p>
          </div>
          <Button
            type="button"
            variant="ghost"
            className="mission-button bg-transparent border-none p-0 h-auto font-normal cursor-pointer text-left hover:bg-transparent"
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
          </Button>
        </CardContent>
      </Card>

      <Card className="mission-card reveal-scale border-0 bg-transparent shadow-none p-0">
        <div className="mission-image-wraper">
          <img
            alt="Vision"
            className="mission-image"
            loading="lazy"
            sizes="(max-width: 479px) 93vw, (max-width: 991px) 94vw, 588px"
            src="/images/assets/66dc04db185f32d46eb9e05f_Mission%20Image%2001.webp"
          />
        </div>
        <CardContent className="mission-card-content-wrapper p-0">
          <h4 className="heading-style-h4">Vision</h4>
          <div
            className="mission-card-content overflow-hidden transition-all duration-500 ease-in-out"
            style={{ maxHeight: visionOpen ? '400px' : '50px' }}
          >
            <p className="text-size-regular">
              Our vision is the realization of Indonesia Emas 2045: an advanced, equitable, and sovereign archipelagic nation where every family can thrive. We envision a self-reliant economy where domestic resources power domestic industry, and public services operate with integrity and digital efficiency. We aim to build a society where quality healthcare, modern education, and decent housing are accessible to every citizen from Sabang to Merauke. Together, we forge a stronger and united future.
            </p>
          </div>
          <Button
            type="button"
            variant="ghost"
            className="mission-button bg-transparent border-none p-0 h-auto font-normal cursor-pointer text-left hover:bg-transparent"
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
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
