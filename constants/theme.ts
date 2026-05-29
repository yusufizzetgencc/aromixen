/**
 * AURAM - Lüks Parfüm Öneri Uygulaması
 * Premium Tema ve Renk Sistemi
 * Elegant Mor/Fuşya Gradient Teması
 */

import { Platform } from 'react-native';

// Lüks parfüm temalı renk paleti - Velvet & Amber
export const Colors = {
  light: {
    background: '#FDFBF7',
    backgroundSecondary: '#F7F3EB',
    backgroundTertiary: '#F0EBE1',
    surface: '#FFFFFF',
    textPrimary: '#2D2833',
    textSecondary: '#756C7D',
    primary: '#5C4066',
    accent: '#D6A06F',
    gradient: ['#FDFBF7', '#F1E9F5'] as [string, string, ...string[]],
    // Mappings for semantic names
    text: '#2D2833',
    textMuted: '#756C7D',
    card: '#FFFFFF',
    cardBorder: '#F1E9F5',
    border: '#F1E9F5',
    tint: '#5C4066',
    tintSecondary: '#756C7D',
    icon: '#756C7D',
    tabIconDefault: '#756C7D',
    tabIconSelected: '#5C4066',
    success: '#2ECC71',
    error: '#E63946',
    warning: '#D6A06F',
    info: '#5C4066',
    overlay: 'rgba(45, 40, 51, 0.5)',
  },
  dark: {
    background: '#110C14',
    backgroundSecondary: '#16111A',
    backgroundTertiary: '#1A141E',
    surface: '#1A141E',
    textPrimary: '#F0EBF5',
    textSecondary: '#9D93A5',
    primary: '#9F83A8',
    accent: '#E5B887',
    gradient: ['#110C14', '#281E30'] as [string, string, ...string[]],
    // Mappings for semantic names
    text: '#F0EBF5',
    textMuted: '#9D93A5',
    card: '#1A141E',
    cardBorder: '#281E30',
    border: '#281E30',
    tint: '#9F83A8',
    tintSecondary: '#9D93A5',
    icon: '#9D93A5',
    tabIconDefault: '#9D93A5',
    tabIconSelected: '#9F83A8',
    success: '#2ECC71',
    error: '#FF6B6B',
    warning: '#E5B887',
    info: '#9F83A8',
    overlay: 'rgba(17, 12, 20, 0.8)',
  },
};

// Modern ve zarif yazı tipleri
export const Fonts = Platform.select({
  ios: {
    thin: 'System',
    light: 'System',
    regular: 'System',
    medium: 'System',
    semiBold: 'System',
    bold: 'System',
    display: 'System',
  },
  android: {
    thin: 'sans-serif-thin',
    light: 'sans-serif-light',
    regular: 'sans-serif',
    medium: 'sans-serif-medium',
    semiBold: 'sans-serif-medium',
    bold: 'sans-serif-bold',
    display: 'sans-serif',
  },
  default: {
    thin: 'System',
    light: 'System',
    regular: 'System',
    medium: 'System',
    semiBold: 'System',
    bold: 'System',
    display: 'System',
  },
});

// Font boyutları
export const FontSizes = {
  xs: 11,
  sm: 13,
  base: 15,
  md: 17,
  lg: 20,
  xl: 24,
  '2xl': 30,
  '3xl': 36,
  '4xl': 48,
  '5xl': 60,
};

// Font ağırlıkları
export const FontWeights = {
  thin: '100' as const,
  light: '300' as const,
  regular: '400' as const,
  medium: '500' as const,
  semiBold: '600' as const,
  bold: '700' as const,
  extraBold: '800' as const,
};

// Boşluklar
export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 40,
  '4xl': 48,
  '5xl': 64,
};

// Border radius
export const BorderRadius = {
  none: 0,
  sm: 4,
  base: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  full: 9999,
};

// Gölgeler - Platform uyumlu ve lüks görünüm
const createShadow = (offsetY: number, blur: number, opacity: number, elevation: number, color: string = '#5C4066') => {
  if (Platform.OS === 'web') {
    return {
      boxShadow: `0px ${offsetY}px ${blur}px rgba(92, 64, 102, ${opacity})`, // Using #5C4066 rgb equivalent roughly
    };
  }
  return {
    shadowColor: color,
    shadowOffset: { width: 0, height: offsetY },
    shadowOpacity: opacity,
    shadowRadius: blur / 2,
    elevation: elevation,
  };
};

export const Shadows = {
  light: {
    sm: createShadow(2, 4, 0.08, 2, '#5C4066'),
    base: createShadow(4, 8, 0.12, 4, '#5C4066'),
    md: createShadow(6, 16, 0.15, 6, '#5C4066'),
    lg: createShadow(8, 24, 0.18, 10, '#5C4066'),
    xl: createShadow(12, 32, 0.22, 16, '#5C4066'),
    glow: {
      shadowColor: '#D6A06F',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.3,
      shadowRadius: 12,
      elevation: 8,
    },
  },
  dark: {
    sm: createShadow(2, 4, 0.4, 2, '#9F83A8'),
    base: createShadow(4, 8, 0.5, 4, '#9F83A8'),
    md: createShadow(6, 16, 0.6, 6, '#9F83A8'),
    lg: createShadow(8, 24, 0.7, 10, '#9F83A8'),
    xl: createShadow(12, 32, 0.8, 16, '#9F83A8'),
    glow: {
      shadowColor: '#E5B887',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 16,
      elevation: 12,
    },
  },
};

// Animasyon süreleri
export const AnimationDurations = {
  fast: 150,
  normal: 300,
  slow: 500,
  verySlow: 800,
};

// Koku tipi renkleri - Velvet & Amber estetiğine uygun
export const ScentTypeColors: Record<string, string> = {
  'Çiçeksi': '#B38B9B',
  'Odunsu': '#705446',
  'Ferah': '#7A9B94',
  'Amber': '#D6A06F',
  'Baharatlı': '#964B4B',
  'Meyvemsi': '#C48A96',
  'Tatlı': '#D4A3B3',
  'Yeşil': '#6C8C69',
  'Oryantal': '#A68A56',
  'Aquatik': '#6B8C96',
  'Deri': '#54433A',
  'Pudralı': '#C7B6BA',
};

// Koku tipi ikonları
export const ScentTypeIcons: Record<string, string> = {
  'Çiçeksi': 'flower-outline',
  'Odunsu': 'leaf-outline',
  'Ferah': 'water-outline',
  'Amber': 'flame-outline',
  'Baharatlı': 'sparkles-outline',
  'Meyvemsi': 'nutrition-outline',
  'Tatlı': 'ice-cream-outline',
  'Yeşil': 'leaf-outline',
  'Oryantal': 'moon-outline',
  'Aquatik': 'boat-outline',
  'Deri': 'shield-outline',
  'Pudralı': 'ellipse-outline',
};
