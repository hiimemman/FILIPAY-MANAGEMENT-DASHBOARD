import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface IListProps{
    id: number,
    url: string,
    iconUrl: JSX.Element,
    pageName: string,
    
}

interface IProfileBoxListProps{
    id: number,
    pageUrl: string,
    name: string,
}

export default function NavList(props : IListProps) : JSX.Element {
    const navigate = useNavigate();
    const location = useLocation();
    const [activePage, setActivePage] = useState<string>("");

    useEffect(() => {
        // Get the pathname from the location object and set it as the activePage
        setActivePage(location.pathname);
    }, [location.pathname]);

    return(
        <>
          <li>
            <a
                onClick={() => navigate(props.url)}
                className={`no-underline relative  flex items-center text-2xl mt-4 p-2 text-neutral-100  hover:bg-indigo-950 ${
                activePage === props.url ? 'bg-indigo-700 pl-4' : ''
                }`}
            >
                {activePage === props.url && (
                <div className="absolute top-0 left-0 h-full bg-white w-2 hover: rounded-e-sm"></div>
                )}
                <div className="mr-4"></div>
                {props.iconUrl}
                <span className="ml-3">{props.pageName}</span>
                
            </a>
          </li>
        </>
    )
    
}

export function ProfileBoxList (props: IProfileBoxListProps) : JSX.Element {

    return(
        <>
            <li>
                <a href= {props.pageUrl} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem" key ={props.id}>{props.name}</a>
            </li>
        </>
    )

}