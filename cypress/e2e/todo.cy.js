describe('agregar tareas', () => {
    beforeEach(() => {

        cy.visit('https://todomvc.com/examples/react/dist/')
        cy.get(' .new-todo').type('tarea 1{enter}')
      
      })
    it('agregar una tarea a la lista', () => {
        cy.get('[data-testid="todo-item-label"]').contains("tarea 1")
        cy.contains('tarea 1').should('be.visible')
    })
    it('marcar tarea como completada', () => {
        cy.get('[data-testid="todo-item-label"]').contains("tarea 1")
        cy.get('[data-testid="todo-item-toggle"]').click()
        cy.get('[data-testid="todo-item-label"]').should('be.visible')
        
    })
        it('desmarcar tarea completada', () => {
            cy.get('[data-testid="todo-item-label"]').contains("tarea 1")
            cy.get('[data-testid="todo-item-toggle"]').click()
            cy.get('[data-testid="todo-item-toggle"]').click()
            cy.get('[data-testid="todo-item-label"]').should('be.visible')
        })
            it('editar tarea', () => {
                cy.get('[data-testid="todo-item-label"]').contains("tarea 1")
                cy.get('[data-testid="todo-item-label"]').dblclick()
                cy.focused().clear().type("tarea 2{enter}")
                cy.get('[data-testid="todo-item-label"]').should('be.visible')
            })
            it('borrar una tarea', () => {
                cy.get('[data-testid="todo-item-label"]').contains("tarea 1")
                cy.get('button').invoke('show')
                cy.get('[data-testid="todo-item-button"]').click()
                cy.get('[data-testid="todo-item-label"]').should('not.exist')
            })

            it('filtrar tareas', () => {
                cy.get('[data-testid="todo-item-label"]').contains("tarea 1")
                cy.get('[data-testid="todo-item-toggle"]').click()
                cy.get(' .new-todo').type('tarea 2{enter}')
                cy.get(' .new-todo').type('tarea 3{enter}')
                cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
                cy.get('[data-testid="todo-item-label"]').should('be.visible')
                cy.get(':nth-child(2) > a').click()
                cy.get(':nth-child(1) > .view > [data-testid="todo-item-label"]').should('be.visible')
                cy.get(':nth-child(2) > .view > [data-testid="todo-item-label"]').should('be.visible')
                cy.get(':nth-child(1) > a').click()
                cy.get('body').should('be.visible')

                
    })
})