import { useField } from "formik"

const styles = {
    input: {
        border: '1px solid #eaeaea',
        padding: '.4rem',
        borderRadius: '5px'
    }
}

const Input = ({ ...props}) => {
    const [field, meta] = useField(props)
    return (
        <div>
            <input {...field} {...props} style={styles.input} />
            {meta.touched && meta.error ?
                <> {meta.error}</> : null}
        </div>
    )
}

export default Input