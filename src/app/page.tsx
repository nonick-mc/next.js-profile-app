import { FadeUpCard, FadeUpDiv, FadeUpStagger } from '@/components/animation';
import { CardIcon } from '@/components/link-card-icon';
import { CardName } from '@/components/link-card-name';
import { LinkCard } from '@/components/link-card';
import { DiscordPartnerIcon } from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';
import Image from 'next/image';
import {
  FaBirthdayCake,
  FaDiscord,
  FaGithub,
  FaLocationArrow,
  FaSteam,
  FaTwitter,
  FaUserGraduate,
  FaXbox,
  FaYoutube,
} from 'react-icons/fa';

import MyAvatar from '../../public/icons/nonick.png';

export default function Home() {
  return (
    <main className='container space-y-6 py-6 lg:my-10'>
      <FadeUpStagger>
        <div className='flex h-16 items-center justify-end'>
          <ThemeToggle />
        </div>
        <div className='grid grid-cols-12 grid-rows-3 gap-5 lg:gap-6'>
          <FadeUpDiv className='col-span-12 row-span-3 space-y-5 md:space-y-7 lg:col-span-4 lg:space-y-8'>
            <Image
              className='pointer-events-none w-[150px] rounded-full shadow-xl lg:w-[200px]'
              src={MyAvatar}
              alt="nonick's avatar"
            />
            <section>
              <h1 className='text-3xl font-black lg:text-4xl'>NoNICK</h1>
              <h2 className='text-lg text-muted-foreground lg:text-xl'>
                なんちゃってコンテンツクリエイター
              </h2>
            </section>
            <div className='grid gap-1'>
              <div className='flex items-center gap-2 text-muted-foreground'>
                <FaBirthdayCake />
                <p>200X年10月17日</p>
              </div>
              <div className='flex items-center gap-2 text-muted-foreground'>
                <FaLocationArrow />
                <p>日本 / Japan</p>
              </div>
              <div className='flex items-center gap-2 text-muted-foreground'>
                <FaUserGraduate />
                <p>学生</p>
              </div>
            </div>
          </FadeUpDiv>
          <LinkCard
            className='col-span-12 grid gap-3 p-6 transition-colors hover:border-youtube md:col-span-6 lg:col-span-4'
            href='https://youtube.com/nonick_mc'
          >
            <CardIcon className='bg-youtube'>
              <FaYoutube size={25} />
            </CardIcon>
            <CardName name='YouTube' id='@nonick_mc' />
          </LinkCard>
          <LinkCard
            className='col-span-6 grid gap-3 p-6 transition-colors hover:border-twitter md:col-span-3 lg:col-span-2'
            href='https://twitter.com/nonick_mc'
          >
            <CardIcon className='bg-twitter'>
              <FaTwitter size={25} />
            </CardIcon>
            <CardName name='Twitter' id='@nonick_mc' />
          </LinkCard>
          <LinkCard
            className='col-span-6 grid gap-3 p-6 transition-colors hover:border-discord md:col-span-3 lg:col-span-2'
            href='https://discord.gg/nonick-mc'
          >
            <CardIcon className='bg-discord'>
              <FaDiscord size={25} />
            </CardIcon>
            <CardName name='Discord' id='@nonick_mc'>
              <DiscordPartnerIcon />
            </CardName>
          </LinkCard>
          <FadeUpCard className='col-span-6 grid gap-3 p-6 transition-colors hover:border-xbox md:col-span-3 lg:col-span-2'>
            <CardIcon className='bg-xbox'>
              <FaXbox size={25} />
            </CardIcon>
            <CardName name='Xbox' id='NULL1017' />
          </FadeUpCard>
          <LinkCard
            className='col-span-6 grid gap-3 p-6 transition-colors hover:border-steam md:col-span-3 lg:col-span-2'
            href='https://steamcommunity.com/id/nonick-mc/'
          >
            <CardIcon className='bg-steam'>
              <FaSteam size={25} />
            </CardIcon>
            <CardName name='Steam' id='NULL1017' />
          </LinkCard>
          <LinkCard
            className='col-span-12 flex justify-between p-6 transition-colors hover:border-black dark:hover:border-gray-500 md:col-span-6 lg:col-span-4'
            href='https://github.com/nonick-mc'
          >
            <div className='grid gap-3'>
              <CardIcon className='bg-github'>
                <FaGithub size={25} />
              </CardIcon>
              <CardName name='GitHub' id='@nonick-mc' />
            </div>
            <div className='grid grid-cols-2 gap-3'>
              <Image width={32} height={32} src='/programLangs/JavaScript.svg' alt='javascript' />
              <Image width={32} height={32} src='/programLangs/TypeScript.svg' alt='typescript' />
            </div>
          </LinkCard>
          <LinkCard
            className='col-span-12 grid gap-3 p-6 transition-colors hover:border-black dark:hover:border-gray-500 md:col-span-6 lg:col-span-4'
            href='https://nonick-js.com'
          >
            <Image
              width={40}
              height={40}
              className='rounded-2xl'
              src='/icons/nonickjs.png'
              alt='nonick.js icon'
            />
            <CardName name='NoNICK.js' id='サーバー管理に役立つ多機能DiscordBot' />
          </LinkCard>
          <LinkCard
            className='col-span-12 grid gap-3 p-6 transition-colors hover:border-black dark:hover:border-gray-500 md:col-span-6 lg:col-span-4'
            href='https://github.com/nonick-mc/nonick.stats'
          >
            <Image
              width={40}
              height={40}
              className='rounded-2xl'
              src='/icons/nonickstats.png'
              alt='nonick.stats icon'
            />
            <CardName name='NoNICK.stats' id='The HIVEサーバーの統計を表示するDiscordBOT' />
          </LinkCard>
        </div>
      </FadeUpStagger>
    </main>
  );
}
