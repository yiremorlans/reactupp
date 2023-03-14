//react functional component
import Part from "./Part"

const Content = ({courseMaterial}) => {
    return (
        <section>
            <Part name={courseMaterial[0].name} exercises={courseMaterial[0].exercises}/>
            <Part name={courseMaterial[1].name} exercises={courseMaterial[1].exercises}/>
            <Part name={courseMaterial[2].name} exercises={courseMaterial[2].exercises}/>
        </section>
    )
}

export default Content