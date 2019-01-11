import React, { Component } from 'react';
import { Button, notification, Form, Icon, Input } from 'antd';
import ContentPage from '../components/ContentPage';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '123',
      lockedContent: true,
    };
  }

  //MANAGE ERROS ON FORM LOGIN
  componentDidMount() {
    this.props.form.validateFields();
  }

  //RETURN ERROS FROM FORM
  hasErrors = fieldsError => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  };

  // HANDLE SUBMIT OF LOGIN FORM
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (values.password === this.state.password) {
          this.setState(
            {
              lockedContent: false,
            },
            () => {
              this.openNotificationWithIcon('success', 'Bem-vindo(a)', 'Navegue no portal de Alunos Premananda!');
            }
          );
        } else {
          return this.openNotificationWithIcon('error', 'Error', 'Senha Inválida, tente novamente');
        }
      } else {
        console.log(err);
      }
    });
    this.state;
  };

  // NOTIFICATION MESSAGE
  openNotificationWithIcon = (type, message, description) => {
    notification[type]({
      message: message,
      description: description,
    });
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const passwordError = isFieldTouched('password') && getFieldError('password');

    //LOGIN SCREEN
    if (this.state.lockedContent) {
      return (
        <Form layout="inline" onSubmit={this.handleSubmit} className="FormContent">
          <img src="./static/img/logo.png" className="MainLogo"/>
          <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Digite sua Senha!' }],
            })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(255,255,255,.7)' }} />} type="password" placeholder="Digite sua Senha..." />)}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="SendButton" disabled={this.hasErrors(getFieldsError())}>
              Acessar Conteúdo
            </Button>
          </Form.Item>
          <style jsx global>{`          
            body {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100vh;
              background: #000 url(./static/img/bg.jpg) no-repeat center center fixed / cover;
            }
            .MainLogo{
              width: 50%;
              align-self: center;
              margin-bottom: 30px;
            }
            .FormContent {
              display: flex;
              align-item: center;
              flex-direction: column;
              justify-content: center;
              width: 20vw;
            }
            .ant-form-item-control-wrapper {
              width: 100%;
            }
            .FormCotent .ant-input-affix-wrapper .ant-input,
            .ant-input {
              width: 100% !important;
              height: 40px !important;
              border-radius: 100px !important;
              border-color: rgba(236, 185, 154, 0.6) !important;
              background: rgba(236, 185, 154, 0.4) !important;
              color: #fff !important;
              box-shadow: none !important;
            }
            .FormCotent .ant-input-affix-wrapper .ant-input::placeholder,
            .ant-input::placeholder {
              color: #fff !important;
            }
            .ant-btn-primary{
              align-self: center !important;
              border-radius: 100px !important;
              border: none !important;
              margin-top: 20px !important;
              width: 100% !important;
              height: 40px !important;
            }
            .ant-btn-primary[disabled]{
              opacity: 0.4;
            }
            .has-error .ant-form-explain, .has-error .ant-form-split{
              text-align: center;
              -webkit-align-self: center;
              -ms-flex-item-align: center;
              align-self: center;
              width: 100%;
              margin-top: 5px;
              color: #efbea5;
            }
            .ant-notification-notice {
              padding: 16px 24px;
              border-radius: 4px;
              -webkit-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
              background: #fff;
              line-height: 1.5;
              position: relative;
              margin-bottom: 16px;
              overflow: hidden;
              -webkit-box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.33);
              -moz-box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.33);
              box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.33);
            }
          `}</style>
        </Form>
      );
    } else {
      //IF PASSWORD WAS CORRECT SHOW CONTENT PAGE
      return <ContentPage />;
    }
  }
}

const WrappedIndex = Form.create({ name: 'wrappedIndex' })(index);

export default WrappedIndex;
