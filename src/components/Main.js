
const styles = {
    main: {
        display: "flex",
        margin: 'auto',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }
}

const Main = ({children}) => {
    return (
        <div style={styles.main}>
            {children}
        </div>
    )
}

export default Main