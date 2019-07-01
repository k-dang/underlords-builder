import React, { useState } from "react"
import Image from "./image"
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
          const fMax = floorMax(rank, f.max / f.min)
          if (f.ranks[fMax]) {
            updatedBuffs.push({
              icon: f.icon,
              times: 1,
              text: f.ranks[fMax],
            })
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
          <HeroGroup
            key={index}
            heroes={props.allHeroes.get(cl)}
            addHero={addHero}
            class={cl}
          ></HeroGroup>
        ))}
      </div>
      <div className={builderStyles.comp}>
        <div className={builderStyles.compFixed}>
          <span>Your Team</span>
          <div className={builderStyles.heroGroup}>
            {listOfHeroes.map((hero, index) => (
              <div
                key={index}
                onClick={e => removeHero(index)}
                className={builderStyles.heroContainer}
              >
                <Image name={hero.name} src={hero.avatar}></Image>
              </div>
            ))}
          </div>
          <h1>Alliance buffs</h1>
          {buffs.map((buff, index) => (
            <div key={index} style={{marginBottom: `10px`}}>
              <div className={builderStyles.buffGroupContainer}>
                {Array.from(Array(buff.times)).map((i, ind) => (
                  <div key={ind} className={builderStyles.buffContainer}>
                    <Image src={buff.icon}></Image>
                  </div>
                ))}
              </div>
              <span>{buff.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Builder
