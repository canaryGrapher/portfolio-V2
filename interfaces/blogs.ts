export type IBlogs = {
    title: string;
    brief: string;
    slug: string;
    coverImage: string;
    dateAdded: Date;
}

export type IBlogResponse = {
    posts: [IBlogs];
}