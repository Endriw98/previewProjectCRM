import ReportSales from './Report-Sales';
import ScheduledClients from './Scheduled-Clients';
import StatsClients from './Stats-Client';
import StatsSales from './Stats-Sales';
import Campaign from '../action/Campaign';
import RegisterClient from '../action/RegisterClient';
import ReportSalesMore from '../action/ReportSalesMore';
import { useState, useEffect } from "react";
import '../css/Start.css';



function Start({name}){
  const [visible, setVisible] = useState ('none');
  const [dimensions, setDimensions] = useState ({width: window.innerWidth, height: window.innerHeight});
  const [action, setAction] = useState (<div><StatsClients/><ReportSales/><ScheduledClients/><StatsSales/></div>)
  
  useEffect(
    ()=>{
      const handleResize = ()=>{
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
      window.addEventListener('resize', handleResize);
      return ()=> window.removeEventListener('resize', handleResize);
    }, []);
    
  return(
    <div id="main-start"  style={{width: dimensions.width +'px'}} >
      
      <div id="nav-bar-left" style={{height:dimensions.height+'px'}}>
        <div id="icon-logo"></div>
        <h3>Enterprise</h3>

        
        <button className="icons" id="home" onClick={()=>{setAction(<div><StatsClients/><ReportSales/><ScheduledClients/><StatsSales/></div>)}}>Start</button>
        

        
        <button className="icons" id="campaign-icon" onClick={()=>{setAction(<div><Campaign /><RegisterClient/></div>)}}>Center of Clients</button>
        

        
        <button className="icons" id='report' onClick={
          ()=>{
            
            

            if(visible == 'none'){
              setVisible('block')
              }else if(visible == 'block'){
                setVisible( 'none')
              }
            
          }

        }>Report</button>

        <button className="icons" id="settings">Settings</button>
        
      </div>
      <div>
      <div id='category' style={{display:visible}}>
        <button className="icons" id="report-c"> Client Report</button>
        
        <button className="icons" id="report-s" onClick={()=>{setAction(<div><ReportSalesMore/></div>)}}>Sales Report</button>
        
      </div>
        <div id="nav-bar-top">
          <div className="op">
            <div id="mode-night"></div>
            <h5>Night</h5>
          </div>
          <div className="op">
            <div id="logo-notification"></div>
            <h5>Notification</h5>
          </div>
          <div id='search'>
            <input type="text" placeholder="search" />
            <button id='send-search'></button>  
          </div>
          
          <div className="op">
            <div id="logo-acessibility"></div>
            <h5>Acessibility</h5>
          </div>
          <div id="op-user" className="op">
            <div id="logo-user"></div>
            <h2>{name}</h2>
          </div>
        </div>

        <div id='info' style={{width:dimensions.width-80+'px'}}>
        {action}
        </div>
      </div>
      
    </div>
    
  )
}
export default Start
