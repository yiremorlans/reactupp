//react functional component
const Content =  ( {part1, part2, part3, exercises1, exercises2, exercises3}  ) => {
    return (
        <section>
        <p>{part1} {exercises1}</p>
        <p>{part2} {exercises2}</p>
        <p>{part3} {exercises3}</p>
        </section>
    )
}

export default Content