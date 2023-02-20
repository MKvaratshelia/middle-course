import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}
export const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <Button
                onClick={onToggleModal}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptas facere nostrum facilis doloribus necessitatibus
                voluptates, cum tempora consectetur vero voluptatum
                reprehenderit ipsa dolores eum nobis corrupti quisquam nesciunt
                ipsam! Minima!
            </Modal>
        </div>
    );
};
