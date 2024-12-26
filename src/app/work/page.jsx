'use client'

import Image from 'next/image'
import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

import sfccCertImage from '@/images/certs/sfcc-certified-b2c-developer-badge.png'
import awsCertImage from '@/images/certs/aws-certified-cloud-practitioner-badge.png'
import logoUA from '@/images/logos/ua-logo.png'

const certifications = [
    {
        title: 'Salesforce Certified B2C Commerce Developer',
        issuer: 'Salesforce',
        issuedDate: 'March 2024',
        expireDate: 'March 2025',
        credentialId: '4259608',
        url: 'https://trailhead.salesforce.com/en/credentials/verification',
        icon: sfccCertImage,
    },
    {
        title: 'Amazon Web Services Cloud Practitioner',
        issuer: 'Amazon Web Services (AWS)',
        issuedDate: 'December 2024',
        expireDate: 'December 2027',
        credentialId: 'e4419a7c4c4047b0a8c73888d72bf8e7',
        url: 'https://www.credly.com/badges/fd43dfbf-a240-45f6-97ed-319157463938/public_url',
        icon: awsCertImage,
    },
]

function Certifications() {
    return (
            certifications.map((certification, index) => (
                <Card key={index} className="gap-6 bg-white dark:bg-zinc-800/90 rounded-lg shadow-lg px-4 py-2 px-sm-5 py-sm-3">
                    <div className="w-full flex justify-between items-start">
                        <div>
                            <h2 className="text-lg font-bold text-zinc-800 dark:text-zinc-100">{certification.title}</h2>
                            <p className="text-sm text-zinc-400 dark:text-zinc-500">
                                Issued by {certification.issuer} on {certification.issuedDate}. Expires on {certification.expireDate}.
                            </p>
                            <a 
                                href={certification.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-teal-500 dark:text-teal-400 hover:underline break-all">
                                Credential ID: {certification.credentialId}
                            </a>
                        </div>
                        <Image
                            src={certification.icon}
                            alt={certification.title + ' badge'}
                            width={100}
                            height={100}
                            className="ml-4 h-[100px]">
                        </Image>
                    </div>
                </Card>
            ))
    )
}

export default function Work() {
    return (
        <Container className="mt-16 sm:mt-32">            
            <h1 className="w-full text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">Certifications</h1>
            <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <Certifications />
            </div>
            <h1 className="w-full text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">Experience</h1>
            <div className="page-content max-w-screen-xl">
                <div className="mt-6 border-t border-gray-100 text-left">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:px-0">
                            <div className="mt-1 text-base leading-6 text-white-700 sm:col-span-3 sm:mt-0">
                                <ParallaxBanner className="h-64">
                                    <ParallaxBannerLayer scale={[0.5, 1, 'easeOutBack']} opacity={['0.8', '1']} shouldAlwaysCompleteAnimation={true}>
                                        <Image src={logoUA} alt="UnderArmour logo" className="h-40 w-auto m-auto mt-14" />
                                    </ParallaxBannerLayer>
                                    <ParallaxBannerLayer translateX={0} translateY={0} opacity={['0.8', '1']} scale={[0.85, 0.95, 'easeOutBack']} shouldAlwaysCompleteAnimation={true}>
                                        <div className="bg-white/90 dark:bg-zinc-800/80 rounded-xl shadow-xl px-8 py-6 sm:px-sm-8 sm:py-sm-6 my-6">
                                            <div className="flex justify-between items-start">
                                                <p className="text-xl text-white-900 uppercase" style={{fontFamily: 'Neue Plak Extended Bold'}}>UnderArmour</p>
                                                <span>(<a href="https://underarmour.com/" style={{ fontFamily: 'Neue Plak Regular'}}>https://underarmour.com</a>)</span>
                                            </div>
                                            <p className="my-2" style={{ fontFamily: 'Neue Plak Regular' }}><span className="font-medium">Skills</span>: JS | Sass | React.js | Webpack | Communication | Optimization | Adobe Target | Active learning</p>
                                            <ul className="list-disc list-inside mt-3 sm:mt-0 text-lg" style={{ fontFamily: 'Neue Plak Regular' }}>
                                                <li>Development lead for feature development for the A/B testing team on Salesforce B2C Commerce (SFRA &amp; PWA-Kit)</li>
                                                <li>Engineered responsive, high-performance user interfaces resulting in enhanced user experience and site engagement</li>
                                                <li>Increased A/B test delivery speed over three years, from 30 to 50 tests annually, through efficient development practices</li>
                                            </ul>
                                        </div>
                                    </ParallaxBannerLayer>
                                </ParallaxBanner>

                                <Parallax speed={-10} translateX={['60px', '0px']} translateY={0} opacity={['0.4', '1']} shouldAlwaysCompleteAnimation={true}>
                                    <div className="bg-white dark:bg-zinc-800/90 rounded-xl shadow-xl px-8 py-6 sm:px-sm-8 sm:py-sm-6 my-6">
                                        <p className="text-medium font-semibold text-white-900 underline mt-4">Johnson &amp; Johnson (Neostrata, Neutrogena, Exuviance, Rogaine/Regaine)</p>
                                        <p><span className="font-medium">Skills</span>: JS, Node.js, Sass, Communication, Performance optimization</p>
                                        <ul className="list-disc list-inside mt-3 sm:mt-0">
                                            <li>Developed redesigned responsive product page for <a href="http://neostrata.com/">Neostrata.com</a>, resulting in a significant increase in conversion rate</li>
                                            <li>Refactored experiences using industry-standard techniques to improve overall site performance and UX</li>
                                            <li>Completed the development and deployment of the client&#39;s first Optimizely A/B test</li>
                                        </ul>
                                    </div>
                                </Parallax>
                                
                                <Parallax speed={-10} translateX={['-100px', '0px']} translateY={0} opacity={['0', '1']} shouldAlwaysCompleteAnimation={true}>
                                    <div className="bg-white dark:bg-zinc-800/90 rounded-xl shadow-xl px-8 py-6 sm:px-sm-8 sm:py-sm-6 my-6">
                                        <p className="text-medium font-semibold text-white-900 underline mt-4">Peter Millar (<a href="http://petermillar.com/">petermillar.com</a>)</p>
                                        <p><span className="font-medium">Skills</span>: Dev leadership, Code review, Communication &amp; Documentation, Node.js, Sass, WCAG</p>
                                        <ul className="list-disc list-inside mt-3 sm:mt-0">
                                            <li>Front End Development Lead for Salesforce B2C Commerce implementation</li>
                                            <li>Exceeded 85% compliance goal against WCAG 2.0 AA accessibility standards, verified by Google Lighthouse and Usablenet AQA</li>
                                        </ul>
                                    </div>
                                </Parallax>

                                <Parallax speed={-10} translateX={['100px', '0px']} translateY={0} opacity={['0', '1']} shouldAlwaysCompleteAnimation={true}>
                                    <div className="bg-white dark:bg-zinc-800/90 rounded-xl shadow-xl px-8 py-6 sm:px-sm-8 sm:py-sm-6 my-6">
                                        <p className="text-medium font-semibold text-white-900 underline mt-4">method (<a href="https://methodproducts.com">methodproducts.com</a>)</p>
                                        <p><span className="font-medium">Skills</span>: Communication, Solution architecting, Stencil theming, Active learning</p>
                                        <ul className="list-disc list-inside mt-3 sm:mt-0">
                                            <li>Principal Front End Developer for BigCommerce implementation</li>
                                            <li>Worked closely with client design team to ideate and engineer sleek &amp; modern storefront</li>
                                            <li>Designed and implemented technical solution for product pages with variation attributes</li>
                                        </ul>
                                    </div>
                                </Parallax>

                                <Parallax speed={-10} translateX={['-100px', '0px']} translateY={0} opacity={['0', '1']} shouldAlwaysCompleteAnimation={true}>
                                    <div className="bg-white dark:bg-zinc-800/90 rounded-xl shadow-xl px-8 py-6 sm:px-sm-8 sm:py-sm-6 my-6">
                                        <p className="text-medium font-semibold text-white-900 underline mt-4">Lancôme (<a href="http://lancome.com/">lancome.com</a>)</p>
                                        <p><span className="font-medium">Skills</span>: Solution design, JavaScript, CSS, Communication</p>
                                        <ul className="list-disc list-inside mt-3 sm:mt-0">
                                            <li>Developed custom front-end feature enabling personalized engraving for fragrance products</li>
                                            <li>Implemented 15 responsive, interactive product promo landing pages, enhancing site engagement and promotional effectiveness</li>
                                        </ul>
                                    </div>
                                </Parallax>
                                
                                <Parallax speed={-10} translateX={['100px', '0px']} translateY={0} opacity={['0', '1']} shouldAlwaysCompleteAnimation={true}>
                                    <div className="bg-white dark:bg-zinc-800/90 rounded-xl shadow-xl px-8 py-6 sm:px-sm-8 sm:py-sm-6 my-6">
                                        <p className="text-medium font-semibold text-white-900 underline mt-4">Fullbeauty Brands (<a href="https://www.fbbrands.com/">fbbrands.com</a> &amp; affiliate sites)</p>
                                        <p><span className="font-medium">Skills</span>: Communication, Code Review, Node.js, Sass, Humility, Ownership, Performance optimization</p>
                                        <ul className="list-disc list-inside mt-3 sm:mt-0">
                                            <li>Brought on near the end of the project as lead front-end developer for the implementation for 7 brand sites</li>
                                            <li>Took responsibility for significant front-end code bloat and spear-headed effort to remove thousands of lines of unnecessary code. Resulted in average of ~20kb saved per page load.</li>
                                        </ul>
                                    </div>
                                </Parallax>

                                <Parallax speed={-10} translateX={['-100px', '0px']} translateY={0} opacity={['0', '1']} shouldAlwaysCompleteAnimation={true}>
                                    <div className="bg-white dark:bg-zinc-800/90 rounded-xl shadow-xl px-8 py-6 sm:px-sm-8 sm:py-sm-6 my-6">
                                        <p className="text-medium font-semibold text-white-700 mt-4">Additional Projects</p>
                                        <ul className="list-disc list-inside mt-3 sm:mt-0">
                                            <li>Completed development of feature-rich product page redesign on Anastasia Beverly Hills (<a href="https://www.anastasiabeverlyhills.com/">anastasiabeverlyhills.com</a>) while colleague was out of office.</li>
                                            <li>Maintained and enhanced front-end components for Starbucks (<a href="http://starbucks.com/">starbucks.com</a>) and Saint Laurent (<a href="http://ysl.com/us">ysl.com/us</a>)</li>
                                        </ul>
                                    </div>
                                </Parallax>
                            </div>
                        </div>
                    </dl>
                </div>
            </div>
        </Container>
    )
}