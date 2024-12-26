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

const workProjects = [
    {
        company: 'UnderArmour',
        urls: [
            {
                text: 'underarmour.com',
                href: 'https://underarmour.com',
            }
        ],
        skills: 'JS | Sass | React.js | Typescript | Webpack | Optimization | Communication | Adobe Target',
        platform: 'Salesforce B2C Commerce - SFRA & PWA-Kit',
        descriptionLines: [
            'Development lead for feature development for the A/B testing team on Salesforce B2C Commerce (SFRA & PWA-Kit)',
            'Engineered responsive, high-performance user interfaces resulting in enhanced user experience and site engagement',
            'Increased A/B test delivery speed over three years, from 30 to 50 tests annually, through efficient development practices',
        ],
        titleStyles: {
            fontFamily: 'Neue Plak Extended Bold',
            textTransform: 'uppercase',
        },
        bodyFont: 'Neue Plak Regular',
    },
    {
        company: 'Johnson & Johnson',
        urls: [
            {
                text: 'neostrata.com',
                href: 'https://neostrata.com',
            },
            {
                text: 'neutrogena.com',
                href: 'https://neutrogena.com',
            },
            {
                text: 'exuviance.com',
                href: 'https://exuviance.com',
            },
            {
                text: 'rogaine.com',
                href: 'https://rogaine.com',
            },
        ],
        skills: 'JS | Node.js | Sass | HTML | Figma | Communication | Performance optimization',
        platform: 'Salesforce B2C Commerce - SFRA',
        descriptionLines: [
            'Developed redesigned responsive product page for Neostrata.com, resulting in a significant increase in conversion rate',
            'Refactored experiences using industry-standard techniques to improve overall site performance and UX',
            'Completed the development and deployment of the client\'s first Optimizely A/B test',
        ],
        titleStyles: {
            fontFamily: 'Johnson & Johnson',
            fontWeight: 'bold',
            color: '#eb1700',
        },
        bodyFont: 'Neue Plak Regular',
    },
    {
        company: 'Peter Millar',
        urls: [
            {
                text: 'petermillar.com',
                href: 'http://petermillar.com',
            }
        ],
        skills: 'Node.js | Sass | WCAG | Leadership | Code review | Communication | Documentation',
        platform: 'Salesforce B2C Commerce - SFRA',
        descriptionLines: [
            'Front End Development Lead for Salesforce B2C Commerce implementation',
            'Exceeded 85% compliance goal against WCAG 2.0 AA accessibility standards, verified by Google Lighthouse and Usablenet AQA',
        ],
        titleStyles: {
            fontFamily: 'Peter Millar',
            fontWeight: 'bold',
            color: '#071d49'
        },
        bodyFont: 'Peter Millar Body',
    },
    {
        company: 'method',
        urls: [
            {
                text: 'methodproducts.com',
                href: 'https://methodproducts.com',
            }
        ],
        skills: 'Communication | Solution architecting | Stencil theming | Active learning',
        platform: 'BigCommerce',
        descriptionLines: [
            'Principal Front End Developer for BigCommerce implementation',
            'Worked closely with client design team to ideate and engineer sleek & modern storefront',
            'Designed and implemented technical solution for product pages with variation attributes',
        ],
        titleStyles: {
            fontFamily: 'Method',
            fontWeight: 'bold',
            color: '#7800bf'
        },
        bodyFont: 'Method Body',
    },
    {
        company: 'FullBeauty Brands',
        urls: [
            {
                text: 'fbbrands.com',
                href: 'https://www.fbbrands.com',
            },
            {
                text: 'womanwithin.com',
                href: 'https://www.womanwithin.com',
            },
            {
                text: 'roamans.com',
                href: 'https://www.roamans.com',
            },
            {
                text: 'kingsize.com',
                href: 'https://www.kingsize.com',
            },
        ],
        skills: 'Node.js | Sass | Code Review | Leadership | Ownership | Performance optimization',
        platform: 'Salesforce B2C Commerce - SFRA',
        descriptionLines: [
            'Led front-end development team for implementation of seven unique brand sites',
            'Identified significant code bloat and led effort to resolve. Resulted in average of ~20kb saved per page load.',
        ],
        titleStyles: {
            fontFamily: 'Full Beauty Brands Body',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: '#B14EB5'
        },
        bodyFont: 'Full Beauty Brands Body',
    },
    {
        company: 'Lancôme',
        urls: [
            {
                text: 'lancome.com',
                href: 'http://lancome.com',
            }
        ],
        skills: 'UX Solution Design | JS | CSS | Communication',
        platform: 'Salesforce B2C Commerce - SiteGenesis',
        descriptionLines: [
            'Developed custom front-end feature enabling personalized engraving for fragrance products',
            'Implemented 15 responsive, interactive product promo landing pages, enhancing site engagement and promotional effectiveness',
        ],
        titleStyles: {
            fontFamily: 'Lancome',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            color: '#000'
        },
        bodyFont: 'Lancome Body',
    },
]

function WorkProject({project, index}) {

    return (
        <div key={index} className="bg-white/90 dark:bg-zinc-800/80 rounded-xl shadow-xl px-8 py-6 sm:px-sm-8 sm:py-sm-6 mt-6">
            <div className="sm:flex sm:justify-between items-start">
                <p className="text-xl text-white-900" style={project.titleStyles}>{project.company}</p>
                <span>(
                    {
                        project.urls.map((url, i) => (
                            <>
                                <a key={i} href={url.href} style={{ fontFamily: project.bodyFont }}>{url.text}</a>
                                {i < project.urls.length - 1 ? ', ' : ''}
                            </>
                        ))
                    }
                    )
                </span>
            </div>
            <p className="my-2" style={{ fontFamily: project.bodyFont }}><span className="font-bold">Skills</span>: {project.skills}</p>
            <ul className="list-disc list-inside mt-3 sm:mt-0 text-lg" style={{ fontFamily: project.bodyFont }}>
                {
                    project.descriptionLines.map((line, i) => (
                        <li key={i} className="pb-2">{line}</li>
                    ))
                }
            </ul>
            <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-4">Platform: {project.platform}</p>
        </div>
    )
}

export default function Work() {
    return (
        <Container className="mt-16 sm:mt-32">            
            <h1 className="w-full text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">Certifications</h1>
            <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <Certifications />
            </div>

            <h1 className="w-full text-2xl mt-4 font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100 mt-8">Experience</h1>
            <div className="page-content max-w-screen-xl">
                {
                    workProjects.map((project, index) => (
                        <WorkProject key={index} project={project} />
                    ))
                }
                <div className="bg-white dark:bg-zinc-800/90 rounded-xl shadow-xl px-8 py-6 sm:px-sm-8 sm:py-sm-6 my-6">
                    <p className="text-medium font-semibold text-white-700 mt-4">Additional Projects</p>
                    <ul className="list-disc list-inside mt-3 sm:mt-0">
                        <li>Completed development of feature-rich product page redesign on Anastasia Beverly Hills (<a href="https://www.anastasiabeverlyhills.com/">anastasiabeverlyhills.com</a>) while colleague was out of office.</li>
                        <li>Maintained and enhanced front-end components for Starbucks (<a href="http://starbucks.com/">starbucks.com</a>) and Saint Laurent (<a href="http://ysl.com/us">ysl.com/us</a>)</li>
                    </ul>
                </div>
            </div>
        </Container>
    )
}