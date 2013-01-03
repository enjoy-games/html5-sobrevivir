Ext.data.JsonP.Camera2d({"aliases":{},"inheritable":null,"tagname":"class","singleton":false,"override":null,"component":false,"mixins":[],"superclasses":[],"statics":{"method":[],"event":[],"css_var":[],"css_mixin":[],"cfg":[],"property":[]},"members":{"method":[{"tagname":"method","meta":{},"owner":"Camera2d","name":"constructor","id":"method-constructor"},{"tagname":"method","meta":{},"owner":"Camera2d","name":"resize","id":"method-resize"}],"event":[],"css_var":[],"css_mixin":[],"cfg":[],"property":[{"tagname":"property","meta":{"readonly":true,"private":true},"owner":"Camera2d","name":"HEIGHT","id":"property-HEIGHT"},{"tagname":"property","meta":{"readonly":true,"private":true},"owner":"Camera2d","name":"RATIO","id":"property-RATIO"},{"tagname":"property","meta":{"readonly":true,"private":true},"owner":"Camera2d","name":"WIDTH","id":"property-WIDTH"},{"tagname":"property","meta":{"private":true},"owner":"Camera2d","name":"android","id":"property-android"},{"tagname":"property","meta":{"private":true},"owner":"Camera2d","name":"bufferGameScreen","id":"property-bufferGameScreen"},{"tagname":"property","meta":{"private":true},"owner":"Camera2d","name":"canvasGameScreen","id":"property-canvasGameScreen"},{"tagname":"property","meta":{"private":true},"owner":"Camera2d","name":"ios","id":"property-ios"},{"tagname":"property","meta":{"private":true},"owner":"Camera2d","name":"scale","id":"property-scale"}]},"mixedInto":[],"alternateClassNames":[],"linenr":22,"inheritdoc":null,"parentMixins":[],"extends":null,"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Camera2d.html#Camera2d' target='_blank'>Camera2d.js</a></div></pre><div class='doc-contents'><p>This class manages the canvas element.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-HEIGHT' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Camera2d'>Camera2d</span><br/><a href='source/Camera2d.html#Camera2d-property-HEIGHT' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Camera2d-property-HEIGHT' class='name expandable'>HEIGHT</a><span> : Number</span><strong class='private signature' >private</strong><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'>Height of the canvas. ...</div><div class='long'><p>Height of the canvas.</p>\n<p>Defaults to: <code>682</code></p></div></div></div><div id='property-RATIO' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Camera2d'>Camera2d</span><br/><a href='source/Camera2d.html#Camera2d-property-RATIO' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Camera2d-property-RATIO' class='name expandable'>RATIO</a><span> : Number</span><strong class='private signature' >private</strong><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'>Size ratio of the canvas. ...</div><div class='long'><p>Size ratio of the canvas.</p>\n<p>Defaults to: <code>1.5</code></p></div></div></div><div id='property-WIDTH' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Camera2d'>Camera2d</span><br/><a href='source/Camera2d.html#Camera2d-property-WIDTH' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Camera2d-property-WIDTH' class='name expandable'>WIDTH</a><span> : Number</span><strong class='private signature' >private</strong><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'>Width of the canvas. ...</div><div class='long'><p>Width of the canvas.</p>\n<p>Defaults to: <code>1023</code></p></div></div></div><div id='property-android' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Camera2d'>Camera2d</span><br/><a href='source/Camera2d.html#Camera2d-property-android' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Camera2d-property-android' class='name expandable'>android</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Detect Android device. ...</div><div class='long'><p>Detect Android device.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-bufferGameScreen' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Camera2d'>Camera2d</span><br/><a href='source/Camera2d.html#Camera2d-property-bufferGameScreen' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Camera2d-property-bufferGameScreen' class='name not-expandable'>bufferGameScreen</a><span> : HTMLElement</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'><p>Provides doble buffering.</p>\n</div><div class='long'><p>Provides doble buffering.</p>\n</div></div></div><div id='property-canvasGameScreen' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Camera2d'>Camera2d</span><br/><a href='source/Camera2d.html#Camera2d-property-canvasGameScreen' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Camera2d-property-canvasGameScreen' class='name not-expandable'>canvasGameScreen</a><span> : HTMLElement</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'><p>Reference to the canvas element.</p>\n</div><div class='long'><p>Reference to the canvas element.</p>\n</div></div></div><div id='property-ios' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Camera2d'>Camera2d</span><br/><a href='source/Camera2d.html#Camera2d-property-ios' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Camera2d-property-ios' class='name expandable'>ios</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Detect iOS/iPad device. ...</div><div class='long'><p>Detect iOS/iPad device.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-scale' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Camera2d'>Camera2d</span><br/><a href='source/Camera2d.html#Camera2d-property-scale' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Camera2d-property-scale' class='name not-expandable'>scale</a><span> : Number</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'><p>Track of the scale of the canvas.</p>\n</div><div class='long'><p>Track of the scale of the canvas.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Camera2d'>Camera2d</span><br/><a href='source/Camera2d.html#Camera2d-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Camera2d-method-constructor' class='name expandable'>Camera2d</a>( <span class='pre'></span> ) : <a href=\"#!/api/Camera2d\" rel=\"Camera2d\" class=\"docClass\">Camera2d</a></div><div class='description'><div class='short'>Creates the camera2d object and initializes properties. ...</div><div class='long'><p>Creates the camera2d object and initializes properties.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Camera2d\" rel=\"Camera2d\" class=\"docClass\">Camera2d</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-resize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Camera2d'>Camera2d</span><br/><a href='source/Camera2d.html#Camera2d-method-resize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Camera2d-method-resize' class='name expandable'>resize</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Resize the canvas in proportion to the new size of the window. ...</div><div class='long'><p>Resize the canvas in proportion to the new size of the window.</p>\n</div></div></div></div></div></div></div>","meta":{},"private":null,"files":[{"filename":"Camera2d.js","href":"Camera2d.html#Camera2d"}],"name":"Camera2d","requires":[],"enum":null,"subclasses":[],"id":"class-Camera2d","html_meta":{}});