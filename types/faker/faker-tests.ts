let resultStr: string;
let resultBool: boolean;
let resultNum: number;
let resultStrArr: string[];
let resultStrNumArray: Array<string | number>;
let resultDate: Date;
let resultDateArray: Date[];

import faker = require('faker');
faker.locale = 'en';

faker.seedValue === undefined;
faker.seed(123);
faker.seedValue === 123;

resultStr = faker.address.zipCodeByState('foo');
resultStr = faker.address.zipCode();
resultStr = faker.address.zipCode('###');
resultStr = faker.address.city();
resultStr = faker.address.city('{{name.lastName}}{{address.citySuffix}}');
resultStr = faker.address.cityName();
resultStr = faker.address.cityPrefix();
resultStr = faker.address.citySuffix();
resultStr = faker.address.streetName();
resultStr = faker.address.streetAddress();
resultStr = faker.address.streetAddress(false);
resultStr = faker.address.streetSuffix();
resultStr = faker.address.streetPrefix();
resultStr = faker.address.secondaryAddress();
resultStr = faker.address.county();
resultStr = faker.address.country();
resultStr = faker.address.countryCode();
resultStr = faker.address.countryCode('foo');
resultStr = faker.address.state();
resultStr = faker.address.state(false);
resultStr = faker.address.stateAbbr();
resultStr = faker.address.latitude();
resultStr = faker.address.latitude(0, 0);
resultStr = faker.address.longitude();
resultStr = faker.address.longitude(0, 0);
resultStr = faker.address.direction();
resultStr = faker.address.direction(true);
resultStr = faker.address.cardinalDirection();
resultStr = faker.address.cardinalDirection(true);
resultStr = faker.address.ordinalDirection();
resultStr = faker.address.ordinalDirection(true);
resultStrArr = faker.address.nearbyGPSCoordinate();
resultStrArr = faker.address.nearbyGPSCoordinate(['0', '0'], 0, true);
resultStrArr = faker.address.nearbyGPSCoordinate([0, 0], 0, true);
resultStr = faker.address.timeZone();

resultStr = faker.animal.dog();
resultStr = faker.animal.cat();
resultStr = faker.animal.snake();
resultStr = faker.animal.bear();
resultStr = faker.animal.lion();
resultStr = faker.animal.cetacean();
resultStr = faker.animal.horse();
resultStr = faker.animal.bird();
resultStr = faker.animal.cow();
resultStr = faker.animal.fish();
resultStr = faker.animal.crocodilia();
resultStr = faker.animal.insect();
resultStr = faker.animal.rabbit();
resultStr = faker.animal.type();

resultStr = faker.commerce.color();
resultStr = faker.commerce.department();
resultStr = faker.commerce.productName();
resultStr = faker.commerce.price();
resultStr = faker.commerce.price(0, 0, 0, '#');
resultStr = faker.commerce.productAdjective();
resultStr = faker.commerce.productMaterial();
resultStr = faker.commerce.product();
resultStr = faker.commerce.productDescription();

resultStrArr = faker.company.suffixes();
resultStr = faker.company.companyName();
resultStr = faker.company.companyName(0);
resultStr = faker.company.companySuffix();
resultStr = faker.company.catchPhrase();
resultStr = faker.company.bs();
resultStr = faker.company.catchPhraseAdjective();
resultStr = faker.company.catchPhraseDescriptor();
resultStr = faker.company.catchPhraseNoun();
resultStr = faker.company.bsAdjective();
resultStr = faker.company.bsBuzz();
resultStr = faker.company.bsNoun();

resultStr = faker.database.column();
resultStr = faker.database.type();
resultStr = faker.database.collation();
resultStr = faker.database.engine();

