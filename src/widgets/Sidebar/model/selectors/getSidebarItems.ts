import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/About.svg';
import HomeIcon from '@/shared/assets/icons/Home.svg';
import ProfileIcon from '@/shared/assets/icons/Profile.svg';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';
import { RoutePath } from '@/shared/const/router';
import { SidebarItemType } from '../types/sidebar';

// таким образом мы получаем данные селектора getUserAuthData и можем использовать внутри getSidebarItems
export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: RoutePath.main,
            Icon: HomeIcon,
            text: 'Главная',
        },
        {
            path: RoutePath.about,
            Icon: AboutIcon,
            text: 'О сайте',
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: RoutePath.profile + userData.id,
                Icon: ProfileIcon,
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                Icon: ArticleIcon,
                text: 'Статьи',
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
