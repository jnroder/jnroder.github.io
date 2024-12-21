'use client'

import Image from 'next/image'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Card } from '@/components/Card'
import { useEffect } from 'react'

import sfccCertImage from '@/images/certs/sfcc-certified-b2c-developer-badge.png'
import awsCertImage from '@/images/certs/aws-certified-cloud-practitioner-badge.png'

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
    /* only need this if using Credly embed snippet, which I'm not at the moment
    useEffect(() => {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = true
        script.src = '//cdn.credly.com/assets/utilities/embed.js'
        document.body.appendChild(script)
    }, [])
    */

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
        </Container>
    )
}