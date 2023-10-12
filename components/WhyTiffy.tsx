import React from "react";

type CardProps = { title: string; description: string };
const Card = ({ title, description }: CardProps) => {
  return (
    <div className="flex flex-col gap-2 p-3 border border-emerald-500 rounded-lg place-items-center bg-gradient-to-b from-white from-40% to-emerald-50 h-full">
      <header className="font-bold text-lg text-center w-full text-emerald-500 py-2">
        {title}
      </header>
      <div className="font-light text-justify border-t-2 border-t-emerald-500 border-dashed pt-3 text-sm md:text-base">
        {description}
      </div>
    </div>
  );
};

const cardItems: CardProps[] = [
  {
    title: "Convenient",
    description: "Get tasty meals delivered, saving time and effort.",
  },
  {
    title: "Flavorful",
    description: "Enjoy fresh, delicious meals bursting with flavor.",
  },
  {
    title: "Nutritionally Balanced",
    description: "Nourish your body with balanced, healthy meals.",
  },
  {
    title: "User-Friendly",
    description: "Plan meals easily with our intuitive interface.",
  },
];

const WhyTiffy = () => {
  return (
    <div
      className="bg-white w-full bg-gradient-to-b from-10% from-white via-emerald-300/70 to-white to-90%"
      id="about"
    >
      <div className="container mx-auto px-6 md:px-0 flex flex-col items-center justify-center py-8 backdrop-blur-xl">
        <h3 className="text-xl md:text-2xl font-semibold border-b-2 border-b-emerald-500 mb-5 px-3 md:px-4 pb-1 text-center">
          Why Tiffy
        </h3>
        {/* <h2 className="text-2xl font-bold mb-8">Why Tiffy</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-around gap-6 w-10/12">
          {cardItems.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyTiffy;
