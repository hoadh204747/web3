import './create_pos.scss';
import PriceChart from '../../components/PriceChart';
import TableData from '../../components/Table/TableData';
import LiquidityDensity from '../../components/LiquidityDensity';
import { getPoolTier } from '../../dummyData/tier_pool';
import Tooltip from '@mui/material/Tooltip';
import React, { useState, useEffect, useRef } from 'react';
import { getAllTokens } from '../../dummyData/overview';
import { optimizeRange } from '../../dummyData/tier_pool';
const CreatePosition = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [selectedToken0, setSelectedToken0] = useState(null);
    const [selectedToken1, setSelectedToken1] = useState(null);
    const [poolData, setPoolData] = useState(null); // To store fetched pool tier data
    const [listTokens, setListTokens] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [optimizedData, setOptimizedData] = useState('');

    const choosePool = async (index) => {
        const selectedPool = poolData.pools[index].id;
        const data = await optimizeRange(selectedPool);
        setOptimizedData(data);
    };

    useEffect(() => {
        // Fetch list of tokens (assuming getAllTokens is an asynchronous function)
        const fetchData = async () => {
            const list_tokens = await getAllTokens();
            setListTokens(list_tokens.tokens);
        };
        fetchData();
    }, []);

    const selectRef1 = useRef(null);
    const selectRef2 = useRef(null);

    // Hàm để lấy giá trị từ các thẻ select
    const handleSave = async () => {
        const value1 = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
        const value2 = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
        const data = await getPoolTier(value1, value2);
        setPoolData(data);
    }
    const handleTokenChange = (event, tokenIndex) => {
        // Update the corresponding token state based on the index
        if (tokenIndex === 0) {
            setSelectedToken0(event.target.value);
        } else {
            setSelectedToken1(event.target.value);
        }
    };

    // Effect hook to fetch pool data when both tokens are selected
    useEffect(() => {
        const fetchData = async () => {
            if (selectedToken0 && selectedToken1) {
                const data = await getPoolTier(selectedToken0, selectedToken1);
                setPoolData(data);
            }
        };

        fetchData();

        // Cleanup function to avoid memory leaks (optional)
        return () => { /* perform cleanup here if needed */ };
    }, [selectedToken0, selectedToken1]);

    return (
        <div className='app-inner-box'>
            <div className="select-network">
                <p>Select a network, pair or token</p>
                <div className='network-col'>
                    <div className='network-col-bottom'>
                        <div className="pair x">
                            <div className='text'>asset_pair</div>
                            <div className='select'>
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    list="tokens"
                                />
                                <datalist id="tokens">
                                    {listTokens != null && listTokens.map((token) => (
                                        <option key={token} value={token} />
                                    ))}
                                </datalist>
                            </div>
                            <div className='select'>
                                <input
                                    type="text"
                                    value={inputValue2}
                                    onChange={(e) => setInputValue2(e.target.value)}
                                    list="tokens"
                                />
                                <datalist id="tokens">
                                    {listTokens != null && listTokens.map((token) => (
                                        <option key={token} value={token} />
                                    ))}
                                </datalist>
                            </div>
                        </div>


                        <button onClick={handleSave}>Save Values</button>
                    </div>
                </div>
            </div>
            <div className="select-option">
                <p>Select a pool tier</p>
                <div className='d-flex w-full'>
                    <div className="list-opt">
                        {poolData && ( // Display pool tier details only if data exists
                            poolData.pools.map((pool, index) => (
                                <div
                                key={index}
                                className={`item-opt d-flex flex-column gap-2 ${activeIndex === index ? 'active' : ''} ${poolData.bestPoolID === index ? 'pool' : ''}`}
                                onClick={() => choosePool(index)}
                                >
                                <h4>{pool.feeTier} fees</h4>
                                <div className='d-flex flex-column'>
                                    <span>volume_30d</span>
                                    <div className='number'>${Number((pool.volumeUSD)).toFixed(1)}</div>
                                </div>
                                <div className='d-flex flex-column'>
                                    <span>feeUSD</span>
                                    <div className='number'>${Number((pool.feesUSD)).toFixed(1)}</div>
                                </div>
                                <div className='d-flex flex-column'>
                                    <span>txCount</span>
                                    <div className='number'>${pool.txCount}</div>
                                </div>
                            </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
            <div className="price-min-max">

            </div>
            {optimizedData && 
            (<>
            <div className='wrap-chart'>
                <div style={{ background: 'linear-gradient(180deg, #1E292D 0%, #031116 100%)' }}>
                    <PriceChart price_30_day={optimizedData.price_30_day} />
                </div>
                <div>
                    <LiquidityDensity liquidityDensity={optimizedData.liquidity_density} />
                </div>
            </div>
            <TableData table={optimizedData.table} />
            </>
            )}
        </div>
    )
}
export default CreatePosition;