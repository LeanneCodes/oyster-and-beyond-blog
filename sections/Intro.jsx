import React from 'react'
import Image from 'next/image';

import { grpahCMSImageLoader } from '../util';

const Intro = () => (
  <div className="text-center mt-20 mb-8 p-8 relative rounded-lg bg-black bg-opacity-20">
    <div className="absolute left-0 right-0 -top-14">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt='Leanne Goldsmith'
        height={100}
        width={100}
        className="align-middle rounded-full mx-auto"
        src='/portfolio-photo.png'
      />
    </div>
    <p className="text-white text-ls mt-8">Hey there 👋🏾<br/>My name is Leanne and welcome to my blog!<br/>Join me as I share my adventures from London's Oyster zone to places beyond the seas. I'm a travel enthusiast exploring diverse lifestyles, activities and I'm a total foodie. Hope you have a great time here!</p>
  </div>
);

export default Intro