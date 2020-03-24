const sinon = require('sinon');

const { Debt, User } = require('../../database/models');
const DebtsService = require('../../app/services/DebtsService');
const { USER, DEBT, DEBT_ARRAY } = require('../dummy');

describe('Debts Service', () => {
  beforeEach(() => {
    sinon.restore();
  });

  describe('Debt create errors', () => {
    it('Should return user does not exist', async () => {
      sinon.stub(User, 'findByPk').resolves(null);
      const response = await DebtsService.store(DEBT);

      expect(response.error).toBeTruthy();
      expect(response.error.status).toBe(404);
      expect(response.error.message).toBe('User does not exist!');
    });

    it('Should return Debt does not exist - Show method', async () => {
      sinon.stub(Debt, 'findByPk').resolves(null);
      const response = await DebtsService.show(5);

      expect(response.error).toBeTruthy();
      expect(response.error.status).toBe(404);
      expect(response.error.message).toBe('Debt does not exist!');
    });

    it('Should return Debt does not exist - Destroy method', async () => {
      sinon.stub(Debt, 'findByPk').resolves(null);
      const response = await DebtsService.destroy(5);

      expect(response.error).toBeTruthy();
      expect(response.error.status).toBe(404);
      expect(response.error.message).toBe('Debt does not exist!');
    });

    it('Should return Debt does not exist - Update method', async () => {
      sinon.stub(Debt, 'findByPk').resolves(null);
      const response = await DebtsService.update(DEBT);

      expect(response.error).toBeTruthy();
      expect(response.error.status).toBe(404);
      expect(response.error.message).toBe('Debt does not exist!');
    });
  });

  describe('Debts index', () => {
    it('Should return an empty array', async () => {
      sinon.stub(Debt, 'findAll').resolves([]);

      const response = await DebtsService.index();

      expect(response.error).toBeFalsy();
      expect(response).toBeTruthy();
      expect(response).toEqual([]);
    });

    it('Should return an array of Debts', async () => {
      sinon.stub(Debt, 'findAll').resolves(DEBT_ARRAY);

      const response = await DebtsService.index();

      expect(response.error).toBeFalsy();
      expect(response).toBeTruthy();
      expect(response).toEqual(DEBT_ARRAY);
    });
  });

  describe('Debts store', () => {
    it('Should return a new Debt created', async () => {
      sinon.stub(User, 'findByPk').resolves(USER);
      sinon.stub(Debt, 'create').resolves(DEBT);

      const response = await DebtsService.store(DEBT);

      expect(response.error).toBeFalsy();
      expect(response).toEqual(DEBT);
    });
  });

  describe('Debts show', () => {
    it('Should return a Debt by ID', async () => {
      sinon.stub(Debt, 'findByPk').resolves(DEBT);

      const response = await DebtsService.show(5);

      expect(response.error).toBeFalsy();
      expect(response).toEqual(DEBT);
    });
  });

  describe('Debts destroy', () => {
    it('Should delete a Debt by ID', async () => {
      sinon.stub(Debt, 'findByPk').resolves(DEBT);
      sinon.stub(DEBT, 'destroy').resolves(null);

      const response = await DebtsService.destroy(5);

      expect(response.error).toBeFalsy();
      expect(response).toEqual(DEBT);
    });
  });

  describe('Debts update', () => {
    it('Should update a Debt', async () => {
      sinon.stub(Debt, 'findByPk').resolves(DEBT);
      sinon.stub(DEBT, 'update').resolves(DEBT);

      const response = await DebtsService.update(DEBT);

      expect(response.error).toBeFalsy();
      expect(response).toEqual(DEBT);
    });
  });
});
