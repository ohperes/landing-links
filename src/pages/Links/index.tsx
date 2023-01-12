import { LinkList, LinksContent, Profile, SocialLinks } from './styles'
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from 'phosphor-react'
import { ThemeSwitcher } from '../../components/ThemeSwitcher'
import { DefaultTheme } from 'styled-components'

interface LinksProps {
  toggleTheme(): void
  theme: DefaultTheme
}

export function Links({ theme, toggleTheme }: LinksProps) {
  return (
    <LinksContent>
      <Profile>
        <img src="../../../src/assets/avatar.png" alt="" />
        <p>@vinicsperes</p>
      </Profile>

      <div>
        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      </div>

      <LinkList>
        <li>
          <a href="#" target="_blank">
            Ver meu Portifólio
          </a>
        </li>

        <li>
          <a href="#" target="_blank">
            Link 2
          </a>
        </li>

        <li>
          <a href="#" target="_blank">
            Link 3
          </a>
        </li>

        <li>
          <a href="#" target="_blank">
            Link 4
          </a>
        </li>
      </LinkList>

      <SocialLinks>
        <a
          title="Github"
          href="https://github.com/vinicsperes"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo size={24} />
        </a>
        <a
          title="Linkedin"
          href="https://www.linkedin.com/in/vinicsperes/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinLogo size={24} />
        </a>
        <a
          title="Instagram"
          href="https://instagram.com/vinicsperes"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramLogo size={24} />
        </a>
        <a
          title="Twitter"
          href="https://twitter.com/vinicsperes"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterLogo size={24} />
        </a>
      </SocialLinks>
    </LinksContent>
  )
}
