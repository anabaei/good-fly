import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TravelForm from "./travelForm";
import PackageForm from "./packageForm";

export default function TabsExample(props) {
  return (
    <Tabs
      defaultActiveKey= {props.props.travelor? "travelor":  "package"}
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      {props.props.travelor === "true" ? (
        <Tab eventKey="travelor" title="Travelor">
          <TravelForm />
        </Tab>
      ) : (
        <></>
      )}
      {props.props.package === "true" ? (
        <Tab eventKey="package" title="Package">
          <PackageForm />
        </Tab>
      ) : (
        <></>
      )}
    </Tabs>
  );
}
