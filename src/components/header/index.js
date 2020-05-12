import menuData from 'config/data/menuData';
import { useState } from 'react'
import { logoData } from 'config/user/index';
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
export default () => {
    const [menuList] = useState(menuData);
    const [logoLink] = useState(logoData);
    return (
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
    );
};
