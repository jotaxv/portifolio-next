import Image from "next/image";
import style from "./page.css"; 
import Link from "next/link";

export default function Home() {
  
  return (
    <main className="main">
      <div className="portifolio">
        <img className="foto" src="./img/fotoperfil.png"></img>
        <h2 className="nome">João Victor Lopes</h2>
        <h3 className="local"> Florianópolis-SC Brasil</h3>
        <h3 className="text">Front-end developer with Next.Js</h3>
          <section className="botoes">
              <a className="botoes1" href="https://github.com/jotaxv" target="_blank">GitHub</a>
              <a className="botoes1" href="https://www.frontendmentor.io/profile/jotaxv" target="_blank">FrontEnd Mentor</a>
              <a className="botoes1" href="https://www.linkedin.com/in/jo%C3%A3o-victor-835b0725b/" target="_blank">Linkedin</a>
              <a className="botoes1" href="https://www.instagram.com/devjotaxv/" target="_blank">Instagram</a>
          </section>
      </div>
    </main>
  );
}
