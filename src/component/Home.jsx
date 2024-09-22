import React, { useState } from 'react'
import "./style.css"
// import CardsData from './cardData.json'
// import { addToCart } from '../redux/features/cartSlice';
// import { useDispatch } from 'react-redux';
// import toast from 'react-hot-toast';

import Cards from './Cards';


function Home() {
    // const [result, setResult] = useState(CardsData)
    // // console.log('result is', result);
    // const dispatch = useDispatch();

    // const send = (e) => {

    //     dispatch(addToCart(e))
    //     toast.success("Item added in your cart")

    // }

    return (

        <>

            {/* <Search /> */}

            < section className='iteam_section mt-4 container'>
                <h2 className='px-4' style={{ fontWeight: 400 }}>Restaurant in Alwar Open Now</h2>
                <div className='row mt-2 d-flex justify-content-around align-items-center'>

                    <Cards />

                    {/* {
                        result.map((item, index) => {
                            return (
                                <>
                                    <Card style={{ width: '22rem', border: 'none' }} className='hove mb-4'>
                                        <Card.Img variant='top' className='cd' src={item.imgdata} />

                                        <div className="card_body">
                                            <div className="upper_data d-flex justify-content-between align-items-center">
                                                <h4 className='mt-2'>{item.dish}</h4>
                                                <span>{item.rating}&nbsp;★</span>
                                            </div>

                                            <div className="lower_data  d-flex justify-content-between">
                                                <h5>{item.address}</h5>
                                                <span>{item.price}</span>
                                            </div>
                                            <div className="extra"></div>

                                            <div className="last_data  d-flex justify-content-between align-items-center">
                                                <img src={item.arrimg} className='limg' alt="" />
                                                <Button style={{ width: '150px', background: '#ff3054db', border: 'none' }} variant='outline-light'
                                                    className='mt-2 mb-2'
                                                    onClick={() => send(item)}
                                                >Add To Cart</Button>
                                                <img src={item.delimg} className='laimg' alt="" />
                                            </div>
                                        </div>
                                    </Card>
                                </>
                            )
                        })

                    } */}


                </div>
            </section >


        </>
    )
}

export default Home