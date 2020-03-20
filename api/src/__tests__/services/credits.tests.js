const sinon = require('sinon');

const { Credit, User } = require('../../database/models');
const CreditsService = require('../../app/services/CreditsService');
const { USER, CREDIT, CREDIT_ARRAY } = require('../dummy');

describe('Credits Service', () => {
  beforeEach(() => {
    sinon.restore();
  });

  describe('Credit create errors', () => {
    it('Should return user does not exist', async () => {
      sinon.stub(User, 'findByPk').resolves(null);
      const response = await CreditsService.store(CREDIT);

      expect(response.error).toBeTruthy();
      expect(response.error.status).toBe(404);
      expect(response.error.message).toBe('User does not exist!');
    });

    it('Should return credit does not exist - Show method', async () => {
      sinon.stub(Credit, 'findByPk').resolves(null);
      const response = await CreditsService.show(5);

      expect(response.error).toBeTruthy();
      expect(response.error.status).toBe(404);
      expect(response.error.message).toBe('Credit does not exist!');
    });

    it('Should return credit does not exist - Destroy method', async () => {
      sinon.stub(Credit, 'findByPk').resolves(null);
      const response = await CreditsService.destroy(5);

      expect(response.error).toBeTruthy();
      expect(response.error.status).toBe(404);
      expect(response.error.message).toBe('Credit does not exist!');
    });

    it('Should return credit does not exist - Update method', async () => {
      sinon.stub(Credit, 'findByPk').resolves(null);
      const response = await CreditsService.update(CREDIT);

      expect(response.error).toBeTruthy();
      expect(response.error.status).toBe(404);
      expect(response.error.message).toBe('Credit does not exist!');
    });
  });

  describe('Credits index', () => {
    it('Should return an empty array', async () => {
      sinon.stub(Credit, 'findAll').resolves([]);

      const response = await CreditsService.index();

      expect(response.error).toBeFalsy();
      expect(response).toBeTruthy();
      expect(response).toEqual([]);
    });

    it('Should return an array of credits', async () => {
      sinon.stub(Credit, 'findAll').resolves(CREDIT_ARRAY);

      const response = await CreditsService.index();

      expect(response.error).toBeFalsy();
      expect(response).toBeTruthy();
      expect(response).toEqual(CREDIT_ARRAY);
    });
  });

  describe('Credits store', () => {
    it('Should return a new credit created', async () => {
      sinon.stub(User, 'findByPk').resolves(USER);
      sinon.stub(Credit, 'create').resolves(CREDIT);

      const response = await CreditsService.store(CREDIT);

      expect(response.error).toBeFalsy();
      expect(response).toEqual(CREDIT);
    });
  });

  describe('Credits show', () => {
    it('Should return a credit by ID', async () => {
      sinon.stub(Credit, 'findByPk').resolves(CREDIT);

      const response = await CreditsService.show(5);

      expect(response.error).toBeFalsy();
      expect(response).toEqual(CREDIT);
    });
  });

  describe('Credits destroy', () => {
    it('Should delete a credit by ID', async () => {
      sinon.stub(Credit, 'findByPk').resolves(CREDIT);
      sinon.stub(CREDIT, 'destroy').resolves(null);

      const response = await CreditsService.destroy(5);

      expect(response.error).toBeFalsy();
      expect(response).toEqual(CREDIT);
    });
  });

  describe('Credits update', () => {
    it('Should update a credit', async () => {
      sinon.stub(Credit, 'findByPk').resolves(CREDIT);
      sinon.stub(CREDIT, 'update').resolves(CREDIT);

      const response = await CreditsService.update(CREDIT);

      expect(response.error).toBeFalsy();
      expect(response).toEqual(CREDIT);
    });
  });
});
