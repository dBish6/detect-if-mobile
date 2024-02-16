export const isMobile = () => {
  const mobileKeywords =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ),
    touchSupport = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  return mobileKeywords || touchSupport;
};
