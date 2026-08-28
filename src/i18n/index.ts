export type Locale = 'zh-CN' | 'zh-TW' | 'en' | 'ja';

export const LOCALES: { code: Locale; label: string }[] = [
  { code: 'zh-CN', label: '简体中文' },
  { code: 'zh-TW', label: '繁體中文' },
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' },
];

export const DEFAULT_LOCALE: Locale = 'zh-CN';

type Dict = Record<string, string>;

const zhCN: Dict = {
  'nav.projects': '投稿列表',
  'nav.articles': '专栏',
  'nav.discussions': '讨论',
  'nav.faq': '常见问题',
  'nav.about': '网站介绍',
  'nav.login': '登录',

  'theme.label': '主题',
  'theme.auto': '跟随系统',
  'theme.light': '浅色',
  'theme.dark': '深色',

  'home.tagline': '内容去中心化储存的基于 Git 的无头 CMS',
  'home.hero': '合成引擎工程，自由分享',
  'home.intro':
    'Sector Vault 将每一份工程稿件储存在用户自己的 Git 仓库中，主站点只维护轻量索引。支持 GitHub、Gitee、AtomGit 多平台部署，许可证清晰，永不失联。',
  'home.latest': '最新投稿',
  'home.viewAll': '查看全部',
  'home.submissionCount': '索引稿件',
  'home.userCount': '索引用户',

  'project.title': '投稿列表',
  'project.searchPlaceholder': '输入关键字搜索稿件…',
  'article.title': '专栏列表',

  'filter.track': '关联曲目',
  'filter.engine': '合成引擎',
  'filter.voicebank': '使用声库',
  'filter.songLanguage': '歌曲语言',

  'label.date': '投稿时间',
  'label.user': '投稿用户',
  'label.tracks': '关联曲目',
  'label.engines': '合成引擎',
  'label.voicebanks': '使用声库',
  'label.songLanguages': '歌曲语言',
  'label.license': '许可证',
  'label.stars': '收藏',

  'collection.submit': '投稿',
  'collection.edit': '编辑',
  'collection.delete': '删除',
  'collection.save': '保存',
  'collection.deleteConfirmText': '删除后无法恢复，请输入仓库名确认删除。',

  'detail.media': '仓库媒体',
  'detail.files': '工程文件',
  'detail.release': '关联 Release',
  'detail.comments': '留言',
  'detail.download': '下载',
  'detail.decrypt': '解密下载',
  'detail.password': '密码',
  'detail.encrypted': '加密',
  'detail.compressed': '压缩',
  'detail.attachments': '附件',
  'detail.interactions': '互动记录',
  'detail.loadError': '内容加载失败',

  'params.with': '有参',
  'params.tuned': '微调',
  'params.none': '无参数',

  'type.project': '工程',
  'type.article': '专栏',

  'common.search': '搜索',
  'common.cancel': '取消',
  'common.loading': '加载中…',
  'common.prevPage': '上一页',
  'common.nextPage': '下一页',
  'common.noResults': '没有匹配的稿件',
  'common.all': '全部',
  'common.comments': '评论',
  'common.reactions': '点赞',

  'discussions.title': '讨论',
  'discussions.description': '讨论区由主站点仓库的 Discussions 提供，登录后即可参与讨论。',
  'discussions.open': '前往讨论区',

  'faq.title': '常见问题',
  'faq.description': '以下内容来自主站点仓库的 Wiki。',

  'about.title': '网站介绍',
  'about.arch': '架构',
  'about.archText':
    'Sector Vault 是一个去中心化的工程分享站点：稿件全文与媒体保存在投稿者自己的内容仓库中，主站点仅维护按月归档的轻量索引。用户空间可独立部署为静态页面，索引仓库开放 PR 投稿。',
  'about.advantages': '优势',
  'about.advantage1': '内容储存在你自己的 Git 仓库，平台迁移零成本',
  'about.advantage2': '索引与站点共仓库分支管理，开源透明',
  'about.advantage3': '支持 GitHub / Gitee / AtomGit 多平台',
  'about.advantage4': '许可证清晰，支持目录级许可证与加密工程',
  'about.stats': '数据规模',

  'user.title': '用户空间',
  'user.projects': '工程合集',
  'user.articles': '专栏合集',
  'user.newCollection': '新建集合',
  'user.more': '更多',

  'new.title': '新建投稿',
  'edit.title': '编辑稿件',

  'footer.powered': 'Powered by Sector Vault Project',
};

