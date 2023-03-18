extend("fiskheroes:hero_basic");
loadTextures({
    layer1: "fusionheroes:killmonger_layer1",
    layer2: "fusionheroes:killmonger_layer2",
    claws: "fusionheroes:killmonger_claws",
});

var claws;
var hasSuit = true;

function initEffects(renderer) {
    claws = renderer.createEffect("fiskheroes:overlay");
    claws.texture.set("claws");
}

function render(entity, renderLayer, isFirstPersonArm) {
    if (renderLayer == "CHESTPLATE" && entity.getData("fiskheroes:blade") && hasSuit) {
        claws.render();
    }
}
