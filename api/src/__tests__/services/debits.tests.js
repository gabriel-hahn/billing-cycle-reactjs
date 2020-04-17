const sinon = require('sinon');

const { Debit, Credit, User } = require('../../database/models');
const DebitsService = require('../../app/services/DebitsService');
const {
  USER,
  CREDIT,
  DEBIT,
  DEBIT_ARRAY,
} = require('../dummy');

describe('Debits Service', () => {
  beforeEach(() => {
    sinon.restore();
  });

  describe('Debit create errors', () => {
    it('Should return user does not exist', async () => {
      sinon.stub(User, 'findByPk').resolves(null);
      const response = await DebitsService.store(DEBIT);

      expect(response.error).toBeTruthy();
      expect(response.error.status).toBe(404);
      expect(response.error.message).toBe('User does not exist!');
    });

    it('Should return Debit does not exist - Show method', async () => {
      sinon.stub(Debit, 'findByPk').resolves(null);
      const response = await DebitsService.show(5);

      expect(response.error).toBeTruthy();
      expect(response.error.status).toBe(404);
      expect(response.error.message).toBe('Debit does not exist!');
    });

    it('Should return Debit does not exist - Destroy method', async () => {
      sinon.stub(Debit, 'findByPk').resolves(null);
      const response = await DebitsService.destroy(5);

      expect(response.error).toBeTruthy();
      expect(response.error.status).toBe(404);
      expect(response.error.message).toBe('Debit does not exist!');
    });
  });

  describe('Debits index', () => {
    it('Should return an empty array', async () => {
      sinon.stub(Debit, 'findAll').resolves([]);

      const response = await DebitsService.index();

      expect(response.error).toBeFalsy();
      expect(response).toBeTruthy();
      expect(response).toEqual([]);
    });

    it('Should return an array of Debits', async () => {
      sinon.stub(Debit, 'findAll').resolves(DEBIT_ARRAY);

      const response = await DebitsService.index();

      expect(response.error).toBeFalsy();
      expect(response).toBeTruthy();
      expect(response).toEqual(DEBIT_ARRAY);
    });
  });

  describe('Debits store', () => {
    it('Should return a new Debit created', async () => {
      sinon.stub(User, 'findByPk').resolves(USER);
      sinon.stub(Debit, 'create').resolves(DEBIT);

      const response = await DebitsService.store(DEBIT);

      expect(response.error).toBeFalsy();
      expect(response).toEqual(DEBIT);
    });
  });

  describe('Debits show', () => {
    it('Should return a Debit by ID', async () => {
      sinon.stub(Debit, 'findByPk').resolves(DEBIT);

      const response = await DebitsService.show(5);

      expect(response.error).toBeFalsy();
      expect(response).toEqual(DEBIT);
    });
  });

  describe('Debits destroy', () => {
    it('Should delete a Debit by ID', async () => {
      sinon.stub(Debit, 'findByPk').resolves(DEBIT);
      sinon.stub(DEBIT, 'destroy').resolves(null);

      const response = await DebitsService.destroy(5);

      expect(response.error).toBeFalsy();
      expect(response).toEqual(DEBIT);
    });
  });

  describe('Debits update', () => {
    it('Should update a Debit', async () => {
      sinon.stub(Debit, 'findByPk').resolves(DEBIT);
      sinon.stub(DEBIT, 'update').resolves(DEBIT);

      const response = await DebitsService.update(DEBIT);

      expect(response.error).toBeFalsy();
      expect(response).toEqual(DEBIT);
    });

    it('Should return new debit by credit updated', async () => {
      sinon.stub(Debit, 'findByPk').resolves(null);
      sinon.stub(Debit, 'create').resolves(DEBIT);
      sinon.stub(Credit, 'destroy').resolves(CREDIT);
      const response = await DebitsService.update(DEBIT);

      expect(response.error).toBeFalsy();
      expect(response).toEqual(DEBIT);
    });
  });
});
