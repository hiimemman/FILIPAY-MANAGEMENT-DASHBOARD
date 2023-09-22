
interface IHeaderCard{
    title: string
}
export default function HeaderCard(props : IHeaderCard){

    return(
        <>
        
        <div className="relative block  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-primary dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-indigo-900 dark:text-white">{props.title}</h5>
        </div>

        </>
    )

}