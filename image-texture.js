/**
 * Downloads an image from URL and applies it as `diffuseTexture` an attached
 * mesh component.
 *
 * **Warning:** This component will soon be changed to be consistent with
 *   [video-texture](#video-texture) and change a material rather than mesh.
 *   To keep backwards compatibility, please copy the source of this component
 *   into your project.
 */
WL.registerComponent('image-texture', {
    /** URL to download the image from */
    url: {type: WL.Type.String, default: ""},
    /** 0-based mesh component index on this object (e.g. 1 for "second mesh") */
    meshIndex: {type: WL.Type.Int, default: 0}
}, {
    init: function() {
        let obj = this.object;
        WL.textures.load(this.url, 'anonymous')
            .then(function(texture) {
                obj.getComponent("mesh", this.meshIndex).material.diffuseTexture = texture;
            }).catch(console.err);
    }
});
