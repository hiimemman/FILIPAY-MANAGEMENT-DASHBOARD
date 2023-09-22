
import HeaderCard from "../components/HeaderCard";
import NavBar from "../components/NavBar";
import Paper from "../components/Paper";

export function Dashboard() : JSX.Element{

    return(
        <>
        <NavBar>
           <HeaderCard title="Dashboard"/>
           <Paper />
        </NavBar>
        </>
    )

}