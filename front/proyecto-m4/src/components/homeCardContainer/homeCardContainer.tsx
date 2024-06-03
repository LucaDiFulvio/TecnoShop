import HomeCards from "../homeCards/homeCards"; // Importa el componente HomeCards
import { homeCardsData } from "@/helpers/homeCardData";

const HomeCardsContainer: React.FC = () => {
    return (
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 justify-center bg-primaryColor p-8  ">
                {homeCardsData.map((data, index) => (
                    <HomeCards key={index} {...data} />
                ))}
        </div>
    );
}

export default HomeCardsContainer;
