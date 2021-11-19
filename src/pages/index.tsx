import 'keen-slider/keen-slider.min.css'

import clsx from 'clsx'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import Marquee from 'react-fast-marquee'

import { Container } from '~/components/layout/container'
import { PageLayout } from '~/components/layout/page'

import ape1 from '../../public/apes/ape-1.png'
import ape2 from '../../public/apes/ape-2.png'
import ape3 from '../../public/apes/ape-3.png'
import ape4 from '../../public/apes/ape-4.png'
import ape5 from '../../public/apes/ape-5.png'
import ape6 from '../../public/apes/ape-6.png'
import logo from '../../public/logo.png'

const roadmap: RoadmapCardProps[] = [
  {
    number: '01',
    title: 'Mandate 🍌',
    content: (
      <p>
        Establish widely recognised social media channels for LBAC:{' '}
        <ul className="list-disc list-inside pl-2">
          <li>Twitter ✅</li>
          <li>Discord ✅</li>
          <li>Website ✅</li>
        </ul>
      </p>
    ),
    isActive: true
  },
  {
    number: '02',
    title: 'OpenSea',
    content: (
      <p>
        <ul className="list-disc list-inside pl-2">
          <li>Negotiate the transfer of the OpenSea page to the community.</li>
          <li>Get the OpenSea page verified.</li>
        </ul>
      </p>
    )
  },
  {
    number: '03',
    title: 'Compound',
    content: (
      <p>
        Work with community to vote for the next steps. Breeding - Token -
        Metaverse - Merch. The future is unlimited.
      </p>
    )
  }
]

const FAQs: FAQProps[] = [
  {
    title: 'Is this discord affiliated with the prior discord?',
    content: 'NO'
  },
  {
    title: 'Is this discord run by the same dev or team as the last discord?',
    content: 'NO'
  },
  {
    title: 'Who runs this discord?',
    content: 'The COMMUNITY!'
  },
  {
    title: 'Who are we?',
    content: 'HODLERS WHO LOVE THIS COMMUNITY!'
  },
  {
    title: 'What is the plan?',
    content:
      'We are trying to make sure that all the hodlers of the original project are fully aware that the community is standing strong, so we can come together and take our next steps!'
  },
  {
    title: 'What are those next steps?',
    content:
      'We will attempt to reach out to OpenSea and see if they will allow the community to oversee the contract and allow us to grow our community even more!'
  }
]

