const fs = require('fs');
const coursesData = JSON.parse(fs.readFileSync(`${__dirname}/../sample-data.json`));

function getCourse (args) { 
    var id = args.id;
    return coursesData.filter(course => {
        return course.id == id;
    })[0];
}
function getCourses (args) {
    if (args.topic) {
        var topic = args.topic;
        return coursesData.filter(course => course.topic.includes(topic));
    } else if (args.author) {
        var author = args.author;
        return coursesData.filter(course => course.author === author);
    } else {
        return coursesData;
    }
}

function updateCourseTopic({id, topic}) {
    coursesData.map(course => {
        if (course.id === id) {
            course.topic = topic;
            return course;
        }
    });
    return coursesData.filter(course => course.id === id) [0];
}   

module.exports = {
    getCourse,
    getCourses,
    updateCourseTopic
}