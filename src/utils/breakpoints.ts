import resolveConfig from 'tailwindcss/resolveConfig';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tailwindConfig from '../../tailwind.config.js'; // this error is due to tailwind not support ES Modules yet

const fullConfig = resolveConfig(tailwindConfig);

interface IBreakpoints {
  '3xl': string
  '2xl': string
  'xl': string
  'lg': string
  'md': string
  'sm': string
}

const breakpoints: IBreakpoints = fullConfig.theme.screens;

const formatedBreakpoints = {
  is3xl: { minWidth: +(breakpoints['3xl'].replace('px', '')) },
  is2xl: { minWidth: +(breakpoints['2xl'].replace('px', '')) },
  isXl: { minWidth: +(breakpoints['xl'].replace('px', '')) },
  isLg: { minWidth: +(breakpoints['lg'].replace('px', '')) },
  isMd: { minWidth: +(breakpoints['md'].replace('px', '')) },
  isSm: { minWidth: +(breakpoints['sm'].replace('px', '')) },
  smallHeight: { minHeight: 568 }
};

export { formatedBreakpoints as breakpoints };
