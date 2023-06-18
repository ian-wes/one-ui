import {createTokens} from "tamagui";

/**
 * Raw color from figma
 */
const palette = {
    black: '#000',
    white: '#fff',
    royal: '#3a006a',
    //That's what it's called in figma
    'royal-inactive': '#CDBFD8',
    aubergine: '#4F0084',
    purple: '#9900F1',
    violet: '#7400AF',
    //Renamed to actual color as in figma it's called status-tooltip
    'russian-violet': '#270146',
    orchid: '#BA66FF',
    mauve: '#DEA9FF',
    wisteria: '#F4E7FF',
    prince: '#B099C3',

    parakeet: '#00E28F',
    'parakeet-pressed': '#00cb81',
    'parakeet-disabled': '#66eebc',
    'parakeet-loading': '#33e8a5',

    grass: '#00BA7E',

    bubblegum: '#B0F4DE',
    mint: '#c3f7e6',
    turquoise: '#99E3CB',

    slate: '#666666',
    forest: '#017e6f',
    'status-warning': '#E99D08',
    'status-error': '#CB1F18',

    'shades-cool-grey': '#9aa0a6',
    'shades-pumice': '#d7d8e0',
    'shades-ash': '#ebebeb',
    'shades-light': '#f7f7f7',
    'shades-white': '#fff',
};

//Tamgui (Component Library themable) => react native web
const color = {
    text: palette.royal,
    'text.dark': palette.black,
    'text.subtle': palette.slate,
    'text.disabled': palette['royal-inactive'],
    'text.light': palette.white,

    brand: palette.aubergine,
    'brand-subtlest': palette.orchid,
    'brand.subtler': palette.purple,
    'brand.subtle': palette.violet,
    'brand.bold': palette.royal,
    'brand.bolder': palette['russian-violet'],

    'accent.mauve.subtle': palette.wisteria,
    'accent.mauve': palette.mauve,

    'accent.lavender': palette['royal-inactive'],
    'accent.lavender.bold': palette.prince,

    'accent.green.subtlest': palette['parakeet-disabled'],
    'accent.green.subtle': palette['parakeet-loading'],
    'accent.green': palette.parakeet,
    'accent.green.bold': palette['parakeet-pressed'],
    'accent.green.bolder': palette.grass,

    'accent.grey.subtle': palette['shades-light'],
    'accent.grey': palette['shades-ash'],
    'accent.grey.bold': palette['shades-pumice'],
    'accent.grey.bolder': palette['shades-cool-grey'],
    'accent.grey.boldest': '#666',

    'feedback.success': palette.forest,
    'feedback.info': palette.wisteria,
    'feedback.warning': palette['status-warning'],
    'feedback.error': palette['status-error'],
    'feedback.positive': palette.mint,
    'feedback.negative': palette['shades-pumice'],
    'feedback.neutral': palette['shades-light'],
}

const size = {
    none: '0',
    '0.5x': '4px',
    '1x': '8px',
    true: '8px',
    '1.5x': '12px',
    '2x': '16px',
    '2.5x': '20px',
    '3x': '24px',
    '4x': '32px',
    '5x': '40px',
    '6x': '48px',
    '7x': '56px',
    '8x': '64px',
}

const space = {
    none: '0',
    '0.5x': '4px',
    '1x': '8px',
    true: '8px',
    '1.5x': '12px',
    '2x': '16px',
    '2.5x': '20px',
    '3x': '24px',
    '4x': '32px',
    '5x': '40px',
    '6x': '48px',
    '7x': '56px',
    '8x': '64px',
}

const zIndex = {
    0: 0,
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
}

const radius = {
    none: '0',
    '1x': '4px',
    true: '4px',
    '2x': '8px',
    '3x': '12px',
    '4x': '16px',
    round: '9999px',
}

export const tokens = createTokens({
    color,
    space,
    size,
    radius,
    zIndex,
})


