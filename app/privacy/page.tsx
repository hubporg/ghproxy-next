import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隐私政策 - GitHub Proxy",
  description: "GitHub Proxy 隐私政策，了解我们如何保护您的隐私和数据安全。",
};

/**
 * 隐私政策页面组件
 * 展示平台的隐私保护政策和数据处理方式
 */
export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-100 dark:bg-green-900">
              <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              隐私政策
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              最后更新时间：2025年12月5日
            </p>
          </div>

          {/* 内容区域 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-8">
            {/* 引言 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                引言
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                GitHub Proxy 非常重视用户的隐私保护。本隐私政策说明了我们在您使用服务时如何收集、使用、存储和保护您的信息。我们承诺保护您的隐私权，并遵守相关法律法规。
              </p>
            </section>

            {/* 信息收集 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                1. 我们收集的信息
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">
                    1.1 自动收集的信息
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    当您使用我们的服务时，我们可能会自动收集以下信息：
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>访问日志：包括 IP 地址、浏览器类型、访问时间、请求的资源 URL</li>
                    <li>技术信息：设备类型、操作系统、浏览器版本</li>
                    <li>使用数据：服务使用频率、访问的功能模块</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">
                    1.2 用户主动提供的信息
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    我们不要求用户注册账号，也不主动收集个人身份信息。您输入的 GitHub 链接仅用于提供代理服务，不会被永久存储。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">
                    1.3 Cookie 和类似技术
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    我们可能使用 Cookie 和类似技术来：
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>保存用户偏好设置（如主题选择、语言偏好）</li>
                    <li>分析服务使用情况</li>
                    <li>改善用户体验</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 信息使用 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                2. 信息的使用
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  2.1 我们收集的信息仅用于以下目的：
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>提供、维护和改进我们的服务</li>
                  <li>监控服务的使用情况和性能</li>
                  <li>检测、预防和解决技术问题</li>
                  <li>分析用户行为以优化服务体验</li>
                  <li>遵守法律义务和保护合法权益</li>
                </ul>
                <p>
                  2.2 我们不会将您的信息用于营销目的或出售给第三方。
                </p>
              </div>
            </section>

            {/* 信息共享 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                3. 信息的共享和披露
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  3.1 我们不会出售、出租或交易您的个人信息。
                </p>
                <p>
                  3.2 我们可能在以下情况下共享信息：
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>经您明确同意</li>
                  <li>为遵守法律法规或响应合法的政府要求</li>
                  <li>为保护我们的权利、财产或安全</li>
                  <li>在业务转让（如合并或收购）的情况下，您的信息可能作为资产的一部分被转移</li>
                </ul>
                <p>
                  3.3 我们可能使用第三方服务提供商（如 CDN、分析工具）来帮助运营服务，这些服务提供商仅能访问执行任务所需的信息。
                </p>
              </div>
            </section>

            {/* 数据安全 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                4. 数据安全
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  4.1 我们采取合理的技术和组织措施来保护您的信息安全，包括：
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>使用 HTTPS 加密传输</li>
                  <li>定期进行安全审计和更新</li>
                  <li>限制员工对个人信息的访问</li>
                  <li>实施访问控制和身份验证机制</li>
                </ul>
                <p>
                  4.2 尽管我们采取了安全措施，但没有任何互联网传输或电子存储方法是100%安全的，我们无法保证信息的绝对安全。
                </p>
              </div>
            </section>

            {/* 数据保留 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                5. 数据保留
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  5.1 访问日志和技术信息将保留合理的时间，通常不超过 90 天。
                </p>
                <p>
                  5.2 您输入的 GitHub 链接不会被永久存储，仅在请求处理期间临时保存。
                </p>
                <p>
                  5.3 Cookie 和本地存储的偏好设置将保留在您的设备上，直到您清除或过期。
                </p>
              </div>
            </section>

            {/* 用户权利 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                6. 您的权利
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  根据适用的数据保护法律，您拥有以下权利：
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>访问权：您有权了解我们持有的关于您的信息</li>
                  <li>更正权：您有权要求更正不准确的信息</li>
                  <li>删除权：您有权要求删除您的个人信息</li>
                  <li>反对权：您有权反对某些类型的数据处理</li>
                  <li>数据可携带权：您有权以结构化、常用的格式获取您的数据</li>
                </ul>
                <p>
                  如需行使这些权利，请通过我们的联系方式与我们联系。
                </p>
              </div>
            </section>

            {/* 第三方链接 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                7. 第三方链接
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  7.1 我们的服务可能包含指向第三方网站的链接。我们不对这些第三方网站的隐私做法负责。
                </p>
                <p>
                  7.2 我们建议您在访问第三方网站时查看其隐私政策。
                </p>
              </div>
            </section>

            {/* 未成年人隐私 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                8. 未成年人隐私
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  8.1 我们的服务面向普通用户，不专门针对未成年人。
                </p>
                <p>
                  8.2 我们不会故意收集 14 岁以下儿童的个人信息。如果我们发现收集了此类信息，将立即删除。
                </p>
              </div>
            </section>

            {/* 跨境数据传输 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                9. 跨境数据传输
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  9.1 您的信息可能被传输到您所在国家/地区以外的地方进行处理和存储。
                </p>
                <p>
                  9.2 我们将确保采取适当的安全措施来保护跨境传输的数据。
                </p>
              </div>
            </section>

            {/* 政策更新 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                10. 隐私政策的更新
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  10.1 我们可能会不时更新本隐私政策。
                </p>
                <p>
                  10.2 任何更改都将在本页面公布，重大更改时我们会通过合理方式通知您。
                </p>
                <p>
                  10.3 继续使用服务即表示您接受更新后的隐私政策。
                </p>
              </div>
            </section>

            {/* 联系我们 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                11. 联系我们
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  如果您对本隐私政策有任何疑问、意见或请求，请通过以下方式联系我们：
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    <a className="text-blue-600 dark:text-blue-400 hover:underline" href="https://github.com/hubporg/ghproxy-next/issues" target="_blank" rel="noreferrer">
                      通过 GitHub Issues 提交问题
                    </a>
                  </li>
                  <li>
                    <a className="text-blue-600 dark:text-blue-400 hover:underline" href="/contact">
                      发送邮件至项目维护者
                    </a>
                  </li>
                  <li>
                    <a className="text-blue-600 dark:text-blue-400 hover:underline" href="https://qm.qq.com/q/JWSV7CSGEs" target="_blank" rel="noreferrer">
                      加入我们的社区讨论
                    </a>
                  </li>
                </ul>
                <p className="mt-4">
                  我们将在收到您的请求后 30 天内予以回复。
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
