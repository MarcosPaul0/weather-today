import '../styles/header.scss';

import logoImg from '../assets/logo.svg'

export function Header() {
  return (
    <header className="header">
      <img src={logoImg} alt="Logo" />
    </header>
  )
}