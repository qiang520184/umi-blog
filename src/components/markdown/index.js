import React, { Component } from 'react';
import MarkdownView from './component/view'
import MarkdownEditor from './component/editor'
import MarkdownHead from './component/head'
import './utils/mdMirror.css';
import './index.css';

class Markdown extends Component {
  render() {
    // console.log(this.props.option)
    let { head, editor, view, content } = this.props.option
    return (
      <div className="markdown">
        {
          head ? <div className="markdown-head">
            <MarkdownHead></MarkdownHead>
          </div> : null
        }
        <div className="markdown-box">
          {
            editor ? <div className="markdown-left">
              <MarkdownEditor></MarkdownEditor>
            </div> : null
          }
          {
            view ? <div className="markdown-right">
              <MarkdownView content={content}></MarkdownView>
            </div> : null
          }
        </div>
      </div>
    );
  }
}

export default Markdown;
