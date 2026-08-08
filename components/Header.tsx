"use client";

import { useEffect, useRef, useState } from "react";
import { THEME_STORAGE_KEY, THEME_DARK, THEME_LIGHT, THEME_SYSTEM } from './constants';
import { Icon } from "@iconify/react";
import { siteConfig } from "@/config/site";

type Theme = 'light' | 'dark' | 'system';

const THEME_OPTIONS: { value: Theme; label: string; icon: string }[] = [
  { value: 'light', label: '浅色', icon: 'solar:sun-bold' },
  { value: 'dark', label: '深色', icon: 'solar:moon-stars-bold' },
  { value: 'system', label: '跟随系统', icon: 'solar:monitor-bold' },
];

export default function Header() {
  // ============================================================
  // State Declarations
  // ============================================================
  const [theme, setThemeState] = useState<Theme>('system');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // ============================================================
  // 主题管理相关
  // ============================================================
  /**
   * 判断指定主题在当前系统偏好下是否应启用深色
   */
  function isDarkActive(t: Theme): boolean {
    if (t === 'dark') return true;
    if (t === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  /**
   * 应用主题到 documentElement
   */
  function applyTheme(t: Theme) {
    const dark = isDarkActive(t);
    document.documentElement.classList.toggle('dark', dark);
  }

  /**
   * 初始化主题：读取 localStorage，无值默认 system
   */
  useEffect(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    const initial: Theme =
      saved === THEME_DARK || saved === THEME_LIGHT || saved === THEME_SYSTEM ? (saved as Theme) : THEME_SYSTEM;
    setThemeState(initial);
    applyTheme(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * 跟随系统模式下，监听系统主题变化实时切换
   */
  useEffect(() => {
    if (theme !== THEME_SYSTEM) return;
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => applyTheme(THEME_SYSTEM);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  /**
   * 下拉打开时：点击外部 / Esc 关闭
   */
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [menuOpen]);

  /**
   * 切换主题
   */
  function setTheme(t: Theme) {
    setThemeState(t);
    localStorage.setItem(THEME_STORAGE_KEY, t);
    applyTheme(t);
    setMenuOpen(false);
  }

  const currentOption = THEME_OPTIONS.find(o => o.value === theme) ?? THEME_OPTIONS[2];

  // ============================================================
  // JSX 渲染
  // ============================================================
  return (
    <header className="border-b border-gray-200 dark:border-gray-800 font-outfit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#ffffff] border border-slate-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-black transition-colors" aria-hidden="true">
                <path d="M7.75 11c-.69 0-1.25.56-1.25 1.25v1.5a1.25 1.25 0 1 0 2.5 0v-1.5C9 11.56 8.44 11 7.75 11zm1.27 4.5a.469.469 0 0 1 .48-.5h5a.47.47 0 0 1 .48.5c-.116 1.316-.759 2.5-2.98 2.5s-2.864-1.184-2.98-2.5zm7.23-4.5c-.69 0-1.25.56-1.25 1.25v1.5a1.25 1.25 0 1 0 2.5 0v-1.5c0-.69-.56-1.25-1.25-1.25z" />
                <path fillRule="evenodd" d="M21.255 3.82a1.725 1.725 0 0 0-2.141-1.195c-.557.16-1.406.44-2.264.866c-.78.386-1.647.93-2.293 1.677A18.442 18.442 0 0 0 12 5c-.93 0-1.784.059-2.569.17c-.645-.74-1.505-1.28-2.28-1.664a13.876 13.876 0 0 0-2.265-.866a1.725 1.725 0 0 0-2.141 1.196a23.645 23.645 0 0 0-.69 3.292c-.125.97-.191 2.07-.066 3.112C1.254 11.882 1 13.734 1 15.527C1 19.915 3.13 23 12 23c8.87 0 11-3.053 11-7.473c0-1.794-.255-3.647-.99-5.29c.127-1.046.06-2.15-.066-3.125a23.652 23.652 0 0 0-.689-3.292zM20.5 14c.5 3.5-1.5 6.5-8.5 6.5s-9-3-8.5-6.5c.583-4 3-6 8.5-6s7.928 2 8.5 6z" />
              </svg>
            </div>
            <a className="text-xl font-semibold hover:opacity-80 transition-opacity" href="/">
              {siteConfig.name}
            </a>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <nav className="hidden md:flex gap-2">
              <a className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-200 rounded-lg px-3.5 py-1.5 text-[13px] font-semibold leading-[17px] text-slate-900 hover:bg-slate-200 transition-colors" href="https://cdn.jsdelivr.net/gh/521xueweihan/GitHub520@main/hosts" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
                </svg>
                GitHub Hosts
              </a>
              <a className="inline-flex items-center gap-1.5 bg-slate-100 border border-slate-200 rounded-lg px-3.5 py-1.5 text-[13px] font-semibold leading-[17px] text-slate-900 hover:bg-slate-200 transition-colors" href={siteConfig.links.donate} target="_blank" rel="noreferrer">
                <Icon className="w-4 h-4" icon="solar:chat-square-like-bold"/>
                捐赠支持
              </a>
            </nav>

            {/* Theme Switcher */}
            <div className="relative" ref={menuRef}>
              <button
                type="button"
                onClick={() => setMenuOpen(o => !o)}
                className="flex items-center justify-center w-[34px] h-[31px] text-slate-600 bg-slate-100 border border-slate-200 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
                title="切换主题"
                aria-haspopup="menu"
                aria-expanded={menuOpen}
                aria-label="切换主题"
              >
                <Icon icon={currentOption.icon} className="w-5 h-5" />
              </button>
              {menuOpen && (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl overflow-hidden z-50"
                >
                  {THEME_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      type="button"
                      role="menuitemradio"
                      aria-checked={theme === opt.value}
                      onClick={() => setTheme(opt.value)}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-sm text-left transition-colors ${
                        theme === opt.value
                          ? 'text-developer_ide-400 bg-gray-50 dark:bg-gray-700'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon icon={opt.icon} className="w-4 h-4 flex-shrink-0" />
                      <span className="flex-1">{opt.label}</span>
                      {theme === opt.value && <Icon icon="solar:check-bold" className="w-4 h-4 flex-shrink-0" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
