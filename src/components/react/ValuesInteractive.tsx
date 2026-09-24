import React, { useState } from 'react';

interface ValueItem {
  id: number;
  title: string;
  description: string;
}

const leftValues: readonly ValueItem[] = [
  {
    id: 1,
    title: 'National Sovereignty',
    description: 'Safeguarding territorial integrity, constitutional democracy, and national pride with steadfast patriotism.',
  },
  {
    id: 3,
    title: 'Clean Governance',
    description: 'Zero tolerance for corruption, transparent state budgets, and integrated digital public administration.',
  },
] as const;

const rightValues: readonly ValueItem[] = [
  {
    id: 2,
    title: 'Public Welfare',
    description: 'Eradicating poverty and stunting through free nutritious meals, universal health screenings, and affordable housing.',
  },
  {
    id: 4,
    title: 'Self-Sufficiency',
    description: 'Achieving complete food, energy, and water independence through domestic innovation and industrial downstreaming.',
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
            <div>Our Core Values</div>
          </div>
          <h2 className="heading-style-h2">Guiding principles anchoring Indonesia's march toward 2045.</h2>
        </div>
        <div className="value-top-right-content">
          <div className="text-size-regular">
            Rooted in Pancasila, constitutional justice, and an uncompromising commitment to the prosperity of every Indonesian family.
          </div>
        </div>
      </div>

      <div className="value-card-list-wrapper">
        {/* Left column cards (1 and 3) */}
        <div className="value-card-left-card-wrapper">
          {leftValues.map((item) => {
            const isActive = activeTab === item.id;

            return (
              <div
                key={item.id}
                className="value-card reveal-left cursor-pointer transition-all duration-300"
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
              </div>
            );
          })}
        </div>

        {/* Center column numbered diamond tabs (1, 2, 3, 4) */}
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

        {/* Right column cards (2 and 4) */}
        <div className="value-card-right-card-wrapper">
          {rightValues.map((item) => {
            const isActive = activeTab === item.id;

            return (
              <div
                key={item.id}
                className="value-card reveal-right cursor-pointer transition-all duration-300"
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
