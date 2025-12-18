import { classNames } from 'shared/lib/classNames/ClassNames';
import cls from './PageLoader.module.scss'
import { Loader } from 'shared/ui/Loader/Loader';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div className={classNames(cls.pageLoader, {}, [className])}>
            <Loader/>
        </div>
    );
};
