import { Bs9CircleFill, BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";

export default function CarouselLinks() : JSX.Element {
    return(
        <>
          <div className="fixed z-0 bottom-0 flex justify-center p-10" id="links">
            <a href= "#" className="grow w-12 h-10 me-4 text-white flex items-center justify-center rounded" style={{ backgroundColor: '#161d6f' }}>
              <Bs9CircleFill />
            </a>
            <a href= "#" className="grow w-12 h-10 me-4 text-white flex items-center justify-center rounded" style={{ backgroundColor: '#161d6f' }}>
              <BsLinkedin />
            </a>
            <a href= "#" className="grow w-12 h-10 me-4 text-white flex items-center justify-center rounded" style={{ backgroundColor: '#161d6f' }}>
              <BsFacebook />
            </a>
            <a href= "#" className="grow w-12 h-10 me-4 text-white flex items-center justify-center rounded" style={{ backgroundColor: '#161d6f' }}>
              <BsInstagram />
            </a>
            <a href= "#" className="grow w-12 h-10 me-4 text-white flex items-center justify-center rounded" style={{ backgroundColor: '#161d6f' }}>
              <BsTwitter />
            </a>
            <a href= "#" className="grow w-12 h-10 me-4 text-white flex items-center justify-center rounded" style={{ backgroundColor: '#161d6f' }}>
              <BsYoutube />
            </a>
          </div>
        </>
    )
}