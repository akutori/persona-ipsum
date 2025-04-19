import { fakerJA as faker } from "@faker-js/faker";
import { copyToClipboard } from "Utils/CopyToClipbord";
import  Button from "./Parts/Button";
// import TableBase from "./TableBase";

function PersonMenu() {

    const personData = generatePersonData()

    function generatePersonData(): { avatarUrl: string, name: string, gender: string, age: number, address: string, phone: string, email: string, companyName: string, jobType: string, birth: string } {
        const personData: { avatarUrl: string, name: string, gender: string, age: number, address: string, phone: string, email: string, companyName: string, jobType: string, birth: string } = {
            avatarUrl: faker.image.avatar(),
            name: faker.person.fullName(),
            gender: faker.person.gender(),
            age: faker.number.int({ min: 18, max: 100 }),
            birth: faker.date.birthdate({ min: 18, max: 80, mode: 'age' }).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }),
            address: `${faker.location.state()} ${faker.location.city()} ${faker.location.streetAddress({ useFullAddress: true })}`,
            phone: generatePhoneNumber(),
            email: faker.internet.email(),
            companyName: faker.company.name(),
            jobType: faker.person.jobType(),
        }
        return personData;
    }

    // 日本で使用されそうな電話番号を生成する関数
    function generatePhoneNumber(): string {
        // 電話番号の最初の部分
        const areaCode = ["080", "070", "090","050"];

        // 電話番号の最初の部分をランダムに選択
        const start = areaCode[Math.floor(Math.random() * areaCode.length)];

        // 0000から9999までのランダムな数値を生成
        //市内局番
        const localCode = Math.floor(Math.random() * 10000);

        // 市外局番
        const subscriberNumber = Math.floor(Math.random() * 10000);

        // 数値を4桁の文字列に変換。例: 59 -> "0059"
        const localCodeStr = localCode.toString().padStart(4, '0');
        const subscriberNumberStr = subscriberNumber.toString().padStart(4, '0');

        // 電話番号を組み立てる
        const phoneNumber = `${start}-${localCodeStr}-${subscriberNumberStr}`;

        return phoneNumber;
    }

    return (
        <table className="table table-bordered table-striped table-hover table-sm table-responsive-sm">
            <thead>
                <tr>
                    <th>category</th>
                    <th>data</th>
                    <th>button</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>アバター</td>
                    <td><a href={personData.avatarUrl} target="_blank"><img src={personData.avatarUrl} alt="avatar" width="100" /></a></td>
                    <td><Button personData={personData.avatarUrl} /></td>
                </tr>
                <tr>
                    <td>人物名</td>
                    <td className="genelate-datas">{personData.name}</td>
                    <td><Button personData={personData.name} /></td>
                </tr>
                <tr>
                    <td>性別</td>
                    <td>{personData.gender}</td>
                    <td><Button personData={personData.gender} /></td>
                </tr>
                <tr>
                    <td>年齢</td>
                    <td>{personData.age}</td>
                    <td><Button personData={personData.age.toString()} /></td>
                </tr>
                <tr>
                    <td>生年月日</td>
                    <td>{personData.birth}</td>
                    <td><Button personData={personData.birth} /></td>
                </tr>
                <tr>
                    <td>住所</td>
                    <td>{personData.address}</td>
                    <td><Button personData={personData.address} /></td>
                </tr>
                <tr>
                    <td>電話</td>
                    <td>{personData.phone}</td>
                    <td><Button personData={personData.phone} /></td>
                </tr>
                <tr>
                    <td>EMAIL</td>
                    <td>{personData.email}</td>
                    <td><Button personData={personData.email} /></td>
                </tr>
            </tbody>
        </table>
    )
}

export default PersonMenu;

