import { RepublicmagEntityBase } from '../RepublicmagEntityBase';
import type { RepublicmagSDK } from '../RepublicmagSDK';
import type { Control } from '../types';
import type { Post, PostListMatch } from '../RepublicmagTypes';
declare class PostEntity extends RepublicmagEntityBase<Post> {
    constructor(client: RepublicmagSDK, entopts: any);
    make(this: PostEntity): PostEntity;
    list(this: any, reqmatch?: PostListMatch, ctrl?: Control): Promise<PostEntity[]>;
}
export { PostEntity };
