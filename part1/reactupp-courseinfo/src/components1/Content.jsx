//react functional component
import Part from "./Part"

const Content = ({parts}) => {
    return (
        <section>
            {parts.map(part => <Part key={part.id} part={part} />)}
        </section>
    )

    
}

export default Content