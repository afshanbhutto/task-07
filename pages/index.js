import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import MySlider from '@/components/MySlider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <div>
      <Head>
      <title>ZIMO Group task07</title>
      {/* for slider */}
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>
    <MySlider/>
    </div>
  
       
     
  )
}
