import circle from './circle.svg';
import felipeBackground from './felipeBackground.webp';
import felipeEmpty from './felipeEmpty.webp';
import icon from './icon.png';

type IBackgroundImages = {
  [key: string]: string;
}

export const backgroundImages: IBackgroundImages = {
  felipeBackground: felipeBackground,
  felipeEmpty: felipeEmpty,
  icon: icon,
  circle: circle,
};
