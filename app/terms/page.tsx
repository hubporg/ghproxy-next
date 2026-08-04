import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Scale } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "服务条款 - GitHub Proxy",
  description: "GitHub Proxy 服务条款，了解我们的服务规则和用户责任。",
};

/**
 * 服务条款页面组件
 * 展示平台的服务条款和使用规则
 */
export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100 dark:bg-blue-900">
              <Scale className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              服务条款
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              最后更新时间：2025年12月5日
            </p>
          </div>

          {/* 内容区域 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-8">
            {/* 欢迎部分 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                欢迎使用 GitHub Proxy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                欢迎使用我们的 GitHub 文件加速代理服务。使用本服务前，请仔细阅读以下服务条款。当您访问或使用本服务时，即表示您同意接受本服务条款的约束。如果您不同意本服务条款，请不要使用本服务。
              </p>
            </section>

            {/* 服务说明 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                1. 服务说明
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  1.1 GitHub Proxy 是一个免费的开源服务，旨在为用户提供 GitHub 资源的加速访问功能，包括但不限于 Git Clone、Releases 下载、Archive 下载、Gist 和 Raw 文件访问。
                </p>
                <p>
                  1.2 本服务仅提供技术加速支持，不存储、修改或控制任何通过本服务访问的内容。
                </p>
                <p>
                  1.3 我们保留随时修改、暂停或终止服务的权利，无需事先通知。
                </p>
              </div>
            </section>

            {/* 用户责任 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                2. 用户责任
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  2.1 您同意仅将本服务用于合法目的，遵守所有适用的法律法规。
                </p>
                <p>
                  2.2 您不得使用本服务进行以下行为：
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>侵犯他人知识产权或其他合法权益</li>
                  <li>传播病毒、恶意代码或其他有害程序</li>
                  <li>进行网络攻击、滥用或其他破坏性活动</li>
                  <li>绕过或破坏服务的安全措施</li>
                  <li>大规模自动化访问导致服务过载</li>
                </ul>
                <p>
                  2.3 您对通过本服务访问的内容负全部责任，包括遵守相关开源协议和许可证。
                </p>
              </div>
            </section>

            {/* 知识产权 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                3. 知识产权
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  3.1 本服务的源代码采用开源许可证发布，具体许可证类型请参考项目仓库。
                </p>
                <p>
                  3.2 通过本服务访问的 GitHub 内容的知识产权归原作者所有，请遵守相应的开源协议。
                </p>
                <p>
                  3.3 本网站的设计、布局、图标等元素受版权保护。
                </p>
              </div>
            </section>

            {/* 服务限制 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                4. 服务限制
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  4.1 我们可能对服务的使用设置合理限制，包括但不限于：
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>单个用户的请求频率限制</li>
                  <li>文件大小限制</li>
                  <li>带宽限制</li>
                </ul>
                <p>
                  4.2 对于滥用服务的行为，我们有权暂停或终止服务，无需事先通知。
                </p>
              </div>
            </section>

            {/* 免责声明 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                5. 免责声明
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  5.1 本服务按"现状"提供，不提供任何明示或暗示的保证。
                </p>
                <p>
                  5.2 我们不对服务的可用性、准确性、完整性或及时性做出保证。
                </p>
                <p>
                  5.3 我们不对因使用或无法使用本服务而造成的任何直接或间接损失承担责任。
                </p>
              </div>
            </section>

            {/* 变更通知 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                6. 条款变更
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  6.1 我们保留随时修改本服务条款的权利。
                </p>
                <p>
                  6.2 修改后的条款将在本页面公布，继续使用服务即表示您接受修改后的条款。
                </p>
                <p>
                  6.3 重大变更时，我们会通过合理方式通知用户。
                </p>
              </div>
            </section>

            {/* 联系方式 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                7. 联系我们
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  如果您对本服务条款有任何疑问，请通过以下方式联系我们：
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    <a
                      href="https://github.com/hubporg/ghproxy-next/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      通过 GitHub Issues 反馈问题
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      发送邮件至项目维护者
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://qm.qq.com/q/JWSV7CSGEs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      加入我们的社区讨论组
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* 法律适用 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                8. 法律适用
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  8.1 本服务条款受中华人民共和国法律管辖。
                </p>
                <p>
                  8.2 因本服务条款引起的或与之相关的任何争议，应首先通过友好协商解决；协商不成时，任何一方可向有管辖权的人民法院提起诉讼。
                </p>
              </div>
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
