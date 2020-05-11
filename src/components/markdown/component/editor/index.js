import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import content from "../../template/content.md";

function MarkdownEditor() {
    return (
        <div className="markdown-editor">
            <CodeMirror
                  value={content}
                  options={{
                    theme: "md-mirror",
                    keyMap: "sublime",
                    mode: "markdown",
                    lineWrapping: true,
                    lineNumbers: false,
                    // extraKeys: {
                    //   ...bindHotkeys(this.props.content, this.props.dialog),
                    //   Tab: betterTab,
                    //   RightClick: rightClick,
                    // },
                  }}
                //   onChange={this.handleChange}
                //   onScroll={this.handleScroll}
                //   onFocus={this.handleFocus}
                //   onBlur={this.handleBlur}
                //   onDrop={this.handleDrop}
                //   onPaste={this.handlePaste}
                //   ref={this.getInstance}
                />
        </div>
    );
}

export default MarkdownEditor;
