// import 'common/index.css';
import { history } from 'umi';
import { useEffect, useState } from 'react';
import './index.less';
import Markdown from 'components/markdown';
// import content from '../../source/git知多少.md';
// function importContent(title) {

// }

export default () => {
  const [content, setContent] = useState('');
  const [info, setInfo] = useState({});

  useEffect(() => {
    // importContent(history.location.query.title);
    let { title } = history.location.query;
    const content = require(`../../source/${title}.md`).default;
    setContent(content);
    let info = {};
    let infoArr = content
      .slice(content.indexOf('<!--') + 4, content.indexOf('-->'))
      .replace(/\n/g, ',')
      .split(',');
    infoArr.forEach(item => {
      if (item) {
        let [key, value] = item.split(':');
        if (key.trim()) {
          info[key] = value.trim();
        }
      }
    });
    setInfo(info);
  }, []);
  return (
    <div className="article-detail">
      <div className="markdown-wrap">
        <div className="markdown-wrap-title">{info.title}</div>
        <div className="markdown-wrap-time">{info.date}</div>
        <Markdown
          option={{ head: false, editor: false, view: true, content }}
        ></Markdown>
      </div>
    </div>
  );
};
