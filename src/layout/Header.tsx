import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

function classNames(...classes : string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">

          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Features
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Marketplace
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Company
          </a>
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
                        }
// import React, { useState } from "react";
// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

// interface HeaderProps {
//     onNoteListClick: () => void,
//     onArchiveClick: () => void
// }

// export const Header: React.FC<HeaderProps> = ({ onNoteListClick, onArchiveClick }) => {
//     const navigation = [
//         { name: 'Dashboard', href: '#', current: true },
//         { name: 'Team', href: '#', current: false },
//         { name: 'Projects', href: '#', current: false },
//         { name: 'Calendar', href: '#', current: false },
//       ]
      
//       function classNames(...classes : string[]) {
//         return classes.filter(Boolean).join(' ')
//       }
//     const [isArchiveSelected, setIsArchiveSelected] = useState<boolean>(false);

//     const handleNotesListClick = () => {
//         setIsArchiveSelected(false);
//         onNoteListClick();
//     }

//     const handleArchiveClick = () => {
//         setIsArchiveSelected(true);
//         onArchiveClick();
//     }

//     return (<Disclosure as="nav" className="bg-gray-800">
//     {({ open }) => (
//       <>
//         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//           <div className="relative flex h-16 items-center justify-between">
//             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//               {/* Mobile menu button*/}
//               <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                 <span className="absolute -inset-0.5" />
//                 <span className="sr-only">Open main menu</span>
//                 {open ? (
//                   <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                 ) : (
//                   <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                 )}
//               </Disclosure.Button>
//             </div>
//             <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//               <div className="flex flex-shrink-0 items-center">
//                 <img
//                   className="h-8 w-auto"
//                   src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                   alt="Your Company"
//                 />
//               </div>
//               <div className="hidden sm:ml-6 sm:block">
//                 <div className="flex space-x-4">
//                   {navigation.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className={classNames(
//                         item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                         'rounded-md px-3 py-2 text-sm font-medium'
//                       )}
//                       aria-current={item.current ? 'page' : undefined}
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//               <button
//                 type="button"
//                 className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//               >
//                 <span className="absolute -inset-1.5" />
//                 <span className="sr-only">View notifications</span>
//                 <BellIcon className="h-6 w-6" aria-hidden="true" />
//               </button>
//             </div>
//           </div>
//         </div>

//         <Disclosure.Panel className="sm:hidden">
//           <div className="space-y-1 px-2 pb-3 pt-2">
//             {navigation.map((item) => (
//               <Disclosure.Button
//                 key={item.name}
//                 as="a"
//                 href={item.href}
//                 className={classNames(
//                   item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                   'block rounded-md px-3 py-2 text-base font-medium'
//                 )}
//                 aria-current={item.current ? 'page' : undefined}
//               >
//                 {item.name}
//               </Disclosure.Button>
//             ))}
//           </div>
//         </Disclosure.Panel>
//       </>
//     )}
//   </Disclosure>
// )

//     // return (
//     //     <header className="alo">
//     //         <div className="container">
//     //             <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
//     //                 <nav>
//     //                     <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
//     //                         <li className="active-notes-option">
//     //                             <button className={"nav-link px-2 " + (!isArchiveSelected ? "link-secondary" : "link-body-emphasis")}
//     //                                 onClick={() => handleNotesListClick()}>My Notes
//     //                             </button>
//     //                         </li>
//     //                         <li className="archived-notes-option">
//     //                             <button className={"nav-link px-2 " + (isArchiveSelected ? "link-secondary" : "link-body-emphasis")}
//     //                                 onClick={() => handleArchiveClick()}>
//     //                                 Archive
//     //                             </button>
//     //                         </li>
//     //                     </ul>
//     //                 </nav>
//     //             </div>
//     //         </div>
//     //     </header>
//     // );
// }