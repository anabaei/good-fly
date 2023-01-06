

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TravelForm from './TravelForm'
import PackageForm from './PackageForm'

function TabsExample() {
  return (
    <Tabs
    defaultActiveKey="travelor"
    transition={false}
    id="noanim-tab-example"
    className="mb-3"
  >
    <Tab eventKey="travelor" title="Travelor">
      <TravelForm />
    </Tab>
    <Tab eventKey="package" title="Package">
      <PackageForm />
    </Tab>
    
  </Tabs>
  );
}

export default TabsExample;