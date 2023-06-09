import Head from 'next/head';

import Hero from '../components/HomePage/Hero';
import FeaturedPosts from "@/components/HomePage/FeaturedPosts";
import {getFeaturedPosts} from "@/lib/posts-util";

// const DUMMY_POSTS = [
//     {
//         slug: 'getting-started-with-NextJS',
//         title: 'Getting started with NextJS',
//         image: 'nextjs.jpg',
//         excerpt: 'NextJS is a React fullstack framework',
//         date: '2022-02-10'
//     },
//     {
//         slug: 'getting-started-with-ReactJS',
//         title: 'Getting started with ReactJS',
//         image: 'reactjs.png',
//         excerpt: 'ReactJS is a frontend library',
//         date: '2022-04-10'
//     },
//     {
//         slug: 'getting-started-with-Angular',
//         title: 'Getting started with Angular',
//         image: 'angular.jpg',
//         excerpt: 'Angular is a frontend  framework',
//         date: '2023-05-10'
//     },
// ];

const HomePage = props => {
  return (
      <>
          <Head>
              <title>Andrew Blog</title>
              <meta name="description" content="I post about programming and web development"/>
          </Head>
        <Hero />
        <FeaturedPosts posts={props.posts}/>
      </>
  );
};

export function getStaticProps(){
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        }
    }
}

export default HomePage;
