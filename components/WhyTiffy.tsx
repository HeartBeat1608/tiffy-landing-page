import React from "react";

type CardProps = { title: string; description: string };
const Card = ({ title, description }: CardProps) => {
  return (
    <div className="flex flex-col gap-2 p-3 border border-emerald-500 rounded-lg place-items-center bg-white h-full">
      <header className="font-bold text-lg text-center w-full text-emerald-500 py-2">
        {title}
      </header>
      <div className="font-light text-center border-t-2 border-t-emerald-500 border-dashed pt-3">
        {description}
      </div>
    </div>
  );
};

const cardItems: CardProps[] = [
  {
    title: "Localized",
    description:
      "Tiffy provides you with the best tiffins in your locality. Choose your meal and we will handle the rest.",
  },
  {
    title: "Variety",
    description:
      "We provide you with a wide range of tiffins to choose from. You can choose a meal from the various options available.",
  },
  {
    title: "Affordable",
    description:
      "Get the best quality tiffins at the most affordable prices. We provide you with the best value for your money.",
  },
  {
    title: "Easy",
    description:
      "It is very easy to order tiffins from Tiffy. Just select your meal and we will deliver it to your doorstep.",
  },
];

const WhyTiffy = () => {
  return (
    <div
      className="bg-white w-full bg-gradient-to-b from-10% from-white via-emerald-300/70 to-white to-90%"
      id="about"
    >
      <div className="container mx-auto px-6 md:px-0 flex flex-col items-center justify-center py-8 backdrop-blur-xl">
        <h2 className="text-2xl font-bold mb-8">Why Tiffy</h2>
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
