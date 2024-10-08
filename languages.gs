var languages = ['en', 'ja'];

var colorsNames = {
    en: ['Default', 'Lavender', 'Sage', 'Grape', 'Flamingo', 'Banana', 'Tangerine', 'Peacock', 'Graphite', 'Blueberry', 'Basil', 'Tomato'],
    ja: ['デフォルト', 'ラベンダー', 'セージ', 'グレープ', 'フラミンゴ', 'バナナ', 'タンジェリン', 'ピーコック', 'グラファイト', 'ブルーベリー', 'バジル', 'トマト']
};

var oriColorsHtml = ['', '#7986cb', '#33b679', '#8e24aa', '#e67c73', '#f6c026', '#f5511d', '#039be5', '#616161', '#3f51b5', '#0b8043', '#d60000'];
var colorsHtml = ['', '#b6c9ff', '#4dffb6', '#d536ff', '#ffbaad', '#ffff39', '#ff7a2c', '#05e9ff', '#929292', '#5f7aff', '#11c065', '#ff0000'];

var headerNames = {
    en: [
        "Delete", "Update", "Title", "Start Date", "End Date", "Start Time", "End Time", "Frequency",
        "Interval", "Occurrences", "Until", "By Day", "Description", "Location", "Timezone", "Guests",
        "Event ID", "Link", "Meet", "Color", "Car Name", "Number of People"
    ],
    ja: [
        "削除", "更新", "タイトル", "日付", "終了日", "開始時刻", "終了時刻", "頻度", "間隔",
        "回数", "まで", "曜日", "説明", "場所", "タイムゾーン", "ゲスト", "イベントID", "リンク",
        "Meet", "カラー", "車", "人数"
    ]
};

var repeatNames = {
    en: ['', 'daily', 'weekly', 'monthly', 'yearly'],
    ja: ['', '毎日', '毎週', '毎月', '毎年']
};

var colColName = {
    en: 'Color',
    ja: 'カラー'
};

