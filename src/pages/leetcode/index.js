import { useState } from 'react';
import moment from 'moment';
import { history } from 'umi';
import { Helmet } from 'react-helmet';
import { articleData, info } from 'config/user/index';
import { Pagination } from 'antd';
import seo from 'seo';

import 'common/style/global.less';
import '@/less/index.less';
function routerPush (item) {
  history.push({
    pathname: item.path,
    query: {
      id: encodeURI(item.date)
    }
  })
}
function formatDate (item) {
  return item ? moment(item).format('YYYY-MM-DD hh:mm:ss') : ''
}
export default () => {
  const [articleList] = useState(articleData);
  return (
    <div className="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />

        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <div className="main">
        {articleList && articleList.length ? (
          <div className="article">
            {articleList.map((item, index) => {
              return (
                <div className="article-list" key={index} onClick={() => routerPush(item)}>
                  <div className="article-list-left">
                    <img src={`${info.cdn}/md-img/${item.photos ? item.photos : 'js'}.png`} alt={seo.imgAll} />
                  </div>
                  <div className="article-list-right">
                    <div className="article-list-date">
                      {formatDate(item.date).toLocaleString()}
                    </div>
                    <div className="article-list-title">
                      <span>{item.title}</span>
                    </div>
                    <div className="article-list-classify">

                      <span>{item.categories}</span>
                    </div>
                  </div>
                </div>
              );
            })}
            <div>
              <Pagination defaultCurrent={1} total={articleList.length} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
