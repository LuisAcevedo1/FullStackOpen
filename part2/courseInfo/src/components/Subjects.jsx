export const Subjects = ({ course }) => {
    const sum = course.parts.reduce((all, part) => {
        return all + part.exercises
    }, 0)
    return (
        <>
            <h2>{course.name}</h2>
            {course.parts.map(part => (
                <p key={part.id}>{part.name}{part.exercises}</p>
            ))}
            <h3>total of {sum} exercises</h3>
        </>
    )
}