resultNum = faker.datatype.number();
resultNum = faker.datatype.number(0);
resultNum = faker.datatype.number({
    min: 0,
    max: 0,
    precision: 0,
});
resultNum = faker.datatype.float();
resultNum = faker.datatype.float(0);
resultNum = faker.datatype.float({
    min: 0,
    max: 0,
    precision: 0,
});
resultDate = faker.datatype.datetime();
resultDate = faker.datatype.datetime(0);
resultDate = faker.datatype.datetime({
    min: 0,
    max: 0,
});
resultStr = faker.datatype.string();
resultStr = faker.datatype.string(0);
resultStr = faker.datatype.uuid();
resultBool = faker.datatype.boolean();
resultStr = faker.datatype.hexaDecimal();
resultStr = faker.datatype.hexaDecimal(0);
resultStr = faker.datatype.json();
resultStrNumArray = faker.datatype.array();
resultStrNumArray = faker.datatype.array(0);

resultDate = faker.date.past();
resultDate = faker.date.future();
resultDate = faker.date.between('foo', 'bar');
resultDate = faker.date.between(1234, 5678);
resultDate = faker.date.between(new Date(), new Date());
resultDateArray = faker.date.betweens('foo', 'bar');
resultDateArray = faker.date.betweens('foo', 'bar', 1);
resultDateArray = faker.date.betweens(1234, 5678);
resultDateArray = faker.date.betweens(1234, 5678, 2);
resultDateArray = faker.date.betweens(new Date(), new Date());
resultDateArray = faker.date.betweens(new Date(), new Date(), 2);
resultDate = faker.date.recent();
resultDate = faker.date.recent(100, new Date());
resultDate = faker.date.soon();
resultDate = faker.date.soon(100, new Date());
resultStr = faker.date.month();
resultStr = faker.date.month({
    abbr: true,
    context: true,
});
resultStr = faker.date.weekday();
resultStr = faker.date.weekday({
    abbr: true,
    context: true,
});

resultStr = faker.finance.account();
resultStr = faker.finance.account(0);
resultStr = faker.finance.accountName();
resultStr = faker.finance.routingNumber();
resultStr = faker.finance.mask();
resultStr = faker.finance.mask(0, false, false);
resultStr = faker.finance.amount();
resultStr = faker.finance.amount(0, 0, 0, '#');
resultStr = faker.finance.transactionType();
resultStr = faker.finance.currencyCode();
resultStr = faker.finance.currencyName();
resultStr = faker.finance.currencySymbol();
resultStr = faker.finance.bitcoinAddress();
resultStr = faker.finance.litecoinAddress();
resultStr = faker.finance.creditCardNumber();
resultStr = faker.finance.creditCardNumber('foo');
resultStr = faker.finance.creditCardCVV();
resultStr = faker.finance.ethereumAddress();
resultStr = faker.finance.iban();
resultStr = faker.finance.iban(true);
resultStr = faker.finance.iban(false, "de");
resultStr = faker.finance.bic();
resultStr = faker.finance.transactionDescription();

resultStr = faker.hacker.abbreviation();
resultStr = faker.hacker.adjective();
resultStr = faker.hacker.noun();
resultStr = faker.hacker.verb();
resultStr = faker.hacker.ingverb();
resultStr = faker.hacker.phrase();

resultStr = faker.helpers.randomize();
resultNum = faker.helpers.randomize([1, 2, 3, 4]);
resultStr = faker.helpers.randomize(['foo', 'bar', 'quux']);
resultStr = faker.helpers.slugify('foo bar quux');
resultStr = faker.helpers.replaceSymbolWithNumber('foo# bar#');
resultStr = faker.helpers.replaceSymbols('foo# bar? quux#');
resultStr = faker.helpers.replaceCreditCardSymbols();
resultStr = faker.helpers.replaceCreditCardSymbols('foo#', '*');
resultStr = faker.helpers.repeatString('foo', 2);
resultStr = faker.helpers.regexpStyleStringParse('foo');
resultStrArr = faker.helpers.shuffle(['foo', 'bar', 'quux']);
resultStr = faker.helpers.mustache('{{foo}}{{bar}}', { foo: 'x', bar: 'y' });

