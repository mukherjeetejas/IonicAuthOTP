import React, { useState } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonInput, 
  IonButton,
  IonLabel, 
} from '@ionic/react';

import firebase from "./firebase"

const App = () => {
    const [number, setNumber] = useState(null)
    const [pholder, setPholder] = useState("Enter Number")
    const [auth, setAuth] = useState("unsuccessful auth")
    
    const numberState = (e) => {
      setNumber(e.target.value)
    }

    const sendOTP = () => {
      let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
      let country = "+91";
      let mobile = country.concat(number.toString());
      firebase.auth().signInWithPhoneNumber(mobile, recaptcha).then(function(e){
        let code = prompt("enter the otp","");
        if (code==null) return;
        e.confirm(code).then(function(result){
          console.log(result.user, 'user')
          setAuth("successful auth done")
        }).catch((error)=>{
          console.log(error)
        })
      })
    }

    const handleClick = () => {
      if (number != null && number.toString().length === 10) {
        sendOTP();
      }
      else {
        setPholder("Inaccurate num please reenter")
        setNumber(null)
      }

    }
    return (
      <IonApp>
        <IonContent>
        <div id="recaptcha"></div>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Tejas K Mukherjee</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonItem>
            <IonInput type="number" value={number} placeholder={pholder} onIonChange = {numberState}></IonInput>
          </IonItem>
          <IonButton expand="block" onClick={handleClick}>Get OTP</IonButton>
          <IonItem>
            <IonLabel>{auth}</IonLabel>
          </IonItem>
        </IonContent>
      </IonApp>
    );
  }

export default App;