import { ReactNode, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BsMenuButtonWide, BsFillPersonFill, BsFillCarFrontFill, BsTruck, BsFillPeopleFill, BsJournalBookmark, BsJournalBookmarkFill, BsEnvelopeAt, BsShieldCheck, BsPersonFillLock, BsPersonVcard, BsHeadset, BsPersonWorkspace } from 'react-icons/bs';
import NavList, { ProfileBoxList } from "./NavList";
import NotificationBell from "./NotificationBell";
interface NavBarProps {
    children: ReactNode;
}

interface IUserInformation{
    id: number,
    firstname: string,
    middlename: string,
    lastname: string,
    email: string,
    role: string,
    imageUrl: string,
}

    //////////////////////////////////////////////////////////////////
    ///////// MOCK DATA
    /////////////////////////////////////////////////////////////////
    const NavBarPages = [
        
        {id: 1, pageName: "Dashboard", url: "/dashboard", iconUrl: <BsMenuButtonWide />},
        {id: 2, pageName: "Employee", url: "/employee", iconUrl: <BsPersonWorkspace />},
        {id: 3, pageName: "Client", url: "/client", iconUrl: <BsFillPersonFill />},
        {id: 4, pageName: "Driver", url: "/driver", iconUrl: <BsFillCarFrontFill />},
        {id:5, pageName: "Rider", url:"/rider", iconUrl:<BsTruck />},
        {id:6, pageName: "Distributor/Retailer", url:"/distributor", iconUrl: <BsFillPeopleFill />},
        {id:7, pageName: "Accounting System", url:"/accounting-system", iconUrl: <BsJournalBookmark /> },
        {id:8, pageName: "KYC" , url:"/kyc", iconUrl: <BsJournalBookmarkFill />},
        {id:9, pageName: "Email Template", url:"/email-template" , iconUrl: <BsEnvelopeAt />},
        {id:10, pageName: "Privacy Policy", url :"/privacy-policy", iconUrl: <BsShieldCheck />},
        {id:11, pageName: "Admin/Sub-Admin Controller", url :"/admin-controller", iconUrl: <BsPersonFillLock />},
        {id:12, pageName: "Admin Activity", url : "/admin-activity", iconUrl: <BsPersonVcard />},
        {id:13, pageName: "Support" , url :"/support", iconUrl: <BsHeadset />}
    ]

    const ProfileDropdown = [
        {id : 1, name : "Logout" , pageUrl: "/signout"}
    ]

    const UserInformation : IUserInformation  = 
        {id: 1, firstname:"Emmanuel", middlename:"", lastname: "Zuniga", role: "Administrator", email: "admin@gmail.com", imageUrl: "https://flowbite.com/docs/images/people/profile-picture-5.jpg"} 
    

export default function NavBar ({children} : NavBarProps) : JSX.Element{
    

    const navigate = useNavigate();
    const location = useLocation();
    const [activePage, setActivePage] = useState<string>("");

    const [userInformation, setUserInformation] = useState(UserInformation)

    const [isBurgerClicked, setIsBurgerClicked] = useState(false)

    ////////////////////////////////////////////////////////
    /////// Profile Box State
    ///////////////////////////////////////////////////////

    const  [isOpenProfileBox, setIsOpenProfileBox] = useState(false);

    function handleLogOut (){
    
    }
   
        
    function handleBtnProfileBox() : any{
        setIsOpenProfileBox(!isOpenProfileBox)
    }

    useEffect( () =>{

        return () => {}
    },[userInformation, isOpenProfileBox,isBurgerClicked])
   
    
    return(
        <>
        <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-blue-900 to-[#161d6f] border-b border-gray-200 dark:bg-primary dark:border-gray-700">
  <div className="px-3 py-3 lg:px-5 lg:pl-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start">
        <button onClick ={() => setIsBurgerClicked(!isBurgerClicked)}data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="false" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>
         
             <a href= "#" className="flex ml-2 md:mr-24">
                <span className="self-center text-white text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Dashboard Management</span>
             </a>
         
        
      </div>
    
    

<div className="z-50 flex items-center relative ml-3">
<NotificationBell />
  <div>
    
    <button type="button" className="flex items-center text-sm bg-gray rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" onClick={handleBtnProfileBox}>
        <img className="w-8 h-8 rounded-full mr-2" src={userInformation.imageUrl} alt="user photo" />
        <p className="text-sm text-white dark:text-white flex-grow">{userInformation.firstname + " " + userInformation.middlename + " " + userInformation.lastname}</p>
    </button>
    

    {isOpenProfileBox && (
      <div className="absolute z-50 right-0 mt-2 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
        <div className="px-4 py-3" role="none">
          <p className="text-sm text-gray-900 dark:text-white" role="none">
            {userInformation.firstname + " " + userInformation.middlename + " " + userInformation.lastname}
          </p>
          <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
            {userInformation.email}
          </p>
        </div>
        <ul className="py-1" role="none">
          {ProfileDropdown.map((list) => {
            return (
              <ProfileBoxList
                id={list.id}
                name={list.name}
                pageUrl={list.pageUrl}
                key={list.id}
              />
            );
          })}
        </ul>
      </div>
    )}
  </div>
</div>

        
    </div>
  </div>
</nav>

<aside id="logo-sidebar" className= {isBurgerClicked ? ("fixed top-0 left-0 z-40 w-64 h-screen pt-0 transition-transform -translate-x-full bg-primary border-r border-gray-200 sm:translate-x-0 dark:bg-primary dark:border-gray-700") : ("fixed top-0 left-0 z-40 w-64 h-screen pt-0 bg-primary border-r border-gray-200 sm:translate-x-0 dark:bg-primary dark:border-gray-700")} aria-label="Sidebar">
   <div className="h-full px-0 m1 pb-4 overflow-y-auto bg-gradient-to-b from-blue-900 to-[#161d6f] dark:bg-primary">
     <div className="mt-20"></div>
      <ul className="space-y-2 font-medium">

        {NavBarPages.map((page) =>{
          return(
         <>
         
            <NavList 
            iconUrl= {page.iconUrl}
            pageName= {page.pageName}
            url= {page.url}
            id = {page.id}
            key = {page.id}
            />
         </>
          ) 
        })}
      </ul>
   </div>
</aside>

<div className="p-10 mt-10 sm:ml-60 sm:p-10">
   
{children}

</div>

        </>
    )

}