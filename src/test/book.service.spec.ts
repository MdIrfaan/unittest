// import { getTestBed, TestBed } from '@angular/core/testing';
// import { HttpModule } from "@angular/http";

// import { expect } from 'chai';
// import  * as sinon  from 'sinon';
// import { AppService } from "../app/app.service";


// describe(`Book Service`, () => {
//     let server: any;

//     beforeEach(() => {
//         server = sinon.fakeServer.create();
//         server.autoRespond = true;
//         server.respondWith("GET",
//             "https://jsonplaceholder.typicode.com/posts/1",
//             [202,
//                 {"Content-Type": "application/json"},
//                 '[' +
//                 '{"id" :"1", "title" : "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"},' +
//                 ']'
//             ]
//         );

//         TestBed.configureTestingModule({
//             imports: [HttpModule],
//             providers: [AppService],
//         }).compileComponents();
//     });

//     afterEach(() => {
//         server.restore();
//         getTestBed().resetTestingModule();
//     });

//     it("test http", () => {
//         console.log("calling http test");
//     });

//     // it('should return a list of Book', (done) => {

//     //     let bookService: AppService = getTestBed().get(AppService);
//     //     console.log("trackkkkkkkkk11");
//     //     bookService.getBookList().then((books) => {
//     //             //expect(books.length).equal(3);
//     //             console.log("trackkkkkkkkk");
//     //             //let authors: string[] = books.map((book) => book.id);
//     //             //expect(authors).deep.equal(['Suzanne Collins', 'Jane Austen', 'C.S. Lewis']);

//     //             done()
//     //         }
//     //     );
//     // });
// });