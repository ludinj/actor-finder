import { Layout, Typography, Image } from "antd";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import "./sidebar.scss";
import { useState } from "react";

const Sidebar = () => {
  const { Sider } = Layout;
  const { Title } = Typography;
  const actorInfo = useSelector((state) => state.actor.actorInfo);
  const [isOpen, setisOpen] = useState(false);
  const img = actorInfo
    ? `https://image.tmdb.org/t/p/w300/${actorInfo.profile_path}`
    : "https://previews.123rf.com/images/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-icona-profilo-avatar-predefinito-per-maschio-segnaposto-foto-grigio-illustrazioni-vettoriali.jpg";

  return (
    <Sider className={isOpen ? "sidebar open" : "sidebar close"}>
      <Image width={140} style={{ marginTop: "20px" }} src={img} alt="" />
      <div onClick={() => setisOpen(!isOpen)} className="arrow">
        {isOpen ? <ArrowLeftOutlined /> : <ArrowRightOutlined />}
      </div>
      <div className="info">
        <Title className="title">{actorInfo?.name}</Title>
        <div
          className={actorInfo?.gender === 2 ? "gender hombre" : "gender mujer"}
        >
          {actorInfo?.gender === 2 ? "Hombre" : "Mujer"}
        </div>
        <p>Poularidad: {actorInfo?.popularity} </p>
      </div>
    </Sider>
  );
};

export default Sidebar;
