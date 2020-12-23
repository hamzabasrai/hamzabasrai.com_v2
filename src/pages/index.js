import { Link, graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import ArrowRight from '../assets/arrow-right.inline.svg';

const IndexPage = ({ data }) => {
  const { homeJson: content } = data;
  return (
    <Layout>
      <SEO title="Home" />
      <div className="h-full flex flex-col space-y-4 md:space-y-8">
        <h1 className="font-bold text-primary text-5xl md:text-7xl mt-4">
          {content.title}
        </h1>
        <p className="text-secondary text-xl md:text-2xl xl:text-3xl">
          {content.subtitle}
        </p>
        <div className="flex flex-col space-y-4 md:space-y-8 xl:space-y-12">
          {content.pages.map(page => (
            <Link className="group max-w-max" to={page.to}>
              <h2 className=" font-semibold text-primary text-3xl md:text-4xl">
                {page.title}
              </h2>
              <p className="text-accent flex items-center space-x-2 text-lg md:text-xl lg:text-2xl xl:text-3xl">
                <span>{page.subtitle}</span>
                <ArrowRight className="transition duration-500 ease-in-out opacity-0 group-hover:opacity-100 h-8 w-8" />
              </p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
    homeJson {
      title
      subtitle
      pages {
        title
        subtitle
        to
      }
    }
  }
`;

export default IndexPage;
