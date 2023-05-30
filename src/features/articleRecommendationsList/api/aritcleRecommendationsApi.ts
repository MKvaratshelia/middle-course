import { Article } from '@/entities/Article';
import { rtkApi } from '@/shared/api/rtkApi';
// делаем запрос по эндпоинту и передаем параметр, функция возвращает хук в котором мы имеем данные, ошибку и лоадинг статус

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                    _expand: 'user',
                },
            }),
        }),
    }),
});

export const useArticleRecommendationsList =
    recommendationsApi.useGetArticleRecommendationsListQuery;
