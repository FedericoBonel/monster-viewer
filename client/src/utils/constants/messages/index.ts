import validation from "../validation";
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
            body: `あなたはあまりにも速くナビゲートしています！ レート制限に達しました。${validation.api.nMinutesWindow}分待ってから再度お試しください。`,
            goBack: `${validation.api.nMinutesWindow}分待った後、こちらをクリックしてホームに戻ってください。`,
        },
    },
    terms: {
        privacy: {
            pageHeader: "プライバシー",
            advertisementDistr: {
                subHeader: "当サイトでの広告の配信について",
                description: `当サイトでは、第三者配信の広告サービス（Googleアドセンス等）を利用しています。
                    このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報
                    「Cookie」(氏名、住所、メール
                    アドレス、電話番号は含まれません) を使用することがあります。またGoogleアドセンスに関して、このプロセスの詳細やこのような情報が広告配信事業者に使用されないようにする方法については、`,
                link: "こちらをご覧ください",
            },
            dataAnalysis: {
                subHeader: "当サイトのアクセス解析ツールについて",
                description: `当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
                    このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
                    このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
                    この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、`,
                link: "詳しくはこちらをクリックしてください",
            },
        },
    },
    navbar: {
        links: {
            lessonsByGym: "スタジオ別レッスン",
            privacy: "プライバシー",
        },
    },
};

export default messages;
