import '../css/ReportSalesMore.css';

function ReportSalesMore(){
    return (
        <div 
            id="reportsales" 
            style={{
                backgroundColor: '#98AAFE',
                widht:'100%', 
                height:'100%', 
                marginLeft:'25px', 
                marginRight:'5px',
                marginBottom:'50px'
            }}>
            <h1>Report of Sales</h1>
            <div>
                <table style={{width:'100%', marginRight:'25px'}}>
                    <tr style={{height:'50px'}}>
                        <th 
                            style={{
                                backgroundColor:'rgba(255,255,255,0)', 
                                borderTop:'0px', 
                                borderLeft:'0px'
                            }}>

                        </th>
                        <th>Data</th>                        
                        <th>Diário</th>
                        <th>Mensal</th>
                        <th>Anual</th>
                    </tr>
                    
                    <tr>
                        <th>Produtos mais vendidos</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <th>Produtos menos vendidos</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <th>Quantidade de vendas</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <th>Lucro</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <th>Gastos</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <th>Funcionário com mais vendas</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <th>Cliente que mais comprou</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <th>Quantidade de Reclamações</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <th>Número de Reclamações de Clientes</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <th>Número de Reclamações de Funcionários</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                </table>
            </div>
            <div id='rs_serch'>
                <h2>Pesquisar</h2>
                <input type='data' placeholder='Informe a Data'/>
                
            </div>
        </div>
    )
}
export default ReportSalesMore;