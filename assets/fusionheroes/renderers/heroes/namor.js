extend("fiskheroes:hero_basic");
loadTextures({
    layer1: "fusionheroes:namor_layer1",
    layer2: "fusionheroes:namor_layer2",
    trident: "fusionheroes:trident",
});

var utils = implement("fiskheroes:external/utils");
var tridentHand;
var tridentBack;

function initEffects(renderer) {
    var tridentHandModel = renderer.createResource("MODEL", "fusionheroes:trident");
    var tridentSpinModel = renderer.createResource("MODEL", "fusionheroes:trident");
    var tridentBackModel = renderer.createResource("MODEL", "fusionheroes:trident");
    tridentHandModel.texture.set("trident");
    tridentSpinModel.texture.set("trident");
    tridentBackModel.texture.set("trident");

    tridentHandModel
        .bindAnimation("fusionheroes:trident_hand")
        .setData((entity, data) =>
            data.load(!entity.getData("fiskheroes:shield_blocking"))
        );

    tridentSpinModel
        .bindAnimation("fusionheroes:trident_spin")
        .setData((entity, data) =>
            data.load(
                entity.getData("fiskheroes:shield_blocking") ? entity.loop(4) : 0
            )
        );

    tridentBackModel
        .bindAnimation("fusionheroes:trident_back")
        .setData((entity, data) => data.load(!entity.getData("fiskheroes:shield")));

    tridentHand = renderer.createEffect("fiskheroes:model").setModel(tridentHandModel);
    tridentSpin = renderer.createEffect("fiskheroes:model").setModel(tridentSpinModel);
    tridentBack = renderer.createEffect("fiskheroes:model").setModel(tridentBackModel);
    tridentHand.anchor.set("rightArm");
    tridentSpin.anchor.set("rightArm");
    tridentBack.anchor.set("body");
}

function initAnimations(renderer) {
    parent.initAnimations(renderer);
    utils.addHoverAnimation(renderer, "HOVER", "fiskheroes:flight/idle/neutral");
    utils.addFlightAnimation(
        renderer,
        "FLIGHT",
        "fiskheroes:flight/default_arms_forward.anim.json"
    );
}

function render(entity, renderLayer, isFirstPersonArm) {
    if (renderLayer == "CHESTPLATE") {
        if (entity.getData("fiskheroes:shield")) {
            if (!entity.getData("fiskheroes:shield_blocking")) {
                tridentHand.render();
            } else {
                tridentSpin.render();
            }
        } else {
            tridentBack.render();
        }
    }
}
