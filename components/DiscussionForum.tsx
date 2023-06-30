import Filter from '@components/Filter';
import CardList from '@components/CardList';

const DiscussionForum = () => {
    return (
        <div className="h-full max-[600px]:w-full w-1/2 pt-4 flex flex-col overflow-hidden">
            <div className="text-xl max-[1000px]:ml-4 max-[600px]:text-lg text-red-400 font-bold">DISCUSSION FORUM</div>
            <div className="mt-2 max-[600px]:ml-8 ml-12 max-[600px]:mr-2 flex flex-col flex-1 min-h-0 overflow-hidden">
                <Filter />
                <CardList />
            </div>
        </div>
    );
};

export default DiscussionForum;
