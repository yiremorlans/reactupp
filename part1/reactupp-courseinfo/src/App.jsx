import Header from "./components/Header"
import Content from "./components/Content"
import Total from "./components/Total"

import './index.css'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header className='courseHeader' course={course.name} />
      <Content courseMaterial={course.parts}/>
      <Total exercises={course.parts}/>
    </div>
  )
}

export default App
