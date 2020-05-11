import { IRouteComponentProps } from 'umi';
import { useState, Fragment } from 'react';
import menuData from 'config/data/menuData';
import ReactAplayer from 'react-aplayer';
import { logoData } from 'config/user/index';
import Cover from 'components/cover';
import { Input } from 'antd';
const { Search } = Input;
import { history } from 'umi';
import './index.less';
function routerPush(item) {
  history.push({
    pathname: item.path,
    query: {
      title: item.title,
    },
  });
}
export default function Layout({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  const [menuList] = useState(menuData);
  const [logoLink] = useState(logoData);
  const props = {
    theme: '#F57F17',
    // lrcType: 1,
    mini: true,
    fixed: true,
    audio: [
      {
        name: '世界这么大还是遇见你 - 程响',
        artist: 'Goose house',
        url:
          'http://isure.stream.qqmusic.qq.com/C400001xLIXo2w9V7U.m4a?guid=0&vkey=CE7CCDED4B3DB541DE2B77CB548417B07617D02F25192D7887E242A89356E068356D50F8B7275CFEC8566D434AB0F0872370B7422950EB58&uin=6843&fromtag=66',
        cover:
          'https://y.gtimg.cn/music/photo_new/T002R300x300M000003Ls5Jo4EFBIH.jpg',
        lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.lrc',
        theme: '#ebd0c2',
      },
    ],
  };
  return (
    <Fragment>
      <div className="header">
        <div className="header-left dfcc">
          {logoLink &&
            logoLink.map((item, index) => {
              return <p key={index}>{item.title}</p>;
            })}
        </div>
        <div className="header-center">
          <div className="menu">
            <ul className="menu-pc">
              {menuList &&
                menuList.map((item, index) => {
                  return (
                    <li className="dfcc menu-pc-item" key={index}>
                      <div className="dfcc menu-pc-item-div">
                        <p>
                          <span onClick={() => routerPush(item)}>
                            {item.title}
                          </span>
                        </p>
                        {item.children && item.children.length ? (
                          <ol className="menu-pc-item-div-children">
                            {item.children.map((e, ind) => {
                              return (
                                <li key={ind} onClick={() => routerPush(e)}>
                                  <span>{e.title}</span>
                                </li>
                              );
                            })}
                          </ol>
                        ) : null}
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className="header-right dfcc">
          <Search
            placeholder="请输入你想知道的内容"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
        </div>
      </div>
      {children}
      <ReactAplayer {...props} />
      <Cover></Cover>
    </Fragment>
  );
}
