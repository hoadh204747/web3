import { useState } from 'react';
import './create_pos.scss'
import PriceChart from '../../components/PriceChart';
import TableData from '../../components/Table/TableData';
import LiquidityDensity from '../../components/LiquidityDensity';

const CreatePosition = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className='app-inner-box'>
            <div className="select-network">
                <p>Select a network, pair or token</p>
                <div className='network-col'>
                    <div className='network-col-top'>
                        <div className="network x">
                            <div className='text'>network</div>
                            <div className='ethereum'><span>Ethereum</span></div>
                        </div>
                    </div>

                    <div className='network-col-bottom'>
                        <div className="pair x">
                            <div className='text'>asset_pair</div>
                            <div className='select'>
                                <select name="" id="">
                                    <option value="">ETH</option>
                                    <option value="">USDT</option>
                                    <option value="">NOTCOIN</option>
                                </select>
                            </div>
                        </div>

                        <div className="pair x">
                            <div className='text'>asset_pair</div>
                            <div className='select'>
                                <select name="" id="">
                                    <option value="">ETH</option>
                                    <option value="">USDT</option>
                                    <option value="">NOTCOIN</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="select-option">
                <p>Select a pool tier</p>
                <div className='d-flex w-full'>
                    <div className="list-opt">
                        {[0, 1, 2, 3].map((index) => (
                            <div
                                key={index}
                                className={`item-opt d-flex flex-column gap-2 ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => handleClick(index)}
                            >

                                    <h4>0.01% fees</h4>
                                    <div className='d-flex flex-column'>
                                        <span>volume_50d</span>
                                        <div className='number'>$16.466.676</div>
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <span>volume_50d</span>
                                        <div className='number'>$16.466.676</div>
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <span>volume_50d</span>
                                        <div className='number'>$16.466.676</div>
                                    </div>
                                </div>

                        ))}


                    </div>
                </div>
            </div>
            <div className="price-min-max">

            </div>
            <div style={{background: 'linear-gradient(180deg, #1E292D 0%, #031116 100%)',  padding: '10px', width:'100%'}}>
                <PriceChart/>
            </div>
            <div>
                <LiquidityDensity/>
            </div>
            <TableData/>
        </div>
    );
}

export default CreatePosition;