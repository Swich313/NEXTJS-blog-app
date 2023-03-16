import Head from 'next/head';

import AllPosts from '../../components/Posts/AllPosts';
import {getAllPosts} from "@/lib/posts-util";

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


const AllPostsPage = props => {
    return (<>
        <Head>
            <title>All posts</title>
            <meta name="description" content="A list of all programming-related tutorials and posts!"/>
        </Head>
        <AllPosts posts={props.posts}/>
    </>);
};

export function getStaticProps(){
    const allPosts = getAllPosts();
    return {
        props: {
            posts: allPosts,
        }
    }
}

export default AllPostsPage;
