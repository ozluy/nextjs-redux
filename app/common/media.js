import { css } from 'styled-components'

const breakpoints = {
  tablet: 600,
  tabletWide: 900,
  desktop: 1200,
  desktopWide: 1800,
}

// Iterate through the breakpoints and create a media template
const mq = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label] / 16}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export { breakpoints, mq }
