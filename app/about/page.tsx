import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Info } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于项目 - GitHub Proxy",
  description: "了解 GitHub Proxy 项目的背景、功能和目标。",
};

/**
 * 关于项目页面组件
 * 展示项目介绍、功能特性和技术栈等信息
 */
export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100 dark:bg-blue-900">
              <Info className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              关于项目
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              让 GitHub 资源访问更加流畅
            </p>
          </div>

          {/* 内容区域 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-8">
            {/* 项目简介 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                项目简介
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                GitHub Proxy 是一个免费的 GitHub 文件加速下载代理服务，旨在解决国内访问 GitHub 资源速度慢、下载困难的问题。
                通过智能代理技术，为用户提供快速、稳定的 GitHub 文件访问体验，支持 Releases、Raw、Archive 等多种资源类型的下载加速。
              </p>
            </section>

            {/* 核心功能 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                核心功能
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-1">
                      多资源类型支持
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      支持 GitHub Releases 发布文件、Raw 原始文件、Archive 归档文件等多种资源类型的加速访问。
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-1">
                      智能链接转换
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      自动识别 GitHub 链接类型，智能转换为加速链接，无需手动配置。
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-1">
                      Releases 列表展示
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      支持查看 GitHub 项目的所有发布版本，方便选择和下载特定版本的文件。
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-1">
                      深色模式支持
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      提供明暗双主题切换，自动适配系统主题偏好，为用户提供舒适的浏览体验。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 支持的资源类型 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                支持的 GitHub 资源
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="mb-4">
                  本服务支持加速以下类型的 GitHub 资源：
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                      <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                      Releases 发布文件
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      例如：软件安装包、二进制文件、压缩包等
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                      <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                      Raw 原始文件
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      例如：脚本文件、配置文件、文本文件等
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                      <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                      Archive 仓库归档
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      例如：源代码压缩包（.zip、.tar.gz）
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                      <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                      Git Clone 加速
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      例如：仓库克隆、代码拉取等操作
                    </p>
                  </div>
                </div>
                
                {/* 链接示例 */}
                <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-3">
                    📝 链接格式示例：
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">Releases 发布文件：</p>
                      <code className="block p-2 bg-white dark:bg-gray-900 rounded text-xs text-gray-800 dark:text-gray-300 overflow-x-auto">
                        https://github.com/owner/repo/releases/download/v1.0.0/file.zip
                      </code>
                    </div>
                    
                    <div>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">Raw 原始文件：</p>
                      <code className="block p-2 bg-white dark:bg-gray-900 rounded text-xs text-gray-800 dark:text-gray-300 overflow-x-auto">
                        https://raw.githubusercontent.com/owner/repo/main/file.sh
                      </code>
                    </div>
                    
                    <div>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">Archive 仓库归档：</p>
                      <code className="block p-2 bg-white dark:bg-gray-900 rounded text-xs text-gray-800 dark:text-gray-300 overflow-x-auto">
                        https://github.com/owner/repo/archive/refs/tags/v1.0.0.zip
                      </code>
                    </div>
                    
                    <div>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">Git Clone 地址：</p>
                      <code className="block p-2 bg-white dark:bg-gray-900 rounded text-xs text-gray-800 dark:text-gray-300 overflow-x-auto">
                        https://github.com/owner/repo.git
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 使用注意事项 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                使用注意事项
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600">
                  <h3 className="font-medium text-yellow-800 dark:text-yellow-400 mb-2">
                    ⚠️ 仅供学习研究使用
                  </h3>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    本服务仅供个人学习和研究使用，请遵守相关法律法规和 GitHub 服务条款。
                  </p>
                </div>

                <div className="p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-600">
                  <h3 className="font-medium text-red-800 dark:text-red-400 mb-2">
                    🚫 请勿滥用服务
                  </h3>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    请合理使用本服务，避免频繁请求或恶意使用。滥用行为可能导致服务暂停或IP被封禁。
                  </p>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-600">
                  <h3 className="font-medium text-blue-800 dark:text-blue-400 mb-2">
                    ✅ 检查链接格式
                  </h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    遇到问题时，请先检查输入的 GitHub 链接格式是否正确，确保链接完整且有效。
                  </p>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-600">
                  <h3 className="font-medium text-green-800 dark:text-green-400 mb-2">
                    ⭐ 建议收藏本站
                  </h3>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    将本站添加到浏览器书签，方便下次快速访问。域名可能会变更，请关注最新公告。
                  </p>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 dark:border-purple-600">
                  <h3 className="font-medium text-purple-800 dark:text-purple-400 mb-2">
                    💡 服务稳定性说明
                  </h3>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    本服务依赖第三方代理节点，可能会出现不稳定的情况。如遇问题，请稍后重试或联系我们反馈。
                  </p>
                </div>
              </div>
            </section>

            {/* 项目愿景 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                项目愿景
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                我们致力于为开发者提供更便捷的 GitHub 资源访问方式，消除地域限制带来的技术壁垒。
                通过持续优化服务质量和用户体验，让每一位开发者都能畅快地获取开源资源，促进技术交流与创新。
              </p>
            </section>

            {/* 联系方式 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                参与贡献
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                我们欢迎任何形式的贡献，包括但不限于：
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>提交代码改进和功能增强</li>
                <li>报告问题和提出建议</li>
                <li>完善文档和翻译</li>
                <li>分享使用经验</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                如果您想参与项目开发或有任何问题，请访问我们的
                <a href="https://github.com/hubporg/ghproxy-next" className="text-blue-600 dark:text-blue-400 hover:underline mx-1">
                  GitHub
                </a>
                仓库或通过
                <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline mx-1">
                  联系我们
                </a>
                页面与我们取得联系。
              </p>
            </section>
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
