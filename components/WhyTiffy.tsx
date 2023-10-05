import React from "react";

type CardProps = { title: string; description: string };
const Card = ({ title, description }: CardProps) => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 p-3 border border-emerald-500 rounded-lg place-items-center bg-white h-full">
      <header className="border-b-2 border-dashed border-emerald-500 font-bold text-lg text-center w-full pb-4 text-emerald-500">
        {title}
      </header>
      <div className="font-light text-center">{description}</div>
    </div>
  );
};

const cardItems: CardProps[] = [
  {
    title: "Understanding Business Needs",
    description:
      "We understand the business needs of our clients and provide them with the best solutions to meet their needs.",
  },
  {
    title: "Experienced Professionals",
    description:
      "Our team of experienced professionals provide quality services and products to our clients.",
  },
  {
    title: "Customer Satisfaction",
    description:
      "We are committed to deliver the best possible customer experience.",
  },
  {
    title: "Quality Assurance",
    description:
      "We are committed to deliver the best quality tiffins that will make your day cheerful.",
  },
];

const WhyTiffy = () => {
  return (
    <div className="bg-white w-full bg-gradient-to-b from-10% from-white via-emerald-300/70 to-white to-90%">
      <div className="container mx-auto px-6 md:px-0 flex flex-col items-center justify-center py-8 backdrop-blur-xl">
        <h2 className="text-2xl font-bold mb-8">Why Tiffy</h2>
        <div className="grid grid-cols-4 items-center justify-around gap-6 w-10/12">
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
