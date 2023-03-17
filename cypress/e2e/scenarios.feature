Feature: JsonPlaceHolder Posts


Scenario: Create a Post successfully
    Given I have acess to JsonPlaceHolder API
    When I create a Post
    Then I see the post saved with the informations I gave

Scenario: Create a empty Post
    Given I have acess to JsonPlaceHolder API
    When I create a empty Post
    Then the API doesn't create a Post

Scenario: List All posts
    Given I have acess to JsonPlaceHolder API
    When I select to list all post
    Then I see all posts listeds

Scenario: Get post by Id
    Given I have acess to JsonPlaceHolder API
    When I select to list a post by id
    Then I see the details of the post

Scenario: Get Post by title
    Given I have acess to JsonPlaceHolder API
    When I select to list a post by title
    Then I see the details of the post

Scenario: Get Post by comments
    Given I have acess to JsonPlaceHolder API
    When I select to list a post by comments
    Then I see the details of the post

Scenario: Get Post by body
    Given I have acess to JsonPlaceHolder API
    When I select to list a post by body
    Then I see the details of the post
    
Scenario: Get doesn't exist post
    Given I have acess to JsonPlaceHolder API
    When I search for a doesn't exist post
    Then I see a message that says the post doesn't exists
    
Scenario: Update a Post
    Given I have acess a post
    When I update this post
    Then I see the post updated
    
Scenario: Delete a Post
    Given I have acess a post
    When I delet this post
    Then the post is removed from the list 
    
Scenario: Patching a Post
    Given I have acess a post
    When I delet this post
    Then the post is patched
    