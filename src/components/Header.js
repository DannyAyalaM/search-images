
const styles = {
    header: {
        height: '90px',
        boxShadow: '1px 2px 5px rgba(0,0,0,0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

const Header = ({children}) => {
    return (
        <div style={styles.header}>
            {children}
        </div>
    )
}

export default Header