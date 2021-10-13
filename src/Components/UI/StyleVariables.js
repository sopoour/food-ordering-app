export const colors = {
  primary: "rgba(	244, 162, 97, 1)",
  primaryHover: "rgba(246, 177, 120, 1)",
  secondary: "rgba(79, 93, 117, 1)",
  secondaryHover: "rgba(147, 160, 182, 1)",
  textOnColor: "rgba(255, 255, 255, 1)",
};

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}


export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};