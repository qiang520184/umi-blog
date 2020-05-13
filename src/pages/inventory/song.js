// import 'common/index.css';
// import { Button } from 'antd';

import Aplayer from 'components/aplayer';
import './less/song.less';
export default () => {
  const props = {
    theme: '#F57F17',
    listFolded: true,
    listMaxHeight: '330px',
    lrcType: 3,
    // mini: true,
    // fixed: true,
  };
  return (
    <div className="song">
      <div className="song-wrap">
        <Aplayer listMaxHeight={'330px'} lrcType={3} theme={'#ebd0c2'} />
      </div>
    </div>
  );
};
