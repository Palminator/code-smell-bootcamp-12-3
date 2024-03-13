const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("GET / => array of items", () => {
    return request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(String),
              name: expect.any(String),
              inStock: expect.any(Boolean),
            }),
          ])
        );
      });
  });
  it("POST / => Convert", () => {
    return request(app)
      .post("/total")
      .send({
        values: "1,2",
      })
      .expect("Content-Type", /json/)
      .then((response) => {
        expect(response.body).toEqual(225);
      });
  });

  it("GET / => items by ID", () => {
    return request(app)
      .get("/1")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            id: expect.any(String),
            name: expect.any(String),
            inStock: expect.any(Boolean),
          })
        );
      });
  });

  it("GET /id => 404 if item not found", () => {
    return request(app).get("/10000000000").expect(404);
  });

  it("POST / => create NEW item", () => {
    return request(app)
      .post("/")
      .send({
        name: "Xbox Series X",
      })
      .expect("Content-Type", /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            name: "Xbox Series X",

            inStock: false,
          })
        );
      });
  });

  it("POST / => item name correct data type check", () => {
    return request(app).post("/").send({ name: 123456789 }).expect(400);
  });

  it("POST /total => item value correct data type check", () => {
    return request(app).post("/total").send({ values: 123 }).expect(200);
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
