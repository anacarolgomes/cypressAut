import data from "../fixtures/data.json"
//import getSteps from "../steps/getSteps.js"

describe('JSON PlaceHolder Automation', () => {

  it('Create a Post', () => {
    cy.createAPost(data.urlBase, data.createPost.title, data.createPost.bodyText)
    
  })

  it('Create a Empty Post', () => {
    cy.createAEmptyPost(data.urlBase)
  })

  it('List All Posts', () => {
    cy.ListAllPosts(data.urlBase)
  })


  it('List Post by Id', () => {
    cy.GetPostById(data.urlBase, data.listPost.PostId)
  })


  it('List Comments by PostId', () => {
    cy.GetCommentsByPostId(data.urlBase, data.listPost.PostId)
  })

  
  it('Update a Post', () => {
    cy.updateAPost(data.urlBase, data.updatePost.id, data.updatePost.title, data.updatePost.body)
  })


  it('Delete a Post', () => {
    cy.DeleteAPost(data.urlBase, data.deletePost.id)
  })

  it('Post Update with Patch', () => {
    cy.PatchingAPost(data.urlBase, data.patchPost.id)
  })


})

