export interface Post {
    author?: string;
    category?: string;
    content?: string;
    excerpt?: string;
    id: string;
    imageUrl?: string;
    publishedAt: string;
    tags?: any[];
    title: string;
    updatedAt?: string;
    url?: string;
}
export interface PostListMatch {
    author?: string;
    category?: string;
    content?: string;
    excerpt?: string;
    id?: string;
    imageUrl?: string;
    publishedAt?: string;
    tags?: any[];
    title?: string;
    updatedAt?: string;
    url?: string;
    $action?: string;
    [action: string]: any;
}
