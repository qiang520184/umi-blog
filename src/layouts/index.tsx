import { IRouteComponentProps } from 'umi';
import { Fragment } from 'react';
import Cover from 'components/cover';
import Header from 'components/header';

import Aplayer from 'components/aplayer';

// import Cover from 'components/cover';
import './index.less';
function Layout({ children }: IRouteComponentProps) {
  return (
    <Fragment>
      {/* <Cover></Cover> */}
      <Header />
      {children}
      <Aplayer mini={true} fixed={true} theme={'#ebd0c2'} />
    </Fragment>
  );
}
export default Layout;
