import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY= "AIzaSyAqwf1ru7cv_elfwxpETcr0FaBzs0xoCI8";



class App extends Component{

	constructor(props){
		super(props);

		this.state = { videos: [] };

		YTSearch({key:API_KEY, trem:'bilbi'}, (videos) => {
			console.log("videos: ", videos);
			this.setState({ videos });
		});

	}

	render() {
		return(
				<div>
					<SearchBar />
					<VideoList videos={this.state.videos}/>
				</div>
			);
	}
}
ReactDOM.render(<App />, document.querySelector('.container'));