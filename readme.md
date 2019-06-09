# Jordan Does Dead Link Checking

Searches a specified domain name for any dead links that exist.

## Getting Started

Clone the repository and run `npm i`. 

Update the domain that you want to search in the `src/index.ts` file.

After that, you just need to run `npm start` and it'll scrape the categories and email the results to you.

### Prerequisites

Tested on Node v12.4.0 and NPM v6.9.0. Node v12 is (mostly) required for the threads package used here.

### Installing

After installing [NodeJS](https://nodejs.org/en/) you should be able to just run the following in the terminal.

```
npm i
```


## Built With

* [Request-Promise](https://github.com/request/request-promise) - Promise based HTTP request library
* [Cheerio](https://github.com/cheeriojs/cheerio) - Simple JQuery API based html parser
* [NodeJS](https://nodejs.org/en/) - NodeJS

## Authors

* **Jordan Hansen** - *Initial work* - [Jordan Hansen](https://github.com/aarmora)


## License

This project is licensed under the ISC License
