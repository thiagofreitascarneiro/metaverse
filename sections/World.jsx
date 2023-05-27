'use client';

import { motion } from 'framer-motion';

import styles from '../styles';

import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>Track friends around you and invite them to play together in the same
            world
          </>
        )}
        textStyles="text-center"
      />
      <motion.div
        variant={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >

        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"

        />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full
              bg-[#5d6680]"
        >
          <img
            src="people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full
              bg-[#5d6680]"
        >
          <img
            src="people-02.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute bottom-20 top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full
              bg-[#5d6680]"
        >
          <img
            src="people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="hidden md:block filter brightness-150 animate-pulse absolute top-10 right-40 w-[217px] h-[167px] p-[6px] rounded-3xl bg-[#5D6680]">
          <img src="MaskGroup2.png" alt="MaskGroup" className="w-full h-full" />
          <div>
            <div className="absolute left-[10%] bottom-[30%] flex items-center">
              <img className="z-10" src="icon1.png" />
              <img className="absolute left-[8%]" src="icon2.png" />
              <img src="icon3.png" />
              <p className="text-[12px] text-white ml-[5px]">+256 has joined</p>
            </div>
            <h3 className="absolute left-[10%] bottom-[15%] text-[18px] text-white">Hawkins Labs</h3>
          </div>
        </div>
        <div className="hidden md:block filter brightness-150 animate-pulse absolute bottom-60 left-[15%] w-[217px] h-[167px] p-[6px] rounded-3xl bg-[#5D6680]">
          <img src="MaskGroup.png" alt="MaskGroup" className="w-full h-full" />
          <div>
            <div className="absolute left-[10%] bottom-[30%] flex items-center">
              <img className="z-10" src="icon1.png" />
              <img className="absolute left-[8%]" src="icon2.png" />
              <img src="icon3.png" />
              <p className="text-[12px] text-white ml-[5px]">+256 has joined</p>
            </div>
            <h3 className="absolute left-[10%] bottom-[15%] text-[18px] text-white">The Upside Down</h3>
          </div>
        </div>

      </motion.div>

    </motion.div>
  </section>
);

export default World;
