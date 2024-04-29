// データをコピーする
function copyToClipboard(data: string | number | boolean) {
    navigator.clipboard.writeText(data.toString());
}

export {copyToClipboard}