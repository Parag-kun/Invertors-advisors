import Image from "next/image";

const Filter = () => {
    return (
        <div>
            <div className="max-[600px]:text-lg text-xl font-[600]">Filters</div>
            <div className="w-full max-[600px]:py-2 max-[600px]:h-12 h-20 py-5 flex justify-evenly items-center shadow-lg bg-white rounded-lg">
                <div className="min-[600px]:py-1 max-[600px]:px-2 px-6 cursor-pointer rounded-2xl bg-red-700 text-white max-[600px]:text-[10px] text-sm">Sector 1</div>
                <div className="min-[600px]:py-1 max-[600px]:px-2 px-6 cursor-pointer rounded-2xl bg-blue-700 text-white max-[600px]:text-[10px] text-sm">Sector 2</div>
                <div className="min-[600px]:py-1 max-[600px]:px-2 px-6 cursor-pointer rounded-2xl bg-yellow-400 text-white max-[600px]:text-[10px] text-sm">Sector 3</div>
                <div className="relative h-full my-auto max-[600px]:pt-1">
                    <Image src={'/search-icon.avif'} width={20} height={20} alt='Search' className='absolute left-[10px] top-[10px] max-[600px]:hidden'/>
                    <Image src={'/search-icon.avif'} width={10} height={10} alt='Search' className='absolute left-[5px] top-[12px] min-[600px]:hidden'/>
                    <input type="search" placeholder="Search Here" className='max-[600px]:w-[120px] max-[600px]:h-[20px] max-[600px]:pl-5 pl-10 h-full rounded-3xl bg-gray-200 text-sm focus:outline-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]'/>
                </div>
            </div>
        </div>
    );
};

export default Filter;
