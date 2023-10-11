import { BsMenuAppFill } from "react-icons/bs";
import Carousel from "../components/Carousel";
import CarouselLinks from "../components/CarouselLinks";
import DashboardCard from "../components/DashboardCard";
import HeaderCard from "../components/HeaderCard";
import PaginationTest from "../components/PaginationTest";


export default function TestArea(){

    return(
       <>
        <DashboardCard cardNumber={32} title="TEST" key={1} icon={<BsMenuAppFill />} />
       </>
    )

}