export const formatFileSizeDisplay = value => {
  if (value < 1024) {
    return `${value} KB`;
  }
  return `${parseFloat((value / 1024).toFixed(1))} MB`;
};

export const isMobile = () => window.innerWidth <= 768;
export const getAnimationDuration = () => isMobile() ? 300 : 700;
