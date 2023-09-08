// .test. is the convention for jest to use with testing (test: "jest" in package.json)

const supertest = require('supertest');
const app = require('./http_server');
const request = supertest(app); // allows us to make calls within our server files

it('Hello World!', async done => {
    expect(1).toBe(1);
    done();
})

var server = app.listen(3000, function(){ // brought back listener from original document in server variable in this document
    console.log('Running on port 3000!');
});

afterAll(done => {
    server.close();
    done();
});

// npm test in command line