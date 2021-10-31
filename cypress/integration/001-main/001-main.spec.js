describe('메인 페이지 접속하기', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('메인 페이지를 확인합니다.', () => {
    cy.get('.sample').should('have.text', 'Hello Sample TodoThis is Custom Font');
  });

  it('새로운 Todo를 추가합니다.', () => {
    cy.get('#newTodo').type('test todo를 추가합니다.');
    cy.contains('Add Button').click();

    cy.contains('test todo를 추가합니다.').should('exist');
  });
});
