describe('User RESTful', () => {

  it('Should return a list of users if GET /users"', () => {

    cy.request('/users').its('body').should('deep.eq', []);

  });

  describe('Create a User', () => {

    it('Should return StatusCode: 200, body: { id: 0  } to POST /user', () => {

      const request = cy.request({
        method: 'POST',
        url: '/user',
        followRedirect: false,
        headers: {
          'accept': 'application/json'
        }
      });

      request.then(response => {

        expect(response.status).to.eq(200);
        return response;

      });

      request.its('body').should('deep.eq', { id: 0 });

    });

  });

});
