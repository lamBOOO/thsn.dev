import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import Image from 'next/image'
import Link from 'next/link'

import logo from '../public/favicon.png'
import logo_me from '../public/me.jpg'

import { scrollToIdNoUrlChange } from '../lib/scrolling'

const navigation = [
  { name: 'Blog', id: 'blog', current: false },  //  📢
  { name: 'Research', id: 'research', current: false },  //  📑
  { name: 'Teaching', id: 'teaching', current: false },  //  👨‍🏫
  { name: 'Projects', id: 'projects', current: false },  //  🙈
  { name: 'Contact', id: 'contact', current: false },  //  📢
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [effect, setEffect] = useState(false);
  return (
    <div className='sticky top-0 z-50'>
      <Disclosure as="nav" className="backdrop-blur-lg bg-white/90 border-b border-gray-100 -mx-4">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-3xl px-2 sm:px-6">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-black">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <button
                      onClick={() => { scrollToIdNoUrlChange("home", { behavior: "auto" }); setEffect(true); }}
                      className={`${effect && "animate-rotate"
                        }`}
                      onAnimationEnd={() => setEffect(false)}
                    >
                      <Image
                        className="block h-8 w-auto"
                        src={logo}
                        alt="Lambert Theisens logo"
                        sizes="32px"
                      />
                    </button>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => scrollToIdNoUrlChange(item.id, { behavior: "auto" })}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-100 hover:text-black',
                            'px-3 py-2 rounded-md text-sm font-medium border-2 border-gray-100 hover:text-white'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm">
                        <span className="sr-only">Open user menu</span>
                        <Image
                          className="h-8 w-8 rounded-full"
                          src={logo_me}
                          alt="Picture of the author"
                          sizes="32px"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Add some menu
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="button"
                    onClick={() => {scrollToIdNoUrlChange(item.id, { behavior: "auto" }); }}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-800 hover:bg-gray-100',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
