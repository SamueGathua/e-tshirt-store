import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';


class Login extends Component {
  render() {
        return(
        <ModalContainer>
        <div className="container">
        <div className="row">
        <div id="modal"className="col-8 mx-auto col-md-6
         col-lg-4 text-center text-capitalize p-5">
        <h5> Login to continue</h5>
        <form className="form">
        <input className="my-3" type ="email" placeholder="email" required/>
        <input  className="my-3" type ="password" placeholder="password" required/>
        <Link to= "/">
          <ButtonContainer>
          Cancel
          </ButtonContainer>
        </Link>

          <ButtonContainer cart type="submit">
          Login
          </ButtonContainer>

        </form>
        </div>
        </div>
        </div>
        </ModalContainer>

    );
  }
}
const ModalContainer = styled.div`
position: fixed;
top:0;
left:0;
right:0;
bottom:0;
background:transparent;
display: flex;
align-items: center;
justify-content: center;
#modal{
  border:0.05rem solid var(--lightBlue);
  border-radius:1rem;

}
`

export default Login;
