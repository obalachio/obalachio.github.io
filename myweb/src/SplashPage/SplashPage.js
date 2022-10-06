import React, {Component} from 'react';
import logo from "../img/logo02.svg"
import "./SplashPage.css"

function LoadingMessage() {
    return (
        <>
            <div class="fade-in-image">
                <img src={logo} alt=""/>
            </div>
            <div className="splash-screen">
                <div className="loading-dot">.</div>
            </div>
        </>
    );
  }

function SplashPage(WrapperComponent){
    return class extends Component {
        constructor(props) {
          super(props);
          this.state = {
            loading: true,
          };
        }
    
        async componentDidMount() {
            setTimeout(() => {
                this.setState({
                  loading: false,
                });
              }, 800)
        }
    
        render() {
          // while checking user session, show "loading" message
          if (this.state.loading) return LoadingMessage();
    
          // otherwise, show the desired route
          return <WrapperComponent/>;
        }
      };
}

export default SplashPage;