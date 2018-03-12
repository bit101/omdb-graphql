const {
  GraphQLObjectType,
  GraphQLString,
} = require("graphql");

const MovieRating = new GraphQLObjectType({
  name: "MovieRating",
  fields: {
    source: {
      type: GraphQLString,
      resolve: (rating) => rating.Source,
    },
    value: {
      type: GraphQLString,
      resolve: (rating) => rating.Value,
    },
  },
});

module.exports = MovieRating;
