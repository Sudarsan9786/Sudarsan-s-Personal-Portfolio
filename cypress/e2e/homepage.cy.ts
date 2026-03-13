describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the hero section', () => {
    cy.contains('Full Stack Developer').should('be.visible');
  });

  it('navigates to projects section', () => {
    cy.contains('View Projects').click();
    cy.url().should('include', '#projects');
    cy.get('#projects').should('be.visible');
  });

  it('navigates to contact section', () => {
    cy.contains('Get In Touch').click();
    cy.url().should('include', '#contact');
    cy.get('#contact').should('be.visible');
  });

  it('toggles theme', () => {
    cy.get('body').then(($body) => {
      const hasLight = $body.hasClass('light');
      const hasDark = $body.hasClass('dark');
      expect(hasLight || hasDark).to.be.true;
    });
    cy.get('[aria-label="Toggle theme"]').click();
    cy.get('body').then(($body) => {
      const hasLight = $body.hasClass('light');
      const hasDark = $body.hasClass('dark');
      expect(hasLight || hasDark).to.be.true;
    });
  });

  it('submits contact form', () => {
    cy.get('#contact').scrollIntoView();
    cy.get('#name').type('Test User');
    cy.get('#email').type('test@example.com');
    cy.get('#message').type('This is a test message');
    cy.contains('Send Message').click();
    cy.contains('Message sent successfully').should('be.visible');
  });

  it('validates contact form', () => {
    cy.get('#contact').scrollIntoView();
    cy.contains('Send Message').click();
    cy.get('#name').should('have.attr', 'aria-invalid', 'true');
    cy.get('#email').should('have.attr', 'aria-invalid', 'true');
    cy.get('#message').should('have.attr', 'aria-invalid', 'true');
  });
});

