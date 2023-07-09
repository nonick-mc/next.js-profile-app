/* eslint-disable @next/next/no-img-element */
import { FadeUpCard, FadeUpDiv, FadeUpStagger } from '@/components/animation';
import { CardIcon } from '@/components/card-icon';
import { CardName } from '@/components/card-name';
import { LinkCard } from '@/components/link-card';
import { DiscordPartnerIcon } from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';
import { FaBirthdayCake, FaDiscord, FaGithub, FaLocationArrow, FaSteam, FaTwitter, FaUserGraduate, FaXbox, FaYoutube } from 'react-icons/fa';

export default function Home() {
  return (
    <main className='container py-6 space-y-6 lg:my-10'>
      <FadeUpStagger>
        <div className='h-16 flex items-center justify-end'>
          <ThemeToggle/>
        </div>
        <div className='grid grid-cols-12 grid-rows-3 gap-5 lg:gap-6'>
          <FadeUpDiv className='col-span-12 lg:col-span-4 row-span-3 space-y-5 md:space-y-7 lg:space-y-8'>
            <img className='w-[150px] lg:w-[200px] pointer-events-none rounded-full shadow-xl' src='/icons/nonick.png' alt="nonick's avatar"/>
            <section>
              <h1 className='text-3xl lg:text-4xl font-black'>NoNICK</h1>
              <h2 className='text-muted-foreground text-lg lg:text-xl'>なんちゃってコンテンツクリエイター</h2>
            </section>
            <div className='grid gap-1'>
              <div className='flex gap-2 items-center text-muted-foreground'>
                <FaBirthdayCake/>
                <p>200X年10月17日</p>
              </div>
              <div className='flex gap-2 items-center text-muted-foreground'>
                <FaLocationArrow/>
                <p>日本 / Japan</p>
              </div>
              <div className='flex gap-2 items-center text-muted-foreground'>
                <FaUserGraduate/>
                <p>学生</p>
              </div>
            </div>
          </FadeUpDiv>
          <LinkCard 
            className='grid gap-3 col-span-12 md:col-span-6 lg:col-span-4 transition-colors hover:border-youtube p-6'
            href='https://youtube.com/nonick_mc'
          >
            <CardIcon className='bg-youtube'>
              <FaYoutube size={25}/>
            </CardIcon>
            <CardName name='YouTube' id='@nonick_mc'/>
          </LinkCard>
          <LinkCard
            className='grid gap-3 col-span-6 md:col-span-3 lg:col-span-2 transition-colors hover:border-twitter p-6'
            href='https://twitter.com/nonick_mc'
          >
            <CardIcon className='bg-twitter'>
              <FaTwitter size={25}/>
            </CardIcon>
            <CardName name='Twitter' id='@nonick_mc'/>
          </LinkCard>
          <LinkCard
            className='grid gap-3 col-span-6 md:col-span-3 lg:col-span-2 transition-colors hover:border-discord p-6'
            href='https://discord.gg/nonick-mc'
          >
            <CardIcon className='bg-discord'>
              <FaDiscord size={25}/>
            </CardIcon>
            <CardName name='Discord' id='@nonick_mc'>
              <DiscordPartnerIcon/>
            </CardName>
          </LinkCard>
          <FadeUpCard className='grid gap-3 col-span-6 md:col-span-3 lg:col-span-2 transition-colors hover:border-xbox p-6'>
            <CardIcon className='bg-xbox'>
              <FaXbox size={25}/>
            </CardIcon>
            <CardName name='Xbox' id='NULL1017'/>
          </FadeUpCard>
          <LinkCard
            className='grid gap-3 md:col-span-3 col-span-6 lg:col-span-2 transition-colors hover:border-steam p-6'
            href='https://steamcommunity.com/id/nonick-mc/'
          >
            <CardIcon className='bg-steam'>
              <FaSteam size={25}/>
            </CardIcon>
            <CardName name='Steam' id='NULL1017'/>
          </LinkCard>
          <LinkCard
            className='flex justify-between col-span-12 md:col-span-6 lg:col-span-4 transition-colors hover:border-black dark:hover:border-gray-500 p-6'
            href='https://github.com/nonick-mc'
          >
            <div className='grid gap-3'>
              <CardIcon className='bg-github'>
                <FaGithub size={25}/>
              </CardIcon>
              <CardName name='GitHub' id='@nonick-mc'/>
            </div>
            <div className='grid grid-cols-2 gap-3'>
              <img className='w-8 h-8' src='/programLangs/JavaScript.svg' alt='javascript'/>
              <img className='w-8 h-8' src='/programLangs/TypeScript.svg' alt='typescript'/>
            </div>
          </LinkCard>
          <LinkCard
            className='grid gap-3 col-span-12 md:col-span-6 lg:col-span-4 transition-colors hover:border-black dark:hover:border-gray-500 p-6'
            href='https://nonick-js.com'
          >
            <img
              className='w-10 h-10 rounded-2xl'
              src='/icons/nonickjs.png'
              alt='nonick.js icon'
            />
            <CardName name='NoNICK.js' id='サーバー管理に役立つ多機能DiscordBot'/>
          </LinkCard>
          <LinkCard
            className='grid gap-3 col-span-12 md:col-span-6 lg:col-span-4 transition-colors hover:border-black dark:hover:border-gray-500 p-6'
            href='https://github.com/nonick-mc/nonick.stats'
          >
            <img
              className='w-10 h-10 rounded-2xl'
              src='/icons/nonickstats.png'
              alt='nonick.stats icon'
            />
            <CardName name='NoNICK.stats' id='The HIVEサーバーの統計を表示するDiscordBOT'/>
          </LinkCard>
        </div>
      </FadeUpStagger>
    </main>
  )
}