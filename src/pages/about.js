import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div className="h-full flex flex-col space-y-4 md:space-y-8">
        <h1 className="font-bold text-primary text-5xl md:text-7xl mt-4">
          About Me
        </h1>
        <div className="grid gap-4 lg:items-center lg:grid-cols-3 ">
          <p className="text-secondary text-xl md:text-2xl xl:text-3xl lg:col-span-2">
            Hi, my name is Hamza and I am a recent software engineering graduate
            from the University of Ottawa who loves to solve interesting
            problems. I'm a big fan of product design and creating software that
            makes a positive impact on the lives of others.
            <br />
            <br />
            I'm an avid reader, love to bake, recently began running, and enjoy
            discovering new music. I built this website as a way to learn new
            skills and leave my own little mark on the world wide web!
          </p>
          <Image
            src="profile.jpg"
            className="m-4 sm:mx-8 md:mx-16 lg:-m-4 xl:m-0 rounded-full shadow-xl"
            alt="Picture of Hamza"
          />
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
