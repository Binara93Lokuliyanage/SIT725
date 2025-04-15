import { expect } from "chai";
import request from "request";

const baseUrl = "http://localhost:3000";

describe("Calculator API Tests", function () {

  it("should return correct sum", function (done) {
    request.get(`${baseUrl}/api/add?num1=10&num2=5`, (err, res, body) => {
      const result = JSON.parse(body);
      expect(res.statusCode).to.equal(200);
      expect(result.result).to.equal(15);
      done();
    });
  });

  it("should return correct subtraction", function (done) {
    request.get(`${baseUrl}/api/substract?num1=15&num2=5`, (err, res, body) => {
      const result = JSON.parse(body);
      expect(res.statusCode).to.equal(200);
      expect(result.result).to.equal(10);
      done();
    });
  });

  it("should return correct multiplication", function (done) {
    request.get(`${baseUrl}/api/multiply?num1=3&num2=4`, (err, res, body) => {
      const result = JSON.parse(body);
      expect(res.statusCode).to.equal(200);
      expect(result.result).to.equal(12);
      done();
    });
  });

  it("should return correct division", function (done) {
    request.get(`${baseUrl}/api/divide?num1=20&num2=4`, (err, res, body) => {
      const result = JSON.parse(body);
      expect(res.statusCode).to.equal(200);
      expect(result.result).to.equal(5);
      done();
    });
  });

  it("should return 400 for invalid input (add)", function (done) {
    request.get(`${baseUrl}/api/add?num1=abc&num2=5`, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      done();
    });
  });

  it("should return 400 for missing input (divide)", function (done) {
    request.get(`${baseUrl}/api/divide?num2=5`, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      done();
    });
  });

});
