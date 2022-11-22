import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection  (
        orderBy: createdAt_DESC
      )  {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            category {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        category {
          name
          slug
          categoryIcon {
            url
          }
        }
        content {
          raw
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
  return result.post;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(where: {featuredPost: true}){
        title
        createdAt
        slug
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        category {
          name
          slug
          categoryIcon {
            url
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query);
  // return result.postsConnection.edges;
  return result.posts;
}


export const getSimilarPosts = async (category) => {
  const query = gql`
    query GetPostDetails($category: String!) {
      posts(
        where: { category.slug: $category }
      ) {
        title
        createdAt
        slug
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        category {
          name
          slug
          categoryIcon {
            url
          }
        }
      }
    }
  `
  const result = await request(graphqlAPI, query, { category });
  // return result.postsConnection.edges;
  return result.posts;
}

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
        categoryIcon {
          url
        }
      }
    }
  `
  const result = await request(graphqlAPI, query);
  return result.categories;
}

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {category: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            category {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};