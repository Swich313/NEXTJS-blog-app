import Head from 'next/head';

import PostContent from "@/components/Posts/PostDetail/PostContent";
import {getPostsFiles, getPostData} from '@/lib/posts-util';

const PostPage = (props) => {
    return (
        <>
            <Head>
                <title>{props.post.title}</title>
                <meta name="description" content={props.post.excerpt}/>
            </Head>
            <PostContent post={props.post} />
        </>
    );
};

export function getStaticProps(context){
    const slug = context.params.slug;

    const postData = getPostData(slug);

    return {
        props: {
            post: postData
        },
        revalidate: 100
    }
}

export function getStaticPaths(){
    const postFileNames = getPostsFiles();
    const slugs = postFileNames.map(item => item.replace(/\.md$/, ''));
    return {
        paths: slugs.map(item => ({params: {slug: item}})),
        fallback: false
    }
}

export default PostPage;
