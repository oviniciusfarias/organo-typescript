import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='footer-midias'>
        <li>
          <a href="facebook.com" target='_blank'>
            <img src="/images/facebook.svg" alt="facebook" />
          </a>
        </li>
        <li>
          <a href="twitter.com" target='_blank'>
            <img src="/images/twitter.svg" alt="twitter" />
          </a>
        </li>
        <li>
          <a href="instagram.com" target='_blank'>
            <img src="/images/instagram.svg" alt="instagram" />
          </a>
        </li>
      </ul>

      <img className='footer-logo' src="/images/logo.png" alt="Logo organo" />

      <p className='footer-copyright'>
        Desenvolvido por Vinicius Farias.
      </p>
    </footer>
  )
}

export default Footer