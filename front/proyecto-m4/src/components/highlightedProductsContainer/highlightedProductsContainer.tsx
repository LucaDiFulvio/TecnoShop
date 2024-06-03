import HiglightedProductCards from "../highlightedProductsCards/highlightedProductsCards"
const  HiglightedProductContainer:React.FC = ():React.ReactElement => {
    return (
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 justify-center bg-primaryColor p-8 ">
            <HiglightedProductCards/>
        </div>
    )
}


export default HiglightedProductContainer