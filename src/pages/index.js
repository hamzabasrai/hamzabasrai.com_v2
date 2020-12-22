import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import ArrowRight from '../assets/arrow-right.inline.svg';

const PageLink = ({ title, subtitle, to }) => (
  <Link className="group max-w-max text-primary" to={to}>
    <h2 className=" font-semibold text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl">
      {title}
    </h2>
    <p className="text-accent flex items-center space-x-2 text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
      <span>{subtitle}</span>
      <ArrowRight className="transition duration-500 ease-in-out opacity-0 group-hover:opacity-100 text- h-10 w-10" />
    </p>
  </Link>
);

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="h-full flex flex-col space-y-8 lg:space-y-10 xl:space-y-12 2xl:space-y-14">
      <h1 className="font-bold text-primary text-5xl md:text-7xl xl:text-8xl mt-4 md:mt-8">
        Hi, I'm Hamza
      </h1>
      <p className="text-xl text-secondary md:text-2xl xl:text-3xl 2xl:text-4xl">
        I am a software engineer currently looking for new opportunities. This
        site is my way of sharing my work and passion with the rest of the
        internet!
      </p>

      <div className="flex flex-col space-y-8 lg:space-y-10 xl:space-y-12 2xl:space-y-14">
        <PageLink
          to="/about"
          title="About 👀"
          subtitle="Get to know me a bit better"
        />
        <PageLink
          to="/404"
          title="Projects 💻"
          subtitle="See some stuff I've built"
        />
        <PageLink
          to="/about"
          title="Collections 📚"
          subtitle="A place to catalogue my interests"
        />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
