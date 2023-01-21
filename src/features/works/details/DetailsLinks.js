import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
import { string, shape } from 'prop-types'
import { Link } from '../../../components'

const style = {
  links: {
    paddingTop: 5
  }
}

const DetailsLinks = ({ links }) => {
  return (
    <div className="details-links" style={style.links}>
      <Link href={links.demo} title="Open demo" icon={<BiLinkExternal />} />
      <Link
        href={links.github}
        title="Open project"
        icon={<AiOutlineGithub />}
      />
    </div>
  )
}

DetailsLinks.propTypes = {
  links: shape({ demo: string, github: string }).isRequired
}

export default DetailsLinks
