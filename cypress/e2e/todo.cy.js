
describe('agregar tareas', () => {
    it('agregar una tarea a la lista', () => {
        cy.visit('https://todomvc.com/examples/react/dist/')
        cy.get(' .new-todo').type('tarea 1{enter}')
        cy.get('[data-testid="todo-item-label"]').contains("tarea 1")
    })
    it('marcar tarea como completada', () => {
        cy.visit('https://todomvc.com/examples/react/dist/')
        cy.get(' .new-todo').type('tarea 1{enter}')
        cy.get('[data-testid="todo-item-label"]').contains("tarea 1")
        cy.get('[data-testid="todo-item-toggle"]').click()
    })
        it('desmarcar tarea completada', () => {
            cy.visit('https://todomvc.com/examples/react/dist/')
            cy.get(' .new-todo').type('tarea 1{enter}')
            cy.get('[data-testid="todo-item-label"]').contains("tarea 1")
            cy.get('[data-testid="todo-item-toggle"]').click()
            cy.get('[data-testid="todo-item-toggle"]').click()
        })
            it('editar tarea', () => {
                cy.visit('https://todomvc.com/examples/react/dist/')
                cy.get(' .new-todo').type('tarea 1{enter}')
                cy.get('[data-testid="todo-item-label"]').contains("tarea 1")
                cy.get('[data-testid="todo-item-label"]').dblclick()
                cy.focused().clear().type("tarea 2{enter}")
            })
            it('borrar una tarea', () => {
                cy.visit('https://todomvc.com/examples/react/dist/')
                cy.get(' .new-todo').type('tarea 1{enter}')
                cy.get('[data-testid="todo-item-label"]').contains("tarea 1")
                cy.get('button').invoke('show')
                cy.get('[data-testid="todo-item-button"]').click()
            })

            it('filtrar tareas', () => {
                cy.visit('https://todomvc.com/examples/react/dist/')
                cy.get(' .new-todo').type('tarea 1{enter}')
                cy.get('[data-testid="todo-item-label"]').contains("tarea 1")
                cy.get('[data-testid="todo-item-toggle"]').click()
                cy.get(' .new-todo').type('tarea 2{enter}')
                cy.get(' .new-todo').type('tarea 3{enter}')
                cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
                cy.get(':nth-child(2) > a').click()
                cy.get(':nth-child(1) > a').click()


    })
})