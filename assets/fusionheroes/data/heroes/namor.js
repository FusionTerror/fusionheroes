function init(hero) {
    hero.setName("Namor");
    hero.setTier(7);

    hero.setHelmet("item.superhero_armor.piece.helmet");
    hero.setChestplate("item.superhero_armor.piece.chestpiece");
    hero.setLeggings("item.superhero_armor.piece.pants");
    hero.setBoots("item.superhero_armor.piece.boots");

    hero.addPowers("fiskheroes:vibranium_weave_suit", "fiskheroes:heart_shaped_herbs", "fusionheroes:atlantean_physiology");
    hero.addAttribute("PUNCH_DAMAGE", 7.0, 0);
    hero.addAttribute("WEAPON_DAMAGE", 2.5, 0);
    hero.addAttribute("JUMP_HEIGHT", 2.0, 0);
    hero.addAttribute("FALL_RESISTANCE", 1.0, 1);
    hero.addAttribute("SPRINT_SPEED", 0.45, 1);
    hero.addAttribute("STEP_HEIGHT", 0.5, 0);

    hero.addKeyBind("SHIELD", "Trident", 1);

    hero.addAttributeProfile("TRIDENT", tridentProfile);
    hero.addAttributeProfile("WATER", waterProfile);
    hero.setAttributeProfile(getProfile);
    hero.setModifierEnabled(isModifierEnabled);
}

function tridentProfile(profile) {
    profile.addAttribute("WEAPON_DAMAGE", 1.9, 1);
    profile.addAttribute("FALL_RESISTANCE", 1.0, 1);
    profile.addAttribute("JUMP_HEIGHT", 1.5, 0);
    profile.addAttribute("SPRINT_SPEED", 0.4, 1);
    profile.addAttribute("PUNCH_DAMAGE", 12.5, 0);
}

function waterProfile(profile) {
    profile.addAttribute("PUNCH_DAMAGE", 9.0, 0);
    profile.addAttribute("WEAPON_DAMAGE", 3.5, 0);
    profile.addAttribute("JUMP_HEIGHT", 23.0, 0);
    profile.addAttribute("FALL_RESISTANCE", 1.0, 1);
    profile.addAttribute("SPRINT_SPEED", 0.8, 1);
    profile.addAttribute("STEP_HEIGHT", 0.5, 0);
}

function getProfile(entity) {
    if (entity.getData("fiskheroes:shield")) {
        return "TRIDENT";
    }

    return entity.isInWater() ? "WATER" : null;
}

function isModifierEnabled(entity, modifier) {
    if (modifier.name() == "fiskheroes:regeneration") {
        return entity.isInWater();
    }
    else return true;
}
