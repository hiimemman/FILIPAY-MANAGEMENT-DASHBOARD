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
          
            <a onClick ={() => navigate(props.url)}className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${activePage === props.url ? 'border-4 border-blue-500 bg-blue-800' : ''}`}>
                
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