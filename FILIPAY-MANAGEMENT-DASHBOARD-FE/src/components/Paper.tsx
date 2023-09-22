


export default function Paper({children} : any) : JSX.Element{

    return(
    <div className="relative block mt-4  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-primary dark:border-gray-700 dark:hover:bg-gray-700">
      {children}
    </div>
    )

}