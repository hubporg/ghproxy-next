"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageSquare } from "lucide-react";

/**
 * 联系我们页面组件
 * 用于用户反馈建议和报告问题
 */
export default function ContactPage() {
  const EMAIL = "hubp@hubp.org";

  /**
   * 复制邮箱地址到剪贴板
   */
  function copyEmail() {
    const email = "hubp" + "@" + "hubp" + "." + "org";

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email)
        .then(() => alert("邮箱地址已复制到剪贴板"))
        .catch(() => alert("复制失败，请手动复制"));
    } else {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);
        alert(successful ? "邮箱地址已复制到剪贴板" : "复制失败，请手动复制");
      } catch {
        alert("复制失败，请手动复制");
      }
    }
  }

  const mailto = (subject: string) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;

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
              如果您在使用 GitHub Proxy 的过程中遇到任何问题，或者有功能建议、商业合作意向，我们非常乐意倾听您的声音！
            </p>
          </div>

          {/* 内容区域 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 sm:p-12">
            {/* 双卡片网格 */}
            <div className="grid md:grid-cols-2 gap-6 contact-cards">
              {/* 产品反馈与支持 */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 group group-hover:border-blue-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                  </div>
                  <button onClick={copyEmail} title="复制邮箱" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-200 transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                  </button>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">产品反馈与支持</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 h-12">遇到 Bug、有新功能建议，或者单纯想吐槽？</p>
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-between group-hover:border-gray-300 transition-colors">
                    <span className="font-mono text-sm text-gray-600 dark:text-gray-300 font-medium select-all">hubp<span aria-hidden="true">@</span>hubp<span aria-hidden="true">.</span>org</span>
                    <a href={mailto("发送邮件")} className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">发送邮件 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
                  </div>
                  <div className="flex gap-2">
                    <a href={mailto("Bug 反馈 - GitHub Proxy")} className="flex-1 py-2 text-xs font-bold text-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">反馈 Bug</a>
                    <a href={mailto("功能建议 - GitHub Proxy")} className="flex-1 py-2 text-xs font-bold text-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">功能建议</a>
                  </div>
                </div>
              </div>

              {/* 合作与赞助 */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 group group-hover:border-purple-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                  </div>
                  <button onClick={copyEmail} title="复制邮箱" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-200 transition-colors cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                  </button>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">合作与赞助</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 h-12">主机赞助、API 接入、品牌合作或赞助支持。</p>
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-between group-hover:border-gray-300 transition-colors">
                    <span className="font-mono text-sm text-gray-600 dark:text-gray-300 font-medium select-all">hubp<span aria-hidden="true">@</span>hubp<span aria-hidden="true">.</span>org</span>
                    <a href={mailto("发送邮件")} className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">发送邮件 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
                  </div>
                  <div className="flex gap-2">
                    <a href={mailto("合作咨询 - GitHub Proxy")} className="flex-1 py-2 text-xs font-bold text-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">合作咨询</a>
                    <a href={mailto("赞助支持 - GitHub Proxy")} className="flex-1 py-2 text-xs font-bold text-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">赞助支持</a>
                  </div>
                </div>
              </div>
            </div>

            {/* 提示信息 */}
            <div className="text-center space-y-6">
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-left">
                  我们的团队会在收到邮件后的 1-3 个工作日内给您回复。为了让我们能更快速地帮助您，请在邮件中尽可能详细地描述您的问题或需求（如有必要请附带截图）。
                </p>
              </div>

              {/* 其他联系方式 */}
              <div className="mt-6 text-left">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  您也可以通过以下方式联系我们：
                </p>
                <div className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <p>
                    •{" "}
                    <a className="text-blue-600 dark:text-blue-400 hover:underline" href="https://github.com/hubporg/ghproxy-next/issues" target="_blank" rel="noreferrer">
                      在 GitHub 仓库提交 Issue
                    </a>
                  </p>
                  <p>
                    •{" "}
                    <a className="text-blue-600 dark:text-blue-400 hover:underline" href="https://qm.qq.com/q/JWSV7CSGEs" target="_blank" rel="noreferrer">
                      加入我们的社区讨论群组
                    </a>
                  </p>
                </div>
              </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 italic">
                  感谢您对 GitHub Proxy 的支持与热爱！
                </p>
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
