/* eslint-disable react/jsx-wrap-multilines */
import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import { useDevice } from 'shared/lib/hooks/useDevice/useDevice';

import { Drawer } from 'shared/ui/Drawer/Drawer';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    const isMobile = useDevice();

    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    );

    return (
        // <Popover
        //     className={classNames(cls.NotificationButton, {}, [className])}
        //     direction='bottom left'
        //     trigger={
        //         <Button theme={ButtonTheme.CLEAR}>
        //             <Icon Svg={NotificationIcon} inverted />
        //         </Button>
        //     }
        // >
        //     <NotificationList className={cls.notifications} />
        // </Popover>

        <div>
            {!isMobile ? (
                <Popover
                    className={classNames(cls.NotificationButton, {}, [
                        className,
                    ])}
                    direction='bottom left'
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            ) : (
                <>
                    {trigger}
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                </>
            )}
        </div>
    );
});
