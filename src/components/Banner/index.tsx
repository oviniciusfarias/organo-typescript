import './Banner.css'

interface BannerProps {
  src: string
  altText?: string
}

const Banner = ({ src, altText } :BannerProps) => {
  return (
    <header className="banner">
      {/* <img src="/images/banner.png" alt="O banner principal da página do Organo"/> */}
      <img src={src} alt={altText}/>
    </header>
  )
}

export default Banner