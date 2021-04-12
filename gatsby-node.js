/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query MyQuery {
      dataJson {
        projects {
          description
          id
          image {
            src {
              publicURL
            }
          }
          smallImage {
            publicURL
          }
          skills
          modalURL
          slug
          title
        }
      }
    }
  `);

  // console.log(result.data.dataJson.projects);

  const projectsArray = result.data.dataJson.projects;

  projectsArray.map((project) => {
    createPage({
      path: `/projects/${project.slug}`,
      component: path.resolve(`./src/templates/project-page.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: project.slug,
        id: project.id,
        description: project.description,
        image: project.image.src.publicURL,
        modalURL: project.modalURL,
        skills: project.skills,
        title: project.title,
        smallImage: project.smallImage,
      },
    });
  });

  // console.log(projectsArray);
};
