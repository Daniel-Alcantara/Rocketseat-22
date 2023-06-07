import "./App.style.css";
import Avatar from "./images/Avatar.png";
import ItemRender from "./components/ItemRender";
import {
  IoPersonCircleOutline,
  IoKeyOutline,
  IoAccessibilityOutline,
  IoDesktopOutline,
} from "react-icons/io5";
import { FaBell, FaRegQuestionCircle } from "react-icons/fa";
import { BsPersonGear } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import UniqueHelp from "./components/UniqueHelp";

function App() {
  return (
    <div className="h-75 mx-auto w-100 rounded px-4 pt-4 pb-3 ajust-box">
      <div className="d-flex ajust-margin">
        <img className="ajust-image" src={Avatar} alt="Avatar" />
        <div className="d-flex flex-column justify-content-around">
          <p className="ajust-name m-0">Marvin McKinney</p>
          <p className="ajust-email m-0">marvin.mckinney@example.com</p>
        </div>
      </div>

      <div>
        <ItemRender
          title={"CONTA"}
          icon1={<IoPersonCircleOutline />}
          icon2={<IoKeyOutline />}
          text1={"Dados Pessoais"}
          text2={"Informações de Login"}
        />

        <ItemRender
          title={"PREFERÊNCIAS"}
          icon2={<IoAccessibilityOutline />}
          text2={"Acessibilidade"}
          icon1={<FaBell />}
          text1={"Notificações"}
        />

        <ItemRender
          title={"PRIVACIDADE"}
          icon1={<IoDesktopOutline />}
          text1={"Aparelhos conectados"}
          icon2={<BsPersonGear />}
          text2={"Contas vinculadas"}
        />
      </div>
      <div>
        <div className="mt-5">
          <UniqueHelp icon={<FaRegQuestionCircle />} text={"Central de Ajuda"}/>
          <UniqueHelp icon={<ImExit />} text={"Sair"} styles={"#AA2222"}/>
        </div>
      </div>
    </div>
  );
}

export default App;
