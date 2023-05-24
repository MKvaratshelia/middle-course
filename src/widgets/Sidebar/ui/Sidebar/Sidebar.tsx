import React, { useMemo, useState, memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const sidebarItemList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
        () =>
            sidebarItemList.map((item) => (
                <SidebarItem
                    item={item}
                    collapsed={collapsed}
                    key={item.path}
                />
            )),
        [collapsed, sidebarItemList],
    );

    return (
        <ToggleFeatures
            feature='isAppRedesigned'
            on={
                <aside
                    data-testid='sidebar'
                    className={classNames(
                        cls.SidebarRedesigned,
                        { [cls.collapsedRedesigned]: collapsed },
                        [className],
                    )}
                >
                    <AppLogo className={cls.appLogo} />
                    <VStack role='navigation' gap='8' className={cls.items}>
                        {itemsList}
                    </VStack>
                    <Icon
                        data-testid='sidebar-toggle'
                        onClick={onToggle}
                        className={cls.collapseBtn}
                        Svg={ArrowIcon}
                        clickable
                    />
                    <div className={cls.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} className={cls.lang} />
                    </div>
                </aside>
            }
            off={
                <aside
                    data-testid='sidebar'
                    className={classNames(
                        cls.Sidebar,
                        { [cls.collapsed]: collapsed },
                        [className],
                    )}
                >
                    <Button
                        data-testid='sidebar-toggle'
                        onClick={onToggle}
                        className={cls.collapseBtn}
                        theme={ButtonTheme.BACKGROUND_INVERTED}
                        size={ButtonSize.L}
                        square
                    >
                        {collapsed ? '>' : '<'}
                    </Button>
                    <VStack role='navigation' gap='8' className={cls.items}>
                        {itemsList}
                    </VStack>
                    <div className={cls.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} className={cls.lang} />
                    </div>
                </aside>
            }
        />
    );

    // return (
    //     <aside
    //         data-testid='sidebar'
    //         className={classNames(
    //             cls.Sidebar,
    //             { [cls.collapsed]: collapsed },
    //             [],
    //         )}
    //     >
    //         <Button
    //             data-testid='sidebar-toggle'
    //             type='button'
    //             onClick={onToggle}
    //             className={cls.collapseBtn}
    //             theme={ButtonTheme.BACKGROUND_INVERTED}
    //             square
    //             size={ButtonSize.L}
    //         >
    //             {collapsed ? '>' : '<'}
    //         </Button>
    //         <VStack role='navigation' gap='8' className={cls.items}>
    //             {itemsList}
    //         </VStack>
    //         <div className={cls.switchers}>
    //             <ThemeSwitcher />

    //             <LangSwitcher short={collapsed} className={cls.lang} />
    //         </div>
    //     </aside>
    // );
});
