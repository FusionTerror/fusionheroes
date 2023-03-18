function init(hero) {
	hero.setName("Killmonger");
	hero.setAliases("km");
	hero.setTier(7);

	hero.setHelmet("item.superhero_armor.piece.helmet");
	hero.setChestplate("item.superhero_armor.piece.chestpiece");
	hero.setLeggings("item.superhero_armor.piece.pants");
	hero.setBoots("item.superhero_armor.piece.boots");

	hero.addPowers(
		"fiskheroes:vibranium_weave_suit",
		"fiskheroes:heart_shaped_herbs"
	);
	hero.addAttribute("PUNCH_DAMAGE", 7.0, 0);
	hero.addAttribute("WEAPON_DAMAGE", 2.5, 0);
	hero.addAttribute("JUMP_HEIGHT", 2.0, 0);
	hero.addAttribute("FALL_RESISTANCE", 1.0, 1);
	hero.addAttribute("SPRINT_SPEED", 0.45, 1);
	hero.addAttribute("STEP_HEIGHT", 0.5, 0);

	hero.addKeyBind("BLADE", "key.claws", 1);

	hero.addDamageProfile("CLAWS", { types: { SHARP: 1.0 } });
	hero.setKeyBindEnabled(isKeyBindEnabled);
	hero.addAttributeProfile("CLAWS", clawsProfile);
	hero.setAttributeProfile(getProfile);
	hero.setHasProperty(hasProperty);
	hero.setDamageProfile(getProfile);
}

function clawsProfile(profile) {
	profile.inheritDefaults();
	profile.addAttribute("PUNCH_DAMAGE", 10.5, 0);
}

function getProfile(entity) {
	return entity.getData("fiskheroes:blade") ? "CLAWS" : null;
}

function isKeyBindEnabled(entity, keyBind) {
	var check_suit_wearing_chestplate = (entity, string) => {
		var _chestplate = entity.getWornChestplate();
		return _chestplate.name() == "fiskheroes:superhero_chestplate" && _chestplate.nbt().getString("HeroType") == String(string)
	}

	return !check_suit_wearing_chestplate(entity,"fusionheroes:killmonger/suitless");
}

function hasProperty(entity, property) {
	return property == "MASK_TOGGLE";
}
