
interface DashboardCardProps {

title: string;
cardNumber: number;
icon: JSX.Element

}

export default function DashboardCard(props : DashboardCardProps){

    return (
        <>
     <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm">
      <div className="p-3 mr-4 text-white rounded-full">
        {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"></path></svg> */}
        {props.icon}
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-indigo-900">{props.title}</p>
        <p className="text-2xl font-normal text-indigo-900">{props.cardNumber}</p>
      </div>
    </div>
        </>
    )

}