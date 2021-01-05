import React from 'react';
import showdown from 'showdown';
import hljs from 'highlight.js';
import sql from 'highlight.js/lib/languages/sql';
import classNames from 'classnames';
hljs.registerLanguage('sql', sql);
showdown.extension('highlight', function () {
    return [{
            type: 'output',
            filter: function (text, converter, options) {
                var left = '<pre><code\\b[^>]*>';
                var right = '</code></pre>';
                var flags = 'g';
                var replacement = function (wholeMatch, match, left, right) {
                    // Append hljs class
                    left = left.slice(0, 18) + 'hljs ' + left.slice(18);
                    // eslint-disable-next-line
                    var lang = (left.match(/class=\"([^ \"]+)/) || [])[1];
                    if (lang && hljs.getLanguage(lang)) {
                        return left + hljs.highlight(lang, match).value + right;
                    }
                    else {
                        return left + hljs.highlightAuto(match).value + right;
                    }
                };
                text = text.replace(/&gt;/g, '>');
                text = text.replace(/&lt;/g, '<');
                return showdown.helper.replaceRecursiveRegExp(text, replacement, left, right, flags);
            }
        }];
});
showdown.setOption('optionKey', 'value');
export default function MarkdownRender(props) {
    var text = props.text, className = props.className, dark = props.dark;
    var cls = classNames('dtc-markdown-render-body', dark ? 'dtc-vs-dark' : 'dtc-vs', className);
    var converter = new showdown.Converter({
        extensions: ['highlight'],
        emoji: true
    });
    var result = converter.makeHtml(text);
    return (React.createElement("div", { className: cls, dangerouslySetInnerHTML: { __html: result } }));
}
