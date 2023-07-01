import Image from "next/image";

const MarketCardList = () => {
    return (
        <div className="overflow-scroll flex-1 min-h-0 no-scrollbar">
            <div className="flex flex-wrap justify-center p-8 gap-8">
                {
                    Array(6).fill(0).map((_, index) => {
                        return (
                            <div className="rounded-lg overflow-hidden relative">
                                {
                                    index % 2
                                        ? (
                                            <Image src={'/bombay-stock-exchange.webp'} width={250} height={300} alt="Bombay Stock Exchange" />
                                        )
                                        : (
                                            <Image src={'/borough-market.webp'} width={250} height={300} alt="Bombay Stock Exchange" />
                                        )
                                }
                                <div className="px-4 absolute bottom-0 text-white text-[10px]">Lorem ipsum is simply a dummy text of printing and typesetting industry</div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default MarketCardList;
