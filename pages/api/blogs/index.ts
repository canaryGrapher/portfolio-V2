import type { NextApiRequest, NextApiResponse } from 'next'
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://api.hashnode.com',
    cache: new InMemoryCache()
});

const GET_POSTS = gql`
                query GetUserArticles($page: Int!) {
                    user(username: "${process.env.HASHNODE_USERNAME}") {
                        publication {
                            posts(page: $page) {
                                title
                                brief
                                slug
                		        coverImage
                		        dateAdded
                            }
                        }
                    }
                }
            `

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
    if (method === 'GET') {
        try {
            let all_posts = []
            let PAGE_NUMBER = { page: 0 }
            let KEEP_FETCHING = true;
            while (KEEP_FETCHING) {
                const { data } = await client.query({
                    query: GET_POSTS,
                    variables: PAGE_NUMBER
                })
                if (data.user.publication.posts.length === 0) {
                    KEEP_FETCHING = false;
                }
                else {
                    all_posts = all_posts.concat(data.user.publication.posts)
                }
                PAGE_NUMBER.page += 1
            }
            res.status(200).json({ posts: all_posts })
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }
}

export default handler