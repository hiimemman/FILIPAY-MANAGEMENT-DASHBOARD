import '../styles/index.css'

export default function DefaultButton() : JSX.Element {

    return(
        <>
            <button className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl h-16 w-full border-primary">
            SIGN IN
            </button>
        </>
    )

}