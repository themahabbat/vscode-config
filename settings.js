{
    // "editor.fontFamily": "Space Mono",
    // "editor.fontFamily": "Dank Mono",
    // "editor.fontFamily": "Gintronic",
    "editor.fontFamily": "Operator Mono",
    // "editor.fontFamily": "Inconsolata",
    "editor.fontSize": 14,
    "editor.fontLigatures": true,
    "editor.minimap.enabled": false,
    "editor.letterSpacing": 0.5,
    "workbench.editor.tabSizing": "shrink",
    "html.format.enable": true,
    "html.format.preserveNewLines": true,
    "files.trimTrailingWhitespace": true,
    "editor.tabSize": 4,
    "editor.cursorWidth": 5,
    "editor.cursorStyle": "line",
    "editor.wordWrap": "on",
    "editor.multiCursorModifier": "ctrlCmd",
    "editor.fontWeight": "400",
    "editor.cursorBlinking": "solid",
    "editor.colorDecorators": false,
    "workbench.activityBar.visible": true,
    "workbench.sideBar.location": "left",
    "editor.renderWhitespace": "true",
    "editor.minimap.showSlider": "always",
    "workbench.startupEditor": "newUntitledFile",
    "extensions.ignoreRecommendations": false,
    "files.exclude": {
        "**/.git": true,
        "**/.svn": true,
        "**/.hg": true,
        "**/CVS": true,
        "**/.DS_Store": true,
        "**/.next": true,
        "node_modules/": true,
        "vendor/": true
    },
    "search.exclude": {
        "node_modules/*": true
    },
    "workbench.editor.tabCloseButton": "off",
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },
    "editor.snippetSuggestions": "top",
    "workbench.editor.enablePreviewFromQuickOpen": false,
    "workbench.tree.indent": 22,
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
    "[jade]": {
        "togglequotes.chars": [
            "\"",
            "'",
            "`"
        ]
    },
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
        "blade": "html"
    },
    "php.suggest.basic": false,
    "window.zoomLevel": 0,
    "editor.lineHeight": 24,
    "editor.smoothScrolling": true,
    "php.validate.executablePath": "/usr/bin/php",
    "explorer.confirmDragAndDrop": false,
    "explorer.confirmDelete": false,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "gitlens.advanced.messages": {
        "suppressShowKeyBindingsNotice": true
    },
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
    "workbench.colorTheme": "Cobalt2",
    "workbench.iconTheme": "material-icon-theme",
    "workbench.statusBar.visible": false,
}
