import PropTypes from 'prop-types'

export const FirstApp = ( {title, subtitle} ) => {
   
    return (
        <>
            <h1 data-testid="test-title">{ title }</h1>
            <p>{ subtitle }</p>
            <p>{ subtitle }</p>
        </>
    )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}


FirstApp.defaultProps = {
    name: 'Fran Encabo',
    subtitle: 'Soy un subtítulo',
    title : 'Hola, soy Shaka',

}
