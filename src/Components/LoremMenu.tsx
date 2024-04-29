import { fakerJA as faker } from "@faker-js/faker";
import { BaseSyntheticEvent, useState } from "react";
import { copyToClipboard } from "Utils/CopyToClipbord";

function CompanyMenu() {

    // レンジで文章を動的に変更できるようにするためにuseStateを使用して内容を保持するように
    const [ipsumData, setIpsumData] = useState(generateCompanyData());
    // inputのvalueを保持する
    const [range, setRange] = useState(1)

    // 生成された文章の文字数
    const [textCount, setTextCount] = useState(ipsumData.loremParagraph.length)

    function generateCompanyData() {
        const ipsumData = {
            loremParagraph: faker.lorem.paragraph(1),
        }
        return ipsumData;
    }

    function changeIpsumRange(event: BaseSyntheticEvent): void {
        ipsumData.loremParagraph = faker.lorem.paragraph(Number(event.target.value));
        setRange(event.target.value);
        setTextCount(ipsumData.loremParagraph.length)
        setIpsumData(ipsumData)
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
                    <td>レンジ</td>
                    <td><input type="range" min="1" max="100" onInput={changeIpsumRange} value={range} /></td>
                    <td>
                        <span id="ipsumRange">
                            行数:{range}
                            <br />
                            文字数:{textCount}
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>ランダム文章</td>
                    <td className="lorem-paragraph">{ipsumData.loremParagraph}</td>
                    <td><button type="button" onClick={() => copyToClipboard(ipsumData.loremParagraph)}>コピー</button></td>
                </tr>
            </tbody>
        </table>
    )
}

export default CompanyMenu