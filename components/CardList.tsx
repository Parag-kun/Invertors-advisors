import Card from '@components/Card';

const CardList = () => {
    return (
        <div className="flex-1 min-h-0 overflow-y-scroll mt-4 pr-4 custom-scrollbar">
            {
                Array(4).fill(0).map((_, index) => {
                    return <Card index={index} />
                })
            }
        </div>
    );
};

export default CardList;
