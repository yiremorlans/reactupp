import StatisticsLine from "./StatisticsLine"

const Statistics = (props) => {
    return (

        props.total === 0 ? <p>No feedback given</p> :
        <>
            <table>
                <tbody>
                    <StatisticsLine text="Good" value={props.good} />
                    <StatisticsLine text="Neutral" value={props.neutral} />
                    <StatisticsLine text="Bad" value={props.bad} />
                    <StatisticsLine text="All" value={props.total} />
                    <StatisticsLine text="Average" value={props.average} />
                    <StatisticsLine text="Positive" value={props.goodPercentage} />
                </tbody>
            </table>
        </>
    )   
}

export default Statistics