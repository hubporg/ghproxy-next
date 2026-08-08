import { Github, Mail, MessageCircle, Scale } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-auto font-outfit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-40 lg:justify-between lg:items-start">
          {/* Brand Section - 左侧区域 */}
          <div className="lg:flex-shrink-0">
            {/* Logo */}
            <div >
              <h3 className="font-bold text-2xl">
                GitHub <span className="text-blue-600">Proxy</span>
              </h3>
            </div>

            {/* Description */}
            <p className="max-w-xs mt-4 text-sm leading-5 text-gray-500 dark:text-gray-400">
              支持 API、Git Clone、Releases、Archive、Gist、Raw 等资源下载加速，提升 GitHub 文件下载体验。
            </p>

            {/* MIT License */}
            {/* <div className="mt-4">
              <p className="flex items-center max-w-xs gap-2 font-semibold leading-5 text-gray-900 dark:text-gray-100">
                <Scale className="w-4 h-4" />
                MIT License
              </p>
              <p className="max-w-xs mt-1 text-sm leading-5 text-gray-500 dark:text-gray-400">
                本站所有内容均基于{" "}
                <a className="underline underline-offset-2 hover:text-blue-600 dark:hover:text-blue-400" href="https://opensource.org/license/mit" target="_blank" rel="noreferrer">
                  MIT 开源协议
                </a>
                {" "}发布。
              </p>
            </div> */}

            {/* Social Links */}
            <div className="flex gap-6 mt-8">
              <a className="transition text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" href="https://github.com/hubporg" target="_blank" rel="noreferrer">
                <span className="sr-only">GitHub</span>
                <Github className="w-6 h-6" />
              </a>
              <a className="transition text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" href="https://qm.qq.com/q/JWSV7CSGEs" target="_blank" rel="noreferrer">
                <span className="sr-only">Telegram</span>
                <MessageCircle className="w-6 h-6" />
              </a>
              <a className="transition text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" href="mailto:hubp@hubp.org" rel="noopener" target="_blank">
                <span className="sr-only">Email</span>
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:flex-1 lg:grid-cols-3 lg:gap-x-2">
            {/* Resources */}
            <div>
              <p className="font-semibold dark:text-white">资源</p>
              <div className="mt-6 space-y-4 text-sm">
                <a className="block transition text-gray-500 dark:text-gray-400 hover:opacity-75" href="#">
                  Docker Proxy
                </a>
                <a className="block transition text-gray-500 dark:text-gray-400 hover:opacity-75" href="#">
                  Docker Relay Service
                </a>
                <a className="block transition text-gray-500 dark:text-gray-400 hover:opacity-75" href="https://kms.akams.cn" target="_blank">
                  KMS Activation
                </a>
              </div>
            </div>

            {/* Terms */}
            <div>
              <p className="font-semibold dark:text-white">法律</p>
              <div className="mt-6 space-y-4 text-sm">
                <a className="block transition text-gray-500 dark:text-gray-400 hover:opacity-75" href="/terms">
                  服务条款
                </a>
                <a className="block transition text-gray-500 dark:text-gray-400 hover:opacity-75" href="/privacy">
                  隐私政策
                </a>
                <a className="block transition text-gray-500 dark:text-gray-400 hover:opacity-75" href="/disclaimer">
                  免责声明
                </a>
              </div>
            </div>

            {/* Connect */}
            <div>
              <p className="font-semibold dark:text-white">关于</p>
              <div className="mt-6 space-y-4 text-sm">
                <a className="block transition text-gray-500 dark:text-gray-400 hover:opacity-75" href="/about">
                  关于我们
                </a>
                <a className="block transition text-gray-500 dark:text-gray-400 hover:opacity-75" href="/contact">
                  联系我们
                </a>
                <a className="block transition text-gray-500 dark:text-gray-400 hover:opacity-75" href="https://github.com/hubporg/ghproxy-next/issues" target="_blank" rel="noreferrer">
                  反馈建议
                </a>
                <a className="block transition text-gray-500 dark:text-gray-400 hover:opacity-75" href="https://akams.cn/donate" target="_blank" rel="noreferrer">
                  捐赠支持
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <p> © 2026 <a className="dark:text-blue-400" style={{color: '#155DFC', textDecoration: 'none'}} href="https://www.hubp.org" target="_blank">hubp.org</a>. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <a className="hover:text-gray-900 focus:text-gray-900 dark:hover:text-white dark:focus:text-white transition-colors" href="https://icp.felicity.land/?keyword=20251111" target="_blank" rel="noreferrer">幸ICP备20251111号</a>
              <span className="hidden sm:inline">|</span>
              <a className="hover:text-gray-900 focus:text-gray-900 dark:hover:text-white dark:focus:text-white transition-colors" href="https://icp.gov.moe/?keyword=20251215" target="_blank" rel="noreferrer">萌ICP备20251215号</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
