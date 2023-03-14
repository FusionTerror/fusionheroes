extend("fiskheroes:hero_basic");
loadTextures({
	"layer1": "fusionheroes:speed_demon_layer1",
	"layer2": "fusionheroes:speed_demon_layer2",
});

var utils = implement("fiskheroes:external/utils");
var vibration;

function init(renderer) {
	parent.init(renderer);
}

function initEffects(renderer) {
	vibration = renderer.createEffect("fiskheroes:vibration");

	utils.bindTrail(renderer, "fusionheroes:speed_demon");
	utils.bindBeam(renderer, "fiskheroes:energy_projection", "fusionheroes:invisible", "body", 0x000000, [
		{ "firstPerson": [0, 0, 0], "offset": [0, 0, 0], "size": [1, 1] }
	]).setParticles(renderer. createResource("PARTICLE_EMITTER", "fiskheroes:impact_energy_projection"));
}

function initAnimations(renderer) {
	parent.initAnimations(renderer);
	renderer.removeCustomAnimation("basic.ENERGY_PROJ");
}

function render(entity, renderLayer, isFirstPersonArm) {
	if (!entity.isDisplayStand() && entity.getData("fiskheroes:speeding")) {
		vibration.render();
	}
}