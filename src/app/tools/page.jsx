import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Tools',
  description: 'Toolkit',
}

export default function Tools() {
  return (
    <SimpleLayout
      title="Things I use"
      intro="Whether I'm at my computer ripping code or outside helping my plants grow, I'm only ever as productive as my tools allow. Here's a list of some of the things I use, both in my professional work and in my personal projects."
    >
      <div className="space-y-20">
        <ToolsSection title="Development tools">
          <Tool title="VSCode">
            {`I use VSCode for all of my development work. It’s fast, has a large extension library, and is highly customizable.
            GitHub Copilot integration has been a fantastic addition .`}
          </Tool>
          <Tool title="GitHub">
            {`GitHub is my version control system of choice. I recently ported a couple projects over from BitBucket. I like the UI and the community.`}
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            {`A little heavier than AdobeXD, but with worthwhile additions. VSCode integration is the main draw, but deep inspection capabilities also make it a great choice.`}
          </Tool>
          <Tool title="AdobeXD">
            {`My first introduction to modern web design tooling. Browser-based and specialized for web design, moving here from Photoshop was a revelation.`}
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Notion">
            {`Notion wants me to use it. And I do. With both desktop and mobile apps, it’s a fantastic piece of software for collecting and organizing all of my private thoughts and information.`}
          </Tool>
          <Tool title="JIRA">
            {`JIRA has been the de facto project management tool at every company I’ve worked at. It's proven itself to be indespensible tool for realizing large-scale projects.`}
          </Tool>
        </ToolsSection>
        <ToolsSection title="Gardening">
          <Tool title="Birdies Raised Garden Beds">
            {`I chose this brand of garden bed because they are modular, allowing for different configurations, and they are made from durable, galvanized steel and won't need repairing or replacing for a long time.
            I have a couple of these in my backyard and so far I've had no issues or complaints.`}
            <Link href="https://shop.epicgardening.com/collections/tall-birdies-metal-raised-garden-beds/products/birdies-large-raised-garden-bed-29-tall" className="block font-medium text-zinc-800 dark:text-zinc-200" target="_blank">
              {`29" Tall Birdies Large Modular Raised Garden Bed`}
            </Link>
          </Tool>
          <Tool title="VIVOSUN 660GPH Submersible Water Pump">
            {`Cheap and effective. I use this pump in my hydroponic setup to circulate nutrient solution through the system. It's quiet and has been running for months without issue.`}
            <Link href="https://a.co/d/cwE9gQN" className="block font-medium text-zinc-800 dark:text-zinc-200" target="_blank">VIVOSUN 660GPH Submersible Water Pump</Link>
          </Tool>
          <Tool title="Tetra Whipser 20 Aquarium Air Pump">
            {`This is what I use to aerate my nutrient solution tanks in my hydroponic setup. Picked up a couple from Petsmart and they do their job well.`}
            <Link href="https://www.petsmart.com/fish/filters-and-pumps/air-and-water-pumps/tetra-whisper-aquarium-air-pump-5094982.html" className="block font-medium text-zinc-800 dark:text-zinc-200" target="_blank">Tetra Whisper 20 Aquarium Air Pump</Link>
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
