import * as React from "react";
import { Row, Col } from 'antd';
import { Input, Button } from 'antd';


class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'username': '',
            'password': ''
        };
        this.login = this.login.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }

    setPassword(e) {
        this.setState({username: e.target.value});
    }

    setUsername(e) {
        this.setState({password: e.target.value});
    }

    login() {
    }
    render() {
        return (
            <div id='login'>
                <Row>
                    <Col span={2} offset={8}>
                        <label>Username</label>
                    </Col>
                    <Col span={6}>
                        <Input onChange={this.setUsername}></Input>
                    </Col>
                </Row>
                <Row>
                    <Col span={2} offset={8}>  
                        <label>Password</label>
                    </Col>
                    <Col span={6}>
                        <Input type='password' onChange={this.setPassword}></Input>
                    </Col>
                </Row>
                <Row>
                    <Col span={2} offset={11}>
                        <Button type="primary">Login</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default LoginComponent;