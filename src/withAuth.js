// HOC.js
import React, {Component} from 'react';
import {Route} from 'react-router-dom'








const withAuth = Route => {

    return class WithAuth extends Component {

        state = {

            permission: false,

        }

        async componentWillMount() {

			var random=Math.random();
			if(random<0.5){
				this.setState({
					permission: true
				});
			}else{
				
			}



        }

        render() {

            if (this.state.permission) {

                return <Route {...this.props} />;

            } else {

                return (<div>您没有权限查看该页面，请联系管理员！</div>);

            }

        }

    };

}


export const WithAuth=withAuth(Route);