/*global define, brackets */

define(function (require, exports, module) {
"use strict";

const AppInit        = brackets.getModule("utils/AppInit"),
      CommandManager = brackets.getModule("command/CommandManager"),
      KeyBindingManager = brackets.getModule("command/KeyBindingManager"),
      EditorManager  = brackets.getModule("editor/EditorManager");

function wrapWith(tag) {
    var editor = EditorManager.getActiveEditor();
    if (!editor) return;
    var sel  = editor.getSelection();
    var text = editor.getSelectedText();
    if (text) {
        editor.document.replaceRange(
            "<" + tag + ">" + text + "</" + tag + ">",
            sel.start, sel.end
        );
    }
}

CommandManager.register("Wrap: strong", "wrap.strong", function () { wrapWith("strong"); });
CommandManager.register("Wrap: em",     "wrap.em",     function () { wrapWith("em"); });

AppInit.appReady(function () {
    KeyBindingManager.addBinding("wrap.strong", "Ctrl-B");
    KeyBindingManager.addBinding("wrap.em",     "Ctrl-I");
    console.log("Wrap HTML Tags extension loaded");
});
});
