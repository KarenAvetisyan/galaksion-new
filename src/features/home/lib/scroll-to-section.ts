export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);

  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    // element.scrollIntoView({ behavior: 'smooth' });
  }
};
