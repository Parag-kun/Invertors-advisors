import { Fragment } from "react";

import { StatType } from "@types";

type PropsType = {
    stats: StatType[];
};

const Stats = ({ stats }: PropsType) => {
    return (
        <div className="h-8 bg-black text-white overflow-hidden flex items-center">
            <div className={`flex text-[10px] font-light animate-[slide_30s_infinite_linear]`}>
            {
                stats.map(it => (
                    <Fragment>
                        <div className="mx-6">{it.name}</div>
                        <div className="mx-6">{it.assetValue}</div>
                        <div className={`${it.increase ? 'text-green-500' : 'text-red-500'} mx-6`}>{it.deltaPercent}</div>
                    </Fragment>
                ))
            }
            </div>
            <div className={`flex text-[10px] font-light animate-[slide_30s_infinite_linear]`}>
            {
                stats.map(it => (
                    <Fragment>
                        <div className="mx-6">{it.name}</div>
                        <div className="mx-6">{it.assetValue}</div>
                        <div className={`${it.increase ? 'text-green-500' : 'text-red-500'} mx-6`}>{it.deltaPercent}</div>
                    </Fragment>
                ))
            }
            </div>
        </div>
    );
};

export default Stats;