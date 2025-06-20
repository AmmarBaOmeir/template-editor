import Avatar from "./atoms/Avatar"
import Button from "./atoms/Button"
import IconButton from "./atoms/IconButton"
import Notification from './assets/notification.svg?react';
import Checkbox from "./atoms/Checkbox";
import SelectInput from "./atoms/SelectInput";
import TextInput from "./atoms/TextInput";
import Card from "./components/list/Card";
import Properties from "./components/sidePanel/Properties";
import Elements from "./components/sidePanel/Elements";
import Controls from "./components/editor/Controls";

function App() {
  return (
    <>
     <Avatar name="test test" src="#" />
     <Button text="primary button" type="primary" />
     <Button text="secondary button" type="secondary" />
     <Button text="danger button" type="danger" />

     <IconButton icon={<Notification />} type="primary" />
     <IconButton icon={<Notification />} type="secondary" />
     <IconButton icon={<Notification />} type="danger"/>

    <SelectInput />
     <Checkbox />

     <TextInput />


     <Card imageSrc={Notification} />

     <Properties />
     <Elements />

     <Controls />
    </>
  )
}

export default App
