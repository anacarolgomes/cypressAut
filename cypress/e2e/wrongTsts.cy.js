import data from "../fixtures/data.json"

describe('JSON PlaceHolder Automation - Wrong Test Cases', () => {

    it('List Posts by Title', () => {
        cy.GetPostByTitle(data.urlBase, data.listPost.title)
      })
    
      it('List Posts by Body', () => {
        cy.GetPostByBody(data.urlBase, data.listPost.body)
      })
    
      it('List Posts by Comments', () => {
        cy.GetPostByComments(data.urlBase, data.listPost.comments)
      })
    
      it("Get doesnt exist post", () => {
        cy.GetDoesntExistPost(data.urlBase, data.listPost.doesntExistId)
      })
    
})