import React, { useEffect, useState } from 'react';

const themes = {
  bright: {
    '--color-bg': '#004643',
    '--color-text-headline': '#fffffe',
    '--color-text-paragraph': '#abd1c6',
    '--color-primary': '#f9bc60',
    '--color-primary-contrast': '#001e1d',
    '--ill-stroke': '#001e1d',
    '--ill-main': '#e8e4e6',
    '--ill-highlight': '#f9bc60',
    '--ill-secondary': '#abd1c6',
    '--ill-tertiary': '#e16162'
  },
  dark: {
    '--color-bg': '#16161a',
    '--color-text-headline': '#fffffe',
    '--color-text-paragraph': '#94a1b2',
    '--color-primary': '#7f5af0',
    '--color-primary-contrast': '#fffffe',
    '--ill-stroke': '#010101',
    '--ill-main': '#fffffe',
    '--ill-highlight': '#7f5af0',
    '--ill-secondary': '#72757e',
    '--ill-tertiary': '#2cb67d'
  }
};

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('bright');

  // 初始化根据系统偏好
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'bright');
  }, []);

  // 更新 CSS 变量
  useEffect(() => {
    const root = document.documentElement;
    const vars = themes[theme];
    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    // 添加/移除 .dark 类
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'bright' ? 'dark' : 'bright'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 主题上下文
export const ThemeContext = React.createContext({
  theme: 'bright',
  toggleTheme: () => {}
});
