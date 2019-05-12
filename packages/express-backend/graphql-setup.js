const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
const fs = require('fs');

const schemaText = fs.readFileSync(`${__dirname}/schema/courses.graphql`).toString();

const schema = buildSchema(schemaText);

const {getCourses, getCourse, updateCourseTopic} =  require('./fetchers/course');

const root = {
    course: getCourse,
    courses: getCourses,
    updateCourseTopic: updateCourseTopic
};

module.exports = {
    express_graphql: express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
})
}