const zhTW: Dict = {
  'nav.projects': '投稿列表',
  'nav.articles': '專欄',
  'nav.discussions': '討論',
  'nav.faq': '常見問題',
  'nav.about': '網站介紹',
  'nav.login': '登入',

  'theme.label': '主題',
  'theme.auto': '跟隨系統',
  'theme.light': '淺色',
  'theme.dark': '深色',

  'home.tagline': '內容去中心化儲存的基於 Git 的無頭 CMS',
  'home.hero': '合成引擎工程，自由分享',
  'home.intro':
    'Sector Vault 將每一份工程稿件儲存在使用者自己的 Git 倉庫中，主站點只維護輕量索引。支援 GitHub、Gitee、AtomGit 多平台部署，授權條款清晰，永不失聯。',
  'home.latest': '最新投稿',
  'home.viewAll': '查看全部',
  'home.submissionCount': '索引稿件',
  'home.userCount': '索引使用者',

  'project.title': '投稿列表',
  'project.searchPlaceholder': '輸入關鍵字搜尋稿件…',
  'article.title': '專欄列表',

  'filter.track': '關聯曲目',
  'filter.engine': '合成引擎',
  'filter.voicebank': '使用聲庫',
  'filter.songLanguage': '歌曲語言',

  'label.date': '投稿時間',
  'label.user': '投稿使用者',
  'label.tracks': '關聯曲目',
  'label.engines': '合成引擎',
  'label.voicebanks': '使用聲庫',
  'label.songLanguages': '歌曲語言',
  'label.license': '授權條款',
  'label.stars': '收藏',

  'collection.submit': '投稿',
  'collection.edit': '編輯',
  'collection.delete': '刪除',
  'collection.save': '儲存',
  'collection.deleteConfirmText': '刪除後無法復原，請輸入倉庫名確認刪除。',

  'detail.media': '倉庫媒體',
  'detail.files': '工程檔案',
  'detail.release': '關聯 Release',
  'detail.comments': '留言',
  'detail.download': '下載',
  'detail.decrypt': '解密下載',
  'detail.password': '密碼',
  'detail.encrypted': '加密',
  'detail.compressed': '壓縮',
  'detail.attachments': '附件',
  'detail.interactions': '互動記錄',
  'detail.loadError': '內容載入失敗',

  'params.with': '有參',
  'params.tuned': '微調',
  'params.none': '無參數',

  'type.project': '工程',
  'type.article': '專欄',

  'common.search': '搜尋',
  'common.cancel': '取消',
  'common.loading': '載入中…',
  'common.prevPage': '上一頁',
  'common.nextPage': '下一頁',
  'common.noResults': '沒有符合的稿件',
  'common.all': '全部',
  'common.comments': '留言',
  'common.reactions': '按讚',

  'discussions.title': '討論',
  'discussions.description': '討論區由主站點倉庫的 Discussions 提供，登入後即可參與討論。',
  'discussions.open': '前往討論區',

  'faq.title': '常見問題',
  'faq.description': '以下內容來自主站點倉庫的 Wiki。',

  'about.title': '網站介紹',
  'about.arch': '架構',
  'about.archText':
    'Sector Vault 是一個去中心化的工程分享站點：稿件全文與媒體保存在投稿者自己的內容倉庫中，主站點僅維護按月歸檔的輕量索引。使用者空間可獨立部署為靜態頁面，索引倉庫開放 PR 投稿。',
  'about.advantages': '優勢',
  'about.advantage1': '內容儲存在你自己的 Git 倉庫，平台遷移零成本',
  'about.advantage2': '索引與站點共倉庫分支管理，開源透明',
  'about.advantage3': '支援 GitHub / Gitee / AtomGit 多平台',
  'about.advantage4': '授權條款清晰，支援目錄級授權與加密工程',
  'about.stats': '資料規模',

  'user.title': '使用者空間',
  'user.projects': '工程合集',
  'user.articles': '專欄合集',
  'user.newCollection': '新建集合',
  'user.more': '更多',

  'new.title': '新建投稿',
  'edit.title': '編輯稿件',

  'footer.powered': 'Powered by Sector Vault Project',
};

