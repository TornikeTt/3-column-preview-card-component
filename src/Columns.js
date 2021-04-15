let Columns = (props) => { 

    let cols = props.equipment.map( (items , index) => {   
        return (
            <div key={index} className="Columns__boxs" style={{backgroundColor: items.background__color}}>
                
                <div className="top_images">
                    <img src={items.car} alt="cars images into columns" title={items.Header_text}/>
                </div>

                <div className="middle_texts">
                    <h1>{items.Header_text}</h1>
                    <p>{items.text}</p>
                </div>

                <div className="buttons">
                    <button id={"but"+index}>Learn More</button>
                </div>
            </div>
        )
    })

    return <div className="container">{cols}</div>
}


export default Columns
