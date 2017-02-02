/**
 * Demo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/*eslint no-console:0 */

define("tinymce.core.demo.Demo", [
	"tinymce.core.api.Main"
], function (tinymce) {
	return function () {
		tinymce.init({
			selector: "textarea.tinymce",
			theme: function(editor, target) {
				var dom = tinymce.DOM, editorContainer;

				editorContainer = dom.insertAfter(dom.create('div', {style: 'border: 1px solid gray'},
					'<div>' +
						'<button data-mce-command="bold">B</button>' +
						'<button data-mce-command="italic">I</button>' +
						'<button data-mce-command="mceInsertContent" data-mce-value="Hello">Insert Hello</button>' +
					'</div>' +
					'<div style="border-top: 1px solid gray"></div>'
				), target);

				dom.setStyle(editorContainer, 'width', target.offsetWidth);

				tinymce.each(dom.select('button', editorContainer), function(button) {
					dom.bind(button, 'click', function(e) {
						e.preventDefault();

						editor.execCommand(
							dom.getAttrib(e.target, 'data-mce-command'),
							false,
							dom.getAttrib(e.target, 'data-mce-value')
						);
					});
				});

				editor.on(function() {
					tinymce.each(dom.select('button', editorContainer), function(button) {
						editor.formatter.formatChanged(dom.getAttrib(button, 'data-mce-command'), function(state) {
							button.style.color = state ? "red" : "";
						});
					});
				});

				return {
					editorContainer: editorContainer,
					iframeContainer: editorContainer.lastChild,

					iframeHeight: target.offsetHeight - editorContainer.firstChild.offsetHeight
				};
			},
			height: 600
		});
	};
});