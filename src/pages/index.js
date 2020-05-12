import { useState } from 'react';
import moment from 'moment';
import { history } from 'umi';
import { logoData, articleData, info } from 'config/user/index';
import { Input } from 'antd';
import 'common/style/global.less';
import '@/less/index.less';
const { Search } = Input;
function routerPush(item) {
	history.push({
		pathname: item.path,
		query: {
			title: item.title
		}
	})
}
function formatDate(item) {
	return item ? moment(item).format('YYYY-MM-DD hh:mm:ss') : ''
}
export default () => {
	const [articleList] = useState(articleData);
	return (
		<div className="home">
			<div className="main">
				<div className="main-tip" />
				{articleList && articleList.length ? (
					<div className="article">
						{articleList.map((item, index) => {
							return (
								<div className="article-list" key={index} onClick={() => routerPush(item)}>
									<div className="article-list-left">
										<img src={`${info.cdn}/md-img/${item.photos ? item.photos : 'js'}.png`} alt="" />
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
					</div>
				) : null}
			</div>
			<div className="footer">
				<p className="footer-year">© 2018-2020</p>
				<p className="footer-record">
					<a href="http://www.beian.miit.gov.cn" target="_blank">
						豫ICP备19045496号
					</a>
				</p>
			</div>
		</div>
	);
};
