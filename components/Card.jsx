import React from 'react';
import Image from 'next/image';
import {AiFillHeart} from 'react-icons/ai'
import {FiShare2} from 'react-icons/fi'

const Card = ({img}) => {
  return (
      <div className='w-[100%] shadow-xl place-items-center'>
          <div className='mb-8 relative opacity-90' >
              <img className='h-[547px] w-[454px] bg-contain bg-center rounded-[20px]' width={420} height='100%' src={img} alt="team-member" />
                
                <div className='top-0 left-0  h-[159px] w-[100%] absolute  rounded-t-[20px] flex opacity-80 bg-gradient-to-b from-[#000000] via-[rgba(0,0,0,0.92)] to-[rgba(0,0,0,0.0)]'>
                    <div className='flex absolute w-[390px] h-[60px]'>
                        <div className='absolute top-[20px] left-[5%]  lg:left-[5%] flex  flex-col w-[58px] h-[60px] font-normal text-white'>
                        <p class="m-0 p-0 text-5xl text-center  tracking-[0.5rem] ">78</p>
                            <p className='m-0 p-0 text-xs text-center tracking-wide'>DAYS</p>
                        </div>
                        <div className='absolute top-[20px]  left-[28%]  md:left-[23%] lg:left-[23%] flex  flex-col w-[58px] h-[60px] font-normal text-white'>
                        <p class="m-0 p-0 text-5xl text-center  tracking-[0.5rem] ">06</p>
                            <p className='m-0 p-0 text-xs text-center tracking-wide'>HOURS</p>
                        </div>
                        <div className='absolute top-[20px]  left-[52%] md:left-[43%] lg:left-[43%] flex  flex-col w-[58px] h-[60px] font-normal text-white'>
                        <p class="m-0 p-0 text-5xl text-center  tracking-[0.5rem] ">07</p>
                            <p className='m-0 p-0 text-xs text-center tracking-wide'>MINUTES</p>
                        </div>
                        <div className='absolute top-[20px]  left-[75%] md:left-[63%] lg:left-[65%] flex  flex-col w-[58px] h-[60px] font-normal text-white'>
                        <p class="m-0 p-0 text-5xl text-center  tracking-[0.5rem] ">08</p>
                            <p className='m-0 p-0 text-xs text-center tracking-wide'>SECONDS</p>
                        </div>
                    </div>
                    <div className='flex w-[73px] h-[23px] absolute justify-between'>
                        <div className='w-[26px] h-[23px] absolute top-[100px]  right-[140px]'>
                        <FiShare2 className='text-white w-[26px] h-[23px]'/>
                        </div>
                        <div className='w-[26px] h-[23px] absolute top-[100px]  right-[110px]'>
                                <AiFillHeart className='fill-[#B00000] w-[26px] h-[23px]'/>
                        </div>
                    </div>
                </div>


                {/* slide in image */}
                <div className='bottom-0 left-0  h-[159px] w-[100%] absolute  rounded-b-[20px] flex flex-col opacity-80 bg-gradient-to-t from-[rgba(0,0,0,0.0)] via-[rgba(0,0,0,0.92)] to-[rgba(0,0,0,0)'>
                    <div className='absolute w-[100%]  h-[42px] top-[88px]   '>
                        <div className='absolute font-normal text-white'>
                        <p className="  text-[12px] text-center tracking-wide ">SHELTON STREET COVENT GARDEN LONDON WC2H UNITED KINGDOM</p>
                        </div>
                    </div>
                    <div className='flex   absolute w-[100%] h-[38px] top-[130px] '>
                        <div className='flex absolute font-normal text-white w-[60px] h-[15px] left-[2%]'>
                        <img src="/white-logo.png" alt="logo" className='w-[60px] h-[15px] ' />
                        </div>
                        <div className='flex w-[129px] left-[30%]  justify-center font-normal bottom-[30px] h-[18px] text-[14px] absolute  text-white '>
                        <div>
                                <p className='text-[14px] text-center'>£5,000,000 GBP</p>
                                <p className='text-[9px] text-center'>#ZM7861234567</p>
                        </div>
                        </div>
                        <div className='flex absolute font-normal left-[80%] text-white w-[60px] h-[15px]'>
                        <img src="/white-logo.png" alt="logo" className='w-[60px] h-[15px] ' />
                        </div>
                    </div>
                    
                </div>
          </div>

          
          {/* <div >
              <div className='flex flex-col w-[454px] lg:w-auto justify-center px-4  h-[58.2px]  bg-black text-white rounded-[20px]'>
                  <div className=' flex justify-between h-[24px] w-[370px] font-light text-[19px]  text-center'>
                      <div>
                          <span>£25.00 GBP</span>
                      </div>
                      <div>
                          <span>BUY ENTRY NOW</span>
                      </div>
                  </div>
                  <div className='flex justify-end w-[370px]'>
                      <div className=' h-[12px] w-[95px] font-light text-[9px]  text-right'>

                          <span>#ZM7861234567</span>

                      </div>
                  </div>
                  
              </div>
             
          </div> */}
              
          <div className='flex relative flex-col items-center p-4 text-white h-[58.2px]  lg:w-auto bg-black   rounded-[20px]'>

          <div className='flex flex-col  items-center justify-center ' >
              <div className='flex gap-[10px] h-[24px] w-[370px] font-light text-[19px]  text-center justify-center'>
                      <div className='justify-between'>
                          <span>£25.00 GBP</span>
                      </div>
                      <div>
                          <span>BUY ENTRY NOW</span>
                      </div>
                  </div>
                      
            </div>
          <div className='flex absolute bottom-0 right-0 pb-4 h-[12px] w-[95px] font-light text-[9px]  text-right'>

<span>#ZM7861234567</span>

</div>
          </div>
             
                  
              </div>
            
  )
}

export default Card