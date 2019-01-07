import React, { Component } from 'react';
import { Button, notification, Form, Icon, Input } from 'antd';
import ContentPage from '../components/ContentPage';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'premananda123454321',
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
          <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Digite sua Senha!' }],
            })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Digite sua Senha..." />)}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" disabled={this.hasErrors(getFieldsError())}>
              Acessar Conteúdo
            </Button>
          </Form.Item>
          <style jsx global>{`
            body{
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100vh;
            }
            .FormContent{
              background: red;
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
