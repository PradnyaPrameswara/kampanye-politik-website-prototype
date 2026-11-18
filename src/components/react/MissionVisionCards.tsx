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
            alt="Misi Kabinet Merah Putih"
            className="mission-image"
            loading="lazy"
            sizes="(max-width: 479px) 93vw, (max-width: 991px) 94vw, 588px"
            src="/images/assets/66dc04d9dd607b08dfac0c60_Mission%20Image%202.webp"
          />
        </div>
        <CardContent className="mission-card-content-wrapper p-0">
          <h3 className="heading-style-h4">Misi</h3>
          <div
            id="mission-card-content"
            className="mission-card-content overflow-hidden transition-all duration-500 ease-in-out"
            style={{ maxHeight: missionOpen ? '400px' : '50px' }}
          >
            <p className="text-size-regular">
              Misi kami adalah menjaga kedaulatan nasional melalui pelaksanaan prioritas strategis Asta Cita untuk seluruh warga Indonesia. Kami berkomitmen menuntaskan stunting anak melalui makanan bergizi harian, mewujudkan swasembada pangan dan energi dalam negeri, serta memperluas hilirisasi sumber daya strategis. Dengan tata kelola yang transparan dan akuntabel, kami membangun fondasi kokoh bagi kemakmuran nasional.
            </p>
          </div>
          <Button
            type="button"
            variant="ghost"
            className="mission-button bg-transparent border-none p-0 h-auto font-normal cursor-pointer text-left hover:bg-transparent"
            onClick={toggleMission}
            aria-expanded={missionOpen}
            aria-controls="mission-card-content"
          >
            <div
              className="mission-button-text"
              style={{ display: missionOpen ? 'none' : 'block' }}
            >
              Lihat selengkapnya....
            </div>
            <div
              className="mission-button-text"
              style={{ display: missionOpen ? 'block' : 'none' }}
            >
              Lihat lebih sedikit....
            </div>
          </Button>
        </CardContent>
      </Card>

      <Card className="mission-card reveal-scale border-0 bg-transparent shadow-none p-0">
        <div className="mission-image-wraper">
          <img
            alt="Visi Indonesia Emas 2045"
            className="mission-image"
            loading="lazy"
            sizes="(max-width: 479px) 93vw, (max-width: 991px) 94vw, 588px"
            src="/images/assets/66dc04db185f32d46eb9e05f_Mission%20Image%2001.webp"
          />
        </div>
        <CardContent className="mission-card-content-wrapper p-0">
          <h3 className="heading-style-h4">Visi</h3>
          <div
            id="vision-card-content"
            className="mission-card-content overflow-hidden transition-all duration-500 ease-in-out"
            style={{ maxHeight: visionOpen ? '400px' : '50px' }}
          >
            <p className="text-size-regular">
              Visi kami adalah terwujudnya Indonesia Emas 2045: bangsa kepulauan yang maju, adil, dan berdaulat, di mana setiap keluarga dapat berkembang. Kami membayangkan ekonomi mandiri yang sumber daya dalam negerinya menggerakkan industri dalam negeri, serta layanan publik yang dijalankan dengan integritas dan efisiensi digital. Kami menuju masyarakat dengan layanan kesehatan berkualitas, pendidikan modern, dan hunian layak yang terjangkau bagi setiap warga dari Sabang sampai Merauke. Bersama, kita bangun masa depan yang lebih kuat dan bersatu.
            </p>
          </div>
          <Button
            type="button"
            variant="ghost"
            className="mission-button bg-transparent border-none p-0 h-auto font-normal cursor-pointer text-left hover:bg-transparent"
            onClick={toggleVision}
            aria-expanded={visionOpen}
            aria-controls="vision-card-content"
          >
            <div
              className="mission-button-text"
              style={{ display: visionOpen ? 'none' : 'block' }}
            >
              Lihat selengkapnya....
            </div>
            <div
              className="mission-button-text"
              style={{ display: visionOpen ? 'block' : 'none' }}
            >
              Lihat lebih sedikit....
            </div>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
