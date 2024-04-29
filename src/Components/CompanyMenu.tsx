import { fakerJA as faker } from "@faker-js/faker";
import { copyToClipboard } from "Utils/CopyToClipbord";

function CompanyMenu() {

    const personData = generateCompanyData()

    function generateCompanyData() {
        const personData = {
            companyName: faker.company.name(),
            buzzNoun: faker.company.buzzNoun(),
            buzzPhrase: faker.company.buzzPhrase(),
            catchPhrase: faker.company.catchPhrase(),
            url: faker.internet.url(),
            product: faker.commerce.product(),
        }
        return personData;
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
                    <td>企業名</td>
                    <td className="genelate-datas">{personData.companyName}</td>
                    <td><button type="button" onClick={() => copyToClipboard(personData.companyName)}>コピー</button></td>
                </tr>
                <tr>
                    <td>売り文句</td>
                    <td>{personData.buzzNoun}</td>
                    <td><button type="button" onClick={() => copyToClipboard(personData.buzzNoun)}>コピー</button></td>
                </tr>
                <tr>
                    <td>バズ名詞</td>
                    <td>{personData.buzzPhrase}</td>
                    <td><button type="button" onClick={() => copyToClipboard(personData.buzzPhrase)}>コピー</button></td>
                </tr>
                <tr>
                    <td>キャッチフレーズ</td>
                    <td>{personData.catchPhrase}</td>
                    <td><button type="button" onClick={() => copyToClipboard(personData.catchPhrase)}>コピー</button></td>
                </tr>
                <tr>
                    <td>商材</td>
                    <td>{personData.product}</td>
                    <td><button type="button" onClick={() => copyToClipboard(personData.product)}>コピー</button></td>
                </tr>
                <tr>
                    <td>URL</td>
                    <td>{personData.url}</td>
                    <td><button type="button" onClick={() => copyToClipboard(personData.url)}>コピー</button></td>
                </tr>
            </tbody>
        </table>
    )
}

export default CompanyMenu