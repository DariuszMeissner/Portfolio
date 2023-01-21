/* eslint-disable import/prefer-default-export */
import { element, func, shape, string, arrayOf, bool, number } from 'prop-types'

export const worksItemType = shape({
  id: number,
  thumbnail: string,
  images: arrayOf(string),
  title: string,
  subtitle: string,
  description: string,
  linkDemo: string,
  linkGithub: string,
  features: arrayOf(string),
  customHooks: arrayOf(string),
  techStack: arrayOf(string),
  tag: string,
  date: string
})

export const listsType = arrayOf(worksItemType)

export const buttonType = {
  onClick: func.isRequired,
  title: string.isRequired
}

export const linkType = {
  icon: element,
  title: string,
  href: string
}

export const sceneLightsType = shape({
  lightTop: bool,
  lightSide: bool,
  lightFront: bool
})

export const pageType = { closePage: func.isRequired }