var htmlStrings = {
    en: {
        "language": "en",
        "align": "left",
        "direction": "ltr",
        "account": "Account",
        "calendar": "Calendar",
        "guestnotifications": "Guest Notifications (optional)",
        "updatewarning": "When 'Check Sheet vs Calendar' is used to select the events to be updated this detects differences between the Sheet and the Calendar, including edits made to Google Calendar events. Be careful not to overwrite calendar edits, and 'Import Updates' first if necessary.",
        "sendemail": "Send email for newly created events",
        "sendemailupdated": "Send email for updated/deleted",
        "options": "Options",
        "keeprow": "Keep row data for deleted events",
        "fetching": "Fetching Data...",
        "subscribe": "Subscribe",
        "update": "Update",
        "notsheets2gcal": "This is not a Sheets2Gcal Pro Sheet\nPlease either Import a calendar or click Link Sheet",
        "error": "Error",
        "verify": "Please select 'Delete' or 'Update' for some events, and verify your data is valid",
        "createdsingle": "event created",
        "updatedsingle": "event updated",
        "deletedsingle": "event deleted",
        "importedsingle": "event imported",
        "created": "events created",
        "updated": "events updated",
        "deleted": "events deleted",
        "imported": "events imported",
        "import": "Select a calendar to import to this Sheet",
        "allevents": "All events",
        "startdate": "Start Date",
        "enddate": "End Date",
        "importcalendar": "Clear Sheet & Import Calendar",
        "importupdates": "Import Updates & New Events",
        "upgrade": "Upgrade to any paid subscription to import updates and new events from Google Calendar without clearing the Sheet.",
        "nocalendars": "No Calendars Found",
        "importrange": "You cannot import updates for a range of dates",
        "selectcalendar": "Select a Calendar to Link",
        "clearlink": "Clear & Link Sheet",
        "clearlinktext": "This is the best way to set up a blank sheet for new events without importing a calendar. To edit or add to existing events please use 'Import Calendar to Sheet'.",
        "keepdata": "Keep data and link sheet",
        "linksheet": "Link Sheet",
        "linksheettext": "Enter the ID from the Google Calendar Settings. Linking by ID will not change the Sheet, only the Google Calendar linked with this Sheet",
        "resetlangtext": "Configure this sheet to use your default Google language",
        "resetlang": "Update Sheet Language",
        "linked": "Linked!",
        "wrongaccount": "Please log out from",
        "accesswith": "to access the document as",
        "triggertext": "24 hour clock: 0 for midnight, 12 for midday",
        "deletetext": "Stop all import/export",
        "startbutton": "Start",
        "stopbutton": "Stop",
        "fulltriggertext": "Set up a daily import/export of changes to the Sheet and Google Calendar. If you EXPORT -> IMPORT be careful not to overwrite changes in Google Calendar. Selected Sheets will run import/export at the same time, but not at exactly that time.",
        "notrigger": "You are not currently syncing this Sheet",
        "yestrigger": "You are automatically syncing this Sheet",
        "autoimport": "Import/Export automatically",
        "resetstatus": "Reset status colors",
        "autoimportexport": "Automatic Import/Export",
        "importtext": "Import",
        "exporttext": "Export",
        "selectsyncmethod": "Sync Order"
    },
    ja: {
        "language": "ja",
        "align": "left",
        "direction": "ltr",
        "account": "アカウント",
        "calendar": "カレンダー",
        "guestnotifications": "ゲスト通知（オプション）",
        "updatewarning": "'シート対カレンダーのチェック'を使用して更新するイベントを選択する場合、シートとカレンダーの違い、Googleカレンダーイベントに対して行われた編集を検出します。カレンダーの編集を上書きしないように注意し、必要に応じて最初に'更新のインポート'を行ってください。",
        "sendemail": "新しく作成されたイベントにメールを送信",
        "sendemailupdated": "更新/削除されたイベントにメールを送信",
        "options": "オプション",
        "keeprow": "削除されたイベントの行データを保持",
        "fetching": "データを取得中...",
        "subscribe": "購読",
        "update": "更新",
        "notsheets2gcal": "これはSheets2Gcal Proシートではありません\nカレンダーをインポートするか、シートをリンクしてください",
        "error": "エラー",
        "verify": "いくつかのイベントに対して'削除'または'更新'を選択し、データが有効であることを確認してください",
        "createdsingle": "イベントが作成されました",
        "updatedsingle": "イベントが更新されました",
        "deletedsingle": "イベントが削除されました",
        "importedsingle": "イベントがインポートされました",
        "created": "イベントが作成されました",
        "updated": "イベントが更新されました",
        "deleted": "イベントが削除されました",
        "imported": "イベントがインポートされました",
        "import": "このシートにインポートするカレンダーを選択",
        "allevents": "すべてのイベント",
        "startdate": "開始日",
        "enddate": "終了日",
        "importcalendar": "シートをクリアしてカレンダーをインポート",
        "importupdates": "更新と新しいイベントをインポート",
        "upgrade": "シートをクリアせずにGoogleカレンダーから更新と新しいイベントをインポートするには、有料サブスクリプションにアップグレードしてください。",
        "nocalendars": "カレンダーが見つかりません",
        "importrange": "日付範囲の更新をインポートすることはできません",
        "selectcalendar": "リンクするカレンダーを選択",
        "clearlink": "シートをクリアしてリンク",
        "clearlinktext": "カレンダーをインポートせずに新しいイベントのために空のシートを設定する最良の方法です。既存のイベントを編集または追加するには、'カレンダーをシートにインポート'を使用してください。",
        "keepdata": "データを保持してシートをリンク",
        "linksheet": "シートをリンク",
        "linksheettext": "Googleカレンダー設定からIDを入力してください。IDでリンクしてもシートは変更されず、このシートにリンクされたGoogleカレンダーのみが変更されます",
        "resetlangtext": "このシートをデフォルトのGoogle言語に設定",
        "resetlang": "シートの言語を更新",
        "linked": "リンクされました！",
        "wrongaccount": "からログアウトしてください",
        "accesswith": "としてドキュメントにアクセスするには",
        "triggertext": "24時間制: 0は真夜中、12は正午",
        "deletetext": "すべてのインポート/エクスポートを停止",
        "startbutton": "開始",
        "stopbutton": "停止",
        "fulltriggertext": "シートとGoogleカレンダーの変更の毎日のインポート/エクスポートを設定します。エクスポート->インポートを行う場合、Googleカレンダーの変更を上書きしないように注意してください。選択されたシートは同時にインポート/エクスポートを実行しますが、正確にはその時間ではありません。",
        "notrigger": "現在、このシートを同期していません",
        "yestrigger": "現在、このシートを自動的に同期しています",
        "autoimport": "自動インポート/エクスポート",
        "resetstatus": "ステータスカラーをリセット",
        "autoimportexport": "自動インポート/エクスポート",
        "importtext": "インポート",
        "exporttext": "エクスポート",
        "selectsyncmethod": "同期順序"
    }
};
