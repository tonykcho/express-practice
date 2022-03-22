import { describe, it, before } from "mocha";
import { equal } from "assert";
import chai from "chai";
import chaiHttp from "chai-http";

import { ExpressModule } from "../src/express";

chai.use(chaiHttp);

describe("Express Integration Test", function () {
    var requester: ChaiHttp.Agent;
    before(function () {
        requester = chai.request(ExpressModule.app);
    });

    it("Get / should return empty array", function (done) {
        requester.get("/")
            .end(function (err, res) {
                equal(res.status, 200);
                equal((res.body as number[]).length, 0);
                done();
            });
    });
});

describe('TypeScript Test', function () {
    it("Three should be three", function () {
        equal(3, 3);
    });
});