const HomePage = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    spacing: 48,
    slidesPerView: 1,
    breakpoints: {
      '(min-width: 470px)': {
        slidesPerView: 1.25
      },
      '(min-width: 1024px)': {
        slidesPerView: 2
      }
    }
  })

  return (
    <PageLayout>
      <div className="h-[33px]">
        <Marquee
          gradient={false}
          className="border-b border-gray-200 py-2 font-bold text-xs uppercase"
        >
          🍌 Official page for LBAC 🍌 Community driven and controlled 🍌
          Official page for LBAC 🍌 Community driven and controlled 🍌 Official
          page for LBAC 🍌 Community driven and controlled 🍌 Official page for
          LBAC 🍌 Community driven and controlled 🍌 Official page for LBAC 🍌
          Community driven and controlled 🍌 Official page for LBAC 🍌 Community
          driven and controlled 🍌 Official page for LBAC 🍌 Community driven
          and controlled 🍌 Official page for LBAC 🍌 Community driven and
          controlled 🍌 Official page for LBAC 🍌 Community driven and
          controlled 🍌 Official page for LBAC 🍌 Community driven and
          controlled 🍌 Official page for LBAC 🍌 Community driven and
          controlled 🍌 Official page for LBAC 🍌 Community driven and
          controlled 🍌 Official page for LBAC 🍌 Community driven and
          controlled 🍌 Official page for LBAC 🍌 Community driven and
          controlled 🍌 Official page for LBAC 🍌 Community driven and
          controlled 🍌 Official page for LBAC 🍌 Community driven and
          controlled 🍌 Official page for LBAC 🍌 Community driven and
          controlled 🍌 Official page for LBAC 🍌 Community driven and
          controlled 🍌 Official page for LBAC 🍌 Community driven and
          controlled 🍌 Official page for LBAC 🍌 Community driven and
          controlled 🍌 Official page for LBAC 🍌 Community driven and
          controlled 🍌 Official page for LBAC 🍌 Community driven and
          controlled&nbsp;
        </Marquee>
      </div>

      <Container className="pt-12">
        <div className="flex justify-center">
          <header className="flex items-center space-x-16">
            <div className="w-24 text-right text-sm sm:text-base">
              <Link href="#roadmap">
                <a className="uppercase font-bold hover:opacity-80 transition-opacity">
                  ROADMAP
                </a>
              </Link>
            </div>
            <Link href="/">
              <a>
                <Image
                  src={logo}
                  alt="logo"
                  width={216}
                  height={74}
                  loading="eager"
                  objectFit="cover"
                  priority
                />
              </a>
            </Link>
            <div className="w-24 text-left text-sm sm:text-base">
              <Link href="#faq">
                <a className="uppercase font-bold hover:opacity-80 transition-opacity">
                  FAQ
                </a>
              </Link>
            </div>
          </header>
        </div>

        <h1 className="font-heading text-3xl sm:text-5xl sm:leading-normal uppercase text-center mt-16">
          welcome to the lil BABY APE&nbsp;CLUB
        </h1>
        <div className="text-center sm:text-lg space-y-6 mt-8 text-gray-100">
          <p>
            We are a global community built on a mutually shared vision and
            passion for the art of this project. The team has prepared this
            holding page to extend our gratitude for the continued support and
            patience while we work tirelessly to reform and rectify the negative
            experience of LBAC's previous leadership. It was clear that new
            leadership was necessary to grow this project further.
          </p>
          <p>
            With that said, the community has successfully expunged the last
            team and its leadership. We have now united together to create a new
            voice and direction for this project, entirely community-driven. The
            new LBAC community is not affiliated with the old team, nor will
            they have any involvement with LBAC moving forward. Their actions
            are in no way reflective of the holders or our intended audience.
          </p>
          <p>
            Furthermore, we can confirm that this project has no relationship
            with Bored Ape Yacht Club. We have set the trend and bridged a gap
            to pioneer great art alongside an all-inclusive community.
          </p>
          <p>
            By owning a Lil Baby Ape, you commit to working together with the
            community and playing a part in designing a better future for LBAC.
          </p>
        </div>
        <div className="flex justify-center mt-14">
          <a
            href="https://opensea.io/collection/lilbabyapeclub"
            className="uppercase bg-gradient-to-b from-purple to-light-blue text-black flex items-center px-12 py-4 rounded-2xl font-bold hover:scale-110 transition active:scale-95"
          >
            GET A LIL BABY APE
          </a>
        </div>
      </Container>

      <div className="overflow-hidden">
        <Container>
          <section className="mt-56">
            <h2
              className="font-heading text-3xl sm:text-5xl uppercase text-center mt-16"
              id="roadmap"
            >
              ROADMAP
            </h2>
            <p className="text-center sm:text-lg text-gray-100 mt-8 mx-auto max-w-3xl">
              Our initial plan is to grow the community and show everybody that
              anything can be overcome if our community works together!{' '}
            </p>
            <div
              ref={ref}
              className="keen-slider mt-12"
              style={{ overflow: 'visible' }}
            >
              {roadmap.map((card) => {
                return (
                  <div key={card.number} className="keen-slider__slide">
                    <RoadmapCard {...card} />
                  </div>
                )
              })}
            </div>
          </section>
        </Container>
      </div>

      <Container>
        <section className="mt-56">
          <h2
            className="font-heading text-3xl sm:text-5xl uppercase text-center mt-16"
            id="faq"
          >
            FAQ
          </h2>
          <div className="mt-12">
            {FAQs.map((faq, i) => {
              return <FAQItem {...faq} key={i} />
            })}
          </div>
        </section>
      </Container>

      <footer className="relative overflow-hidden pt-56 pb-12">
        <Container>
          <div className="flex flex-col items-center">
            <div className="flex space-x-8">
              <a
                title="discord"
                href="https://discord.gg/5VPAjSpT"
                target="_blank"
                rel="noopener"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.5478 6.64348C24.7652 4.41739 20.3826 4 20.2435 4C19.9652 4 19.687 4.13913 19.5478 4.41739C19.4783 4.62609 19.4087 4.76522 19.3391 4.97391C21.1478 5.25217 23.4435 5.87826 25.4609 7.2C25.7391 7.4087 25.8783 7.82609 25.6696 8.17391C25.4609 8.52174 25.0435 8.5913 24.6957 8.38261C21.2174 6.22609 16.8348 6.08696 16 6.08696C15.1652 6.08696 10.7826 6.22609 7.30435 8.38261C6.95652 8.5913 6.53913 8.45217 6.33044 8.17391C6.12174 7.82609 6.26087 7.4087 6.53913 7.2C8.55652 5.94783 10.8522 5.32174 12.6609 4.97391C12.5217 4.62609 12.4522 4.41739 12.4522 4.41739C12.313 4.13913 12.0348 4 11.7565 4C11.5478 4 7.16522 4.41739 4.38261 6.64348C2.92174 8.03478 0 15.9652 0 22.7826C0 22.9217 0 22.9913 0.0695652 23.1304C2.08696 26.6783 7.65217 27.5826 8.90435 27.6522C9.11304 27.6522 9.32174 27.513 9.46087 27.3739L10.713 25.6348C7.30435 24.7304 5.49565 23.2696 5.42609 23.1304C5.14783 22.8522 5.07826 22.4348 5.35652 22.1565C5.63478 21.8783 6.05217 21.8087 6.33044 22.087C6.4 22.1565 9.6 24.8696 15.9304 24.8696C22.2609 24.8696 25.5304 22.087 25.5304 22.087C25.8087 21.8087 26.2261 21.8783 26.5043 22.1565C26.7826 22.4348 26.713 22.8522 26.4348 23.1304C26.3652 23.2 24.5565 24.7304 21.1478 25.6348L22.4 27.3739C22.5391 27.5826 22.7478 27.6522 22.9565 27.6522C24.2087 27.5826 29.7043 26.6783 31.7913 23.1304C32 22.9913 32 22.9217 32 22.7826C32 15.9652 29.0783 8.03478 27.5478 6.64348ZM11.4783 20C10.1565 20 9.04348 18.7478 9.04348 17.2174C9.04348 15.687 10.1565 14.4348 11.4783 14.4348C12.8 14.4348 13.913 15.687 13.913 17.2174C13.913 18.7478 12.8 20 11.4783 20ZM20.5217 20C19.2 20 18.087 18.7478 18.087 17.2174C18.087 15.687 19.2 14.4348 20.5217 14.4348C21.8435 14.4348 22.9565 15.687 22.9565 17.2174C22.9565 18.7478 21.8435 20 20.5217 20Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                title="twitter"
                href="https://twitter.com/Lilbabyapeclub"
                target="_blank"
                rel="noopener"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 6.24785C30.7264 6.72546 29.6119 7.04387 28.1791 7.20307C29.6119 6.40705 30.5672 5.13342 31.0448 3.54138C29.7711 4.3374 28.3383 4.81501 26.9055 5.13342C24.5174 2.42695 20.3781 2.26775 17.6716 4.81501C15.9204 6.40705 15.1244 8.79511 15.7612 11.1832C10.5075 10.8648 5.73134 8.3175 2.38806 4.3374C1.75124 5.29263 1.43284 6.40705 1.43284 7.52148C1.43284 9.75034 2.54726 11.6608 4.29851 12.9344C3.34328 12.9344 2.38806 12.7752 1.43284 12.1384V12.2976C1.43284 15.3225 3.66169 18.0289 6.68657 18.6658C6.04975 18.825 5.57214 18.9842 4.93532 18.9842C4.45771 18.9842 4.1393 18.9842 3.66169 18.825C4.45771 21.5314 7.00497 23.2827 9.71144 23.2827C7.48259 25.0339 4.61692 26.1483 1.59204 26.1483C1.11443 26.1483 0.477612 26.1483 0 25.9891C3.02488 27.8996 6.52736 29.014 10.0299 29.014C20.2189 29.1732 28.4975 20.8946 28.6567 10.7056C28.6567 10.5464 28.6567 10.5464 28.6567 10.3872C28.6567 10.0687 28.6567 9.75034 28.6567 9.59113C30.0896 8.63591 31.204 7.52148 32 6.24785Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                title="opensea"
                href="https://opensea.io/collection/lilbabyapeclub"
                target="_blank"
                rel="noopener"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 16C32 24.8361 24.8361 32 16 32C7.16394 32 0 24.8361 0 16C0 7.16394 7.16394 0 16 0C24.8379 0 32 7.16394 32 16Z"
                    fill="white"
                  />
                  <path
                    d="M7.89371 16.5375L7.96274 16.429L12.125 9.91771C12.1858 9.82239 12.3288 9.83224 12.3748 9.93579C13.0702 11.4942 13.6702 13.4323 13.3891 14.6389C13.2691 15.1353 12.9403 15.8076 12.5704 16.429C12.5228 16.5194 12.4702 16.6082 12.4143 16.6937C12.388 16.7331 12.3436 16.7561 12.2959 16.7561H8.01534C7.90027 16.7561 7.83288 16.6312 7.89371 16.5375Z"
                    fill="white"
                  />
                  <path
                    d="M26.4462 17.7474V18.7781C26.4462 18.8373 26.41 18.8899 26.3574 18.9129C26.0352 19.051 24.9322 19.5573 24.4736 20.1951C23.3031 21.8242 22.4089 24.1535 20.41 24.1535H12.0707C9.11507 24.1535 6.71997 21.7502 6.71997 18.7847V18.6893C6.71997 18.6104 6.78407 18.5463 6.86298 18.5463H11.5118C11.6038 18.5463 11.6712 18.6318 11.663 18.7222C11.6301 19.0247 11.6861 19.3337 11.8291 19.6148C12.1052 20.1754 12.6773 20.5255 13.2954 20.5255H15.5968V18.7288H13.3217C13.205 18.7288 13.1359 18.594 13.2033 18.4987C13.228 18.4608 13.2559 18.4214 13.2855 18.377C13.5009 18.0713 13.8083 17.5962 14.114 17.0554C14.3228 16.6904 14.525 16.3008 14.6877 15.9096C14.7206 15.8389 14.7469 15.7666 14.7732 15.6959C14.8176 15.5709 14.8636 15.4542 14.8965 15.3375C14.9294 15.2389 14.9557 15.1353 14.982 15.0383C15.0592 14.7063 15.0921 14.3545 15.0921 13.9896C15.0921 13.8466 15.0855 13.697 15.0724 13.5539C15.0658 13.3978 15.0461 13.2416 15.0263 13.0854C15.0132 12.9474 14.9885 12.8109 14.9622 12.6679C14.9294 12.4591 14.8833 12.252 14.8307 12.0432L14.8126 11.9643C14.7732 11.8213 14.7403 11.6849 14.6943 11.5419C14.5644 11.0931 14.4149 10.6558 14.257 10.2465C14.1995 10.0838 14.1337 9.92761 14.068 9.77145C13.971 9.53638 13.8724 9.32269 13.782 9.12048C13.7359 9.02841 13.6965 8.94457 13.657 8.8591C13.6126 8.76211 13.5666 8.66512 13.5206 8.57309C13.4877 8.5024 13.4499 8.43664 13.4236 8.37088L13.1425 7.85142C13.103 7.78073 13.1688 7.69689 13.2461 7.71827L15.005 8.19497H15.0099C15.0132 8.19497 15.0149 8.19664 15.0165 8.19664L15.2483 8.26073L15.5031 8.33309L15.5968 8.35936V7.31389C15.5968 6.80921 16.0012 6.3999 16.5009 6.3999C16.7508 6.3999 16.9776 6.50182 17.1404 6.66784C17.3031 6.83389 17.405 7.06073 17.405 7.31389V8.86569L17.5924 8.91827C17.6072 8.92323 17.622 8.92979 17.6351 8.93965C17.6812 8.97417 17.7469 9.02512 17.8308 9.08761C17.8965 9.14019 17.9672 9.20432 18.0527 9.27008C18.222 9.40649 18.4242 9.5824 18.6461 9.78461C18.7053 9.83555 18.7628 9.88816 18.8154 9.94077C19.1015 10.2071 19.422 10.5194 19.7278 10.8646C19.8133 10.9616 19.8971 11.0602 19.9826 11.1638C20.068 11.269 20.1585 11.3725 20.2373 11.4761C20.3409 11.6142 20.4527 11.7572 20.5497 11.9068C20.5957 11.9775 20.6483 12.0498 20.6927 12.1205C20.8176 12.3095 20.9278 12.5052 21.033 12.7008C21.0774 12.7912 21.1234 12.8898 21.1629 12.9868C21.2796 13.2482 21.3716 13.5145 21.4308 13.7808C21.4489 13.8383 21.462 13.9008 21.4686 13.9567V13.9699C21.4883 14.0487 21.4949 14.1326 21.5015 14.218C21.5278 14.4909 21.5146 14.7638 21.4555 15.0383C21.4308 15.1551 21.3979 15.2652 21.3585 15.3819C21.319 15.4937 21.2796 15.6104 21.2286 15.7205C21.13 15.949 21.0133 16.1775 20.8752 16.3912C20.8308 16.4701 20.7782 16.554 20.7256 16.6329C20.668 16.7167 20.6089 16.7956 20.5563 16.8729C20.4839 16.9715 20.4067 17.0751 20.3278 17.1671C20.2571 17.2641 20.1848 17.3611 20.1059 17.4466C19.9957 17.5764 19.8905 17.6997 19.7804 17.8181C19.7146 17.8954 19.6439 17.9743 19.5716 18.045C19.5009 18.1238 19.4286 18.1945 19.3628 18.2603C19.2527 18.3704 19.1606 18.4559 19.0834 18.5266L18.9026 18.6926C18.8763 18.7156 18.8417 18.7288 18.8056 18.7288H17.405V20.5255H19.1672C19.5617 20.5255 19.9365 20.3858 20.239 20.1293C20.3426 20.0389 20.7946 19.6477 21.3289 19.0576C21.3469 19.0378 21.37 19.023 21.3963 19.0165L26.2637 17.6093C26.3541 17.583 26.4462 17.6521 26.4462 17.7474Z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
            <p className="mt-11 text-xs sm:text-base font-bold uppercase text-center">
              🍌 Official page for LBAC | Community driven and
              controlled&nbsp;🍌
            </p>
          </div>
        </Container>

        <div>
          <div className="absolute left-[279px] bottom-0 flex opacity-0 s-ape-3:opacity-100 transition-opacity">
            <Image
              src={ape3}
              alt="ape 3"
              width={141}
              height={137}
              objectFit="cover"
              loading="eager"
              priority
            />
          </div>
          <div className="absolute left-[149px] bottom-0 flex opacity-0 s-ape-2:opacity-100 transition-opacity">
            <Image
              src={ape2}
              alt="ape 2"
              width={172}
              height={166}
              objectFit="cover"
              loading="eager"
              priority
            />
          </div>
          <div className="absolute -left-4 bottom-0 flex opacity-0 s-ape-1:opacity-100 transition-opacity">
            <Image
              src={ape1}
              alt="ape 1"
              width={225}
              height={216}
              objectFit="cover"
              loading="eager"
              priority
            />
          </div>

          <div className="absolute right-[279px] bottom-0 flex opacity-0 s-ape-3:opacity-100 transition-opacity">
            <Image
              src={ape4}
              alt="ape 4"
              width={155}
              height={277}
              objectFit="cover"
              loading="eager"
              priority
            />
          </div>
          <div className="absolute right-[149px] bottom-0 flex opacity-0 s-ape-2:opacity-100 transition-opacity">
            <Image
              src={ape5}
              alt="ape 5"
              width={177}
              height={172}
              objectFit="cover"
              loading="eager"
              priority
            />
          </div>
          <div className="absolute -right-4 bottom-0 flex opacity-0 s-ape-1:opacity-100 transition-opacity">
            <Image
              src={ape6}
              alt="ape 6"
              width={228}
              height={217}
              objectFit="cover"
              loading="eager"
              priority
            />
          </div>
        </div>
      </footer>
    </PageLayout>
  )
}

