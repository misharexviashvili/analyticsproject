import { Card } from "./Card";
export const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <Card
          src={require("../assets/single.png")}
          users="Single User"
          price="$149"
          storage="500 GB Storage"
          granted="1 Granted User"
          upload="Send up to 2 GB"
        />
        <Card
          src={require("../assets/double.png")}
          users="Parthnership User"
          price="$249"
          storage="1 TB Storage"
          granted="1 Granted User"
          upload="Send up to 4 GB"
          buttonStyle={{ backgroundColor: "#000300", color: "#00df9a" }}
          middleCardStyle="md:my-0 my-8 bg-gray-100"
          middleCardImageStyle='bg-transparent'
        />
        <Card
          src={require("../assets/triple.png")}
          users="Corporate User"
          price="$549"
          storage="4 TB Storage"
          granted="Unlimited Granted Users"
          upload="Send up to 10 GB"
        />
      </div>
    </div>
  );
};
