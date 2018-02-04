require('zone.js');
import 'reflect-metadata';
import { Component } from "@angular/core";
import { inject } from "@angular/core/testing";
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var assert = chai.assert;
var expect = chai.expect;

describe('App Component Test', () => {
    it('Promise Array By Irfan', (done) => {
        expect(true).to.be.true;
        console.log("calling for tsting");
        chai.request('https://jsonplaceholder.typicode.com/posts/1')
            .get('/')
            .end((err, res) => {
                console.log("calling for tsting11111" + JSON.stringify(res));
                // res.should.have.status(200);
                // res.body.should.be.a('array');
                // res.body.length.should.be.eql(0);
                done();
            });
    });
});