# 使い方

セレクトメニューから生成したいカテゴリーを選択して*Genelate*ボタンを押すと一覧が生成されます

コピーボタンを押すと表示されている文章をコピーします

フォームの入力テストなどでどうぞ

# ファイルを使用する

1. Githubの*Releases*からファイルをダウンロード
2. インストーラーを起動(警告が出ますが、コードサイニング証明書を申請していないので心配な方は「[ローカルにビルドするには](# ローカルにビルドするには)」を参照
3. インストールしたファイルを起動する



# ローカルにビルドするには

以下の手順を通してください

1. 当リポジトリをクローン

```bash
git clone https://github.com/akutori/persona-ipsum.git
```

2. プロジェクトファイル内でライブラリをインストール

```bash
npm install
```

3. ファイルをビルド(他のビルド方法は[Tauri公式](https://tauri.app/v1/guides/building/windows)を参照)

```bash
npm run tauri build
```

4. ファイルは以下のパスにビルドされているはず

```
src-tauri\target\release\persona-ipsum.exe
```



