{
    "bracket-pair-colorizer-2.colors": [ // requires Bracket Pair Colorizer 2
        "#5fb3b3",
        "#c5a5c5",
        "#5a9bcf",
        "#fac863",
    ],
    "color-highlight.markerType": "underline", // requires Color Highlight Extension
    "color-highlight.markRuler": false, // requires Color Highlight Extension
    //
    //
    //
    //
    // "editor.fontFamily": "Space Mono",
    // "editor.fontFamily": "Hack",
    // "editor.fontFamily": "Dank Mono",
    // "editor.fontFamily": "Gintronic",
    "editor.fontFamily": "Operator Mono",
    // "editor.fontFamily": "Inconsolata",
    "editor.fontSize": 16,
    "editor.lineHeight": 30,
    "editor.fontLigatures": true,
    "editor.minimap.enabled": false,
    "explorer.autoReveal": false,
    // "editor.letterSpacing": 0.5,
    "workbench.editor.tabSizing": "shrink",
    "html.format.enable": true,
    "html.format.preserveNewLines": true,
    "files.trimTrailingWhitespace": true,
    "editor.tabSize": 4,
    "editor.cursorWidth": 8,
    "editor.cursorStyle": "line",
    "editor.wordWrap": "on",
    "editor.multiCursorModifier": "ctrlCmd",
    "editor.fontWeight": "500",
    "editor.cursorBlinking": "solid",
    "editor.colorDecorators": false,
    "workbench.activityBar.visible": true,
    "workbench.sideBar.location": "left",
    // "editor.renderWhitespace": "all",
    "editor.minimap.showSlider": "always",
    "workbench.startupEditor": "none",
    "extensions.ignoreRecommendations": false,
    "files.exclude": {
        "**/.git": true,
        "**/.svn": true,
        "**/.hg": true,
        "**/CVS": true,
        "**/.DS_Store": true,
        "**/.next": true,
        "node_modules/": true,
    },
    "search.exclude": {
        "node_modules/*": true
    },
    "workbench.editor.tabCloseButton": "off",
    "editor.snippetSuggestions": "top",
    "workbench.editor.enablePreviewFromQuickOpen": false,
    "workbench.tree.indent": 30,
    "window.title": "${dirty} ${activeEditorMedium}${separator}${rootName}",
    "editor.formatOnSave": true,
    "[javascript]": {
        "editor.formatOnSave": true
    },
    "eslint.autoFixOnSave": true,
    "eslint.alwaysShowStatus": true,
    "editor.autoIndent": true,
    "window.closeWhenEmpty": true,
    "editor.detectIndentation": false,
    "files.insertFinalNewline": true,
    "editor.showFoldingControls": "always",
    "editor.find.seedSearchStringFromSelection": true,
    "editor.matchBrackets": true,
    "window.openFilesInNewWindow": "off",
    "workbench.editor.enablePreview": true,
    "editor.scrollBeyondLastLine": true,
    "editor.useTabStops": true,
    "editor.formatOnPaste": true,
    "files.associations": {
        "*.blade.php": "html"
    },
    "emmet.syntaxProfiles": {
        "php": "html",
        "blade": "html",
        "scss": "css",
        "sass": "css"
    },
    "emmet.includeLanguages": {
        "php": "html",
        "blade": "html",
        "javascript": "javascriptreact"
    },
    "php.suggest.basic": false,
    "window.zoomLevel": 0,
    "editor.smoothScrolling": true,
    "php.validate.executablePath": "c:/xampp/php/php.exe",
    "explorer.confirmDragAndDrop": false,
    "explorer.confirmDelete": false,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "terminal.integrated.shell.windows": "C:/Windows/System32/cmd.exe",
    // "terminal.integrated.shell.windows": "C:/Windows/System32/cmd.exe",
    // "terminal.integrated.shellArgs.windows": [
    //     "/k C:\\PROGRA~2\\Cmder\\vendor\\init.bat"
    // ],
    "html.format.indentHandlebars": true,
    "html.format.indentInnerHtml": true,
    "editor.parameterHints.enabled": false,
    "editor.tokenColorCustomizations": {
        "textMateRules": [
            {
                "scope": [
                    "storage.modifier",
                    "variable.language",
                    "markup.italic",
                    "punctuation.definition.keyword",
                    "keyword.control.import",
                    "storage.type.class",
                    "storage.type.function",
                    "storage.type.export",
                    "keyword.control.conditional",
                    "storage.modifier",
                    "keyword.operator",
                    "storage.type.function.arrow.js"
                ],
                "settings": {
                    "fontStyle": "italic",
                }
            },
            {
                "scope": [
                    //following will be excluded from italics
                    "comment",
                    "invalid",
                ],
                "settings": {
                    "fontStyle": ""
                }
            }
        ]
    },
    "workbench.statusBar.visible": false,
    "workbench.iconTheme": "material-icon-theme",
    "window.menuBarVisibility": "toggle",
}
