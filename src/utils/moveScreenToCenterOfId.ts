export const moveScreenToCenterOfId = (event: React.MouseEvent<HTMLAnchorElement>, componentId: string): void => {
  event.preventDefault();
  const target = document.getElementById(componentId);
  if (target) {
    const rect = target.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const centerY = rect.top + rect.height / 2 - window.innerHeight / 2 + scrollTop;
    window.scrollTo({ top: centerY, behavior: 'smooth' });
  }
};