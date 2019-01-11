import React, { Component } from 'react';
import { Row, Col, Menu, Icon, Dropdown, Button, notification } from "antd";
import DefaultContent from './InnerContent/DefaultContent';
import SantosContent from './InnerContent/SantosCotent';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class ContentPage extends Component {
  state = {
    current: 'mail',
    currentPageContent: 'Selecione a Cidade',
  };

  // NOTIFICATION MESSAGE
  openNotificationWithIcon = (type, message, description) => {
    notification[type]({
      message: message,
      description: description,
    });
  };

  // CHANGE STATE OF THE CURRENT CONTENT TO SWITCH PAGES
  handleSelectOnMenu = (e) => {
    this.setState({ currentPageContent:  e.item.props.value },() => {
      this.openNotificationWithIcon("info", "Conteúdo Atualizado", `Você está visualizando o conteudo de ${this.state.currentPageContent}.`);
    });

  }
  

  //MANAGE INFO CONTENT INSIDE THE PAGE
  currentPageChecker = () => {
    switch (this.state.currentPageContent) {
      case 'Santos':
        return <SantosContent/>
        break;    
      default:
        return <DefaultContent/>
        break;
    }
  }

  render() {
    //CONTENT OF DROPDOWN NAVIGATION
    const menu = (
      <Menu onClick={this.handleSelectOnMenu}>
        <Menu.Item key="1" value="Santos">
          Santos
        </Menu.Item>
        <Menu.Item key="2" value="Bahia">
          Bahia
        </Menu.Item>
        <Menu.Item key="3" value="São Paulo">
          São Paulo
        </Menu.Item>
      </Menu>
    );

    return (
      <div>
        <div className="MainMenu">
          <div className="Logo">
            <img src="./static/img/logo.png" />
          </div>
          <div className="LinksMenu">
            <span>Sobre</span>
            <span>Formações</span>
            <span>Retiros</span>
            <span>Aulas Gratuitas</span>
            <span>Cursos e Eventos</span>
            <span>Contato</span>
          </div>
        </div>
        <Row className="MainSlider">
          <h1>Area do Aluno</h1>
        </Row>        
        <div className="NavigationMenu">
          <Row>
            <Col lg={4} offset={1}>Conheça Nossos<br/>Programas</Col>
            <Col lg={8} offset={1}>
              <Dropdown overlay={menu} className="ChangePageDrop">
                <Button style={{ marginLeft: 8 }}>
                  {this.state.currentPageContent} <Icon type="down" />
                </Button>
              </Dropdown>
            </Col>
            <Col lg={3}>Veja nossa<br/>Agenda de 2019</Col>
            <Col lg={4} offset={1}>
              <Button className="OpenAgendaButton">Agenda 2019</Button>
            </Col>
          </Row>
        </div>
        <div className="MainAreaContent">
          <img src="./static/img/mandala-ar.png" className="MandalaAr"/>
          {this.currentPageChecker()}
        </div>

        <style jsx global>{`
          .MainMenu {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 70%;
            color: #fff;
            background: rgba(77, 141, 191, 0.9);
            padding: 20px 0;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;
          }
          .MainMenu img {
            width: 170px;
          }
          .MainMenu .Logo {
            cursor: pointer;
          }
          .MainMenu .LinksMenu {
            display: flex;
            justify-content: space-around;
          }
          .MainMenu .LinksMenu span {
            margin-left: 20px;
            cursor: pointer;
          }
          .MainSlider {
            height: 70vh !important;
            width: 100%;
            background: #000 url(./static/img/bg-content.jpg) no-repeat center center fixed / cover;
            display: flex !important;
            align-items: flex-end !important;
            justify-content: flex-start !important;
            padding: 3vh 15vw !important;
          }
          .MainSlider h1 {
            font-size: 100px;
            color: #fff;
          }
          .NavigationMenu {
            width: 70%;
            color: #fff;
            background: rgba(77, 141, 191, 0.9);
            padding: 20px;
            margin: 0 auto;
            transform: translateY(-20%);
            z-index: 3;
          }
          .NavigationMenu div{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            height: 100%;
          }
          .ChangePageDrop{
            width: 80% !important;
            height: 40px !important;
            background: transparent !important;
            border: 2px solid #fff !important;
            color: #fff !important;
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            border-radius: 0px !important;
          }
          .ChangePageDrop i{
            padding: 5px !important;
            padding-left: 25px !important;
            border-left: 2px solid #fff !important;
          }
          .OpenAgendaButton{
            width: 100% !important;
            height: 40px !important;
            background: transparent !important;
            border: 2px solid #fff !important;
            color: #fff !important;
            border-radius: 0px !important;
          }
          .MainAreaContent{
            position: relative;
          }
          .MandalaAr{
            position: absolute;
            right: 0;
            top: 0;
            transform: translateY(-70%);
            height: 80vh;
            pointer-events: none;
          }
        `}</style>
      </div>
    );
  }
}
