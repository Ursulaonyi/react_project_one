function Lebel(props){
    return(
        <div>
            <h2>SideBar</h2>
            <label>{props.lblName}</label>
        </div>
    )

}

function MyButton(props){
    return(
        <button>{props.name}</button>
    )
}

function SideBar(){
    return(
        <>
            <Lebel lblName="Join Us Now" />
            < MyButton name="click Now" />
        </>
    )
}

export default SideBar;