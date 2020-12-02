import React, { Component } from 'react';
import './Profile.css';
import download from './download.png';
import axios from 'axios';

var dummyFname; 
var dummyLname; 
var dummySchool; 
var dummyEmail;

var courseCodes = ['COP','COP','CIS','EEL'];
var courseNums = ['4600','4331','4910','3421'];
var flag = false;
var nameList ="";


function populate()
{
    if(flag == true )
    {
        return;
    }
    
    const list = document.querySelector('.my-list');

    const listItems = courseCodes.map((element)=>{'<li id= ${element} class = listItem >${element}</li>'});
    flag = true;
    return;
}
    const GoHome = async event =>
    {
        event.preventDefault();
        window.location.href = "/HomePage"; 
        //alert("Shmoovin to profile page");
    };

//function Profile() {
    class Profile extends Component {

        state = {
            firstName: '',
            lastName: '',
            schoolName: '',
            email: ''
        }
      async  componentDidMount() {
          const res = await axios.get('http://localhost:5000/auth/userinfo', { headers: {Authorization: localStorage.getItem('jwtToken')}});
          const resFirst = await res.data.firstName;
          const resLast = await res.data.lastName;
          const resSchool = await res.data.schoolName;
          const resEmail = await res.data.email;


          this.setState(idk => ({
              firstName: idk.firstName = resFirst,
              lastName: idk.lastName = resLast,
              schoolName: idk.schoolName = resSchool,
              email: idk.email = resEmail
          }))
          /* axios.get('http://localhost:5000/auth/userinfo', { headers: {Authorization: localStorage.getItem('jwtToken')}})
            .then((response) => {
               const { firstName, lastName, schoolName, email } = response.data;
               //const { idk } = response.data; 
                //console.log("Object: " + idk);
                console.log(firstName); 
                return response; 
            }).catch(() => {
                alert("Error retrieving data!");  
            })*/

        }

    render() {
    return(
        <div id="Profileinformation">
           
            <form  id = "setupForm">
                <div id = "form1">
                    <span id="topofForm">Account Information</span>
                    <br/>
                    <br/>
                 <img class = "circular--square" src = {download} alt ="Download"/>    
                    <br/>
            
            
        <div id = "bottominfo">
            
            <lable id = 'FirstyNamey'>First Name: {this.state.firstName}</lable>
            <br />
            <lable id = 'lastName'>Last Name: {this.state.lastName}</lable>
            <br />
            <lable id = 'schoolName'>School: {this.state.schoolName}</lable>
            <br/>
            <lable id = 'tempEmail'>Email: {this.state.email}</lable>
        </div>
        <br/>

        <div id = "bottominfo2">
            
            <lable id = 'FirstyNamey'>Courses</lable>

            <br />

                <ul class = "my-list" title = "Courses"> 
                <li>COP 4600</li>
                    {populate()}
                </ul>
           

            <br />

        </div>

                
        <input id = "buttonstying" type = "button" value = "Update Email"/>
        <input id = "buttonstying" type = "button" value = "Update password"/>
        <input id = "buttonstying" type = "button" value = "Edit Classes"/>
        <input id = "buttonstying" type = "button" value = "back" onClick = {GoHome}/>
            </div>
                
                
            </form>
        </div>
    );
}
};
export default Profile;