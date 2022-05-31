describe('Тестирование портала веб камер "Красная поляна"', function () {

	it('Поиск веб камер курорта "Красная поляна"', function () {
		cy.visit('https://krasnayapolyanaresort.ru/webcams');
		cy.get('.header__search').click ();
		cy.get('.header__search > .js-search-input').click();
		cy.get('.header__search > .js-search-input').type ('Красная поляна');
		cy.get('.search__search-list > :nth-child(6)').click();
		cy.contains('Результаты поиска по запросу "Красная поляна"');
		cy.end();
		})
	})




