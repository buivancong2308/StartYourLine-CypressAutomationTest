describe('Responsive Menu Display Test', () => {
    const sizes = [
      { name: 'desktop', width: 1280, height: 800 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'mobile', width: 375, height: 812 }
    ];
  
    const menuItems = {
      desktop: ['Home', 'About', 'Process', 'Pricing', 'FAQ', 'Blog', 'Contact Us'],
      tablet: ['Home', 'About', 'Process', 'Pricing', 'FAQ', 'Blog', 'Contact Us'], // Adjust if different
      mobile: ['Menu'] // Adjust if the menu collapses into a hamburger menu
    };
  
    sizes.forEach((size) => {
      context(`Testing on ${size.name}`, () => {
        beforeEach(() => {
          cy.viewport(size.width, size.height);
          cy.visit('https://startyourline.com/');
        });
  
        it(`should display the correct menu items on ${size.name}`, () => {
          if (size.name === 'mobile') {
            cy.get('button.hamburger-menu').should('be.visible').click(); // Adjust selector
          }
  
          menuItems[size.name].forEach((item) => {
            cy.contains('nav', item).should('be.visible');
          });
        });
      });
    });
  });
  