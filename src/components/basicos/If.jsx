
export default props => {
    if(props.numero % 2 === 0) return 'Número é par';
    return 'Número é impar';
}