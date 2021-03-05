const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(
        `query {
            blogPosts: allStrapiBlogPost {
                edges {
                    node {
                        strapiId
                        slug
                    }
                }
            }
            projects: allStrapiProject {
                edges {
                    node {
                        strapiId
                        slug
                    }
                }
            }
        }
      `
    );

    if (result.errors) {
        throw result.errors;
    }

    // Create blog articles pages.
    const blogPosts = result.data.blogPosts.edges;
    const projects = result.data.projects.edges;

    const ArticleTemplate = require.resolve("./src/templates/article.js");
    const ProjectTemplate = require.resolve("./src/templates/project.js");

    blogPosts.forEach((post, index) => {
        createPage({
            path: `/blog/${post.node.slug}`,
            component: ArticleTemplate,
            context: {
                slug: post.node.slug,
            },
        });
    });

    projects.forEach((proj, index) => {
        createPage({
            path: `/project/${proj.node.slug}`,
            component: ProjectTemplate,
            context: {
                slug: proj.node.slug,
            },
        });
    });
};


// I DON'T THINK I NEED THIS BUT WAS IN STRAPI BLOG POST?

// module.exports.onCreateNode = async ({ node, actions, createNodeId }) => {
//     const crypto = require(`crypto`);

//     console.log(node.internal.type)
//     if (node.internal.type === "StrapiBlogPost") {


//       const newNode = {
//         id: createNodeId(`StrapiBlogContent-${node.id}`),
//         parent: node.id,
//         children: [],
//         internal: {
//           content: node.content || " ",
//           type: "StrapiBlogContent",
//           mediaType: "text/markdown",
//           contentDigest: crypto
//             .createHash("md5")
//             .update(node.content || " ")
//             .digest("hex"),
//         },
//       };
//       actions.createNode(newNode);
//       actions.createParentChildLink({
//         parent: node,
//         child: newNode,
//       });
//     }
//   };