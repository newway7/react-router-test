import React, {Component} from 'react';
import './App.css';

class Query extends Component {
	constructor(props) {
		super(props)
		console.log(this.props)
		this.state = {
			query: this.props.location.search
		}
		var a=this.props.history.push
		setTimeout(function(){a('/state')},4000)
	}

	render() {
		return (
			<div>
				<div>
					<h3>search传值以及权限管理</h3>
					<div>获得得值</div>
					<div>{this.state.query}</div>
				</div>
			</div>
		);
	}
}

export default Query;
