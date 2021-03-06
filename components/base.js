import React from 'react';
import './base.css';

export class Component extends React.PureComponent {
  componentWillMount() {}

  componentDidMount() {}

  getTimeLeft(trendInfo) {
    if (trendInfo) {
      let endLeft = this.getLastTime((trendInfo.startTime + trendInfo.timeSpan) - Date.now() / 1000);
      let buyLeft = this.getLastTime((trendInfo.startTime + trendInfo.timeSpan - trendInfo.stopBefore) - Date.now() / 1000);
      return {endLeft, buyLeft};
    } 
    
    return {endLeft: { h: '0', m: '0', s: '0' }, buyLeft: { h: '0', m: '0', s: '0' }};
  }

  getLastTime(leftTimeSecond) {
    if (leftTimeSecond < 0) {
      return { h: '0', m: '0', s: '0' }
    }

    let h = Math.floor(leftTimeSecond / 60 / 60);
    let m = Math.floor(leftTimeSecond / 60 % 60);
    let s = Math.floor(leftTimeSecond % 60);
    return { h, m, s }
  }
}
