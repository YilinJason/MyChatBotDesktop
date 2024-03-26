import React from 'react';
import ChildComponentOne from './mainApp';
import ChildComponentTwo from '../setting/setting';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <ChildComponentOne />
        <ChildComponentTwo />
      </div>
    );
  }
}

export default MainPage;