// index.config
import ArticleListFile from './ArticleList.json';
// cdn基路径
const WWW = 'https://www.fudaqiang.com';
const CDN = 'https://cdn.jsdelivr.net/gh/qiang520184/cdn@1.7.1';
const Logo = '/images/rooon.gif';
const ImgAlt = '付大强';
export const WYYID = '2523258784'; // 网易云音乐ID 


//
export const logoData = [
    {
        title: 'さくら荘その'
    },
    {
        title: '强い'
    }
];
// 首页轮播图
export const Banner = [
    {
        img: `${CDN}/images/cover/1.jpg`
    },
    {
        img: `${CDN}/images/cover/2.jpg`
    },
    {
        img: `${CDN}/images/cover/3.jpg`
    },
    {
        img: `${CDN}/images/cover/4.jpg`
    },
    {
        img: `${CDN}/images/cover/5.jpg`
    },
    {
        img: `${CDN}/images/cover/6.jpg`
    }
];
// 首页列表
export const articleData = ArticleListFile;
export const FocusInfo = [
    {
        title: `If you haven't found it yet, keep looking and don't settle${''}`,
        txt: '如果你还没找到，那继续找，别安逸下来。'
    },
    {
        title: `Live your life with passion! With some drive!${''}`,
        txt: '充满激情地生活！开着车！'
    }
];
export const FocusInfoIcon = [
    {
        img: `${CDN}/img/other/next-b.svg`,
        text: 'left',
        type: 'left'
    },
    {
        img: `${CDN}/img/social/github.png`,
        path: 'https://github.com/qiang520184',
        text: 'github',
        type: '_blank'
    },
    {
        img: `${CDN}/img/social/email.svg`,
        path: 'mailto:199513521@qq.com',
        text: 'email',
        type: '_blank'
    },
    {
        img: `${CDN}/img/social/sina.png`,
        path: 'https://weibo.com/xq520184',
        text: 'sina',
        type: '_blank'
    },
    {
        img: `${CDN}/img/social/wangyiyun.png`,
        path: 'https://music.163.com/#/playlist?id=2523258784',
        text: 'wangyiyun',
        type: '_blank'
    },
    {
        img: `${CDN}/img/social/wechat.png`,
        text: 'weixin',
        type: 'hover',
        hoverImg: `${CDN}/img/custom/donate/wxgzh.jpg`
    },
    {
        img: `${CDN}/img/other/next-b.svg`,
        text: 'right',
        type: 'right'
    }
];
// 基本信息
export const info = {
    cdn: CDN,
    logo: Logo,
    www: WWW,
    imgAlt: ImgAlt,
    focusInfoIcon: FocusInfoIcon
};


