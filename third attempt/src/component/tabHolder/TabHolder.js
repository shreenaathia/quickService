import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Page from '../page/Page'
import Page2 from '../page/Page2'
import Page3 from '../page/Page3'


class TabHolder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Tabs defaultActiveKey="houseKeeping" id="uncontrolled-tab-example">
          <Tab eventKey="houseKeeping" title="House Keeping" >
            <Page2/>
          </Tab>
          <Tab eventKey="plumbing" title="Plumbing">
            <Page/>
          </Tab>
          <Tab eventKey="cooking" title="Cooking" >
            <Page3/>
          </Tab>
          <Tab eventKey="other" title="Other" disabled>
          </Tab>
        </Tabs>


      </>
    );
  }
}

export default TabHolder;
