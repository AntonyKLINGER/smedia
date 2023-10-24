import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Accueil.module.css'
import { motion, useScroll } from "framer-motion"
import Script from 'next/script'

export default function Accueil() {
  return (
    <>
      <div className={styles.storyline}>
        <div className={styles.story}>
          <div className={styles.wrapper}>
              <div className={styles.fullscreen}>
                <div className={styles.logo} data-1900="opacity:0;transform:translate(-50%, -50%) scale(1);" data-2500="opacity:1;transform:translate(-50%, -50%) scale(1.1);">
                  <Image src={'/logo.png'} layout="fill" q="100" />
                </div>
                <div className={styles.centered}>
                  <span className={styles.bigtitle} data-1500="opacity:1" data-1900="opacity:0">
                    <span data-200="opacity:1" data-600="opacity:0">Votre partenaire de confiance pour déployer</span> 
                      <span data-600="margin-top:0px" data-800="margin-top:-180px">tous vos projets</span>
                      <span data-800="opacity:0" data-1000="opacity:1">sans aucune limite.</span>
                    </span>
                </div>
                <div className={styles.macbook} data-1000="opacity:1;transform:translate(-50%, -50%) scale(2)" data-1900="opacity:1;transform:translate(-50%, -50%) scale(1)" data-2900="opacity:1;transform:translate(-50%, -50%) scale(0.6)">
                  <Image src={'/macbook.png'} layout="fill" q="100" />
                  <video autoPlay loop muted playsInline className={styles.astro} data-1700="opacity:0" data-2500="opacity:.3">
                    <source src="/astro.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
          </div>        
        </div>
        <div className={styles.storylong}>
          <div className={styles.wrapper}>
            <div className={styles.fullscreen}>
            <div className="app-boxed relative mTop100">
              <div className="flex aligncenter">
                <div className="w60" data-5500="transform:translateY(0px)" data-6000="transform:translateY(200px)" data-6300="opacity:1" data-6700="opacity:0">
                    <motion.h1 
                      className="h1-title-gradient"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                        Une agence web digitale à la pointe de la technologie.
                    </motion.h1>
                    <motion.p 
                      className="large-text mTop20"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1.5 }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut placerat magna. Integer nec sapien leo. Donec faucibus enim et venenatis euismod. Aliquam lorem magna, facilisis pharetra enim posuere, gravida porta dolor. Mauris vitae massa imperdiet, vehicula erat quis, aliquet est.
                    </motion.p>
                    <Link href="/" className={styles.darkCta} data-4100="opacity:0" data-4300="opacity:1">Commençons dès-maintenant</Link>
                  </div>
                  <div className={styles.phone} data-3000="opacity:0;transform:translateX(100%)" data-4100="opacity:1;transform:translateX(10%)" data-6500="opacity:1;transform:translateX(10%)" data-7000="opacity:1;transform:translateX(-75%)" data-8600="opacity:1;transform:translateX(-75%)" data-9000="opacity:0;transform:translateX(-75%)">
                    <Image src="/iphone.png" layout="fill" />
                    <div 
                      className={styles.phoneList} 
                      data-4100="transform:translateX(-49.5%) translateY(100%);" 
                      data-4300="transform:translateX(-49.5%) translateY(66%);"
                      data-4500="transform:translateX(-49.5%) translateY(66%);"
                      data-4700="transform:translateX(-49.5%) translateY(41%);"
                      data-4900="transform:translateX(-49.5%) translateY(41%);"
                      data-5100="transform:translateX(-49.5%) translateY(16%);"
                      data-5300="transform:translateX(-49.5%) translateY(16%);"
                      data-5500="transform:translateX(-49.5%) translateY(-9%);"
                    >
                      <span className={styles.styled} data-6300="opacity:0" data-6550="opacity:1" data-6800="opacity:1" data-7200="opacity:0">Créons ensemble notre <span>réussite de demain.</span></span>
                      <div className={styles.phoneBox} data-4100="transform:scale(0.6);opacity:0" data-4300="transform:scale(1);opacity:1" data-6000="transform:scale(1);opacity:1;" data-6200="transform:scale(0.9);opacity:0;">
                        <span className={styles.phoneBoxText}>📲 &nbsp; Développement d'applications
                          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut placerat magna. Integer nec sapien leo.</span>
                        </span>
                      </div>
                      <div className={styles.phoneBox} data-4500="transform:scale(0.6);opacity:0" data-4700="transform:scale(1);opacity:1" data-6100="transform:scale(1);opacity:1;" data-6300="transform:scale(0.9);opacity:0;">
                        <span className={styles.phoneBoxText}>🖥 &nbsp; Développement de SAAS
                          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut placerat magna. Integer nec sapien leo.</span>
                        </span>
                      </div>
                      <div className={styles.phoneBox} data-4900="transform:scale(0.6);opacity:0" data-5100="transform:scale(1);opacity:1" data-6200="transform:scale(1);opacity:1;" data-6400="transform:scale(0.9);opacity:0;">
                        <span className={styles.phoneBoxText}>💻 &nbsp; Développement de sites web
                          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut placerat magna. Integer nec sapien leo.</span>
                        </span>
                      </div>
                      <div className={styles.phoneBox} data-5300="transform:scale(0.6);opacity:0" data-5500="transform:scale(1);opacity:1" data-6300="transform:scale(1);opacity:1;" data-6500="transform:scale(0.9);opacity:0;">
                        <span className={styles.phoneBoxText}>🕹 &nbsp; Développement de logiciels
                          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut placerat magna. Integer nec sapien leo.</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>   
                <div className="flex">
                  <div className="w35" data-7200="opacity:0;transform:translateY(0px)" data-7400="opacity:1;transform:translateY(-200px)" data-7800="opacity:1;transform:translateY(-200px)" data-8000="opacity:0;transform:translateY(-100px)">
                    <h2 className="title-gradient">Soyez visible partout grâce à notre expertise en SEO</h2>
                    <p className="medium-text mTop20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut placerat magna. Integer nec sapien leo. Donec faucibus enim et venenatis euismod. Aliquam lorem magna, facilisis pharetra enim posuere, gravida porta dolor. Mauris vitae massa imperdiet, vehicula.</p>
                  </div>   
                  <div className={`w25 ${styles.seoPhone}`} data-7200="opacity:0;transform:translateY(0px) translateX(-38%)" data-7400="opacity:1;transform:translateY(-200px) translateX(-38%)" data-7800="opacity:1;transform:translateY(-200px) translateX(-38%)" data-8000="opacity:0;transform:translateY(-300px) translateX(-38%)">
                    <div className={styles.seoPart} data-7300="transform:scale(0.7);opacity:0" data-7500="transform:scale(1);opacity:1">
                      <div className={styles.icon}>
                        <Image src="/letter.png" layout="fill" />
                      </div>
                      <span className={styles.seoTitle}>Gestion des contenus</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut placerat magna. Integer nec sapien leo alea rinet.</p>
                    </div>
                    <div className={styles.seoPart} data-7400="transform:scale(0.7);opacity:0" data-7600="transform:scale(1);opacity:1">
                      <div className={styles.icon}>
                        <Image src="/seo.png" layout="fill" />
                      </div>
                      <span className={styles.seoTitle}>Référencement naturel long terme</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut placerat magna. Integer nec sapien leo alea rinet.</p>
                    </div>
                    <div className={styles.seoPart} data-7500="transform:scale(0.7);opacity:0" data-7700="transform:scale(1);opacity:1">
                      <div className={styles.icon}>
                        <Image src="/target.png" layout="fill" />
                      </div>
                      <span className={styles.seoTitle}>Stratégie digitale complète</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut placerat magna. Integer nec sapien leo alea rinet.</p>
                    </div>
                  </div> 
                </div> 
                <div className="flex"> 
                  <div className={`w25 ${styles.seoPhone}`} data-8000="opacity:0;transform:translateY(-200px) translateX(-38%)" data-8200="opacity:1;transform:translateY(-420px) translateX(-38%)" data-8600="opacity:1;transform:translateY(-420px) translateX(-38%)" data-8750="opacity:0;transform:translateY(-600px) translateX(-38%)">
                    <div className={styles.seoPart} data-8100="transform:scale(0.7);opacity:0" data-8300="transform:scale(1);opacity:1">
                      <div className={styles.icon}>
                        <Image src="/letter.png" layout="fill" />
                      </div>
                      <span className={styles.seoTitle}>Gestion des contenus</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut placerat magna. Integer nec sapien leo alea rinet.</p>
                    </div>
                    <div className={styles.seoPart} data-8200="transform:scale(0.7);opacity:0" data-8400="transform:scale(1);opacity:1">
                      <div className={styles.icon}>
                        <Image src="/seo.png" layout="fill" />
                      </div>
                      <span className={styles.seoTitle}>Référencement naturel long terme</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut placerat magna. Integer nec sapien leo alea rinet.</p>
                    </div>
                    <div className={styles.seoPart} data-8300="transform:scale(0.7);opacity:0" data-8500="transform:scale(1);opacity:1">
                      <div className={styles.icon}>
                        <Image src="/target.png" layout="fill" />
                      </div>
                      <span className={styles.seoTitle}>Stratégie digitale complète</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut placerat magna. Integer nec sapien leo alea rinet.</p>
                    </div>
                  </div> 
                  <div className="w35" data-8000="opacity:0;transform:translateY(-200px) translateX(195%)" data-8200="opacity:1;transform:translateY(-420px) translateX(195%)" data-8600="opacity:1;transform:translateY(-420px) translateX(195%)" data-8800="opacity:0;transform:translateY(-200px) translateX(195%)">
                    <h2 className="title-gradient">Soyez visible partout grâce à notre expertise en SEO</h2>
                    <p className="medium-text mTop20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut placerat magna. Integer nec sapien leo. Donec faucibus enim et venenatis euismod. Aliquam lorem magna, facilisis pharetra enim posuere, gravida porta dolor. Mauris vitae massa imperdiet, vehicula.</p>
                  </div>  
                </div> 
              </div>            
            </div>
          </div>
        </div>
        <div className={styles.storylong}>
          <div className={styles.wrapper}>
            <div className={`${styles.fullscreen} ${styles.screen}`}>
              <div className={`text-center ${styles.fixedH2}`}>
                <h2 className={`title-gradient large-size`} data-9000="opacity:0;" data-9800="opacity:1;">Franchissez les limites du possible.<br />À travers le web, tout le devient.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/skrollr/0.6.30/skrollr.min.js"
        onLoad={() => {
          let s = skrollr.init();
        }}
      />
    </>
  )
}
