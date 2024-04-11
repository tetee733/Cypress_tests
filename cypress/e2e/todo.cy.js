
describe('agregar tareas', () => {
    it('agregar una tarea a la lista', () => {
        cy.visit('https://todomvc.com/examples/react/dist/')
        cy.get(' .new-todo').type('tarea 1{enter}')
        cy.get('[data-testid="todo-item-label"]').contains("tarea 1")
        cy.get('[data-testid="todo-item-toggle"]').click()
        cy.get(' .new-todo').type('tarea 2{enter}')
        cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click()
        cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click()
        cy.get(' .new-todo').type('tarea 3{enter}')
        cy.get(':nth-child(3) > .view > [data-testid="todo-item-label"]').dblclick()
        cy.focused().clear().type("tarea 4{enter}")
        cy.get(' .new-todo').type('tarea 5{enter}')

        cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
        cy.get(':nth-child(2) > a').click()
        cy.get(':nth-child(1) > a').click()
        
    })
})