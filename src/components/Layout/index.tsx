import { siteLinks } from "constants/siteLinks"
import { Header } from "components/Header"
import { ReactNode } from "react"
import { HeaderLink } from "components/HeaderLink"

interface LayoutProps {
  children: ReactNode | ReactNode[]
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header>
        {siteLinks.map((siteLink) => (
          <HeaderLink key={siteLink.id} siteLink={siteLink} />
        ))}
      </Header>
      {children}
    </div>
  )
}
