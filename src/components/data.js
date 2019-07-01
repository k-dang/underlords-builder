export const classes = {
  Assassin: {
    min: 3,
    max: 9,
    ranks: {
      1: `Assassins gain a 10% chance to Critical Hit for 300% Damage.`,
      2: `Assassins gain a 20% chance to Critical Hit for 400% Damage.`,
      3: `Assassins gain a 30% chance to Critical Hit for 500% Damage.`,
    },
    icon: `25px-Assassin_icon.png`,
  },
  "Blood-bound": {
    min: 2,
    max: 2,
    ranks: {
      1: `When a Blood-Bound unit dies, all other Blood-Bound units deal +100% Attack Damage for the rest of the battle.`,
    },
    icon: `25px-Blood-bound_icon.png`
  },
  Brawny: {
    min: 2,
    max: 4,
    ranks: {
      1: `All Brawny units have their maximum HP increased by 200.`,
      2: `All Brawny units have their maximum HP increased by 500.`,
    },
    icon: `25px-Brawny_icon.png`
  },
  Deadeye: {
    min: 2,
    max: 2,
    ranks: {
      1: `All Deadeye units focus their attacks on the lowest-health enemy.`,
    },
    icon: `25px-Deadeye_icon.png`
  },
  Demon: {
    min: 1,
    max: 1,
    ranks: {
      1: `Demon units gain +50% Pure Damage. Active when you have only one type of Demon unit on the board.`,
    },
    icon: `25px-Demon_icon.png`,
  },
  "Demon Hunter": {
    min: 1,
    max: 2,
    ranks: {
      1: `Invalidate your opponent's Demon Alliance bonus.`,
      2: `Invalidate your opponent's Demon Alliance bonus. All Demon units gain +50% Pure Damage`,
    },
    icon: `25px-Demon_Hunter_icon.png`
  },
  Dragon: {
    min: 2,
    max: 2,
    ranks: {
      1: `All dragon units unlock an additional draconic ability.`,
    },
    icon: `25px-Dragon_icon.png`
  },
  Druid: {
    min: 2,
    max: 4,
    ranks: {
      1: `The lowest start ally Druid is upgraded a level.`,
      2: `The 2 lowest start ally Druids are upgraded a level each.`,
    },
    icon: `25px-Druid_icon.png`
  },
  Elusive: {
    min: 3,
    max: 9,
    ranks: {
      1: `All Elusive units gain +20% Evasion.`,
      2: `All Elusive units gain +45% Evasion.`,
      3: `All Elusive units gain +75% Evasion.`,
    },
    icon: `25px-Elusive_icon.png`
  },
  Heartless: {
    min: 2,
    max: 6,
    ranks: {
      1: `All Enemies suffer -5 Armor.`,
      2: `All Enemies suffer -10 Armor.`,
      3: `All Enemies suffer -20 Armor.`,
    },
    icon: `25px-Heartless_icon.png`
  },
  Human: {
    min: 2,
    max: 6,
    ranks: {
      1: `All Human units gain a 20% Chance to Silence target for 4 seconds when attacking.`,
      2: `All Human units gain a 44% Chance to Silence target for 4 seconds when attacking.`,
      3: `All Human units gain a 66% Chance to Silence target for 4 seconds when attacking.`,
    },
    icon: `25px-Human_icon.png`
  },
  Hunter: {
    min: 3,
    max: 6,
    ranks: {
      1: `All Hunters have a 20% chance of quickly performing 2 attacks.`,
      2: `All Hunters have a 35% chance of quickly performing 2 attacks.`,
    },
    icon: `25px-Hunter_icon.png`
  },
  Inventor: {
    min: 2,
    max: 4,
    ranks: {
      1: `All Inventors gain +15 HP Regeneration.`,
      2: `All Inventors gain +40 HP Regeneration.`,
    },
    icon: `25px-Inventor_icon.png`
  },
  Knight: {
    min: 2,
    max: 6,
    ranks: {
      1: `Knight units take 15% less physical and magic damage and an additional 15% when standing 1 cell away from another Knight.`,
      2: `Knight units take 20% less physical and magic damage and an additional 20% when standing 1 cell away from another Knight.`,
      3: `Knight units take 30% less physical and magic damage and an additional 25% when standing 1 cell away from another Knight.`,
    },
    icon: `25px-Knight_icon.png`
  },
  Mage: {
    min: 3,
    max: 6,
    ranks: {
      1: `Enemies suffer -40% Magic Resistance.`,
      2: `Enemies suffer -100% Magic Resistance.`,
    },
    icon: `25px-Mage_icon.png`
  },
  Primordial: {
    min: 2,
    max: 4,
    ranks: {
      1: `When hit, Primordial units have a 30% chance to disarm melee attackers for 4 seconds.`,
      2: `When hit, Allies have a 30% chance to disarm melee attackers for 4 seconds.`,
    },
    icon: `25px-Primordial_icon.png`
  },
  Savage: {
    min: 2,
    max: 6,
    ranks: {
      1: `Allies gain +10% Attack Damage.`,
      2: `Allies gain +25% Attack Damage.`,
      3: `Allies gain +45% Attack Damage.`,
    },
    icon: `25px-Savage_icon.png`
  },
  Scaled: {
    min: 2,
    max: 4,
    ranks: {
      1: `Allies gain +30% Magic Resistance.`,
      2: `Allies gain +50% Magic Resistance.`,
    },
    icon: `25px-Scaled_icon.png`
  },
  Scrappy: {
    min: 3,
    max: 6,
    ranks: {
      1: `A Random Ally is granted +8 Armor and +9 HP Regeneration. Armor and HP are doubled if you start the fight with less units than your opponent.`,
      2: `Allies gain +8 Armor and +9 HP Regeneration. Armor and HP are doubled if you start the fight with less units than your opponent.`,
    },
    icon: `25px-Scrappy_icon.png`
  },
  Shaman: {
    min: 2,
    max: 2,
    ranks: {
      1: `A Random Enemy is turned into a Frog for 6 seconds at the Start of Combat.`,
    },
    icon: `25px-Shaman_icon.png`
  },
  Troll: {
    min: 2,
    max: 4,
    ranks: {
      1: `All Troll units gain +35 Attack Speed.`,
      2: `All Troll units gain +65 Attack Speed and other Allies gain +30 Attack Speed.`,
    },
    icon: `25px-Troll_icon.png`
  },
  Warlocks: {
    min: 2,
    max: 6,
    ranks: {
      1: `Allies gain +15% Lifesteal.`,
      2: `Allies gain +30% Lifesteal.`,
      3: `Allies gain +45% Lifesteal.`,
    },
    icon: `25px-Warlocks_icon.png`
  },
  Warrior: {
    min: 3,
    max: 9,
    ranks: {
      1: `All Warriors gain +10 Armor.`,
      2: `All Warriors gain +15 Armor.`,
      3: `All Warriors gain +25 Armor.`,
    },
    icon: `25px-Warrior_icon.png`
  },
}
