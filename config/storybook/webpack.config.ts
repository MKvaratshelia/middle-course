import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

// Данная конфигурация для работы storybook
export default ({ config }: { config: webpack.Configuration }) => {
    // путь до проекта
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        locales: '',
        buildLocales: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    // config.resolve?.modules?.push(paths.src);
    // config.resolve?.modules?.push('node_modules');
    /* исправление ошибки storybook */
    // if (config!.resolve!.modules) {
    //     config!.resolve!.modules = [
    //         path.resolve(__dirname, '../../src'),
    //         'node_modules',
    //     ];
    // }
    config.resolve!.modules = [paths.src, 'node_modules'];

    config.resolve?.extensions?.push('.ts', '.tsx');

    // игнорим svg
    // eslint-disable-next-line no-param-reassign
    config.module!.rules! = config!.module!.rules!.map((rule: any) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module!.rules!.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config.module?.rules?.push(buildCssLoader(true));

    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(''),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    return config;
};
