const app = require("../app");
const supertest = require("supertest");
const request = supertest(app)
const fs = require('fs')

// UNIT test begin

describe("SAMPLE unit test", function () {

    it('gets the test endpoint',  async () => {
        const spy = jest.spyOn(fs, 'mkdirSync');
        const response = await request.get('/test');
        expect(spy).not.toHaveBeenCalled();
        expect(response.status).toBe(200);
    })


});