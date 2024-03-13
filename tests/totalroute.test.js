const request = require("supertest");
const app = require("../app");

describe("POST /total", () => {
  it("POST /total => item value correct data type check", () => {
    return request(app).post("/total").send({ values: 123 }).expect(500);
  });

  it("POST /total => should return converted result", async () => {
    const response = await request(app).post("/total").send({ values: "2,2" });

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(300);
  });

  it("POST /total => should return 0 if input is empty string", async () => {
    const response = await request(app).post("/total").send({ values: "" });

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(0);
  });

  it("POST /total => should return 75 if input is 1,1001", async () => {
    const response = await request(app)
      .post("/total")
      .send({ values: "1, 1001" });

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(75);
  });
});
