import { fakerJA as faker } from "@faker-js/faker";
import { useState } from "react";

function PersonMenu() {

    const [personData, setPersonData] = useState(generatePersonData());

    function generatePersonData(): { name: string, gender: string, age: number, address: string, phone: string, email: string } {
        const personData: { name: string, gender: string, age: number, address: string, phone: string, email: string } = {
            name: faker.person.fullName(),
            gender: faker.person.gender(),
            age: faker.number.int({ min: 18, max: 100 }),
            address: faker.location.streetAddress(),
            phone: faker.phone.number(),
            email: faker.internet.email(),
        }
        return personData;
    }
    
    // データをコピーする
    function copyToClipboard(data: string|number|boolean) {
        navigator.clipboard.writeText(data.toString());
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>category</th>
                    <th>data</th>
                    <th>button</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>人物名</td>
                    <td className="genelate-datas">{personData.name}</td>
                    <td><button type="button" onClick={() => copyToClipboard(personData.name)}>コピー</button></td>
                </tr>
                <tr>
                    <td>性別</td>
                    <td>{personData.gender}</td>
                    <td><button type="button" onClick={() => copyToClipboard(personData.gender)}>コピー</button></td>
                </tr>
                <tr>
                    <td>年齢</td>
                    <td>{personData.age}</td>
                    <td><button type="button" onClick={() => copyToClipboard(personData.age)}>コピー</button></td>
                </tr>
                <tr>
                    <td>住所</td>
                    <td>{personData.address}</td>
                    <td><button type="button" onClick={() => copyToClipboard(personData.address)}>コピー</button></td>
                </tr>
                <tr>
                    <td>電話</td>
                    <td>{personData.phone}</td>
                    <td><button type="button" onClick={() => copyToClipboard(personData.phone)}>コピー</button></td>
                </tr>
                <tr>
                    <td>EMAIL</td>
                    <td>{personData.email}</td>
                    <td><button type="button" onClick={() => copyToClipboard(personData.email)}>コピー</button></td>
                </tr>
            </tbody>
        </table>
    )
}

export default PersonMenu;

