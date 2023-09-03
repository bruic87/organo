import './time.css'

const Time = (props) => {
    return (

        <section className='time' style={{backgroundColor: props.corPrimaria}} >
            <h3 style={{borderColor: props.corSecundaria}} >{props.nome}</h3>
        </section>
    )
}

export default Time