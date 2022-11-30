const styles = {
    container: {
        columnCount: 3,
        width: "1200px"
    },
    card: {
        width: '300px',
        margin: '40px 10px 0 10px',
        boxShadow: '0px 3px 5px rgb(0,0,0,0.2)',
        display: 'inline-block',
        backgroundColor: '#eaeaea',
        borderRadius: '5px',
        cursor: 'pointer'
    },
    container__img: {
        
    },
    img: {
        width: "100%",
        borderRadius: '5px 5px 0px 0px'
    },
    info: {
        margin: '10px 15px'
    }
}

const Images = ({ data, open }) => {
    console.log(data)
    return (
    <div style={styles.container}>
            {data.map(image => 
                <div style={styles.card} key={image.id}>
                    <div style={styles.container__img} onClick={() => open(image.links.html)}>
                        <img style={styles.img} src={image.urls.thumb} alt={image.alt_description} />
                    </div>
                    <div>
                        <p style={styles.info}>
                            {[image.description, image.alt_description].join(' - ')}
                        </p>
                    </div>
                </div> 
            )}
        </div>
    )
}

export default Images