import { fakerJA as faker } from "@faker-js/faker";
import { copyToClipboard } from "Utils/CopyToClipbord";

function CommerceMenu() {

    const personData = generateCommerceData()

    function generateCommerceData() {
        const personData = {
            commerceCategory: faker.commerce.product(),
            price: faker.commerce.price({ min: 100, max: 1000000, symbol: "¥", dec: 0 }),
            productName: faker.commerce.productName(),
            catchPhrase: faker.company.catchPhrase(),
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
                    <td>商品区分</td>
                    <td className="genelate-datas">{personData.commerceCategory}</td>
                    <td><button type="button" onClick={() => copyToClipboard(personData.commerceCategory)}>コピー</button></td>
                </tr>
                <tr>
                    <td>値段</td>
                    <td>{personData.price}</td>
                    <td><button type="button" onClick={() => copyToClipboard(personData.price)}>コピー</button></td>
                </tr>
                <tr>
                    <td>商品名</td>
                    <td>{personData.productName}</td>
                    <td><button type="button" onClick={() => copyToClipboard(personData.productName)}>コピー</button></td>
                </tr>
                <tr>
                    <td>キャッチフレーズ</td>
                    <td>{personData.catchPhrase}</td>
                    <td><button type="button" onClick={() => copyToClipboard(personData.catchPhrase)}>コピー</button></td>
                </tr>
            </tbody>
        </table>
    )
}

export default CommerceMenu