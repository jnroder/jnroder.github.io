import Navbar from '../components/Navbar'
import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function Resume() {
    return (
        <>
            <div className="page-content max-w-screen-xl">
                <div className="px-4 sm:px-0">
                    <h1 className="text-2xl font-semibold leading-7 text-white-900 text-center">Jared Roder</h1>
                    <p className="flex flex-col sm:flex-row justify-center mt-1 text-base leading-6 text-white-500 text-center">
                        <a className="flex items-center before:content-mailIcon before:inline-block before:h-5 before:w-5 sm:before:ml-2 before:mr-2" href="mailto:jaredroder@gmail.com">jaredroder@gmail.com</a>
                        <a className="flex items-center before:content-phoneIcon before:inline-block before:h-5 before:w-5 sm:before:ml-2 before:mr-2" href="tel:+1(830)688-6733">(830) 688-6733</a>
                        <a className="flex items-center before:content-profileIcon before:inline-block before:h-5 before:w-5 sm:before:ml-2 before:mr-2" href="https://www.linkedin.com/in/jaredroder">linkedin.com/in/jaredroder</a>
                    </p>
                </div>
                <div className="mt-6 border-t border-gray-100 text-left">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                            <dt className="text-lg font-bold leading-6 text-white-900">Professional Summary</dt>
                            <dd className="mt-3 text-base leading-6 text-white-700 sm:col-span-3 sm:mt-0">I am a web developer with over a decade of experience crafting attractive, engaging, and accessible web applications with diverse and talented teams. I am an expert in user experience delivery, excelling in communication and application of core front-end technologies, and adopting new ones. I operate with the belief that the web should be <span className="underline">functional</span> and <span className="italic">enriching</span>, giving users a rewarding sense of effortless agency. I have a proven track record of collaborating with client and development teams of all sizes to deliver enterprise-level, performant user experiences used by millions.</dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                            <dt className="text-lg font-bold leading-6 text-white-900">Core Competencies</dt>
                            <dd className="mt-1 text-base leading-6 text-white-700 sm:col-span-3 sm:mt-0">
                                <ul className="list-disc list-inside mt-3 sm:mt-0">
                                    <li>UI/UX Development</li>
                                    <li>Communication & Documentation</li>
                                    <li>Architectures: SPA (React), MVC</li>
                                    <li>Dev Leadership</li>
                                    <li>Accessibility (WCAG)</li>
                                    <li>Optimization</li>
                                    <li>Active learning</li>
                                </ul>
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                            <dt className="text-lg font-bold leading-6 text-white-900">Technical Skills</dt>
                            <dd className="mt-1 text-base leading-6 text-white-700 sm:col-span-3 sm:mt-0">
                                <ul className="list-disc list-inside mt-3 sm:mt-0">
                                    <li><span className="font-semibold">Front-End:</span> JavaScript, HTML, CSS, Sass, Bootstrap</li>
                                    <li><span className="font-semibold">Build Tools:</span> Webpack, Vite, Gulp.js, Grunt</li>
                                    <li><span className="font-semibold">Design Software:</span> Figma, Adobe XD</li>
                                    <li><span className="font-semibold">Project Management:</span> JIRA, Confluence</li>
                                    <li><span className="font-semibold">E-commerce:</span> Salesforce B2C Commerce, BigCommerce, WordPress</li>
                                    <li><span className="font-semibold">Misc.</span>: VSCode, git, JSDoc, eslint, Browserstack</li>
                                </ul>
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                            <dt className="text-lg font-bold leading-6 text-white-900">Professional Experience</dt>
                            <dd className="mt-1 text-base leading-6 text-white-700 sm:col-span-3 sm:mt-0">
                                <p className="text-lg font-bold text-white-700 mt-5 sm:mt-0">Senior Front End Web Developer, Merkle, Inc.</p>
                                <p><em>August 2021 - September 2024</em></p>
                                <div className="sm:pl-4">
                                    <p className="text-medium font-semibold text-white-900 underline mt-4">Under Armour (<a href="http://underarmour.com/">underarmour.com</a>)</p>
                                    <p><span className="font-medium">Skills</span>: JS, Sass, React.js, Webpack, Communication, Optimization, Adobe Target, Active learning</p>
                                    <ul className="list-disc list-inside mt-3 sm:mt-0">
                                        <li>Co-led feature development for the A/B testing team on Salesforce B2C Commerce (SFRA &amp; PWA-Kit)</li>
                                        <li>Engineered responsive, high-performance user interfaces resulting in enhanced user experience and site engagement</li>
                                        <li>Increased A/B test delivery speed over three years, from 30 to 50 tests annually, through efficient development practices</li>
                                    </ul>
                                    <p className="text-medium font-semibold text-white-900 underline mt-4">Johnson &amp; Johnson (Neostrata, Neutrogena, Exuviance, Rogaine/Regaine)</p>
                                    <p><span className="font-medium">Skills</span>: JS, Node.js, Sass, Communication, Performance optimization</p>
                                    <ul className="list-disc list-inside mt-3 sm:mt-0">
                                        <li>Developed redesigned responsive product page for <a href="http://neostrata.com/">Neostrata.com</a>, resulting in a significant increase in conversion rate</li>
                                        <li>Refactored experiences using industry-standard techniques to improve overall site performance and UX</li>
                                        <li>Completed the development and deployment of the client&#39;s first Optimizely A/B test</li>
                                    </ul>
                                </div>

                                <p className="text-lg font-bold text-white-700 mt-7 sm:mt-5">Front End Web Developer, PFSweb, LiveArea</p>
                                <p><em>August 2014 - August 2021</em></p>
                                <div className="sm:pl-4">
                                    <p className="text-medium font-semibold text-white-900 underline mt-4">Peter Millar (<a href="http://petermillar.com/">petermillar.com</a>)</p>
                                    <p><span className="font-medium">Skills</span>: Dev leadership, Code review, Communication &amp; Documentation, Node.js, Sass, WCAG</p>
                                    <ul className="list-disc list-inside mt-3 sm:mt-0">
                                        <li>Front End Development Lead for Salesforce B2C Commerce implementation</li>
                                        <li>Exceeded 85% compliance goal against WCAG 2.0 AA accessibility standards, verified by Google Lighthouse and Usablenet AQA</li>
                                    </ul>
                                    <p className="text-medium font-semibold text-white-900 underline mt-4">method (<a href="https://methodproducts.com">methodproducts.com</a>)</p>
                                    <p><span className="font-medium">Skills</span>: Communication, Solution architecting, Stencil theming, Active learning</p>
                                    <ul className="list-disc list-inside mt-3 sm:mt-0">
                                        <li>Principal Front End Developer for BigCommerce implementation</li>
                                        <li>Worked closely with client design team to ideate and engineer sleek &amp; modern storefront</li>
                                        <li>Designed and implemented technical solution for product pages with variation attributes</li>
                                    </ul>
                                    <p className="text-medium font-semibold text-white-900 underline mt-4">Lancôme (<a href="http://lancome.com/">lancome.com</a>)</p>
                                    <p><span className="font-medium">Skills</span>: Solution design, JavaScript, CSS, Communication</p>
                                    <ul className="list-disc list-inside mt-3 sm:mt-0">
                                        <li>Developed custom front-end feature enabling personalized engraving for fragrance products</li>
                                        <li>Implemented 15 responsive, interactive product promo landing pages, enhancing site engagement and promotional effectiveness</li>
                                    </ul>
                                    <p className="text-medium font-semibold text-white-900 underline mt-4">Fullbeauty Brands (<a href="https://www.fbbrands.com/">fbbrands.com</a> &amp; affiliate sites)</p>
                                    <p><span className="font-medium">Skills</span>: Communication, Code Review, Node.js, Sass, Humility, Ownership, Performance optimization</p>
                                    <ul className="list-disc list-inside mt-3 sm:mt-0">
                                        <li>Brought on near the end of the project as lead front-end developer for the implementation for 7 brand sites</li>
                                        <li>Took responsibility for significant front-end code bloat and spear-headed effort to remove thousands of lines of unnecessary code. Resulted in average of ~20kb saved per page load.</li>
                                    </ul>
                                    <p className="text-medium font-semibold text-white-700 mt-4">Additional Projects</p>
                                    <ul className="list-disc list-inside mt-3 sm:mt-0">
                                        <li>Completed development of feature-rich product page redesign on Anastasia Beverly Hills (<a href="https://www.anastasiabeverlyhills.com/">anastasiabeverlyhills.com</a>) while colleague was out of office.</li>
                                        <li>Maintained and enhanced front-end components for Starbucks (<a href="http://starbucks.com/">starbucks.com</a>) and Saint Laurent (<a href="http://ysl.com/us">ysl.com/us</a>)</li>
                                    </ul>
                                </div>
                                <p className="text-lg font-bold text-white-700 mt-7 sm:mt-5">Front End Web Developer, Impremis Technology</p>
                                <p><em>Summer 2008 - August 2014</em></p>
                                <div className="sm:pl-4">
                                    <p className="mt-4"><span className="font-medium">Skills</span>: Accountability, Active learning, Communication, Ancient technology</p>
                                    <ul className="list-disc list-inside mt-3 sm:mt-0">
                                        <li>Provided customized front-end web development solutions for small businesses in San Antonio, Texas</li>
                                        <li>Collaborated closely with clients to deliver responsive, user-friendly websites that enhanced their online presence</li>
                                        <li>Built and maintained strong client relationships through effective communication and high-quality front-end deliverables</li>
                                    </ul>
                                </div>
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                            <dt className="text-lg font-bold leading-6 text-white-900">Education</dt>
                            <dd className="mt-1 text-base leading-6 text-white-700 sm:col-span-3 sm:mt-0">
                                <p className="text-lg font-bold text-white-700 mt-5 sm:mt-0">Bachelor of Science, Computer Science</p>
                                <p>Abilene Christian University</p>
                            </dd>
                        </div>

                        <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                            <dt className="text-lg font-bold leading-6 text-white-900">PDF Download</dt>
                            <dd className="mt-2 text-base text-white-900 sm:col-span-3 sm:mt-0">
                                <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                                    <li className="flex items-center justify-between py-4 sm:pl-4 pr-5 text-base leading-6">
                                        <div className="flex w-0 flex-1 items-center">
                                            <PaperClipIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-white-400" />
                                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                <span className="truncate font-medium">Jared_Roder.pdf</span>
                                                <span className="flex-shrink-0 text-white-400">66kb</span>
                                            </div>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <a href="/src/assets/Jared_Roder.pdf" download className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Download
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </>
    )
}