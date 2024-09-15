import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I\'m Jared, an experienced web developer, specializing in UI/UX development and ecommerce implementations.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {"My name is Jared Roder. I'm a web developer, gardener, gamer, and family man."}
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              <span className="font-bold">Home: </span>
              {`I live Van Alstyne, Texas with my wife and two kids.
              When I'm not working on a web project, I'm usually
              spending time with my family, tending the garden,
              or starting in on another video game or book.`}
            </p>
            <p>
              <span className="font-bold">Background: </span>
              {`My interest in technology was inherited from my father
              who worked as a software engineer and entrepreneur. My first
              professional experience with web development was in 2010,
              helping to implement LAMP stack solutions for my dad's clients.
              I've been in the industry ever since.`}
            </p>
            <p>
              <span className="font-bold">Work: </span>
              {`I have worked as a front-end developer on a variety of
              projects, usually client-facing, and lately as a dev lead.
              I am currently in the process of launching my own web
              development business, specializing in ecommerce and modern
              web applications.`}
            </p>
            <p>
              <span className="font-bold">Philosophy: </span>
              {`I'm drawn to complexity, but thrive on simplicity. Working
              with technology acquaints you with awesome applications of human
              creativity and logic that can both astound and deeply puzzle.
              But the most rewarding moments, I've found, don't occur in discovery, 
              but come through deep thought and consideration. My favorite are these,
              the eureka moments, when the mind quiets and the intracacies of a
              system organize themselves before your mind's eye, resolving with one
              simple thought. To me, this describes the essence of the web. 
              While, in its physical form, it is vast and impenetrable, it becomes
              useful when presented through an accessible interface. I hope to
              share this sense of clarity and simplicity through my work.`}
            </p>
            <p>
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/jnroder" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/jaredroder/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:jaredroder@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              jaredroder@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
