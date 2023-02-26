export const moveScreenToCenterOfId = (event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLElement, MouseEvent>, componentId: string): void => {
  const target = document.getElementById(componentId);
  if (target) {
    const rect = target.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const centerY = rect.top + rect.height / 2 - window.innerHeight / 2 + scrollTop;
    if (Math.abs(centerY - scrollTop) > 1) {
      event.preventDefault();
      window.scrollTo({ top: centerY, behavior: 'smooth' });
    }
  }
};