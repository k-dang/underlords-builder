import React from "react"
import Hero from "../components/hero"
import herogroupStyles from "./herogroup.module.css"

const HeroGroup = props => {
  return (
    <div className={herogroupStyles.heroGroupContainer}>
      <span>{props.class}</span>
      <div className={herogroupStyles.heroGroup}>
        {props.heroes.map(({ node }) => (
          <div
            key={node.id}
            onClick={e => props.addHero(node)}
            className={herogroupStyles.heroContainer}
          >
            <Hero name={node.name} src={node.avatar}></Hero>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeroGroup
