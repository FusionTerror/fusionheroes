function init(hero) {
  hero.setName("Speed Demon");
  hero.setAliases("sd");
  hero.setTier(5);

  hero.setHelmet("item.superhero_armor.piece.cowl");
  hero.setChestplate("item.superhero_armor.piece.chestpiece");
  hero.setLeggings("item.superhero_armor.piece.pants");
  hero.setBoots("item.superhero_armor.piece.boots");

  hero.addPowers("fusionheroes:super_speed");
  hero.addAttribute("PUNCH_DAMAGE", 5.0, 0);
  hero.addAttribute("WEAPON_DAMAGE", 0.5, 0);
  hero.addAttribute("JUMP_HEIGHT", 1.0, 0);
  hero.addAttribute("FALL_RESISTANCE", 4.0, 0);
  hero.addAttribute("BASE_SPEED_LEVELS", 5.0, 0);

  hero.addKeyBind("SUPER_SPEED", "key.superSpeed", 1);
  hero.addKeyBind("SLOW_MOTION", "key.slowMotion", 2);

  hero.setHasProperty(hasProperty);
  hero.setDamageProfile(getDamageProfile);
  hero.addDamageProfile("SPEED_PUNCH", {
    types: {
      BLUNT: 1.0,
    },
    properties: {
      HIT_COOLDOWN: 5,
    },
  });

  hero.setTickHandler((entity, manager) => {
    var speeding =
      entity.getData("fiskheroes:speeding") &&
      entity.getData("fiskheroes:speed") > 1 &&
      entity.isSprinting();
    manager.setData(entity, "fiskheroes:energy_projection", speeding);
  });
}

function getDamageProfile(entity) {
  return entity.getData("fiskheroes:speeding") ? "SPEED_PUNCH" : null;
}

function hasProperty(entity, property) {
  return property == "MASK_TOGGLE";
}
