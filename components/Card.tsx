import Image from "next/image";

type PropsType = {
    index: number;
};

const Card = ({ index }: PropsType) => {
    return (
        <div className="flex w-full justify-between max-[600px]:px-4 max-[600px]:py-2 px-8 py-4 shadow-[15px_15px_15px_-15px_rgba(0,0,0,0.3)] bg-white my-4 rounded-xl">
            <div className="flex flex-col flex-1">
                { index == 0 && <Image src={'/infibium-avenues-logo.png'} width={400} height={200} alt="Infibium Avenues" className="self-end mr-4 max-[600px]:hidden"/>}
                { index == 0 && <Image src={'/infibium-avenues-logo.png'} width={200} height={200} alt="Infibium Avenues" className="self-end mr-4 min-[600px]:hidden"/>}
                <div className="flex gap-4">
                    <div className="w-8 h-8 overflow-hidden rounded-full">
                        <Image src={'/avatar.jpeg'} width={40} height={10} alt="Av" />
                    </div>
                    <div className="flex-1 max-[600px]:text-xs text-sm mt-2">
                        <div className="flex items-center">
                            <div className="">Lorem ipsum</div>
                            <div className="ml-4 px-4 py-1 text-[10px] leading-3 bg-red-700 text-white rounded-2xl">Sector {(index % 3) + 1}</div>
                        </div>
                        <div className="max-[600px]:mt-5 mt-10">
                            Lorem ipsum is simply a dummy text of printing and typesetting industry. Lorem ipsum is...
                        </div>
                        <div className="max-[600px]:mt-5 mt-10 flex max-[600px]:gap-2 gap-16">
                            <div className="flex min-[600px]:gap-1 items-center">
                                <Image src={index % 2 ? '/like-icon.svg' : '/liked-icon.png'} width={25} height={25} alt="like" className="max-[600px]:hidden"/>
                                <Image src={index % 2 ? '/like-icon.svg' : '/liked-icon.png'} width={15} height={15} alt="like" className="min-[600px]:hidden"/>
                                <div className="max-[600px]:text-[10px]">2k</div>
                            </div>
                            <div className="flex min-[600px]:gap-1 items-center">
                                <Image src={'/view-icon.jpeg'} width={30} height={30} alt="like" className="max-[600px]:hidden"/>
                                <Image src={'/view-icon.jpeg'} width={15} height={15} alt="like" className="min-[600px]:hidden"/>
                                <div className="max-[600px]:text-[10px]">2k</div>
                            </div>
                            <div className="flex min-[600px]:gap-1 items-center">
                                <Image src={'/comment-icon.png'} width={25} height={25} alt="like" className="max-[600px]:hidden"/>
                                <Image src={'/comment-icon.png'} width={15} height={15} alt="like" className="min-[600px]:hidden"/>
                                <div className="max-[600px]:text-[10px]">2k Comments</div>
                            </div>
                            <div className="flex min-[600px]:gap-1 items-center">
                                <Image src={'/share-icon.jpg'} width={25} height={25} alt="like" className="max-[600px]:hidden"/>
                                <Image src={'/share-icon.jpg'} width={15} height={15} alt="like" className="min-[600px]:hidden"/>
                                <div className="max-[600px]:text-[10px]">Share</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-[600px]:text-[10px] text-xs text-blue-700">
                2 min ago
            </div>
        </div>
    );
};

export default Card;
