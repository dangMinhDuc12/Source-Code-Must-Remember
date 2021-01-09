import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import Result from './components/Result';
import SizeSetting from './components/SizeSetting';


// Props style trong React phải được truyền dưới dạng 1 object nên phải dùng {{margin: 10px}}
// Chuyển dữ liệu từ cha sang con thì dùng props thông thường rồi truyền giá trị vào , còn chuyển từ con sang cha thì dùng 1 cái props là 1 function
// Dùng lifecycle để check update state vì setState là bất đồng bộ, (bất đồng bộ có thể xử lý bằng callback hoặc promise), ở React chỉ dùng callback
    // componentDidUpdate(prevProps, prevState) {
    //     console.log(prevState.fontSize); In ra giá trị trước khi update
    //     console.log(this.state.fontSize) In ra giá trị đã update
    // }

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            fontSize: 20
        }
    }

    receiveColor = (color) => {
        this.setState({
            color: color
        })
    }

    changeFontSize = (value) => {
        if(this.state.fontSize < 30 && this.state.fontSize > 10) {
            this.setState({
                fontSize: this.state.fontSize + value
            })
        }
        
    }


    reset = () => {
        this.setState({
            color: 'red',
            fontSize: 20
        })
    }
    
    
    
    
    

    render() {
        return (
            <div>
                <div className='container mt-50'>
                    <div className='row'>
                        <ColorPicker color={this.state.color}  receiveColor = { this.receiveColor }/>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <SizeSetting  fontSize={ this.state.fontSize } changeFontSize = { this.changeFontSize }/>
                            <Reset reset = { this.reset }/>
                        </div>
                        <Result color = { this.state.color } fontSize={ this.state.fontSize }  />
                    </div>
                </div>
            </div>
        )
    }
}



