import supertest from "supertest";
import { describe, it, expect } from "@jest/globals";
import { type Express } from "express";
import { createServer } from "../server";

let server: Express

describe("server", () => {
  it("status check returns 200", async () => {
    server = await createServer()
    await supertest(server)
      .get("/status")
      .expect(200)
      .then((res) => {
        expect(res.body.ok).toBe(true);
      });
  });
});
