import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertTriangle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "免责声明 - GitHub Proxy",
  description: "GitHub Proxy 免责声明，了解服务的使用限制和责任范围。",
};

/**
 * 免责声明页面组件
 * 展示平台的免责声明和风险提示
 */
export default function Disclaimer() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-yellow-100 dark:bg-yellow-900">
              <AlertTriangle className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              免责声明
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              最后更新时间：2025年12月5日
            </p>
          </div>

          {/* 内容区域 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-8">
            {/* 重要提示 */}
            <section className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                    重要提示
                  </h3>
                  <p className="text-yellow-700 dark:text-yellow-200 leading-relaxed">
                    在使用 GitHub Proxy 服务之前，请仔细阅读本免责声明。使用本服务即表示您已充分理解并接受以下所有条款。如果您不同意本声明的任何内容，请立即停止使用本服务。
                  </p>
                </div>
              </div>
            </section>

            {/* 服务性质 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                1. 服务性质说明
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  1.1 GitHub Proxy 是一个开源的、非商业性的技术服务工具，旨在为用户提供 GitHub 资源的加速访问。
                </p>
                <p>
                  1.2 本服务仅作为技术代理，不对通过本服务访问的任何内容进行存储、修改、审查或控制。
                </p>
                <p>
                  1.3 本服务不隶属于 GitHub, Inc. 或 Microsoft Corporation，也未获得其授权、赞助或认可。
                </p>
                <p>
                  1.4 本服务完全免费提供，不收取任何费用，也不提供任何形式的商业保证。
                </p>
              </div>
            </section>

            {/* 服务可用性 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                2. 服务可用性
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  2.1 我们按"现状"和"可用"基础提供服务，不提供任何明示或暗示的保证，包括但不限于：
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>服务的持续可用性、稳定性或可靠性</li>
                  <li>服务的及时性、准确性或完整性</li>
                  <li>服务不会中断或出现错误</li>
                  <li>服务满足特定需求或期望</li>
                </ul>
                <p>
                  2.2 我们保留随时修改、暂停或终止服务的权利，无需事先通知，也无需承担任何责任。
                </p>
                <p>
                  2.3 服务可能会因维护、升级、网络故障、技术问题或不可抗力等原因而中断或无法访问。
                </p>
              </div>
            </section>

            {/* 用户责任 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                3. 用户责任
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  3.1 您对使用本服务的所有行为承担全部责任，包括但不限于：
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>确保使用本服务的目的合法合规</li>
                  <li>遵守您所在地区的法律法规</li>
                  <li>尊重通过本服务访问的内容的知识产权</li>
                  <li>遵守相关开源协议和许可证</li>
                  <li>不滥用或过度使用服务资源</li>
                </ul>
                <p>
                  3.2 您理解并同意，通过本服务下载或访问的任何内容完全由您自行承担风险。
                </p>
                <p>
                  3.3 您应当自行评估通过本服务访问的内容的安全性、合法性和适用性。
                </p>
              </div>
            </section>

            {/* 内容免责 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                4. 内容免责
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  4.1 本服务不对通过服务访问的任何第三方内容负责，包括但不限于：
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>内容的准确性、完整性或可靠性</li>
                  <li>内容是否侵犯知识产权或其他合法权益</li>
                  <li>内容是否包含病毒、恶意代码或其他有害组件</li>
                  <li>内容的合法性、道德性或适当性</li>
                </ul>
                <p>
                  4.2 所有通过本服务访问的 GitHub 内容均由其原作者或维护者负责。
                </p>
                <p>
                  4.3 我们不对第三方内容的质量、安全性或合法性进行审查、监控或验证。
                </p>
              </div>
            </section>

            {/* 损失免责 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                5. 损失免责
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  5.1 在法律允许的最大范围内，我们不对因使用或无法使用本服务而造成的任何直接、间接、偶然、特殊、惩罚性或后果性损失承担责任，包括但不限于：
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>利润损失、收入损失或业务中断</li>
                  <li>数据丢失或损坏</li>
                  <li>商誉或声誉损害</li>
                  <li>替代服务的采购成本</li>
                  <li>任何其他无形损失</li>
                </ul>
                <p>
                  5.2 即使我们已被告知可能发生此类损失，上述免责声明仍然适用。
                </p>
                <p>
                  5.3 某些司法管辖区不允许排除某些保证或限制责任，在这种情况下，上述限制可能不适用于您。
                </p>
              </div>
            </section>

            {/* 安全风险 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                6. 安全风险
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  6.1 尽管我们采取合理的安全措施，但互联网传输和电子存储方法无法保证100%安全。
                </p>
                <p>
                  6.2 您理解并接受使用本服务存在的固有安全风险，包括但不限于：
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>未经授权的访问或数据泄露</li>
                  <li>病毒、恶意软件或其他安全威胁</li>
                  <li>服务中断或数据丢失</li>
                  <li>第三方攻击或干扰</li>
                </ul>
                <p>
                  6.3 您应当采取适当的安全措施来保护您的设备和数据。
                </p>
              </div>
            </section>

            {/* 第三方服务 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                7. 第三方服务和链接
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  7.1 本服务可能包含指向第三方网站或服务的链接。我们不对这些第三方网站或服务的内容、隐私政策或做法负责。
                </p>
                <p>
                  7.2 我们可能使用第三方服务提供商来运营服务（如 CDN、云服务等），这些服务提供商有其自己的条款和政策。
                </p>
                <p>
                  7.3 访问第三方网站或使用第三方服务的风险由您自行承担。
                </p>
              </div>
            </section>

            {/* 知识产权 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                8. 知识产权
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  8.1 通过本服务访问的所有 GitHub 内容的知识产权归其原作者或版权持有人所有。
                </p>
                <p>
                  8.2 您有责任遵守相关的开源许可证和版权法律。
                </p>
                <p>
                  8.3 如果您认为某些内容侵犯了您的知识产权，请直接联系原内容提供者或 GitHub。
                </p>
              </div>
            </section>

            {/* 合规性 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                9. 合规性声明
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  9.1 本服务不对用户的合规性负责。您应当：
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>遵守您所在地区的出口管制法律</li>
                  <li>遵守数据保护和隐私法律</li>
                  <li>遵守反垄断和竞争法律</li>
                  <li>遵守任何其他适用的法律法规</li>
                </ul>
                <p>
                  9.2 如果您在受限制的国家或地区使用本服务，您应当自行承担相关法律责任。
                </p>
              </div>
            </section>

            {/* 赔偿条款 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                10. 赔偿条款
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  10.1 您同意赔偿并使我们免受因您使用本服务或违反本免责声明而产生的任何索赔、损失、责任、损害、成本和费用（包括合理的律师费）的损害。
                </p>
                <p>
                  10.2 这包括但不限于因您违反法律、侵犯第三方权利或滥用服务而产生的任何索赔。
                </p>
              </div>
            </section>

            {/* 免责声明的修改 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                11. 免责声明的修改
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  11.1 我们保留随时修改本免责声明的权利，无需事先通知。
                </p>
                <p>
                  11.2 修改后的免责声明将在本页面公布，生效日期为公布之日。
                </p>
                <p>
                  11.3 继续使用服务即表示您接受修改后的免责声明。
                </p>
              </div>
            </section>

            {/* 法律适用和争议解决 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                12. 法律适用和争议解决
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  12.1 本免责声明受中华人民共和国法律管辖（不考虑法律冲突原则）。
                </p>
                <p>
                  12.2 因本免责声明引起的或与之相关的任何争议，应首先通过友好协商解决。
                </p>
                <p>
                  12.3 如果协商不成，任何一方可向有管辖权的人民法院提起诉讼。
                </p>
              </div>
            </section>

            {/* 联系方式 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                13. 联系我们
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  如果您对本免责声明有任何疑问，请通过以下方式联系我们：
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
              </div>
            </section>

            {/* 最终声明 */}
            <section className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                最终声明
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                使用本服务即表示您已充分阅读、理解并同意接受本免责声明的所有条款。如果您不同意本免责声明的任何部分，您应立即停止使用本服务。本服务提供者对本免责声明保留最终解释权。
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
