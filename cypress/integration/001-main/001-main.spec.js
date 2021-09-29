describe('메인 페이지 접속하기', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('메인 페이지를 확인합니다.', () => {
    cy.get('.sample').should('have.text', 'Hello Sample TodoThis is Custom Font');
  });
});