const en: Dict = {
  'nav.projects': 'Projects',
  'nav.articles': 'Articles',
  'nav.discussions': 'Discussions',
  'nav.faq': 'FAQ',
  'nav.about': 'About',
  'nav.login': 'Sign in',

  'theme.label': 'Theme',
  'theme.auto': 'System',
  'theme.light': 'Light',
  'theme.dark': 'Dark',

  'home.tagline': 'A Git-based headless CMS with decentralized content storage',
  'home.hero': 'Share synth-engine projects, freely',
  'home.intro':
    'Sector Vault stores every submission in the author’s own Git repository while the main site keeps only a lightweight index. Deploy on GitHub, Gitee or AtomGit, with clear licensing and no lock-in.',
  'home.latest': 'Latest submissions',
  'home.viewAll': 'View all',
  'home.submissionCount': 'Indexed submissions',
  'home.userCount': 'Indexed users',

  'project.title': 'Projects',
  'project.searchPlaceholder': 'Search submissions by keyword…',
  'article.title': 'Articles',

  'filter.track': 'Related track',
  'filter.engine': 'Synth engine',
  'filter.voicebank': 'Voicebank',
  'filter.songLanguage': 'Song language',

  'label.date': 'Submitted',
  'label.user': 'Author',
  'label.tracks': 'Related tracks',
  'label.engines': 'Synth engines',
  'label.voicebanks': 'Voicebanks',
  'label.songLanguages': 'Song languages',
  'label.license': 'License',
  'label.stars': 'Stars',

  'collection.submit': 'Submit',
  'collection.edit': 'Edit',
  'collection.delete': 'Delete',
  'collection.save': 'Save',
  'collection.deleteConfirmText': 'This cannot be undone. Type the repository name to confirm deletion.',

  'detail.media': 'Repository media',
  'detail.files': 'Project files',
  'detail.release': 'Linked release',
  'detail.comments': 'Comments',
  'detail.download': 'Download',
  'detail.decrypt': 'Decrypt & download',
  'detail.password': 'Password',
  'detail.encrypted': 'Encrypted',
  'detail.compressed': 'Compressed',
  'detail.attachments': 'Attachments',
  'detail.interactions': 'Interactions',
  'detail.loadError': 'Failed to load content',

  'params.with': 'With params',
  'params.tuned': 'Tuned',
  'params.none': 'No params',

  'type.project': 'Project',
  'type.article': 'Article',

  'common.search': 'Search',
  'common.cancel': 'Cancel',
  'common.loading': 'Loading…',
  'common.prevPage': 'Previous',
  'common.nextPage': 'Next',
  'common.noResults': 'No matching submissions',
  'common.all': 'All',
  'common.comments': 'Comments',
  'common.reactions': 'Reactions',

  'discussions.title': 'Discussions',
  'discussions.description':
    'The discussion board is powered by the Discussions of the main-site repository.',
  'discussions.open': 'Open discussions',

  'faq.title': 'FAQ',
  'faq.description': 'The following content is served from the main-site repository wiki.',

  'about.title': 'About',
  'about.arch': 'Architecture',
  'about.archText':
    'Sector Vault is a decentralized project-sharing site: full content and media live in the author’s own content repository, while the main site maintains only a lightweight, monthly-archived index. User spaces can be deployed standalone, and the index repository accepts submissions via PR.',
  'about.advantages': 'Advantages',
  'about.advantage1': 'Content lives in your own Git repository — zero-cost migration',
  'about.advantage2': 'Index and site share one repository on separate branches, fully open',
  'about.advantage3': 'Supports GitHub / Gitee / AtomGit',
  'about.advantage4': 'Clear licensing with per-folder licenses and encrypted projects',
  'about.stats': 'Scale',

  'user.title': 'User space',
  'user.projects': 'Project collections',
  'user.articles': 'Article collections',
  'user.newCollection': 'New collection',
  'user.more': 'More',

  'new.title': 'New submission',
  'edit.title': 'Edit submission',

  'footer.powered': 'Powered by Sector Vault Project',
};

