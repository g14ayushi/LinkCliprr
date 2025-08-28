import React from 'react'
import Card from "./Cards";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from '../contextApi/ContextApi';

let desciption = "Transform your long, messy URLs into short, memorable links in seconds. Our fast, secure, and reliable URL shortener makes sharing effortless—whether it’s for social media, emails, or business campaigns. Track clicks, manage your links, and keep your brand looking sharp, all from one simple platform."

const LandingPage = () => {

    const {token} = useStoreContext();
    console.log("TOKEN FROM LANDING PAGE " + token);


    const navigate = useNavigate();
    
    const dashBoardNavigateHandler = () => {
      if (token) {
        navigate('/dashboard');
      } else {
        navigate('/login');
      }
    };

  return (
    <div className='min-h-[calc(100vh-64px)] lg:px-14 sm:px-8 px-4'>
      <div className='lg:flex-row flex-col lg:py-5 pt-16 lg:gap-10 gap-8 flex justify-between items-center'>
        <div className='flex-1'>
            <motion.h1
              initial={{opacity : 0, y : -80}}
              whileInView={{
                opacity : 1,
                y : 0,
              }}
              viewport={{once : true}}
              transition={{duration:0.8}}
              className='font-bold font-roboto text-slate-800 md:text-5xl text-3xl md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full'>
                LinkClippr simplifies urls by shorten it for efficient sharing.
            </motion.h1>

            <p className='text-slate-700 text-sm my-5'>
            LinkClippr is your all-in-one solution for turning long, messy URLs into clean, shareable links that look great everywhere. Whether you’re sharing on social media, sending emails, or running marketing campaigns, LinkClippr helps you make a strong first impression. With lightning-fast link shortening, real-time click tracking, and an easy-to-use dashboard, you’ll always be in control of your links. Keep your audience engaged, your brand consistent, and your sharing effortless — all with LinkClippr.
            </p>

            <div className='flex items-center gap-3'>
                <motion.button 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                onClick={dashBoardNavigateHandler}
                className="bg-gradient-to-r from-blue-500 to-purple-600 w-40 text-white rounded-md py-2">
                    Manage Links
                </motion.button>
                <motion.button 
                initial={{ opacity: 0, y: 80 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                onClick={dashBoardNavigateHandler}
                className="border-btnColor border w-40 text-btnColor rounded-md py-2">
                    Create Short Links
                </motion.button>
            </div>
        </div>

        <div className='flex-1 flex justify-center w-full'>
            <img className='sm:w-[480px] w-[400px] object-cover rounded:md'
             src='/images/img2.png'
             alt=''
            />
        </div>
      </div>

      <div className='sm:pt12 pt-7'>
        <p className='text-slate-800 font-roboto font-bold lg:w-[60%] md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center'>
        Trusted by individuals and teams at the world best companies
        </p>

        <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
          <Card
            title="Simple URL Shortening"
            desc="Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle."
          />
          <Card
            title="Powerful Analytics"
            desc="Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies."
          />
          <Card
            title="Enhanced Security"
            desc="Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure."
          />
          <Card
            title="Fast and Reliable"
            desc="Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users."
          />
        </div>
      </div>
    </div>
  )
}

export default LandingPage



