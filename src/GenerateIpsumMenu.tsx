import { useState } from "react";
import "./css/GenerateIpsumMenu.css";
import PersonMenu from "./Components/PersonMenu";
import CompanyMenu from "./Components/CompanyMenu";
import CommerceMenu from "./Components/CommerceMenu";
import LoremMenu from "./Components/LoremMenu";

const ipsumsMenu: Array<{ id: number, type: string, name: string }> = [
    { id: 1, type: 'person', name: '人物' },
    { id: 2, type: 'company', name: '企業' },
    { id: 3, type: 'commerce', name: '商品' },
    { id: 4, type: 'lorem', name: 'Lorem' }
]


function GenerateIpsumMenu(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [ipsumTable, setIpsumTable] = useState<JSX.Element>(<></>);

    function generateMenu() {
        const select = document.querySelector('select');
        const value: number = Number(select!.value);

        let key = new Date().getTime(); // 現在のタイムスタンプをキーとして使用
        switch (value) {
            case 1:
                // key属性を指定することで再度ボタンがクリックされたときに同じメニューを再生成することができる
                setIpsumTable(<PersonMenu key={key} />)
                break;
            case 2:
                setIpsumTable(<CompanyMenu key={key} />)
                break;
            case 3:
                setIpsumTable(<CommerceMenu key={key} />)
                break;
            case 4:
                setIpsumTable(<LoremMenu key={key}/>)
                break;
            default:
                break;
        }
        setIsOpen(true);
    }

    return (
        <>
            {isOpen && ipsumTable}
            <div className="generate-menu">
                <select>
                    {ipsumsMenu.map((menu: { id: number, type: string, name: string }) => (<option key={menu.id} value={menu.id}>{menu.name}</option>))}
                </select>
                <div className="generate-button">
                    <button onClick={generateMenu}>Generate</button>
                </div>
            </div>
        </>
    )
}

export default GenerateIpsumMenu


