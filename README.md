# ConMoney

[![Build Status](https://travis-ci.org/gabriel-hahn/billing-cycle-reactjs.svg?branch=master)](https://travis-ci.org/gabriel-hahn/billing-cycle-reactjs) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/e0d561f0d2a5434590bba42c161261f8)](https://www.codacy.com/manual/gabriel_hahn/billing-cycle-reactjs?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=gabriel-hahn/billing-cycle-reactjs&amp;utm_campaign=Badge_Grade) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/gabriel-hahn/billing-cycle-reactjs/pulls) [![Bugs](https://img.shields.io/github/issues/gabriel-hahn/billing-cycle-reactjs/bug.svg)](https://github.com/gabriel-hahn/billing-cycle-reactjs/issues?utf8=?&q=is%3Aissue+is%3Aopen+label%3Abug) [![The MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://opensource.org/licenses/MIT)

[ConMoney link](https://www.conmoney.online)

ConMoney developed to manage the money of users and showing the balance of your credits and debits :globe_with_meridians: :moneybag:

Using ConMoney to manage your credits and debits, you will have a better control of your money, your bills and how much money you saved in the last few months.

NodeJS |Express|Sequelize|PG    |React |Redux|Typescript|Highcharts|Docker |Docker Compose|
-------|-------|---------|------|------|-----|----------|----------|-------|--------------|
10.16.0|4.17.1 |5.21.5   |7.18.2|16.8.5|4.0.1|3.3.4     |8.0.4     |19.03.4|1.24.1        |

### Colors:

- ![#eff1f9](https://placehold.it/15/eff1f9/000000?text=+) `#eff1f9`
- ![#383f53](https://placehold.it/15/383f53/000000?text=+) `#383f53`
- ![#67b1bd](https://placehold.it/15/67b1bd/000000?text=+) `#67b1bd`
- ![#d43763](https://placehold.it/15/d43763/000000?text=+) `#d43763`
- ![#4aa7ee](https://placehold.it/15/4aa7ee/000000?text=+) `#4aa7ee`

## Getting Started

> I recommend use [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) as package management and install all dependencies using it, running ```yarn``` or ```npm install``` inside each folder (<b>app</b> and <b>api</b>).

> If you have some issues related to permissions, just add the sudo command before yarn/npm command, as ```sudo yarn```.

### Environment Variables

One important thing before start running this project locally is set up all environments variables. You can set them for back-end creating a ```.env``` file on <strong>api</strong> folder root and following this structure:

```
  APP_SECRET=You can set some application secret here to create user password encryption
  APP_DOMAIN=App Domain with port, probably http://locahost:3000 at this moment.
  EMAIL_DOMAIN=E-mail used to send 'Forgot password' to the user's email.
  EMAIL_PASS=E-mail password.
  POSTGRES_HOST=Docker host
  POSTGRES_DB=Database name
  POSTGRES_USER=Database user
  POSTGRES_PASSWORD=Database password
```

You should do the same on front-end, adding an ```.env``` file to <b>app</b> folder root:

```
  REACT_APP_API_URL=Api domain with port, probably http://localhost:3333 running it locally.
```

### Back-end

Inside <strong>api</strong> folder, you should run the following command which will use docker to start up our server:

```$
docker-compose up
```

### Front-end

Inside <strong>app</strong> folder, you should run the following command, opening the project at ```localhost:3000```:

```$
yarn start
```

> You can replace the command above for ```npm run start``` if you are using NPM as package management.

## Tests

You can run ```yarn test``` inside <strong>app</strong> folder for Front-end tests. The same you can do on <strong>api</strong> folder for Back-end tests with ```npm run test```.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/gabriel-hahn/billing-cycle-reactjs/tags).

## Authors

[Gabriel Hahn Schaeffer](https://github.com/gabriel-hahn/)

See also the list of [contributors](https://github.com/gabriel-hahn/billing-cycle-reactjs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
