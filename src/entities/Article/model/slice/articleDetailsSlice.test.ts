import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

const data = {
    id: 'sdgsdg',
    title: 'sdgsdg',
    subtitle: 'sddgsdg',
    img: 'sdsdg',
    views: 123,
    createdAt: 'dsgsdg',
    type: [],
    blocks: [],
};

describe('ArticleDetailsSlice.test', () => {
    test('test update articleDetailsSlice service pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            error: undefined,
        };

        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.pending,
            ),
        ).toEqual({
            isLoading: true,
            error: undefined,
        });
    });
});
