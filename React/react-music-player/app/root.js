import React from 'react'
import Header from './components/header'
import Player from './page/player'
import MusicList from './page/musicList'
import { MUSIC_LIST } from './config/musiclist'
import { Router,IndexRoute,Link,Route,hashHistory } from 'react-router'

let App=React.createClass({
    getInitialState(){
        return{
            musicList:MUSIC_LIST,
            currentMusicItem:MUSIC_LIST[1]
        }
    },
    componentDidMount(){
        $("#player").jPlayer({
            ready:function(){
                $(this).jPlayer('setMedia',{
                    // mp3:'http://tingwa.oss-cn-shanghai.aliyuncs.com/2017-01/05/20170105123005-MzkzMTcz.mp3?OSSAccessKeyId=3b1nzo7roav1h50rcp0a35nw&Expires=1511506386&Signature=WmcqXQ2v4wIMjuK1pOlvCwScLZ4%3D'
                    mp3:'http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3'
                }).jPlayer('play');
            },
            supplied:'mp3',
            vmode:'window'
        });
    },
    componentWillUnmount(){
    },
    progressChangeHandler(progress){
    },
    render(){
        return (
            <div>
                <Header />
                {React.cloneElement(this.props.children,this.state)}
                {/*{this.props.children}*/}
                {/*<Player currentMusicItem={this.state.currentMusicItem}>*/}

                {/*</Player>*/}
                {/*<MusicList currentMusicItem={this.state.currentMusicItem} musicList={this.state.musicList}>*/}

                {/*</MusicList>*/}
            </div>
        )
    }
});

let Root=React.createClass({
    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Player}></IndexRoute>
                    <Route path="/list" component={MusicList}></Route>
                </Route>
            </Router>
        )
    }
});

export default Root;