import React , {Component} from 'react';
import LogInSignUpComponent from '../../component/login&signup';
import { BackHandler } from 'react-native';
import { NavigationService } from '../../services';
// import { NavigationService } from '../../services';



class AuthContainer extends Component{
    
    componentWillMount(){   
            BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount(){ 
            BackHandler.removeEventListener('hardwareBackPress',this.handleBackButton)
    }


    handleBackButton = () => {
        NavigationService.navigate("SplashScreenComponent");
        return true
    }
    

    render(){
        return(
            <LogInSignUpComponent />
        )
    }
}



export default AuthContainer



