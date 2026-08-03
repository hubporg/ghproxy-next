"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageSquare } from "lucide-react";

/**
 * 联系我们页面组件
 * 用于用户反馈建议和报告问题
 */
export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-purple-100 dark:bg-purple-900">
              <MessageSquare className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              联系我们
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              反馈建议 · 报告问题
            </p>
          </div>

          {/* 内容区域 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 sm:p-12">
            <div className="text-center space-y-6">
              {/* 欢迎文本 */}
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                感谢您使用 GitHub Proxy！
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                如果您有任何建议、问题或需要帮助，欢迎通过邮件与我们联系。
              </p>

              {/* 邮箱显示区域 - 防爬虫处理 */}
              <div className="my-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  联系邮箱：
                </p>
                <div className="flex items-center justify-center">
                  <code className="text-xl font-mono text-gray-900 dark:text-gray-100 px-4 py-2 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-600">
                    hubp<span aria-hidden="true">&#64;</span>hubp<span aria-hidden="true">&#46;</span>org
                  </code>
                </div>
              </div>

              {/* 可复制的邮箱按钮 */}
              <div className="pt-4">
                <button
                  onClick={() => {
                    const email = 'hubp' + '@' + 'hubp' + '.' + 'org';
                    
                    // 优先使用现代 Clipboard API
                    if (navigator.clipboard && navigator.clipboard.writeText) {
                      navigator.clipboard.writeText(email)
                        .then(() => {
                          alert('邮箱地址已复制到剪贴板');
                        })
                        .catch(() => {
                          alert('复制失败，请手动复制');
                        });
                    } else {
                      // 降级方案：使用 execCommand
                      try {
                        const textArea = document.createElement('textarea');
                        textArea.value = email;
                        textArea.style.position = 'fixed';
                        textArea.style.left = '-9999px';
                        document.body.appendChild(textArea);
                        textArea.select();
                        const successful = document.execCommand('copy');
                        document.body.removeChild(textArea);
                        
                        if (successful) {
                          alert('邮箱地址已复制到剪贴板');
                        } else {
                          alert('复制失败，请手动复制');
                        }
                      } catch (err) {
                        alert('复制失败，请手动复制');
                      }
                    }
                  }}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors font-medium"
                >
                  点击复制邮箱地址
                </button>
              </div>

              {/* 提示信息 */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  我们会尽快回复您的邮件。为了更好地帮助您，请在邮件中详细描述您遇到的问题或建议。
                </p>
              </div>

              {/* 其他联系方式提示 */}
              <div className="mt-6">
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  您也可以通过以下方式联系我们：
                </p>
                <div className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <p>
                    •{" "}
                    <a
                      href="https://github.com/hubporg/ghproxy-next/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      在 GitHub 仓库提交 Issue
                    </a>
                  </p>
                  <p>
                    •{" "}
                    <a
                      href="https://qm.qq.com/q/JWSV7CSGEs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      加入我们的社区讨论群组
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 返回首页链接 */}
          <div className="text-center mt-8">
            <a
              href="/"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              返回首页
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
