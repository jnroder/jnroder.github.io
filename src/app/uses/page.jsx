import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

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
  title: 'Uses',
  description: 'Toolkit',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="My toolkit"
      intro="I’m a web developer, specializing in UI/UX development and ecommerce implementations. I use these in my professional work as well as my personal projects."
    >
      <div className="space-y-20">
        <ToolsSection title="Development tools">
          <Tool title="VSCode">
            {`I use VSCode for all of my development work. It’s fast, has great extensions, and is highly customizable.
            GitHub Copilot integration is a dream come true.`}
          </Tool>
          <Tool title="GitHub">
            {`GitHub is my version control system of choice. I recently ported a couple projects over from BitBucket. I like the UI and the community.`}
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            {`A little heavier than AdobeXD, but with worthwhile trade-offs.VSCode integration is the main draw, but inspection capabilities also make it a great choice.`}
          </Tool>
          <Tool title="AdobeXD">
            {`My first introduction to modern web design tooling. Browser-based and specialized for web design, moving here from Photoshop was a revelation.`}
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Notion">
            {`Notion wants me to use it. And I do. With both desktop and mobile apps, it’s a fantastic piece of software for collecing and organizing all sorts of thoughts and information.`}
          </Tool>
          <Tool title="JIRA">
            {`JIRA has been the de facto project management tool at every company I’ve worked at. It's proven itself to be indespensible tool for realizing large-scale projects.`}
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
