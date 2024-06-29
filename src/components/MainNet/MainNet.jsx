import React from "react";
import './main_net.scss'
import { data } from '../../dummyData/_data'

const MainNet = () => {

    return (

        <div>
            <div>
                <p className="title">{data.token0} <span>/</span> {data.token1}</p>
            </div>
            <div className="main-net">

                <div className="price">

                    <div className="wrap-price">
                    <div className="curr-price x">
                        <span className="name">Current Price</span>
                        <span className="giatri">{data.currentPrice}</span>
                    </div>
                    <div className="lower-price x">
                        <span className="name">Lower Price</span>
                        <span className="giatri">{data.lowerPrice}</span>
                    </div>
                    <div className="upper-price x">
                        <span className="name">Upper Price</span>
                        <span className="giatri">{data.upperPrice}</span>
                    </div>
                    </div>
                    
                </div>

                <div className="wiglet">
                    <div className="left-main-net">
                        <div className="item-left">
                            <span>pooled_assets</span>
                            <p>{(data.poolAsset).toFixed(2)}</p>
                        </div>
                        <div className="item-left">
                            <span>pnl</span>
                            <p>{(data.pnl).toFixed(2)}</p>
                        </div>
                        <div className="item-left">
                            <span>total APR</span>
                            <p>{(data.totalAPR).toFixed(2)}</p>
                        </div>
                        <div className="item-left">
                            <span>fee APR</span>
                            <p>{(data.feeAPR).toFixed(2)}</p>
                        </div>
                    </div>

                    <div className="right-main-net">
                        <div className="item-right">
                            <span>total fee USD</span>
                            <div className="b">{(data.totalFeeUSD.toFixed(2))}</div>
                        </div>
                        <div className="item-right">
                            <span>collectedFee</span>
                            <div className="b">{(data.collectedFee["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"]).toFixed(2)} <span>USDC</span></div>
                            <div className="b">{(data.collectedFee["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"]).toFixed(2)} <span>WETH</span></div>
                        </div>
                        <div className="item-right">
                            <span>uncollectedFee</span>
                            <div className="b">{(data.uncollectedFee["0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"]).toFixed(2)} <span>USDC</span></div>
                            <div className="b">{(data.uncollectedFee["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"]).toFixed(2)} <span>WETH</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainNet;