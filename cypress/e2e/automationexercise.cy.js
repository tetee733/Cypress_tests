describe("Pruebas en automationexercise", () => {
 it('Registrar usuario', () => {
 cy.visit('https://automationexercise.com/')
 cy.get('section[style="height: auto !important;"] > .container > .row')
 cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
 cy.get('[data-qa="signup-name"]').type('Manuelgonzalez')
 cy.get('[data-qa="signup-email"]').type('pericodelospalotess@gmail.com')
 cy.get('[data-qa="signup-button"]').click()
 cy.get('[data-qa="password"]').type('raul123')
 cy.get('[data-qa="days"]').select('5')
 cy.get('[data-qa="months"]').select('August')
 cy.get('[data-qa="years"]').select('1995')
 cy.get('#id_gender1').click()
 cy.get('[data-qa="first_name"]').type('benalmadena')
 cy.get('[data-qa="last_name"]').type('Málaga')
 cy.get('[data-qa="country"]').select('United States')
 cy.get('[data-qa="state"]').type('Washington')
 cy.get('[data-qa="city"]').type('Washington')
 cy.get('[data-qa="zipcode"]').type('1234')
 cy.get('[data-qa="mobile_number"]').type('123456789')
 cy.get('[data-qa="address"]').type('dirección de prueba')
 cy.get('[data-qa="create-account"]').click()
 cy.get('[data-qa="continue-button"]').click()
 cy.get(':nth-child(10) > a').should('be.visible')
 cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
 cy.get('b').should('be.visible')
 cy.get('[data-qa="continue-button"]').click()
 })

 it('Login con usuario y contraseña correcto', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.login-form > h2').should('be.visible')
    cy.get('[data-qa="login-email"]').type('emaildeprueba555@gmail.com')
    cy.get('[data-qa="login-password"]').type('1234')
    cy.get('[data-qa="login-button"]').click()
    cy.get(':nth-child(10) > a').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
    cy.get('.shop-menu > .nav > :nth-child(5) > a').should('be.visible')

})
it('Login con usuario y contraseña incorrecto', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.login-form > h2').should('be.visible')
    cy.get('[data-qa="login-email"]').type('emaildeprueba45347357@gmail.com')
    cy.get('[data-qa="login-password"]').type('1234')
    cy.get('[data-qa="login-button"]').click()
    cy.get('.login-form > form > p').should('be.visible')
})
it('Hacer Log out', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.login-form > h2').should('be.visible')
    cy.get('[data-qa="login-email"]').type('emaildeprueba24@gmail.com')
    cy.get('[data-qa="login-password"]').type('1234')
    cy.get('[data-qa="login-button"]').click()
    cy.get(':nth-child(10) > a').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('body').should('be.visible')

})
it('Registrar un usuario con un email existente', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.signup-form > h2').should('be.visible')
    cy.get('[data-qa="signup-name"]').type('manuel')
    cy.get('[data-qa="signup-email"]').type('maildeprueba14@gmail.com')
    cy.get('[data-qa="signup-button"]').click()
    cy.get('.signup-form > form > p').should('be.visible')
})
it('Contactanos', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
    cy.get(':nth-child(8) > a > .fa').click()
    cy.get('div.contact-form > .title').should('be.visible')
    cy.get('[data-qa="name"]').type('manuel')
    cy.get('[data-qa="email"]').type('tete.manolo95@gmail.com')
    cy.get('[data-qa="subject"]').type('test')
    cy.get('[data-qa="message"]').type('this is a test')
    cy.get(':nth-child(6) > .form-control').click()
    cy.get('[data-qa="submit-button"]').click()
    cy.get('.status').should('be.visible')
    cy.get('span').click()
    cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
})
it('verificar la página de test cases', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
    cy.get(':nth-child(5) > a > .fa').click()
    cy.get('body').should('be.visible')
})
it('verificar todos los productos y la página de detalles de los productos', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
    cy.get('a > .material-icons').click()
    cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
    cy.get('.features_items').should('be.visible')
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
    cy.get('.product-information > h2').should('be.visible')
    cy.get('.product-information > :nth-child(8)').should('be.visible')
})
it('Buscador de productos', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
    cy.get('a > .material-icons').click()
    cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
    cy.get('#search_product').type('Blue Top')
    cy.get('#submit_search > .fa').click()
    cy.get('.features_items > .col-sm-4').should('be.visible')
    cy.get('body').should('be.visible')
})
it('Verificar la suscripción en la página principal', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
    cy.get('.single-widget > h2').should('be.visible')
    cy.get('#susbscribe_email').type('tete.manolo95@gmail.com')
    cy.get('#subscribe > .fa').click()
    cy.get('.alert-success').should('be.visible')
})
it('Verificar la suscripción en el carrito', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
    cy.get('.shop-menu > .nav > :nth-child(3) > a').should('be.visible')
    cy.get('#susbscribe_email').type('tete.manolo95@gmail.com')
    cy.get('#subscribe > .fa').click()
    cy.get('.alert-success').should('be.visible')
})
it('Añadir productos al carrito', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('.modal-footer > .btn').click()
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('u').click()
    cy.get('#product-1').should('be.visible')
    cy.get('#product-2').should('be.visible')
    cy.get('#product-1 > .cart_quantity > .disabled').should('be.visible')
    cy.get('#product-2 > .cart_quantity > .disabled').should('be.visible')
    cy.get('#product-1 > .cart_price > p').should('be.visible')
    cy.get('#product-2 > .cart_price > p').should('be.visible')
})
it('Verificar la cantidad de productos en el carrito', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
    cy.get(':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a > .fa').click()
    cy.get('.product-information').should('be.visible')
    cy.get('#quantity').clear()
    cy.get('#quantity').type('4')
    cy.get(':nth-child(5) > .btn').click()
    cy.get('u').click()
    cy.get('#cart_info').should('be.visible')
})
it('Realizar el pedido: registrándose mientras se realiza el pago', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('.modal-footer > .btn').click()
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('.modal-footer > .btn').click()
    cy.get(':nth-child(3) > a > .fa').click()
    cy.get('#cart_items > :nth-child(1)').should('be.visible')
    cy.get('.col-sm-6 > .btn').click()
    cy.get('.modal-body > :nth-child(2) > a > u').click()
    cy.get('[data-qa="signup-name"]').type('usuario23')
    cy.get('[data-qa="signup-email"]').type('emailprueba2@gmail.com')
    cy.get('[data-qa="signup-button"]').click()
    cy.get('#id_gender1').click()
    cy.get('[data-qa="password"]').type('1234')
    cy.get('[data-qa="first_name"]').type('prueba')
    cy.get('[data-qa="last_name"]').type('prueba')
    cy.get('[data-qa="address"]').type('prueba')
    cy.get('[data-qa="country"]').select('United States')
    cy.get('[data-qa="state"]').type('prueba')
    cy.get('[data-qa="city"]').type('prueba')
    cy.get('[data-qa="zipcode"]').type('prueba')
    cy.get('[data-qa="mobile_number"]').type('prueba')
    cy.get('[data-qa="create-account"]').click()
    cy.get('b').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
    cy.get(':nth-child(10) > a').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
    cy.get('.col-sm-6 > .btn').click()
    cy.get('#address_delivery').should('be.visible')
    cy.get('.table').should('be.visible')
    cy.get('.form-control').type('Esto es una prueba')
    cy.get(':nth-child(7) > .btn').click()
    cy.get('[data-qa="name-on-card"]').type('prueba')
    cy.get('[data-qa="card-number"]').type('123456789')
    cy.get('[data-qa="cvc"]').type('123')
    cy.get('[data-qa="expiry-month"]').type('10')
    cy.get('[data-qa="expiry-year"]').type('2100')
    cy.get('[data-qa="pay-button"]').click()
    cy.get('[data-qa="order-placed"]').should('be.visible')
    cy.get(':nth-child(5) > a').click()
    cy.get('.col-sm-9').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
})
it('Realizar el pedido: registrándose antes de realizar el pago', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="signup-name"]').type('prueba4')
    cy.get('[data-qa="signup-email"]').type('maildeprueba13@gmail.com')
    cy.get('[data-qa="signup-button"]').click()
    cy.get('#id_gender1').click()
    cy.get('[data-qa="password"]').type('1234')
    cy.get('[data-qa="first_name"]').type('prueba')
    cy.get('[data-qa="last_name"]').type('prueba')
    cy.get('[data-qa="address"]').type('prueba')
    cy.get('[data-qa="country"]').select('United States')
    cy.get('[data-qa="state"]').type('prueba')
    cy.get('[data-qa="city"]').type('prueba')
    cy.get('[data-qa="zipcode"]').type('prueba')
    cy.get('[data-qa="mobile_number"]').type('prueba')
    cy.get('[data-qa="create-account"]').click()
    cy.get('.col-sm-9').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
    cy.get(':nth-child(10) > a').should('be.visible')
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('.modal-footer > .btn').click()
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('u').click()
    cy.get('#cart_items > :nth-child(1)').should('be.visible')
    cy.get('.col-sm-6 > .btn').click()
    cy.get('#address_delivery').should('be.visible')
    cy.get('#cart_info').should('be.visible')
    cy.get('.form-control').type('Esto es una prueba')
    cy.get(':nth-child(7) > .btn').click()
    cy.get('[data-qa="name-on-card"]').type('prueba')
    cy.get('[data-qa="card-number"]').type('123456789')
    cy.get('[data-qa="cvc"]').type('123')
    cy.get('[data-qa="expiry-month"]').type('10')
    cy.get('[data-qa="expiry-year"]').type('2100')
    cy.get('[data-qa="pay-button"]').click()
    cy.get('.col-sm-9').should('be.visible')
    cy.get(':nth-child(5) > a').click()
    cy.get('.col-sm-9').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
})
it('Realizar el pedido: Iniciar sesión antes de realizar el pago', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="login-email"]').type('emaildeprueba177@gmail.com')
    cy.get('[data-qa="login-password"]').type('1234')
    cy.get('[data-qa="login-button"]').click()
    cy.get(':nth-child(10) > a').should('be.visible')
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('.modal-footer > .btn').click()
    cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('u').click()
    cy.get('#cart_info').should('be.visible')
    cy.get('.col-sm-6 > .btn').click()
    cy.get('#address_delivery').should('be.visible')
    cy.get('#cart_info').should('be.visible')
    cy.get('.form-control').type('Esto es una prueba')
    cy.get(':nth-child(7) > .btn').click()
    cy.get('[data-qa="name-on-card"]').type('prueba')
    cy.get('[data-qa="card-number"]').type('123456789')
    cy.get('[data-qa="cvc"]').type('123')
    cy.get('[data-qa="expiry-month"]').type('10')
    cy.get('[data-qa="expiry-year"]').type('2100')
    cy.get('[data-qa="pay-button"]').click()
    cy.get('.col-sm-9').should('be.visible')
    cy.get(':nth-child(5) > a').click()
    cy.get('.col-sm-9').should('be.visible')
})
it('Quitar productos del carrito', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('.modal-footer > .btn').click()
    cy.get(':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('u').click()
    cy.get('#cart_items > :nth-child(1)').should('be.visible')
    cy.get('#product-1 > .cart_delete > .cart_quantity_delete > .fa').click()
    cy.get('#cart_items > :nth-child(1)').should('be.visible')
})
it('Ver los productos por categorías', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('.left-sidebar').should('be.visible')
    cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge').click()
    cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click()
    cy.get('.features_items').should('be.visible')
    cy.get(':nth-child(2) > .panel-heading > .panel-title > a > .badge > .fa').click()
    cy.get('#Men > .panel-body > ul > :nth-child(2) > a').click()
    cy.get('.features_items').should('be.visible')
})
it('Ver y comprar productos de marca', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    cy.get('.brands_products').should('be.visible')
    cy.get('.brands-name > .nav > :nth-child(2) > a').click()
    cy.get('.features_items').should('be.visible')
    cy.get('.brands-name > .nav > :nth-child(1) > a').click()
    cy.get('.features_items').should('be.visible')
})
it('Buscar productos y revisar el carrito después de hacer login', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    cy.get('.features_items').should('be.visible')
    cy.get('#search_product').type('Blue Top')
    cy.get('#submit_search > .fa').click()
    cy.get('.features_items').should('be.visible')
    cy.get('.productinfo > .btn').click()
    cy.get('u').click()
    cy.get('#cart_info').should('be.visible')
    cy.get(':nth-child(4) > a').click()
    cy.get('[data-qa="login-email"]').type('maildeprueba33@gmail.com')
    cy.get('[data-qa="login-password"]').type('1234')
    cy.get('[data-qa="login-button"]').click()
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
    cy.get('#cart_info').should('be.visible')
})
it('Añadir una reseña en un producto', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    cy.get('.features_items').should('be.visible')
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
    cy.get('.category-tab').should('be.visible')
    cy.get('#name').type('prueba')
    cy.get('#email').type('emaildeprueba33@gmail.com')
    cy.get('#review').type('Es muy útil')
    cy.get('#button-review').click()
    cy.get('.col-md-12 > .alert-success').should('be.visible')
})
it('Añadir una reseña en un producto', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('.recommended_items').should('be.visible')
    cy.get('.active > :nth-child(2) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('u').click()
    cy.get('#cart_info').should('be.visible')
})
it('Verificar los detalles de la dirección en la página de pago', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="signup-name"]').type('prueba4')
    cy.get('[data-qa="signup-email"]').type('maildeprueba95@gmail.com')
    cy.get('[data-qa="signup-button"]').click()
    cy.get('#id_gender1').click()
    cy.get('[data-qa="password"]').type('1234')
    cy.get('[data-qa="first_name"]').type('prueba')
    cy.get('[data-qa="last_name"]').type('prueba')
    cy.get('[data-qa="address"]').type('prueba')
    cy.get('[data-qa="country"]').select('United States')
    cy.get('[data-qa="state"]').type('prueba')
    cy.get('[data-qa="city"]').type('prueba')
    cy.get('[data-qa="zipcode"]').type('prueba')
    cy.get('[data-qa="mobile_number"]').type('prueba')
    cy.get('[data-qa="create-account"]').click()
    cy.get('.col-sm-9').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
    cy.get(':nth-child(10) > a').should('be.visible')
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('.modal-footer > .btn').click()
    cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('u').click()
    cy.get('#cart_info').should('be.visible')
    cy.get('.col-sm-6 > .btn').click()
    cy.get('#address_delivery').should('be.visible')
    cy.get('#address_invoice').should('be.visible')
    cy.get(':nth-child(5) > a').click()
    cy.get('.col-sm-9').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
})
it('Descargar la factura después de hacer la compra', () => {
    const path = require("path");
    cy.visit('https://automationexercise.com/')
    cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('.modal-footer > .btn').click()
    cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('u').click()
    cy.get('#cart_items > :nth-child(1)').should('be.visible')
    cy.get('.col-sm-6 > .btn').click()
    cy.get('.modal-body > :nth-child(2) > a > u').click()
    cy.get('[data-qa="signup-name"]').type('prueba4')
    cy.get('[data-qa="signup-email"]').type('maildeprueba95@gmail.com')
    cy.get('[data-qa="signup-button"]').click()
    cy.get('#id_gender1').click()
    cy.get('[data-qa="password"]').type('1234')
    cy.get('[data-qa="first_name"]').type('prueba')
    cy.get('[data-qa="last_name"]').type('prueba')
    cy.get('[data-qa="address"]').type('prueba')
    cy.get('[data-qa="country"]').select('United States')
    cy.get('[data-qa="state"]').type('prueba')
    cy.get('[data-qa="city"]').type('prueba')
    cy.get('[data-qa="zipcode"]').type('prueba')
    cy.get('[data-qa="mobile_number"]').type('prueba')
    cy.get('[data-qa="create-account"]').click()
    cy.get('.col-sm-9').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
    cy.get(':nth-child(10) > a').should('be.visible')
    cy.get(':nth-child(3) > a > .fa').click()
    cy.get('.col-sm-6 > .btn').click()
    cy.get('#address_delivery').should('be.visible')
    cy.get('#address_invoice').should('be.visible')
    cy.get('#cart_info').should('be.visible')
    cy.get('.form-control').type('Esto es una prueba')
    cy.get(':nth-child(7) > .btn').click()
    cy.get('[data-qa="name-on-card"]').type('prueba')
    cy.get('[data-qa="card-number"]').type('123456789')
    cy.get('[data-qa="cvc"]').type('123')
    cy.get('[data-qa="expiry-month"]').type('10')
    cy.get('[data-qa="expiry-year"]').type('2100')
    cy.get('[data-qa="pay-button"]').click()
    cy.get('.col-sm-9').should('be.visible')
    cy.get('.col-sm-9 > .btn-default').click()
    const downloadsFolder = Cypress.config("downloadsFolder");
   cy.readFile(path.join(downloadsFolder, "invoice.txt")).should("exist");
   cy.get('[data-qa="continue-button"]').click()
   cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
   cy.get('.col-sm-9').should('be.visible')
   cy.get('[data-qa="continue-button"]').click()
})
it('Verifique el desplazamiento hacia arriba usando el botón Flecha y la funcionalidad de desplazamiento hacia abajo', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
    cy.scrollTo('bottom')
    cy.get('.single-widget').should('be.visible')
    cy.get('#scrollUp').invoke('show').click()
})
it('Verifique la funcionalidad de desplazamiento hacia arriba sin el botón Flecha y la funcionalidad de desplazamiento hacia abajo', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('section[style="height: auto !important;"] > .container > .row').should('be.visible')
    cy.scrollTo('bottom')
    cy.get('.single-widget').should('be.visible')
    cy.scrollTo('top')
    cy.get('#slider-carousel > .carousel-inner > .active > :nth-child(1)').should('be.visible')
})
})