const ja: Dict = {
  'nav.projects': '作品一覧',
  'nav.articles': 'コラム',
  'nav.discussions': 'ディスカッション',
  'nav.faq': 'よくある質問',
  'nav.about': 'サイト紹介',
  'nav.login': 'ログイン',

  'theme.label': 'テーマ',
  'theme.auto': 'システムに従う',
  'theme.light': 'ライト',
  'theme.dark': 'ダーク',

  'home.tagline': 'コンテンツを分散保存する、Git ベースのヘッドレス CMS',
  'home.hero': '合成エンジンプロジェクトを、自由に共有',
  'home.intro':
    'Sector Vault はすべての作品を作者自身の Git リポジトリに保存し、メインサイトは軽量なインデックスのみを管理します。GitHub・Gitee・AtomGit での運用に対応し、ライセンスも明確です。',
  'home.latest': '最新投稿',
  'home.viewAll': 'すべて見る',
  'home.submissionCount': 'インデックス済み作品',
  'home.userCount': 'インデックス済みユーザー',

  'project.title': '作品一覧',
  'project.searchPlaceholder': 'キーワードで作品を検索…',
  'article.title': 'コラム一覧',

  'filter.track': '関連楽曲',
  'filter.engine': '合成エンジン',
  'filter.voicebank': '音声ライブラリ',
  'filter.songLanguage': '楽曲言語',

  'label.date': '投稿日',
  'label.user': '投稿者',
  'label.tracks': '関連楽曲',
  'label.engines': '合成エンジン',
  'label.voicebanks': '音声ライブラリ',
  'label.songLanguages': '楽曲言語',
  'label.license': 'ライセンス',
  'label.stars': 'スター',

  'collection.submit': '投稿',
  'collection.edit': '編集',
  'collection.delete': '削除',
  'collection.save': '保存',
  'collection.deleteConfirmText': '削除すると元に戻せません。確認のためリポジトリ名を入力してください。',

  'detail.media': 'リポジトリメディア',
  'detail.files': 'プロジェクトファイル',
  'detail.release': '関連 Release',
  'detail.comments': 'コメント',
  'detail.download': 'ダウンロード',
  'detail.decrypt': '復号してダウンロード',
  'detail.password': 'パスワード',
  'detail.encrypted': '暗号化',
  'detail.compressed': '圧縮',
  'detail.attachments': '添付ファイル',
  'detail.interactions': 'リアクション',
  'detail.loadError': 'コンテンツの読み込みに失敗しました',

  'params.with': 'パラメータあり',
  'params.tuned': '調整済み',
  'params.none': 'パラメータなし',

  'type.project': 'プロジェクト',
  'type.article': 'コラム',

  'common.search': '検索',
  'common.cancel': 'キャンセル',
  'common.loading': '読み込み中…',
  'common.prevPage': '前へ',
  'common.nextPage': '次へ',
  'common.noResults': '該当する作品がありません',
  'common.all': 'すべて',
  'common.comments': 'コメント',
  'common.reactions': 'いいね',

  'discussions.title': 'ディスカッション',
  'discussions.description':
    'ディスカッションはメインサイトリポジトリの Discussions で提供されています。',
  'discussions.open': 'ディスカッションへ',

  'faq.title': 'よくある質問',
  'faq.description': '以下の内容はメインサイトリポジトリの Wiki から表示されています。',

  'about.title': 'サイト紹介',
  'about.arch': 'アーキテクチャ',
  'about.archText':
    'Sector Vault は分散型の作品共有サイトです。作品本文とメディアは投稿者自身のコンテンツリポジトリに保存され、メインサイトは月ごとにアーカイブされる軽量なインデックスのみを管理します。ユーザースペースは単独での静的デプロイにも対応し、インデックスリポジトリは PR による投稿を受け付けます。',
  'about.advantages': 'メリット',
  'about.advantage1': 'コンテンツは自分の Git リポジトリに保存され、移行コストはゼロ',
  'about.advantage2': 'インデックスとサイトは同一リポジトリの別ブランチで管理、完全にオープン',
  'about.advantage3': 'GitHub / Gitee / AtomGit に対応',
  'about.advantage4': 'ディレクトリ単位のライセンスと暗号化プロジェクトに対応',
  'about.stats': '規模',

  'user.title': 'ユーザースペース',
  'user.projects': 'プロジェクトコレクション',
  'user.articles': 'コラムコレクション',
  'user.newCollection': '新しいコレクション',
  'user.more': 'もっと見る',

  'new.title': '新規投稿',
  'edit.title': '作品を編集',

  'footer.powered': 'Powered by Sector Vault Project',
};

const dicts: Record<Locale, Dict> = { 'zh-CN': zhCN, 'zh-TW': zhTW, en, ja };

export function normalizeLocale(locale: string | undefined): Locale {
  if (locale && locale in dicts) return locale as Locale;
  return DEFAULT_LOCALE;
}

export function t(locale: Locale, key: string): string {
  return dicts[locale]?.[key] ?? dicts[DEFAULT_LOCALE][key] ?? key;
}

/** 生成带语言前缀的路径（默认语言不带前缀） */
export function localePath(locale: Locale, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return locale === DEFAULT_LOCALE ? normalized : `/${locale}${normalized}`;
}
