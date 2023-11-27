import './Body.css'

function Body(props){
    return(
        <>
            <center>
                <div className="parent-block">
                    <div className='title-block'>{props.title}</div>
                    <div className='subtitle-block'> {props.subtitle} </div>
                    <div className='body-block'> {props.body} </div>
                    <center>
                        <div className='button-block'>{props.click} </div>
                    </center>
                </div>
            </center>
        </>
    );
}


export default Body;