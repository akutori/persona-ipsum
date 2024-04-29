import { fakerJA as faker } from "@faker-js/faker";
import { Category } from "grapesjs";
import { useState } from "react";
import { copyToClipboard } from "Utils/CopyToClipbord";
import PersonMenu from "Components/PersonMenu";
import CompanyMenu from "Components/CompanyMenu";
import GenerateIpsumMenu from "../GenerateIpsumMenu";

function TableBase() {

    const [menuData, setMenuData] = useState();

    console.log([menuData,]);

    function generateData() {

        // <td><CategoryName /></td>
        // <td className="genelate-datas"><CategoryData /></td>
        // <td><button type="button" onClick={() => copyToClipboard(categoryData)}>コピー</button></td>

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
                    {menuData}
                </tr>
            </tbody>
        </table>
    )
}

export default TableBase;