import { NextResponse } from "next/server";

export async function GET() {
    const stats = [{
        name: 'NIFTYBANK',
        assetValue: '41,569.50',
        deltaPercent: '0.01%',
        increase: true,
    }, {
        name: 'BAJAJFINANCE',
        assetValue: '6,435.50',
        deltaPercent: '0.30%',
        increase: false,
    }, {
        name: 'BHARTIARTL',
        assetValue: '771.95',
        deltaPercent: '0.69%',
        increase: true,
    }, {
        name: 'HDFCBANK',
        assetValue: '1,657.10',
        deltaPercent: '0.40%',
        increase: true,
    }, {
        name: 'HINDUNILVR',
        assetValue: '2577.50',
        deltaPercent: '0.36%',
        increase: false,
    }, {
        name: 'INDIGO',
        assetValue: '2043.50',
        deltaPercent: '0.21%',
        increase: false,
    }];

    return NextResponse.json({ stats })
};
