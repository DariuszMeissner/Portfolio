/* eslint-disable import/prefer-default-export */
import { element, func, shape, string, arrayOf, bool } from 'prop-types'

export const worksItemType = shape({
  id: string,
  image: arrayOf(string),
  title: string,
  linkDemo: string,
  description: string,
  techStack: string
})

export const listsType = arrayOf(worksItemType)

export const buttonType = {
  onClick: func.isRequired,
  title: string.isRequired
}

export const linkType = {
  icon: element,
  title: string,
  href: string.isRequired
}

export const sceneLightsType = shape({
  lightTop: bool,
  lightSide: bool,
  lightFront: bool
})

export const pageType = { closePage: func.isRequired }
