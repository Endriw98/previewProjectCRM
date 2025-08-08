import '../css/ActionsStyle.css'
import { useState } from 'react'
function Campaign (){
    const [visible, setVisible] = useState('none');
    const [stats, setStats] = useState('Selecione o status do cliente');
    const [statsMargin, setStatsMargin] = useState('0px');
    var visualize = false;
    return(
        <div id="campaign" style={{width:'60%'}}>
            <h6>Campaign</h6>
            <div id='campaign-profile'>
                <div id='pf'>
                    <div id='img-profile'></div>
                    <h6>Avelino Teixeira dos Santos Filho</h6>
                </div>
                
                <div id='dataPerson'>
                    <div className='data'><h5>Position:</h5><h5 id='pos'>01</h5></div>
                    <div className='data'><h5>Age:</h5><h5 id='age'>25</h5></div>
                    <div className='data'><h5>Date of birth:</h5><h5 id='date_birth'>10/05/1999</h5></div>
                    <div className='data'><h5>Document:</h5><h5 id='document'>222.222.222-22</h5></div>
                    <div id='call'>
                        <div className='data'>
                            <div className='numbers'><h5>(00)00000-0000</h5><button>Call</button></div>
                            <div className='numbers'><h5>(00)00000-0000</h5><button>Call</button></div>
                            <div className='numbers'><h5>(00)00000-0000</h5><button>Call</button></div>
                            <div className='numbers'><h5>(00)00000-0000</h5><button>Call</button></div>
                        </div>
                    </div>
                    <div id='stats' className='data' style={{height:'auto'}}>
                        <button onClick={()=>{
                                if(visible == 'none'){setVisible('block');}
                                else if(visible == 'block'){setVisible('none');}
                            }} 
                            style={{
                                fontSize:'12px', 
                                fontFamilly:"'Arial Narrow Bold',sans-serif", 
                                fontWeight:'900', 
                                color:'white', 
                                width:'75px', 
                                height:'25px'
                            }}>Select ▼</button>
                            <h3 style={{
                                color:'#05153B', 
                                fontFamilly:"'Arial Narrow Bold',sans-serif", 
                                fontWeight:'900', 
                                fontSize:'15px', 
                                marginTop:statsMargin, 
                                textTransform:'uppercase'
                            }}>Status: {stats}</h3>
                        <div 
                            id='optionStats' 
                            style={{
                                backgroundColor:'#C0CCE2',
                                display:visible, 
                                position:'absolute', 
                                borderRadius:'10px',
                                width:'260px', 
                                padding:'10px',
                                boxShadow:'0px 0px 10px black', 
                                border:'2px solid #05153B'
                            }}>

                            <button 
                                className='stats' 
                                onClick={()=>{
                                    setVisible('none'),
                                    visualize = false, 
                                    setStats('Contactado'),
                                    setStatsMargin('5px')}}>Contactado</button>

                            <button 
                                className='stats' 
                                onClick={()=>{
                                    setVisible('none'),
                                    visualize = false, 
                                    setStats('Serviço Contratado'),
                                    setStatsMargin('5px')}}>Serviço Contratado</button>

                            <button 
                                className='stats' 
                                onClick={()=>{
                                    setVisible('none'),
                                    visualize = false, 
                                    setStats('Sem Resposta'),
                                    setStatsMargin('5px')}}>Sem Resposta</button>

                            <button 
                                className='stats' 
                                onClick={()=>{
                                    setVisible('none'),
                                    visualize = false, 
                                    setStats('Negociando'),
                                    setStatsMargin('5px')}}>Negociando</button>

                        </div>
                        <textarea 
                            placeholder='Digite a descrição do contato' 
                            style={{
                                width:'280px',
                                height:'100px',
                                backgroundColor:'#C0CCE2', 
                                border:'2px solid #05153B', 
                                color:'#05153B', 
                                fontFamilly:"'Arial Narrow Bold',sans-serif",
                                fontWeight:'900', 
                                resize:'none', 
                                marginTop:'5px'}}
                            />
                        <input 
                            type='date' 
                            style={{
                                backgroundColor:'#C0CCE2',
                                border:'2px solid #05153B', 
                                color:'#05153B', 
                                fontFamilly:"'Arial Narrow Bold',sans-serif", 
                                fontWeight:'900', marginTop:'5px',height:'24px'
                            }} 
                        />
                        <button style={{
                            width:'75px', 
                            height:'25px', 
                            backgroundColor:'#05153B', 
                            color:'white', 
                            fontFamilly:"'Arial Narrow Bold',sans-serif", 
                            fontWeight:'900', 
                            fontSize:'12px', 
                            marginTop:'5px', 
                            float:'right',
                            marginRight:'10px'
                        }}>Save</button>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}
export default Campaign