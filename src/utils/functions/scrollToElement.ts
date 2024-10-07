export const scrollToElement = (ref: any) => {
  if (ref?.current) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
};