type RoadmapCardProps = {
  number: string
  title: React.ReactNode
  content: React.ReactNode
  isActive?: boolean
}

function RoadmapCard({ number, title, content, isActive }: RoadmapCardProps) {
  return (
    <div className="pt-8 relative">
      <div
        className="absolute border-[3px] border-black overflow-hidden text-2xl font-heading font-bold flex top-2 left-2 bg-[#292929] text-white rounded-2xl"
        style={{ boxShadow: '0px 4.5px 0px #000000' }}
      >
        <p className="bg-gradient-to-b from-purple to-light-blue w-16 text-[28px] flex justify-center text-black border-r-[3px] border-black mr-2 py-2">
          <span className="mt-[2px]">{number}</span>
        </p>
        <h3 className="py-2 pl-2 pr-3 mt-[2px]">{title}</h3>
      </div>
      <div
        className={clsx(
          'from-purple to-light-blue text-black rounded-2xl overflow-hidden p-8 pt-12 min-h-[220px]',
          isActive ? 'bg-gradient-to-b' : 'bg-[#292929] text-white'
        )}
      >
        <div className="text-lg">{content}</div>
      </div>
    </div>
  )
}

type FAQProps = {
  title: React.ReactNode
  content: React.ReactNode
}

function FAQItem({ title, content }: FAQProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <button
      className="appearance-none flex flex-col text-left py-8 w-full"
      onClick={() => {
        setIsOpen((p) => !p)
      }}
    >
      <div className="flex justify-between space-x-4 w-full items-start">
        <p className="font-heading font-bold text-xl sm:text-2xl">{title}</p>
        {isOpen ? (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <path
              d="M16.0001 29.3334C23.3639 29.3334 29.3334 23.3639 29.3334 16.0001C29.3334 8.63628 23.3639 2.66675 16.0001 2.66675C8.63628 2.66675 2.66675 8.63628 2.66675 16.0001C2.66675 23.3639 8.63628 29.3334 16.0001 29.3334Z"
              fill="url(#paint0_linear_1233_466)"
            />
            <path
              d="M10.6667 16H21.3334"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1233_466"
                x1="16.0001"
                y1="2.66675"
                x2="16.0001"
                y2="29.3334"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FED3FF" />
                <stop offset="1" stopColor="#00E7FE" />
              </linearGradient>
            </defs>
          </svg>
        ) : (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <path
              d="M16.0001 29.3334C23.3639 29.3334 29.3334 23.3639 29.3334 16.0001C29.3334 8.63628 23.3639 2.66675 16.0001 2.66675C8.63628 2.66675 2.66675 8.63628 2.66675 16.0001C2.66675 23.3639 8.63628 29.3334 16.0001 29.3334Z"
              fill="white"
            />
            <path
              d="M10.6667 16H21.3334"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.0005 10.666L16.0005 21.3327"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      {isOpen && <p className="mt-4">{content}</p>}
    </button>
  )
}

export default HomePage
