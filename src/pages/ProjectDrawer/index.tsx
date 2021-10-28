import { Drawer } from "antd";
import { useRecoilState } from "recoil";
import { ModalState } from "store";
const ProjectDrawer = () => {
  const [Modal, setModal] = useRecoilState(ModalState);
  console.log(Modal);
  return (
    <Drawer
      title="Create a new account"
      width={720}
      onClose={() => setModal(false)}
      visible={Modal}
    ></Drawer>
  );
};

export default ProjectDrawer;
