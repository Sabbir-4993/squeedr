import React, { Component } from "react";
import "./chatcontent.scss";
import chat1 from '../../../assets/chat1.png'

export default class ChatItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.margin)
    return (
     
      <div
        style={{ animationDelay: `0.8s`  }}
        className={`chat__item ${this.props.user=="other" ? (this.props.margin=="true" ? 'other' : "") : (this.props.margin=="true" ? "margin" : "")}`
      
      }
      >
        <div className="chat__item__content">
          <div className="chat__msg"  style={{ display: this.props.msg!=null? 'block' :'none'}}>{this.props.msg}</div>
         
        
          <div className="chat__meta" style={{ display: this.props.msg!=null? 'flex' :'none'}}>
            <span>Yesterday at 4:20</span>
          
          </div>
          <div className={`chat-img ${this.props.user}`} style={{display: this.props.img!=null? 'flex' :'none'  }}>
             <img  src={this.props.img} className='chatimag112' alt=''/> 
              </div>
              
          <div className="chat__meta" style={{ display: this.props.msg!=null? 'none' :'block'}}>
            <span>Yesterday at 4:20</span>
          
          </div>
        </div>
        <img alt='' src={this.props.image} />
      </div>
     
    );
  }
}
// style={{width:'80px',height:'80px' ,border:'none',outline:'none'}}