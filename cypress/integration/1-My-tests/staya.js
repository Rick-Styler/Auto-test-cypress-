
describe('Тестирование staya', function () {
    
    it('Авторизация на сайте', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link'). click();
        cy.get('.auth-form > form > [type="email"]').type('exec14@list.ru');
        cy.get('.auth-form > form > [type="password"]').type('724202Gg#$');
        cy.get('.auth-form__submit').click ();
        cy.contains('Мои заказы');
        cy.end();
         })

   it('Авторизация c неверным паролем', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link'). click();
        cy.get('.auth-form > form > [type="email"]').type('exec14@list.ru');
        cy.get('.auth-form > form > [type="password"]').type('7242Gg#$');
        cy.get('.auth-form__submit').click ();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
        cy.end();
         })

    
})
