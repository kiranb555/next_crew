export const scrollToSection = (sectionId) => {
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error(`Section with id "${sectionId}" not found.`);
  }
};