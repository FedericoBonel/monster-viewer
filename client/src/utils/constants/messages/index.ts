import Messages from "./types";

const messages: Readonly<Messages> = {
    console: {
        errors: {
            nonDefinedEnv: (varName: string): string =>
                `Missing environment variable: ${varName}`,
        },
    },
    datePicker: {
        label: "日付",
    },
    errorPage: {
        general: {
            header: "おっと🙀",
            body: "何か予期しないことが起こったようです。アッパーラッシュで迷子になってしまいましたね！",
            goBack: "こちらをクリックしてウォーターブレイクをしてホームに戻りましょう。",
        },
        429: {
            header: "あなたはモンスターですね！🏋",
            body: "あなたはあまりにも速くナビゲートしています！ レート制限に達しました。1分待ってから再度お試しください。",
            goBack: "1分待った後、こちらをクリックしてホームに戻ってください。",
        },
    },
};

export default messages;
