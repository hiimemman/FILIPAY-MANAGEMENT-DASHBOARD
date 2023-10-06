
interface IHeaderCard{
    title: string
}
export default function HeaderCard(props : IHeaderCard){

    return(
        <>
        {console.log(props.title)}
        <div className="relative block mt-10  p-12 bg-white border  rounded-lg shadow border-gray-700 hover:bg-gray-700"
        style ={{
            height: 'auto'
        }}
        >
            <h1 className="mb-2 text-5xl  font-bold tracking-tight text-indigo-900">{props.title}</h1>
        </div>

        </>
    )

}