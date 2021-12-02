// import './createOrganization.scss';
import axios from "axios";
import { CardActionArea } from '@mui/material';
import { Mark,line } from '../../Constant/Images';
import { Col, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import Button from 'renderer/Components/Button';
import InputButton from 'renderer/Components/InputButton';
import { useForm ,Controller,SubmitHandler} from "react-hook-form";
import {IFormInput,
  AUTH
} from '../../../Types/User.types';
import React from 'react';
import { CreateOrganization } from 'renderer/Store/Actions/Organization.action';
import {useDispatch,useSelector} from 'react-redux';

function CreateOrgCom() {
  const dispatch = useDispatch();
  const [ErrorMessage,SetErrorMessage]=React.useState<string>('');
  const { register,formState: { errors }, handleSubmit }=useForm<IFormInput>({criteriaMode:'all'});
  const User = useSelector(({auth}:AUTH)=>auth.user);
  const onSubmit: SubmitHandler<IFormInput> = (Data) => {
    debugger
    let data={
      "organizationName":"XYZ",
      "description" :"xyz is our organization",
      "owoner":"rehan",
      "logo":"proje",
      "address":"isb"
    }
 const Res = dispatch(CreateOrganization(data,User.accessToken));

  };
  return (
    <div className="App">
       <div className="App-Left">

             {/* Headind Div */}
            <div className="Heading-Dev">
                <div className="main-heading1"> <div className="main-heading">Create a new Organization </div></div>
                <div className="main-Line1"> <img className="main-Line" src={line} alt="Line" /></div>
                <div className="main-smallHeading1"> <div className="main-smallHeading">Please Enter your Organization Detail </div></div>
            </div>

            {/*Select Project Div */}
            <div className="Select-Project-Div">

              <form onSubmit={handleSubmit(onSubmit)}>

                 {/* *********1st field**********/}
                <Row className="LabelStyle">
                    <Col className="LabelInput">Organization Name</Col>
                </Row>

                <Row>
                    <Col>
                      <input type="text" id="email" className="input_Style" placeholder=" @xyz"

                      />
                    </Col>
                  </Row>

                   {/**********2nd field**********/}
                  <Row className="LabelStyle2">
                    <Col className="LabelInput">Organization Description</Col>
                </Row>

                  <Row style={{ marginTop: 5 }}>
                      <Col>
                        <input type="text" id="email" className="input_Style1" placeholder="Des..."

                        />
                      </Col>
                   </Row>

               {/**********3rd field**********/}
               <Row className="LabelStyle3">
                    <Col className="LabelInput">Upload Logo</Col>
                </Row>

                <Row style={{ marginTop: 5 }}>
                    <Col>
                      <input type="file" id="email" className="input_Style3"  placeholder="Des..."
                        />
                     </Col>
                    </Row>

               {/**********Buttom Field**********/}
                <div className="button-Style">
                  <InputButton
                      className="Create-Button"
                      buttonStyle={{
                        backgroundImage: ` linear-gradient(to right, #0905AF 0%, #0905AF 47%, #0905AF 100%)`,
                        boxShadow: `3.994px 22.651px 57px rgba(97, 73, 205, 0.259)`,
                        color: '#FFFFFF',
                        width:300,marginTop:30
                      }}
                      title=" Create"
                    />
                </div>
                </form>

              </div>

        </div>
    </div>
  );
}

export default CreateOrgCom;