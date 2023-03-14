const Total = ({exercises}) => {
    return (
        <h3>Total # of exercises: {exercises.map(part => part.exercises).reduce((a, b) => a + b, 0)}</h3>
    )
}

export default Total