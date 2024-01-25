import React from 'react';
import Image from 'next/image';
import { PiWarehouseBold } from 'react-icons/pi';
import { IoCarSportOutline } from 'react-icons/io5';
import { GoCodeReview } from "react-icons/go";
import { IoMdLogIn } from "react-icons/io";
import Background1 from '../Public/Background/Background1.jpg';


function Body() {
    return (
        <div className='body'>
            <div className='body__image'>
                <Image
                    src={Background1}
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <div className='nav__links'>
                <div className='nav__links__container'>
                    <div className='nav__links__container__icon'>
                        <PiWarehouseBold size={30} />
                    </div>
                    <div className='nav__links__container__text'>
                        <h3>Dealerships</h3>
                    </div>
                </div>
                <div className='nav__links__container'>
                    <div className='nav__links__container__icon'>
                        <IoCarSportOutline size={30} />
                    </div>
                    <div className='nav__links__container__text'>
                        <h3>Cars on Sale</h3>
                    </div>
                </div>
                <div className='nav__links__container'>
                    <div className='nav__links__container__icon'>
                        <GoCodeReview size={30} />
                    </div>
                    <div className='nav__links__container__text'>
                        <h3>Car Reviews</h3>
                    </div>
                </div><div className='nav__links__container'>
                    <div className='nav__links__container__icon'>
                        <IoMdLogIn size={30} />
                    </div>
                    <div className='nav__links__container__text'>
                        <h3>Login | Sign Up</h3>
                    </div>
                </div>
            </div>

            <div className='body__container'>
                <div className='body__container__text'>
                    <h1>Used and New cars for sale in Nairobi...</h1>
                    <br />
                    <h3>...Shop by brand...</h3>
                </div>
                <div className='body__container__brands'>
                    <div className='body__container__brands__container'>
                        <div className='body__container__brands__container__image'>
                            <Image
                                src='/images/brands/Toyota.png'
                                alt="Toyota"
                                layout="fill"
                                objectFit="contain"
                                quality={100}
                            />
                        </div>
                        <div className='body__container__brands__container__text'>
                            <h3>Toyota</h3>
                        </div>
                    </div>
                    <div className='body__container__brands__container'>
                        <div className='body__container__brands__container__image'>
                            <Image
                                src='/images/brands/Nissan.png'
                                alt="Nissan"
                                layout="fill"
                                objectFit="contain"
                                quality={100}
                            />
                        </div>
                        <div className='body__container__brands__container__text'>
                            <h3>Nissan</h3>
                        </div>
                    </div>
                    <div className='body__container__brands__container'>
                        <div className='body__container__brands__container__image'>
                            <Image
                                src='/images/brands/Subaru.png'
                                alt="Subaru"
                                layout="fill"
                                objectFit="contain"
                                quality={100}
                            />
                        </div>
                        <div className='body__container__brands__container__text'>
                            <h3>Jeep</h3>
                        </div>
                    </div>
                    <div className='body__container__brands__container'>
                        <div className='body__container__brands__container__image'>
                            <Image
                                src='/images/brands/Mercedes.png'
                                alt="Mercedes"
                                layout="fill"
                                objectFit="contain"
                                quality={100}
                            />
                        </div>
                        <div className='body__container__brands__container__text'>
                            <h3>Mercedes</h3>
                        </div>
                    </div>
                    <div className='body__container__brands__container'>
                        <div className='body__container__brands__container__image'>
                            <Image
                                src='/images/brands/Mazda.png'
                                alt="Mazda"
                                layout="fill"
                                objectFit="contain"
                                quality={100}
                            />
                        </div>
                        <div className='body__container__brands__container__
                        text'>
                            <h3>BMW</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Body