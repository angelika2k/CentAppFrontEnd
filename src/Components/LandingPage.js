import { Button, Grid } from '@material-ui/core'
import React, { useCallback, useContext } from 'react'
import firebaseApp from '../fire'
// import AuthProvider from '../Auth'
import firebase from 'firebase'
import { CreditCard } from '@material-ui/icons';
import { AuthContext } from '../Auth';
export default function LandingPage() {

    const {user, setUser} = useContext(AuthContext)

    var provider = new firebase.auth.GoogleAuthProvider();


  

    const click = () => {

        try {
            firebaseApp.auth().signInWithPopup(provider).then((result) => {
                //  alert('done')

                var user = result.user;
                setUser()
            })
        } catch (error) {
            console.log(error)

        }
    }
    const display=()=>{
        alert(user.displayName)
    }
    return (
        <Grid container xs={12} sm={12} spacing={3}>
            <Grid item alignContent="center" justify="center">
                {/* <form onSubmit={click}>
                    <div id='recaptcha'></div>
                    <input type='text' />
                    <button type='submit'>Click</button>
                </form> */}
                <button onClick={display}>button</button>
                <Button variant="contained" color="secondary" onClick={click}>Log in With Google</Button>
            </Grid>
        </Grid>
    )
}
