import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';

// нужно дл нормацилазии получим список id и enteties
export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
    isLoading?: boolean;
    error?: string;
}