const card = faker.helpers.createCard();
resultStr = card.name;
resultStr = card.address.streetA;
const contextualCard = faker.helpers.contextualCard();
resultStr = contextualCard.name;
resultStr = contextualCard.avatar;
resultStr = contextualCard.address.suite;
const userCard = faker.helpers.userCard();
resultStr = userCard.name;
resultStr = userCard.address.suite;

resultStr = faker.image.abstract();
resultStr = faker.image.abstract(0, 0);
resultStr = faker.image.animals();
resultStr = faker.image.animals(0, 0);
resultStr = faker.image.avatar();
resultStr = faker.image.business();
resultStr = faker.image.business(0, 0);
resultStr = faker.image.cats();
resultStr = faker.image.cats(0, 0);
resultStr = faker.image.city();
resultStr = faker.image.city(0, 0);
resultStr = faker.image.dataUri();
resultStr = faker.image.dataUri(0, 0, 'blue');
resultStr = faker.image.fashion();
resultStr = faker.image.fashion(0, 0);
resultStr = faker.image.food();
resultStr = faker.image.food(0, 0);
resultStr = faker.image.image();
resultStr = faker.image.imageUrl();
resultStr = faker.image.imageUrl(0, 0, 'cats', true, true);
resultStr = faker.image.nature();
resultStr = faker.image.nature(0, 0);
resultStr = faker.image.nightlife();
resultStr = faker.image.nightlife(0, 0);
resultStr = faker.image.people();
resultStr = faker.image.people(0, 0);
resultStr = faker.image.sports();
resultStr = faker.image.sports(0, 0);
resultStr = faker.image.technics();
resultStr = faker.image.technics(0, 0);
resultStr = faker.image.transport();
resultStr = faker.image.transport(0, 0);

resultStr = faker.internet.avatar();
resultStr = faker.internet.email();
resultStr = faker.internet.email('foo', 'bar', 'quux');
resultStr = faker.internet.exampleEmail();
resultStr = faker.internet.exampleEmail('foo', 'bar');
resultStr = faker.internet.protocol();
resultStr = faker.internet.httpMethod();
resultStr = faker.internet.url();
resultStr = faker.internet.domainName();
resultStr = faker.internet.domainSuffix();
resultStr = faker.internet.domainWord();
resultStr = faker.internet.ip();
resultNum = faker.internet.port();
resultStr = faker.internet.userAgent();
resultStr = faker.internet.color();
resultStr = faker.internet.color(0, 0, 0);
resultStr = faker.internet.mac();
resultStr = faker.internet.mac('#');
resultStr = faker.internet.password();
resultStr = faker.internet.password(0, false, '#', 'foo');

resultStr = faker.lorem.word();
resultStr = faker.lorem.word(0);
resultStr = faker.lorem.words();
resultStr = faker.lorem.words(0);
resultStr = faker.lorem.sentence();
resultStr = faker.lorem.sentence(0, 0);
resultStr = faker.lorem.slug();
resultStr = faker.lorem.slug(0);
resultStr = faker.lorem.sentences();
resultStr = faker.lorem.sentences(0);
resultStr = faker.lorem.paragraph();
resultStr = faker.lorem.paragraph(0);
resultStr = faker.lorem.paragraphs();
resultStr = faker.lorem.paragraphs(0, '');
resultStr = faker.lorem.text();
resultStr = faker.lorem.text(0);
resultStr = faker.lorem.lines();
resultStr = faker.lorem.lines(0);

resultStr = faker.music.genre();

resultStr = faker.name.firstName();
resultStr = faker.name.firstName(0);
resultStr = faker.name.lastName();
resultStr = faker.name.lastName(0);
resultStr = faker.name.middleName();
resultStr = faker.name.middleName(0);
resultStr = faker.name.findName();
resultStr = faker.name.findName('', '', 0);
resultStr = faker.name.jobTitle();
resultStr = faker.name.prefix();
resultStr = faker.name.suffix();
resultStr = faker.name.title();
resultStr = faker.name.jobDescriptor();
resultStr = faker.name.jobArea();
resultStr = faker.name.jobType();

resultStr = faker.phone.phoneNumber();
resultStr = faker.phone.phoneNumber('#');
resultStr = faker.phone.phoneNumberFormat();
resultStr = faker.phone.phoneNumberFormat(0);
resultStr = faker.phone.phoneFormats();

resultNum = faker.random.number();
resultNum = faker.random.number(0);
resultNum = faker.random.number({
    min: 0,
    max: 0,
    precision: 0,
});
resultNum = faker.random.float();
resultNum = faker.random.float(0);
resultNum = faker.random.float({
    min: 0,
    max: 0,
    precision: 0,
});
resultStr = faker.random.arrayElement();
resultStr = faker.random.arrayElement(['foo', 'bar', 'quux']);
resultStr = faker.random.arrayElement(['foo', 'bar', 'quux'] as ReadonlyArray<string>);
resultStrArr = faker.random.arrayElements();
resultStrArr = faker.random.arrayElements(['foo', 'bar', 'quux']);
(resultStrArr as ReadonlyArray<string>) = faker.random.arrayElements(['foo', 'bar', 'quux'] as ReadonlyArray<string>);
resultStr = faker.random.objectElement();
resultStr = faker.random.objectElement({ foo: 'bar', field: 'foo' });
resultStr = faker.random.uuid();
resultBool = faker.random.boolean();
resultStr = faker.random.word();
resultStr = faker.random.word('noun');
resultStr = faker.random.words();
resultStr = faker.random.words(0);
resultStr = faker.random.image();
resultStr = faker.random.locale();
resultStr = faker.random.alpha();
resultStr = faker.random.alpha({ count: 0, upcase: false });
resultStr = faker.random.alphaNumeric();
resultStr = faker.random.alphaNumeric(0);
resultStr = faker.random.hexaDecimal();
resultStr = faker.random.hexaDecimal(0);

resultStr = faker.system.fileName();
resultStr = faker.system.commonFileName();
resultStr = faker.system.commonFileName('foo');
resultStr = faker.system.mimeType();
resultStr = faker.system.commonFileType();
resultStr = faker.system.commonFileExt();
resultStr = faker.system.fileType();
resultStr = faker.system.fileExt();
resultStr = faker.system.fileExt('foo');
resultStr = faker.system.directoryPath();
resultStr = faker.system.filePath();
resultStr = faker.system.semver();

resultNum = faker.time.recent();
resultNum = faker.time.recent('unix');
resultStr = faker.time.recent('abbr');
resultStr = faker.time.recent('wide');

resultStr = faker.vehicle.vehicle();
resultStr = faker.vehicle.manufacturer();
resultStr = faker.vehicle.model();
resultStr = faker.vehicle.type();
resultStr = faker.vehicle.fuel();
resultStr = faker.vehicle.vin();
resultStr = faker.vehicle.color();
resultStr = faker.vehicle.vrm();
resultStr = faker.vehicle.bicycle();

resultNum = faker.unique(faker.random.number);
resultNum = faker.unique(faker.random.number, undefined, { maxTime: new Date('3000-01-01').getTime() });
resultNum = faker.unique(faker.random.number, undefined, { maxRetries: 999 });
resultNum = faker.unique(faker.random.number, [{ min: 0, max: 100, precision: 2 }]);
resultStr = faker.unique(faker.random.word);
resultStr = faker.unique(faker.random.word, ['noun']);
resultStr = faker.unique(faker.random.words, [10]);
resultDate = faker.unique(faker.date.past);
resultDate = faker.unique<typeof faker.date.between>(faker.date.between, ['foo', 'bar']);
resultDate = faker.unique(faker.date.between, [new Date(), new Date()]);
resultDate = faker.unique(faker.date.soon, [100, new Date()]);

import fakerAz = require('faker/locale/az');
resultStr = fakerAz.name.firstName();
import fakerAr = require('faker/locale/ar');
resultStr = fakerAr.name.firstName();
import fakerCz = require('faker/locale/cz');
resultStr = fakerCz.name.firstName();
import fakerDe = require('faker/locale/de');
resultStr = fakerDe.name.firstName();
import fakerDeAT = require('faker/locale/de_AT');
resultStr = fakerDeAT.name.firstName();
import fakerdeCH = require('faker/locale/de_CH');
resultStr = fakerdeCH.name.firstName();
import fakerEn = require('faker/locale/en');
resultStr = fakerEn.name.firstName();
import fakerEnAU = require('faker/locale/en_AU');
resultStr = fakerEnAU.name.firstName();
import fakerEnAuOcker = require('faker/locale/en_AU_ocker');
resultStr = fakerEnAuOcker.name.firstName();
import fakerEnBORK = require('faker/locale/en_BORK');
resultStr = fakerEnBORK.name.firstName();
import fakerEnCA = require('faker/locale/en_CA');
resultStr = fakerEnCA.name.firstName();
import fakerEnGB = require('faker/locale/en_GB');
resultStr = fakerEnGB.name.firstName();
import fakerEnIE = require('faker/locale/en_IE');
resultStr = fakerEnIE.name.firstName();
import fakerEnIND = require('faker/locale/en_IND');
resultStr = fakerEnIND.name.firstName();
import fakerEnUS = require('faker/locale/en_US');
resultStr = fakerEnUS.name.firstName();
import fakerEnZA = require('faker/locale/en_ZA');
resultStr = fakerEnZA.name.firstName();
import fakerEs = require('faker/locale/es');
resultStr = fakerEs.name.firstName();
import fakerEsMX = require('faker/locale/es_MX');
resultStr = fakerEsMX.name.firstName();
import fakerFa = require('faker/locale/fa');
resultStr = fakerFa.name.firstName();
import fakerFr = require('faker/locale/fr');
resultStr = fakerFr.name.firstName();
import fakerFi = require('faker/locale/fi');
resultStr = fakerFi.name.firstName();
import fakerFrCA = require('faker/locale/fr_CA');
resultStr = fakerFrCA.name.firstName();
import fakerFrCH = require('faker/locale/fr_CH');
resultStr = fakerFrCH.name.firstName();
import fakerGe = require('faker/locale/ge');
resultStr = fakerGe.name.firstName();
import fakerIdID = require('faker/locale/id_ID');
resultStr = fakerIdID.name.firstName();
import fakerIt = require('faker/locale/it');
resultStr = fakerIt.name.firstName();
import fakerJa = require('faker/locale/ja');
resultStr = fakerJa.name.firstName();
import fakerKo = require('faker/locale/ko');
resultStr = fakerKo.name.firstName();
import fakerNbNO = require('faker/locale/nb_NO');
resultStr = fakerNbNO.name.firstName();
import fakerNep = require('faker/locale/nep');
resultStr = fakerNep.name.firstName();
import fakerNl = require('faker/locale/nl');
resultStr = fakerNl.name.firstName();
import fakerNlBe = require('faker/locale/nl_BE');
resultStr = fakerNlBe.name.firstName();
import fakerPl = require('faker/locale/pl');
resultStr = fakerPl.name.firstName();
import fakerPtBR = require('faker/locale/pt_BR');
resultStr = fakerPtBR.name.firstName();
import fakerPtPT = require('faker/locale/pt_PT');
resultStr = fakerPtPT.name.firstName();
import fakerRo = require('faker/locale/ro');
resultStr = fakerRo.name.firstName();
import fakerRu = require('faker/locale/ru');
resultStr = fakerRu.name.firstName();
import fakerSk = require('faker/locale/sk');
resultStr = fakerSk.name.firstName();
import fakerSv = require('faker/locale/sv');
resultStr = fakerSv.name.firstName();
import fakerTr = require('faker/locale/tr');
resultStr = fakerTr.name.firstName();
import fakerUk = require('faker/locale/uk');
resultStr = fakerUk.name.firstName();
import fakerVi = require('faker/locale/vi');
resultStr = fakerVi.name.firstName();
import fakerZhCN = require('faker/locale/zh_CN');
resultStr = fakerZhCN.name.firstName();
import fakerZhTW = require('faker/locale/zh_TW');
resultStr = fakerZhTW.name.firstName();
