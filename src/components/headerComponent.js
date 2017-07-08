import React, { Component } from 'react';
import {PageHeader} from 'react-bootstrap';
import Form from './formComponent';
import Logo from '../media/logo.png';

class Header extends Component {
    render(){
        return (
            <PageHeader id="pageHeader">
                <div className="container-fluid">
                    <div className="row row-centered">
                        <div className="center-block col-md-3 col-sm-6 col-6 col-centered">
                            <div>
                                <img id="pageLogo" className="img-responsive" src={Logo} alt=""></img>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-6 col-centered">
                            <Form id="formComponent"/>
                        </div>
                    </div>
                </div>
            </PageHeader>
        );
    }
}

export default Header;