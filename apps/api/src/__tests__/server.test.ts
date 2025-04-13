import supertest from "supertest";
import { describe, it, expect } from "@jest/globals";
import { type Express } from "express";
import { createServer } from "../server";
import { before } from "node:test";

let server: Express

before(async () => {
  server = await createServer()
})

describe("server", () => {
  it("status check returns 200", async () => {
    await supertest(server)
      .get("/status")
      .expect(200)
      .then((res) => {
        expect(res.body.ok).toBe(true);
      });
  });

  // it("message endpoint says hello", async () => {
  //   await supertest(server)
  //     .get("/message/jared")
  //     .expect(200)
  //     .then((res) => {
  //       expect(res.body.message).toBe("hello jared");
  //     });
  // });
});
