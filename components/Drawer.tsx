import Image from "next/image";
import { useState } from "react";

const Drawer = () => {
    const [display, setDisplay] = useState(screen.width >= 1000);

    return (
        <div className={`${display ? 'max-[1000px]:w-2/4 w-1/5' : 'w-4'} max-[1000px]:absolute max-[1000px]:top-0 h-full relative transition-all duration-1000 flex items-center z-10`}>
            <div className={`${display ? 'w-full' : 'w-0'} h-full overflow-hidden transition-all duration-1000 bg-sky-900`}>
                <div className="relative max-[1000px]:w-[45vw] w-[19vw] h-full overflow-scroll right-0 text-white text-sm max-[600px]:text-xs">
                    <div className="flex items-center justify-between max-[600px]:px-2 px-4 mt-4 mb-5">
                        <div className="flex items-center">
                            <Image src={'/unknown-user-icon.png'} width={25} height={25} alt="Bell" className="max-[600px]:hidden" />
                            <Image src={'/unknown-user-icon.png'} width={15} height={15} alt="Bell" className="min-[600px]:hidden" />
                            <div className="ml-2">Hello, User</div>
                        </div>
                        <Image src={'/bell-icon.png'} width={25} height={25} alt="Bell" className="max-[600px]:hidden" />
                        <Image src={'/bell-icon.png'} width={15} height={15} alt="Bell" className="min-[600px]:hidden" />
                    </div>
                    <div className="w-full border-t-[0.1px] border-white"></div>
                    <div className="mt-1 py-2 flex bg-sky-950 items-center">
                        <Image src={'/message-icon.png'} width={25} height={25} alt="Msg" className="ml-4 max-[600px]:hidden" />
                        <Image src={'/message-icon.png'} width={15} height={15} alt="Msg" className="ml-2 min-[600px]:hidden" />
                        <div className="ml-2">Discussion Forum</div>
                        <div className="flex items-center cursor-pointer">
                            <Image src={`/right-icon.png`} width={5} height={5} alt="Right" className="ml-20 rotate-90 max-[600px]:hidden" />
                            <Image src={`/right-icon.png`} width={5} height={5} alt="Right" className="ml-6 rotate-90 min-[600px]:hidden" />
                        </div>
                    </div>
                    <div className="py-2 flex items-center">
                        <Image src={'/dollar-icon.png'} width={25} height={25} alt="dollar" className="ml-4 max-[600px]:hidden" />
                        <Image src={'/dollar-icon.png'} width={15} height={15} alt="dollar" className="ml-2 min-[600px]:hidden" />
                        <div className="ml-2">Market Stories</div>
                    </div>
                    <div className="py-2 flex items-center">
                        <div className="max-[600px]:ml-2 ml-4 max-[600px]:w-[15px] w-[25px] h-4"></div>
                        <div className="ml-2">Sentiment</div>
                    </div>
                    <div className="py-2 flex items-center">
                        <div className="max-[600px]:ml-2 ml-4 max-[600px]:w-[15px] w-[25px] h-4"></div>
                        <div className="ml-2">Market</div>
                    </div>
                    <div className="py-2 flex items-center">
                        <div className="max-[600px]:ml-2 ml-4 max-[600px]:w-[15px] w-[25px] h-4"></div>
                        <div className="ml-2">Sector</div>
                    </div>
                    <div className="py-2 flex items-center">
                        <div className="max-[600px]:ml-2 ml-4 max-[600px]:w-[15px] w-[25px] h-4"></div>
                        <div className="ml-2">Watchlist</div>
                    </div>
                    <div className="py-2 flex items-center">
                        <div className="max-[600px]:ml-2 ml-4 max-[600px]:w-[15px] w-[25px] h-4"></div>
                        <div className="ml-2">Events</div>
                    </div>
                    <div className="py-2 flex items-center">
                        <div className="max-[600px]:ml-2 ml-4 max-[600px]:w-[15px] w-[25px] h-4"></div>
                        <div className="ml-2">News/Interview</div>
                    </div>
                </div>
            </div>
            <div
                className="w-4 h-16 bg-sky-900 flex items-center text-white cursor-pointer rounded-r"
                onClick={() => setDisplay(display => !display)}
            >
                <Image src={`/right-icon.png`} width={8} height={5} alt="Right" className={`${display ? 'rotate-180' : ''} ml-[2px] transition duration-1000`}/>
            </div>
        </div>
    );
};

export default Drawer;
