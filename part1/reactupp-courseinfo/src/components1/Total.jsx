const Total = ({parts}) => {
    return (
        <h3>Total # of exercises: {parts.reduce((total, curr) => total + curr.exercises, 0)}</h3>
    )
}

export default Total