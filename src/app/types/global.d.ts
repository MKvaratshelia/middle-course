// чтобы ts понимал импорты scss модулей
declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module ' *.png';
declare module ' *.jpg';
declare module ' *.jpeg';
declare module '*.svg' {
    const SVG: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;
