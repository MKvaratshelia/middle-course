import { classNames } from 'shared/lib/classNames/classNames';
import { memo, MutableRefObject, ReactNode, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    return (
        <section
            // реф в котором есть скрол
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
            {/* реф тригер, дойдя до него сработает callback */}
            <div ref={triggerRef} />
        </section>
    );
};
