import { Subjects } from "./Subjects"
export const Courses = ({ courses }) => {


    return (
        <div>
            {
                courses.map((course) => (
                    <Subjects key={course.id} course={course} />
                ))
            }
        </div>
    )
}

