import React, { useState } from "react"
import Hero from "../components/hero"
import HeroGroup from "../components/herogroup"
import builderStyles from "./builder.module.css"
import { classes } from "./data"

const Builder = props => {
  const [listOfHeroes, setList] = useState([])
  const [buffs, setBuffs] = useState([])

  function updateBuffs(heroes) {
    const updatedBuffs = []
    const heroesUsed = []
    const map = new Map()
    heroes.forEach(hero => {
      if (!heroesUsed.includes(hero.name)) {
        hero.class.forEach(c => {
          if (map.has(c)) {
            map.set(c, map.get(c) + 1)
          } else {
            map.set(c, 1)
          }
        })
        heroesUsed.push(hero.name)
      }
    })
    for (const [key, value] of map) {
      const f = classes[key]
      if (f) {
        // check if total can be modulus
        if (value % f.min >= 0) {
          const rank = value / f.min
          if (f.ranks[floorMax(rank, f.max / f.min)]) {
            updatedBuffs.push(f.ranks[floorMax(rank, f.max / f.min)])
            heroesUsed.push()
          }
        }
      }
    }
    return updatedBuffs
  }

  function floorMax(rank, max) {
    const floor = Math.floor(rank)
    if (floor > max) {
      return max
    }
    return floor
  }

  function addHero(hero) {
    if (listOfHeroes.length < 11) {
      const updatedList = [...listOfHeroes, hero]
      setList(updatedList)
      setBuffs(updateBuffs(updatedList))
    }
  }

  function removeHero(index) {
    let copy = [...listOfHeroes]
    copy.splice(index, 1)
    setList(copy)
    setBuffs(updateBuffs(copy))
  }
  const arraKeys = Array.from(props.allHeroes.keys())
  return (
    <div className={builderStyles.container}>
      <div className={builderStyles.allHeroes}>
        {arraKeys.map((cl, index) => (
          <HeroGroup key={index} heroes={props.allHeroes.get(cl)} addHero={addHero} class={cl}></HeroGroup>
        ))}
      </div>
      <div className={builderStyles.comp}>
        <span>Your Team</span>
        <div className={builderStyles.heroGroup}>
          {listOfHeroes.map((hero, index) => (
            <div
              key={index}
              onClick={e => removeHero(index)}
              className={builderStyles.heroContainer}
            >
              <Hero name={hero.name} src={hero.avatar}></Hero>
            </div>
          ))}
        </div>
        <h2>Buffs</h2>
        <div>
          {buffs.map((buff, index) => (
            <p key={index}>{buff}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Builder
