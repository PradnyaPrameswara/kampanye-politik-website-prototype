import React, { useState } from 'react';
import { Card } from '@/components/ui/card';

interface ValueItem {
  id: number;
  title: string;
  description: string;
}

const leftValues: readonly ValueItem[] = [
  {
    id: 1,
    title: 'Kedaulatan',
    description: 'Menjaga keutuhan kepulauan dan martabat bangsa dengan tekad yang tak goyah.',
  },
  {
    id: 3,
    title: 'Tata Kelola Bersih',
    description: 'Menegakkan administrasi yang transparan dan tidak toleransi terhadap korupsi di seluruh layanan.',
  },
] as const;

const rightValues: readonly ValueItem[] = [
  {
    id: 2,
    title: 'Kesejahteraan Rakyat',
    description: 'Menyediakan gizi dan layanan kesehatan harian agar setiap warga dapat berkembang.',
  },
  {
    id: 4,
    title: 'Kemandirian',
    description: 'Membangun kapasitas pangan, energi, dan industri dalam negeri untuk generasi mendatang.',
  },
] as const;

export default function ValuesInteractive() {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setActiveTab(id);
  };

  const handleMouseLeave = () => {
    setActiveTab(null);
  };

  const handleClick = (id: number) => {
    setActiveTab((prev) => (prev === id ? null : id));
  };

  return (
    <div className="value-component">
      <div className="value-top-content-wrapper reveal-down">
        <div className="value-top-left-content">
          <div className="headline">
            <div className="dot"></div>
            <div>Nilai Kami</div>
          </div>
          <h2 className="heading-style-h2">Kenali nilai yang menggerakkan misi kami.</h2>
        </div>
      </div>

      <div className="value-card-list-wrapper">
        <div className="value-card-left-card-wrapper">
          {leftValues.map((item) => {
            const isActive = activeTab === item.id;

            return (
              <Card
                key={item.id}
                className="value-card reveal-left cursor-pointer transition-all duration-300 border-0 p-0 shadow-none rounded-none"
                style={{
                  backgroundColor: isActive ? 'rgb(2, 103, 255)' : 'rgb(255, 255, 255)',
                }}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(item.id)}
              >
                <h6
                  className="heading-style-h6 transition-colors duration-300"
                  style={{
                    color: isActive ? 'rgb(255, 255, 255)' : 'rgb(0, 36, 102)',
                  }}
                >
                  {item.title}
                </h6>
                <div
                  className="text-size-small transition-colors duration-300"
                  style={{
                    color: isActive ? 'rgb(250, 250, 251)' : 'rgb(75, 100, 147)',
                  }}
                >
                  {item.description}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="value-content-wrapper reveal-up">
          {[1, 2, 3, 4].map((num) => {
            const isActive = activeTab === num;

            return (
              <div
                key={num}
                className="value-tab cursor-pointer"
                onMouseEnter={() => handleMouseEnter(num)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(num)}
              >
                <h2
                  className="heading-style-h2 transition-colors duration-300"
                  style={{
                    color: isActive ? 'rgb(255, 255, 255)' : 'rgb(0, 36, 102)',
                  }}
                >
                  {num}
                </h2>
                <div
                  className="value-bg transition-colors duration-300"
                  style={{
                    backgroundColor: isActive ? 'rgb(2, 103, 255)' : 'rgb(255, 255, 255)',
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        <div className="value-card-right-card-wrapper">
          {rightValues.map((item) => {
            const isActive = activeTab === item.id;

            return (
              <Card
                key={item.id}
                className="value-card reveal-right cursor-pointer transition-all duration-300 border-0 p-0 shadow-none rounded-none"
                style={{
                  backgroundColor: isActive ? 'rgb(2, 103, 255)' : 'rgb(255, 255, 255)',
                }}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(item.id)}
              >
                <h6
                  className="heading-style-h6 transition-colors duration-300"
                  style={{
                    color: isActive ? 'rgb(255, 255, 255)' : 'rgb(0, 36, 102)',
                  }}
                >
                  {item.title}
                </h6>
                <div
                  className="text-size-small transition-colors duration-300"
                  style={{
                    color: isActive ? 'rgb(250, 250, 251)' : 'rgb(75, 100, 147)',
                  }}
                >
                  {item.description}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
