import { Masonry } from 'react-masonry'


export default function LoginGallery() : JSX.Element{

    return(
        <>
        
<div className="relative grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div className="max-w-md h-auto p-6  rounded-lg shadow dark:bg-gray-800"
            style ={{
                background: 'rgba(255, 255, 255, 0.276)'
            }}
            >

                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Lorem ipsum dolor sit amet .</h5>
                </a>
                <p className="mb-3 font-normal text-slate-100 ">Lorem ipsum dolor sit, amet. </p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" style ={{
                    background:'linear-gradient(149deg, rgba(0,136,199,1) 0%, rgba(0,157,215,1) 65%)',
                }}>
                    Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        
     </div>

     <div className="grid gap-4">
        <div className="max-h-48 p-6 rounded-lg shadow dark:bg-gray-800"
            style ={{
                width:'460px',
                background: 'rgba(255, 255, 255, 0.276)'
            }}
            >

                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
                </a>
                <p className="mb-3 font-normal text-slate-100 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" style ={{
                    background:'linear-gradient(149deg, rgba(0,136,199,1) 0%, rgba(0,157,215,1) 65%)',
                }}>
                    Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        
     </div>
     
     
     

</div>        

<div className="relative grid grid-cols-2 md:grid-cols-4 gap-4">



</div>
     

        

 
        </>
    )

}