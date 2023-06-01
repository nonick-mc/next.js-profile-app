/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import { TbLocation, TbCake, TbMedal } from 'react-icons/tb';
import { AiOutlineRight } from 'react-icons/ai';
import { BsYoutube, BsTwitter, BsGithub, BsSun, BsMoon, BsDiscord } from 'react-icons/bs';
import { useTheme } from 'next-themes';

interface Product {
  name: string,
  description: string,
  href: string,
  imgPath: string,
}

const ProgramLangs = [
  'C',
  'JavaScript',
  'TypeScript',
  'Dart'
];

const Products: Product[] = [
  {
    name: 'NoNICK.js',
    description: 'Discordサーバー管理BOT',
    href: 'https://nonick-js.com',
    imgPath: 'icons/nonickjs.png'
  },
  {
    name: 'NoNICK.stats',
    description: 'Minecraftサーバーの統計表示BOT',
    href: 'https://docs.nonick-js.com/nonick-stats/what-is-nonick-stats/',
    imgPath: 'icons/nonickstats.png'
  },
  {
    name: '日本語修正パック',
    description: 'Minecraftの日本語フォントを元に戻す',
    href: 'https://github.com/nonick-mc/minecraft-fixfont',
    imgPath: 'icons/fixfont.png',
  }
];

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <div className='max-w-screen-md mx-auto py-24 px-2'>
        <div className='my-10 p-5 gap-2 backdrop-blur-md dark:backdrop-blur-xl bg-slate-200/90 dark:bg-slate-800/90 rounded-xl drop-shadow-xl'>
          <div className='flex justify-end items-center'>
            <button
              className='mt-3 p-3 rounded-full hover:bg-black/20'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {
                theme === 'dark'
                ? <BsSun className='dark:text-white' size={20} />
                : <BsMoon className='dark:text-white' size={20} />
              }
            </button>
          </div>

          <div className='pt-8 pb-12'>  
            <div className='max-w-md mx-auto'>
              <section className='flex flex-col items-center justify-center text-center'>
                <h1 className='dark:text-white font-black tracking-wider text-4xl md:text-5xl'>
                  NoNICK
                </h1>
                <h4 className='text-gray-700 dark:text-gray-300 text-lg md:text-xl'>
                  なんちゃって
                  <span className='inline-block'>コンテンツクリエイター</span>
                </h4>
              </section>

              <img
                className='mx-auto my-6 rounded-full drop-shadow-lg'
                src='/icons/nonick.png'
                width={180}
                height={180}
                alt="nonick's avatar"
              />

              <section className='flex flex-col gap-1 items-center justify-center text-gray-600'>
                <div className='flex gap-2 items-center dark:text-gray-300'>
                  <TbLocation size={20}/>
                  <p className='text-lg md:text-xl tracking-wide'>Japan</p>
                </div>
                <div className='flex gap-2 items-center dark:text-gray-300'>
                  <TbCake size={20}/>
                  <p className='text-lg md:text-xl tracking-wide'>200X&nbsp;/&nbsp;10&nbsp;/&nbsp;17</p>
                </div>
              </section>

              <div className='flex gap-5 items-center justify-center my-9'>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <div className='flex w-10 h-10 items-center justify-center rounded-full bg-red-500/50'>
                    <a href='https://youtube.com/@nonick_mc'>
                      <BsYoutube className='text-black dark:text-white' size={20} />
                    </a>
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <div className='flex w-10 h-10 items-center justify-center rounded-full bg-blue-500/50'>
                    <a href='https://twitter.com/@nonick_mc'>
                      <BsTwitter className='text-black dark:text-white' size={20} />
                    </a>
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <div className='flex w-10 h-10 items-center justify-center rounded-full bg-indigo-500/50'>
                    <a href='https://discord.gg/nonick-mc'>
                      <BsDiscord className='text-black dark:text-white' size={20} />
                    </a>
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <div className='flex w-10 h-10 items-center justify-center rounded-full bg-black/50'>
                    <a href='https://github.com/nonick-mc'>
                      <BsGithub className='text-black dark:text-white' size={20} />
                    </a>
                  </div>
                </motion.div>
              </div>

              <div className='flex flex-col gap-3 w-full p-5 text-sm md:text-base bg-slate-300 dark:bg-slate-700 rounded-md dark:text-white'>
                <p>主に動画編集やプログラミングをしている学生です👋</p>
                <p>YouTubeではMinecraftのゲーム実況を、プログラミングでは主にDiscordBOTやWebページの開発をしています！</p>
                <p>「視聴者との距離を短く」をモットーに、Discordサーバーでのイベント等を積極的に行っています。</p>            
                <p>是非気軽に話しかけてください！</p>
              </div>

              <div className='mt-16'>
                <h3 className='title'>
                  パートナーシップ
                </h3>

                <div className='w-fit mx-auto my-4 text-black dark:text-white'>
                  <li className='text-base md:text-lg'>
                    <a href='https://discord.com/partners' className='text-indigo-500'>
                      Discordパートナー
                    </a>
                    &nbsp;(2022/5 ~)
                  </li>
                  <li className='text-base md:text-lg'>
                    <a href='https://www.galaxite.net/influencer-application/' className='text-indigo-500'>
                      Galaxiteインフルエンサー
                    </a>
                    &nbsp;(2023/3 ~)
                  </li>
                </div>
              </div>

              <div className='mt-16'>
                <h3 className='title'>
                  よく使う
                  <span className='inline-block'>プログラミング言語</span>
                </h3>

                <div className='flex flex-wrap gap-6 my-4 items-center justify-center'>
                  {ProgramLangs.map((name, index) => (
                    <motion.div whileHover={{ scale: 1.2 }} key={index}>
                      <img
                        className='drop-shadow-md'
                        src={`/programLangs/${name}.svg`}
                        width={50}
                        height={50}
                        alt={name}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className='mt-16'>
                <h3 className='title'>作ったもの</h3>

                <div className='mt-6 flex flex-col gap-3'>
                  {Products.map(({ name, description, href, imgPath }, index) => (
                    <motion.div whileHover={{ scale: 1.05 }} key={index}>
                      <a href={href} className='text-inherit'>
                        <div className='flex w-full p-5 justify-between bg-slate-200 dark:bg-slate-700 items-center drop-shadow-md rounded-md'>
                          <div className='flex gap-4 items-center'>
                            <img
                              className='rounded-full'
                              src={`/${imgPath}`}
                              width={50}
                              height={50}
                              alt={name}
                            />
                            <section className='flex flex-col dark:text-white text-base md:text-xl'>
                              <p className='font-bold'>{name}</p>
                              <p>{description}</p>
                            </section>
                          </div>
                          <AiOutlineRight className='dark:text-white' size={15} />
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  )
}
