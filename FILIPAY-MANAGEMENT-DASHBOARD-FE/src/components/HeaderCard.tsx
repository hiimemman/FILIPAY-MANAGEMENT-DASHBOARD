
interface IHeaderCard{
    title: string
}
export default function HeaderCard(props : IHeaderCard){

    return(
        <>
        
        <a href="#" className="relative block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-primary dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
        </a>

        </>
    )

}