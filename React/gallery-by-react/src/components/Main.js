require('normalize.css/normalize.css');
require('styles/App.scss');
import React from 'react';
import ReactDOM from 'react-dom';

// 获取图片相关的数据
let imageDatas = require('../data/imageDatas.json');
// var imageDatas = require('json-loader!../data/imageDatas.json');

// 利用自执行函数， 将图片名信息转成图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr) {
  for(let i=0;i<imageDatasArr.length;i++){
    let singleImageData = imageDatasArr[i];
    singleImageData.imageURL = require('../images/' + singleImageData.fileName);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);
// let yeomanImage = require('../images/yeoman.png');
class ImgFigure extends React.Component {
  render() {
    return (
      <figure className="img-figure">
        <img src={this.props.data.imageURL} alt={this.props.data.title}/>
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
        </figcaption>
      </figure>
    );
  }
}
class AppComponent extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.Constant={
  //     centerPos:{
  //       left:0,
  //       right:0
  //     },
  //     hPosRange:{  //水平方向的取值范围
  //       leftSecx:[0,0],
  //       rightSecx:[0,0],
  //       y:[0,0]
  //     },
  //     vPosRange:{  //垂直方向的取值范围
  //       x:[0,0],
  //       topY:[0,0]
  //     }
  //   }
  //   //组件加载以后，为每张图片计算其位置的范围
  //   componentDidMount(){
  //     //首先拿到舞台的大小
  //     let stageDom = ReactDOM.findDOMNode(this.refs.stage),
  //          stageW = stageDom.scrollWidth,
  //          stageH = stageDom.scrollHeight,
  //          halfStageW = Math.ceil(stageW/2),
  //          halfStageH = Math.ceil(stageH/2);
  //     // 拿到一个imageFigure的大小
  //     let imgFigureDom = ReactDOM.findDOMNode(this.refs.imgFigure0),
  //         imgW = imgFigureDOM.scrollWidth,
  //         imgH = imgFigureDOM.scrollHeight,
  //         halfImgW = Math.ceil(imgW / 2),
  //         halfImgH = Math.ceil(imgH / 2);
  //   }
  //
  // }

  render() {
    let controllerUnits=[],imgFigures=[];
    imageDatas.forEach((value, index) =>{
      imgFigures.push(<ImgFigure data={value} key={index} ref={'imgFigures'+index}/>);
    });
    return (
      <section className="stage" ref="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
      </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
