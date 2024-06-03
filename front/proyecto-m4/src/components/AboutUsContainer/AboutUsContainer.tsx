import { AboutUsItem } from "./types"
import { aboutUsData } from "../../helpers/aboutUsData" 
import Image from "next/image";

const AboutUsContainer: React.FC = () => {
  return (
    <div className="bg-primaryColor">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 justify-center bg-primaryColor p-4 ">
        {aboutUsData.map((item: AboutUsItem, index: number) => (
          <div key={index} className="border-2 border-secondaryColor flex flex-col justify-center items-center h-72 w-72 hover:scale-105 transition-all hover:cursor-pointer hover:shadow-lg  hover:shadow-black gap-4">
            <h2 className="text-secondaryColor text-xl text-center font-bold">{item.title}</h2>
            <p className="text-secondaryColor text-lg text-center">{item.description}</p>
            <div>
              <Image src={item.imageUrl} alt={item.imageAlt} width={96} height={96}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsContainer;