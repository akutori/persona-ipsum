import { fakerJA as faker } from "@faker-js/faker";

// console.log(faker.company.name());
// console.log(faker.company.buzzPhrase())
// console.log(faker.company.catchPhrase())
// console.log(faker.person.fullName());
// console.log(faker.person.sexType());
// console.log(faker.person.jobType());
console.log(faker.person.jobArea())
console.log(faker.person.jobType())
// console.log(faker.number.int({ min: 18, max: 100 }));
// console.log(faker.location.street());
// console.log(faker.location.streetAddress());
// console.log(faker.location.city());
// console.log(faker.location.state());
// console.log(faker.location.country());
// console.log(faker.phone.number());
// console.log(faker.internet.email());

// console.log(faker.commerce.productDescription());
// console.log(faker.commerce.productAdjective());
// console.log(faker.commerce.productMaterial());
// console.log(faker.commerce.product());
//console.log(faker.lorem.text());
console.log(faker.lorem.sentence({min:10,max:40}));

// console.log(`${faker.location.state()} ${faker.location.city()} ${faker.location.streetAddress({ useFullAddress: true })}`)

/**
 * faker <-- インスタンス
 * faker.company <-- 企業系のテストデータ
 * faker.person <-- 人間系のテストデータ
 */
