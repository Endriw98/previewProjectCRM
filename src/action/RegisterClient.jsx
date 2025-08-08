function RegisterClient(){
    return (
        <div 
            id="register_client"
            style={{
                width:'34%', 
                height:'600px'
            }}>
            <h1>Register Client</h1>
            <div id="forms">
                <forms id="reg-clients">
                    <h1>Register People</h1>
                    <input placeholder="Name" />
                    <input placeholder="Age"/>
                    <input placeholder="Documents"/>
                    <input placeholder="Date of Birth"/>
                    <button>Send</button>
                </forms>
                <forms id="reg-numbs">
                    <h1>Register Numbs</h1>
                    <input placeholder="Phone" />
                    <button>Send</button>
                </forms>
            </div>
        </div>
    )
}

export default RegisterClient;