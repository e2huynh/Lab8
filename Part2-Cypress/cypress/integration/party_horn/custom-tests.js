describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75').then(($el) => {
      expect($el).to.have.value(75);
    });
    cy.get('#volume-number').invoke('val', 33).trigger('input');
  });

  it('Audio changes when slider input changes', () => {
    cy.get('#volume-number').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Image and audio changes when selecting air horn', () => {
    cy.get('#radio-air-horn').click();
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/air-horn.svg');
    });
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/air-horn.mp3');
    });
  });

  it('Image and audio changes when selecting car horn', () => {
    cy.get('#radio-car-horn').click();
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/car.svg');
    });
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/car-horn.mp3');
    });
  });

  it('Image and audio changes when selecting party horn', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });

  it('Volume image changes when you change volume', () => {
    //test input number
    cy.get('#volume-number').clear().type('100');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });

    cy.get('#volume-number').clear().type('66');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });

    cy.get('#volume-number').clear().type('33');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });

    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });

    //test volume slider
    cy.get('#volume-slider').invoke('val', 100).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });

    cy.get('#volume-slider').invoke('val', 66).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });

    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });

    cy.get('#volume-slider').invoke('val', 0).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
  });

  it('Honk button is disabled when textbox is empty or invalid input', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').should('be.disabled');

    cy.get('#volume-number').clear().type('I love pizza!');
    cy.get('#honk-btn').should('be.disabled');
  });

  it('Error shown when typing a number > 100 or < 0', () => {
    cy.get('#volume-number').clear().type(101);
    cy.get('#honk-btn').click();
    cy.get('#volume-number:invalid').then(($el) => {
      expect($el[0].validationMessage).to.eq('Value must be less than or equal to 100.');
    });

    cy.get('#volume-number').clear().type(-1);
    cy.get('#honk-btn').click();
    cy.get('#volume-number:invalid').then(($el) => {
      expect($el[0].validationMessage).to.eq('Value must be greater than or equal to 0.');
    });
  });
});
