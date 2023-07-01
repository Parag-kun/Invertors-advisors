import MarketCardList from "@components/MarketCardList";

const MarketStories = () => {
    return (
        <div className="h-full flex-1 pt-4 pl-4 flex flex-col">
            <div className=" max-[600px]:text-lg text-xl text-red-400 font-bold">MARKET STORIES</div>
            <MarketCardList />
        </div>
    );
};

export default MarketStories;
