Ext.data.JsonP.CustomFx({"aliases":{},"inheritable":null,"tagname":"class","singleton":true,"override":null,"component":false,"mixins":[],"superclasses":[],"statics":{"method":[],"event":[],"css_var":[],"css_mixin":[],"cfg":[],"property":[]},"members":{"method":[{"tagname":"method","meta":{},"owner":"CustomFx","name":"fadein","id":"method-fadein"},{"tagname":"method","meta":{},"owner":"CustomFx","name":"fadeout","id":"method-fadeout"}],"event":[],"css_var":[],"css_mixin":[],"cfg":[],"property":[]},"mixedInto":[],"alternateClassNames":[],"linenr":22,"inheritdoc":null,"parentMixins":[],"extends":null,"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/custom_fx.html#CustomFx' target='_blank'>custom_fx.js</a></div></pre><div class='doc-contents'><p>This class provides custom animations for DOM elements.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-fadein' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CustomFx'>CustomFx</span><br/><a href='source/custom_fx.html#CustomFx-method-fadein' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CustomFx-method-fadein' class='name expandable'>fadein</a>( <span class='pre'>element, [callback]</span> ) : HTMLElement</div><div class='description'><div class='short'>Display an element by fading them to opaque. ...</div><div class='long'><p>Display an element by fading them to opaque.</p>\n\n<p>This method set the css display property to block.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : HTMLElement/String<div class='sub-desc'><p>An Element or the string id of an Element to apply the transition to.</p>\n</div></li><li><span class='pre'>callback</span> : Function (optional)<div class='sub-desc'><p>A function to call once the animation is complete.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement</span><div class='sub-desc'><p>The element that have been animated.</p>\n\n<p>Examples:</p>\n\n<pre><code>&lt;div id=\"divContainer\" style=\"display:none\"&gt;Once upon a time...&lt;/div&gt;\n...\nvar element = getElementById('divContainer');\ncustom_fx.fadein(element);\n</code></pre>\n\n<p>or</p>\n\n<pre><code>&lt;div id=\"divContainer\"&gt;Once upon a time...&lt;/div&gt;\n...\ncustom_fx.fadein('divContainer', function(element) {\n    // Do something...\n});\n</code></pre>\n</div></li></ul></div></div></div><div id='method-fadeout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CustomFx'>CustomFx</span><br/><a href='source/custom_fx.html#CustomFx-method-fadeout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/CustomFx-method-fadeout' class='name expandable'>fadeout</a>( <span class='pre'>element, [callback]</span> ) : HTMLElement</div><div class='description'><div class='short'>Hide an element by fading it to transparent. ...</div><div class='long'><p>Hide an element by fading it to transparent.</p>\n\n<p>This method set the css display property to none.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : HTMLElement/String<div class='sub-desc'><p>An Element or the string id of an Element to apply the transition to.</p>\n</div></li><li><span class='pre'>callback</span> : Function (optional)<div class='sub-desc'><p>A function to call once the animation is complete.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement</span><div class='sub-desc'><p>The element that have been animated.</p>\n\n<p>Examples:</p>\n\n<pre><code>&lt;div id=\"divContainer\"&gt;Once upon a time...&lt;/div&gt;\n...\nvar element = getElementById('divContainer');\ncustom_fx.fadeout(element);\n</code></pre>\n\n<p>or</p>\n\n<pre><code>&lt;div id=\"divContainer\"&gt;Once upon a time...&lt;/div&gt;\n...\ncustom_fx.fadeout('divContainer', function(element) {\n    // Do something...\n});\n</code></pre>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{},"private":null,"files":[{"filename":"custom_fx.js","href":"custom_fx.html#CustomFx"}],"name":"CustomFx","requires":[],"enum":null,"subclasses":[],"id":"class-CustomFx","html_meta":{}});