
Cypress.Commands.add('createAPost', (urlBase, title, bodyText) => {
    cy.request({
        method: "POST",
        url: `${urlBase}/posts`,
        body: {
          title : title,
          body : bodyText
        }
      })
})

Cypress.Commands.add('createAEmptyPost', (urlBase) => {
  cy.request({
      method: "POST",
      url: `${urlBase}/posts`,
      body: {
        title : "",
        body : ""
      }
    })
})

Cypress.Commands.add('ListAllPosts', (urlBase) => {
  cy.request({
      method: "GET",
      url: `${urlBase}/posts`
    })
})

Cypress.Commands.add('GetCommentsByPostId', (urlBase, postId) => {
  cy.request({
      method: "GET",
      url: `${urlBase}/comments?postid=${postId}`
    })
})

Cypress.Commands.add('GetPostById', (urlBase, id) => {
  cy.request({
      method: "GET",
      url: `${urlBase}/posts/${id}`
    })
})


Cypress.Commands.add('GetDoesntExistPost', (urlBase, doesntExistId) => {
  cy.request({
      method: "GET",
      url: `${urlBase}/posts/${doesntExistId}`
    })
})

Cypress.Commands.add('GetPostByTitle', (urlBase, title) => {
  cy.request({
      method: "GET",
      url: `${urlBase}/posts/${title}`
    })
})

Cypress.Commands.add('GetPostByBody', (urlBase, id) => {
  cy.request({
      method: "GET",
      url: `${urlBase}/posts/${id}`
    })
})

Cypress.Commands.add('GetPostByComments', (urlBase, id) => {
  cy.request({
      method: "GET",
      url: `${urlBase}/posts/${id}`
    })
})


Cypress.Commands.add('updateAPost', (urlBase, id, title, body) => {
  cy.request({
      method: "PUT",
      url: `${urlBase}/posts/${id}`,
      body: {
          title: title,
          body: body
      }
    })
})

Cypress.Commands.add('DeleteAPost', (urlBase, id) => {
  cy.request({
      method: "DELETE",
      url: `${urlBase}/posts/${id}`
    })
})


Cypress.Commands.add('PatchingAPost', (urlBase, id, title, body) => {
  cy.request({
      method: "PATCH",
      url: `${urlBase}/posts/${id}`,
      body: {
          title: title,
          body: body
      }
    })
})
