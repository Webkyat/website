
import './App.scss';
import React, { useEffect, useRef, useState } from 'react';
import Header from './component/Header/Header';
import Card from './component/card/Card';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import bannerBrutalArt from './assets/images/brutal-art-one.png';
import cashIcon from './assets/images/cash.png';
import check from './assets/images/check.png';
import heart from './assets/images/heart.png';
import arrowRight from './assets/images/arrow-right.png';
import { motion } from 'framer-motion';
import image1 from './assets/images/mockup2.jpeg';
import LocomotiveScroll from 'locomotive-scroll';
import './locomotiveScroll.css';
import imagesLoaded from 'imagesloaded';
import Popup from './component/popup/Popup';
import Shimmer from './component/shimmer/Shimmer';
import HeroVideo from './assets/video/webkyat_video.mp4';
import workBrutalArt from './assets/images/brutal-art-two.png';
import Logo from './assets/images/webkyat-logo.png';
import FloatingWhatsApp from 'react-floating-whatsapp'
import axios from 'axios';

let data = [
  {
    type: 'Web Design',
    image: image1,
    title: 'Ibot Innovations'
  },
  {
    type: 'Graphics Design',
    image: image1,
    title: 'Ibot Innovations'
  },
]
function App() {
  const inputs = useRef(null);
  const [fixedButton, setFixedButton] = useState(false);
  const [isEnquired, setEnquired] = useState(false);
  const [shimmer, isShimmer] = useState(false);
  const [wa, setwa] = useState(true);
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('')
  const [buttontxt, setButtontxt] = useState('Send');
  const popup = () => {
    setEnquired(prev => !prev)
    isShimmer(prev => !prev);
  }

  const formhandler = e => {
    e.preventDefault();
    setButtontxt('Sending');
    axios.post(`https://webkyat.com/public_mailer/mailer.php?fullname=${fullname}&phone=${phone}&email=${email}`)
      .then(res => {
        if (res.status == 200) {
          popup();
          setButtontxt('Send');
        }
      })
  }


  useEffect(() => {

    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smartphone: {
        smooth: true
      }
    });

    const image = document.querySelector('main');
    imagesLoaded(image, () => {


    })

    scroll.on('scroll', (obj) => {
      const { scroll } = obj;
      const y = scroll.y;
      if (y > 200) {
        setFixedButton(true);
      } else {
        setFixedButton(false);
      }
    });

    document.querySelector('header a').addEventListener('click', e => { e.preventDefault(); scroll.scrollTo(document.querySelector('#enquiry form')) });
  }, []);



  // hero animation variant
  let hero = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,

      }
    },
    hidden: { opacity: 0 }
  }
  const heroItem = {
    hidden: { x: -100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    }
  }

  //work flow vaiant
  let workflow = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
      "&::after": {
        opacity: 0,
      }
    }
  }
  let listStag = {
    hidden: {

      opacity: 0,
      y: 100,

    },
    show: {

      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      }
    }
  }


  // work
  let work = {
    onScreen: {
      opacity: 1,
    },
    offScreen: {
      opacity: 0
    }
  }

  let conversitionFrame = {
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    },
    hide: {
      y: 100,
      opacity: 0
    }
  }


  // 
  return (

    <main id='wrapper' data-scroll-container>

      {wa ? <FloatingWhatsApp data-scroll-section className='wa' darkMode="true" phoneNumber='+919746197164' avatar='https://media-exp1.licdn.com/dms/image/C560BAQGmAVeBYAS6Xw/company-logo_200_200/0/1639730923665?e=2147483647&v=beta&t=sIYPfinkp9IbJbr-c-gshdt87QC65MST_sCrpE0Url4' accountName="Webkyat" /> : ''}
      {isEnquired ? <Popup pop={popup} /> : ''}
      {shimmer ? <Shimmer /> : ''}

      {/* header potion */}
      <Header fixedButton={fixedButton} />
      {/* hero potion */}
      <section id='hero' data-scroll-section>
        <motion.div className='container' initial="hidden" whileInView="show" variants={hero} viewport={{ once: true }} >
          <motion.span className='title' variants={heroItem}>Proudly, driven by a passion</motion.span>
          <motion.h1 variants={heroItem}>a creative web studio.</motion.h1>
          <motion.div variants={heroItem} className='play-reel'>
            <AiOutlinePlayCircle />
            <span>Play Reel</span>
          </motion.div>
        </motion.div>
      </section>

      {/* brutal art */}
      <div data-scroll-section className='brutal-art' style={{ display: 'flex' }}>
        <img data-scroll data-scroll-direction="horizontal" data-scroll-speed="3" style={{ marginLeft: -100 }} src={bannerBrutalArt} alt="brutal art design pattern" />
        <img data-scroll data-scroll-direction="horizontal" data-scroll-speed="3" src={bannerBrutalArt} alt="brutal art design pattern" />
      </div>
      {/* end of brutal art */}

      {/* about  */}
      <motion.section data-scroll-section initial={{ y: 100, opacity: 0, }} whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }} viewport={{ once: true }} id='about'>
        <div className='container'>
          <span className='title'>webkyat</span>
          <h2>Kerala based award winning digital agency. Mainly focused on custom <span>web design.</span></h2>
        </div>
      </motion.section>
      {/* end of about */}

      {/* work flow */}
      <motion.section data-scroll-section initial='hidden' whileInView='show' variants={workflow} viewport={{ once: true, amount: 0.2 }} id='work-flow'>
        <div className='container'>
          <motion.h3 className='section-title' variants={listStag}>Our Work Flow</motion.h3>
          <ul>
            <motion.li variants={listStag}>
              <span>
                Understanding your need first
              </span>
              <span>
                We learn about your business and aim
              </span>
            </motion.li>

            <motion.li variants={listStag}>
              <span>
                Setting affordable cost
              </span>
              <span>
                Help to find budget that suits for you
              </span>
            </motion.li>

            <motion.li variants={listStag}>
              <span>
                Preparing a case study & discussion
              </span>
              <span>
                Learning your competitor, brand
              </span>
            </motion.li>

            <motion.li variants={listStag}>
              <span>
                Creating wireframes
              </span>
              <span>
                blue print of the design/functionality
              </span>
            </motion.li>

            <motion.li variants={listStag}>
              <span>
                Designing Great UI/UX
              </span>
              <span>
                Designing website mockup with modern trends
              </span>
            </motion.li>


            <motion.li variants={listStag}>
              <span>
                Developing
              </span>
              <span>
                Developing your website using modern web
                technologies
              </span>
            </motion.li>

            <motion.li variants={listStag}>
              <span>
                Testing
              </span>
              <span>
                Performing a automated testing
              </span>
            </motion.li>

          </ul>
        </div>
      </motion.section>
      {/* end of work flow */}

      {/* brutal art */}
      {/* <div data-scroll-section className='brutal-art' style={{ display: 'flex' }}>
        <img data-scroll data-scroll-direction="horizontal" data-scroll-speed="3" style={{ marginLeft: -100 }} src={workBrutalArt} alt="brutal art design pattern" />
        <img data-scroll data-scroll-direction="horizontal" data-scroll-speed="3" src={bannerBrutalArt} alt="brutal art design pattern" />
      </div> */}
      {/* end of brutal art */}



      {/* recent works */}
      <motion.section data-scroll-section id='works' initial='offScreen' whileInView='onScreen' variants={work} viewport={{ once: true }}>
        <div className='container'>
          <motion.h3 className='section-title'>Recent Works</motion.h3>

          {
            data.map((x, i) => {
              const { type, title, image } = x;
              return (
                <Card key={i} type={type} title={title} image={image} />
              )
            })
          }

        </div>
      </motion.section>
      {/* end of recent works */}



      {/* converstion */}
      <motion.section data-scroll-section id='converstion' initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { staggerChildren: 0.1 } }} viewport={{ once: true }}>
        <div className='container'>
          <div className='box'>
            <motion.div viewport={{ once: true }} variants={conversitionFrame} initial="hide" whileInView='show' className='icon'>
              <img src={cashIcon} alt="cash Icon" />
            </motion.div>
            <div className='content'>
              <motion.h4 viewport={{ once: true }} variants={conversitionFrame} initial="hide" whileInView='show'>Stop wasting money for designing cheap websites</motion.h4>
              <motion.p viewport={{ once: true }} variants={conversitionFrame} initial="hide" whileInView='show'>Build a website that suit for your business.</motion.p>
              <ul>
                <motion.li viewport={{ once: true }} variants={conversitionFrame} initial="hide" whileInView='show'>
                  <div className='list-icon'>
                    <img src={check} alt="check icon" />
                  </div>
                  <div className='title'>
                    5x Loading speed
                  </div>
                </motion.li>
                <motion.li viewport={{ once: true }} variants={conversitionFrame} initial="hide" whileInView='show'>
                  <div className='list-icon'>
                    <img src={check} alt="check icon" />
                  </div>
                  <div className='title'>
                    SEO Optimized
                  </div>
                </motion.li>
                <motion.li viewport={{ once: true }} variants={conversitionFrame} initial="hide" whileInView='show'>
                  <div className='list-icon'>
                    <img src={check} alt="check icon" />
                  </div>
                  <div className='title'>
                    Good Content
                  </div>
                </motion.li>
                <motion.li viewport={{ once: true }} variants={conversitionFrame} initial="hide" whileInView='show'>
                  <div className='list-icon'>
                    <img src={check} alt="check icon" />
                  </div>
                  <div className='title'>
                    Supports  Mob, Tab & Desktop
                  </div>
                </motion.li>
                <motion.li viewport={{ once: true }} variants={conversitionFrame} initial="hide" whileInView='show'>
                  <div className='list-icon'>
                    <img src={check} alt="check icon" />
                  </div>
                  <div className='title'>
                    Modern Design
                  </div>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
      {/* end of convertion */}


      {/* enquiry */}
      <motion.section data-scroll-section id='enquiry' >
        <div className='container'>
          <div className='icon'>
            <motion.img viewport={{ once: true }} initial={{ scale: 1 }} whileInView={{ scale: [1.5, null, 1] }} src={heart} alt="heart icon" />
          </div>

          <div className='content'>
            <motion.h4 viewport={{ once: true }} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}>Let’s build somethting together.</motion.h4>
            <motion.p viewport={{ once: true }} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}>Please, Feel free to contact us, we speak your language</motion.p>
            <motion.form onSubmit={e => formhandler(e)} viewport={{ once: true }} id='enquyiry_form' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}>
              <span className='title'>* Fill the form</span>
              <div className='input-holder'>
                <input value={fullname} onChange={e => setFullName(e.target.value)} onFocus={() => setwa(false)} onBlur={() => setwa(true)} ref={inputs} type="text" placeholder="Enter your Name" />
              </div>
              <div className='input-holder'>
                <input value={email} onChange={e => setEmail(e.target.value)} onFocus={() => setwa(false)} onBlur={() => setwa(true)} ref={inputs} type="email" placeholder="Email Address" />
              </div>
              <div className='input-holder'>
                <input value={phone} onChange={e => setPhone(e.target.value)} onFocus={() => setwa(false)} onBlur={() => setwa(true)} ref={inputs} type="number" placeholder="Mobile Number" />
              </div>
              <button className='enquiry-button'>{buttontxt} {buttontxt == 'Sending' ? '' : <img src={arrowRight} alt="arrow right" />}</button>
            </motion.form>
          </div>
        </div>
      </motion.section>
      {/* en of enquiry */}

    </main>

  );
}

export default App;
