import './Error.css'

const Error = () =>{

    return(
        <div className='error-message'>
        <h1 className="error-message-header">ERROR</h1>
        <p className='error-message-description'> Konnte Daten nicht vom Server empfangen</p>
        </div>
    )
}

export default Error;