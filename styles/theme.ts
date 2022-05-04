export const XinMedia = {
    // 暖
    Lust: '#FF1D1D',
    FadedRed: '#FF8383',
    Cosmos: '#FFCDCD',
    Chardon: '#FFF2F2',
    // 冷
    Cerulean: '#00A2F0',
    PictonBlue: '#3CBCF4',
    SkyBlue: '#bbe5ff',
    BabyBlue: '#f3fafe',
    // 黃
    California: '#F39800',
    Saffron: '#F5C834',
    Lemon: '#fff0a7',
    // 藍綠
    DullCyan: '#43BEBF',
    Downy: '#6FD8D0',
    LightBlue: '#dbfbf0',
    DarkCyan: '#008B8B',
    // 黑白
    Black: '#000000',
    Dark: '#222222',
    MineShaft: '#333333',
    Steel: '#666666',
    Silver: '#999999',
    Gainsboro: '#DDDDDD',
    LilyWhite: '#EAEAEA',
    WildSand: '#F4F4F4',
    WhiteSmoke: '#FAFAFA',
    White: '#FFFFFF',
};

const theme = {
    screen: {
        phone: '320px', // 手機
        tablet: '768px', // 平板
        laptop: '980px', // 筆電、桌機
        desktop: '1280px', // 較大桌機
    },

    XinMedia: XinMedia,

    font: {
        S: '12px',
        M: '14px',
        L: '16px',
        XL: '18px',
        XXL: '20px',
        X3L: '22px',
        X4L: '24px',
        X5L: '26px',
        E: '28px',
        ES: '30px',
        EM: '32px',
        EL: '34px',
        EX: '36px',
    },

    XinMediaDesign: {
        Footer: {
            BackgroundColor: XinMedia.DullCyan,
            IconColor: XinMedia.White,
            ListColor: XinMedia.White,
            ContentMainColor: XinMedia.White,
            ContentSubColor: XinMedia.White,
        },
        Header: {
            PrimaryColor: XinMedia.DullCyan,
            SubColor: XinMedia.LightBlue,
            LogoColor: XinMedia.Dark,
            LinkColor: XinMedia.Steel,
            ButtomColor: XinMedia.Dark,
        },
    },
    Kader: {
        Card: {
            secondary: XinMedia.DullCyan,
        },
        Pagination: {
            PrimaryColor: XinMedia.DullCyan,
            BackgroundColor: XinMedia.White,
            BorderColor: '#ddd',
        },
    },
};

export default theme;
