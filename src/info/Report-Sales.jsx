
function ReportSales(){
    
    return(
        <div id="report-sales" className="info" style={{backgroundColor:'#C0CCE2'}}>
            <h1>Monthly profit</h1>
            <div id="graf-1">
            </div>
            <div id="graf-2">
                <div><h5>100</h5></div>
                <div><h5>80</h5></div>
                <div><h5>60</h5></div>
                <div><h5>40</h5></div>
                <div><h5>20</h5></div>
                <div><h5>0</h5></div>
            </div>
            <div id="graf-3">
                <div className="grafics" id="jan"></div>
                <div className="grafics" id="fev"></div>
                <div className="grafics" id="mar"></div>
                <div className="grafics" id="abr"></div>
                <div className="grafics" id="mai"></div>
                <div className="grafics" id="jun"></div>
                <div className="grafics" id="jul"></div>
                <div className="grafics" id="ago"></div>
                <div className="grafics" id="set"></div>
                <div className="grafics" id="out"></div>
                <div className="grafics" id="nov"></div>
                <div className="grafics" id="dez"></div>

                <div id="graf-4">
                    <div><h4>Jan</h4></div>
                    <div><h4>Feb</h4></div>
                    <div><h4>Mar</h4></div>
                    <div><h4>Apr</h4></div>
                    <div><h4>May</h4></div>
                    <div><h4>Jun</h4></div>
                    <div><h4>Jul</h4></div>
                    <div><h4>Aug</h4></div>
                    <div><h4>Sep</h4></div>
                    <div><h4>Oct</h4></div>
                    <div><h4>Nov</h4></div>
                    <div><h4>Dec</h4></div>
                </div>
            </div>
            
        </div>
    )
}
export default ReportSales;