import React from "react";

interface SectionCardProps {
  item: {
    id: number;
    icon: string;
    description: string;
    title: string;
  };
}

const SectionCard: React.FC<SectionCardProps> = ({ item }) => {
  return (
    <div className="flex flex-row h-full w-full">
      <div className="">
        <img
          src={item.icon}
          alt="..."
          loading="lazy"
          className="p-3 bg-RED02 lg:w-20 rounded-xl w-32"
        />
      </div>
      <div className="ml-6">
        <h4 className="text-xl font-bold text-RED01">{item.title}</h4>
        <p className="text-base font-normal mt-3">{item.description}</p>
      </div>
    </div>
  );
};

export default SectionCard;
