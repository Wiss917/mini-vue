export const useMediaQuery = (
  query: string,
  cb?: (e: MediaQueryListEvent) => void
) => {
  const matchResult = window.matchMedia(query);

  if (cb) {
    matchResult.addEventListener("change", cb);
  }
};
