import React, { useState } from "react";
import Card from './Card';

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses(){
        if(category === "All"){
        let allCourses = [];
        Object.values(courses).forEach(array => {
            array.forEach(coursesData => {
                allCourses.push(coursesData);
            })
        })
        return allCourses;
    }
    else{
        //mai serf specific categiry ka data array krunga
        return courses[category];
    }
    }
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
          getCourses().map( (course) => (
          <Card kay={course.id} 
          course = {course}
           likedCourses={likedCourses} 
           setLikedCourses={setLikedCourses}/>
          ))
        }
        </div>
    )
}


export default Cards;