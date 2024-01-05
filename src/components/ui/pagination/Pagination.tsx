'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { redirect, usePathname, useSearchParams } from 'next/navigation';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { PageLink } from './PageLink';
import { generatePaginationNumbers } from '@/utils';

interface Props {
  totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageString = searchParams.get('page') ?? 1;
  const currentPage = isNaN(Number(pageString)) ? 1 : Number(pageString);

  if (currentPage < 1 || isNaN(Number(currentPage))) {
    redirect(pathname);
  }

  const createPageUrl = (page: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (page === '...') {
      return `${pathname}?${params.toString()}`;
    }

    if (Number(page) <= 0) {
      return `${pathname}`;
    }

    if (Number(page) > totalPages) {
      return `${pathname}?${params.toString()}`;
    }

    params.set('page', page.toString());
    return `${pathname}?${params.toString()}`;
  };

  // Desactivar el enlace "Anterior" si está en la primera página
  const isOnFirstPage = currentPage <= 1;
  const previousPageUrl = isOnFirstPage ? '' : createPageUrl(currentPage - 1);

  // Desactivar el enlace "Siguiente" si está en la última página
  const isOnLastPage = currentPage >= totalPages;
  const nextPageUrl = isOnLastPage ? '' : createPageUrl(currentPage + 1);

  const allPages = generatePaginationNumbers(totalPages, currentPage);

  return (
    <div className="flex justify-center items-center mb-14">
      <nav aria-label="Page navigation example">
        <ul className="flex gap-2 list-style-none">
          <li className="page-item">
            <PageLink url={previousPageUrl} isDisabled={isOnFirstPage}>
              <IoChevronBackOutline size={28} className={isOnFirstPage ? 'text-gray-400' : 'text-gray-800'} />
            </PageLink>
          </li>
          {allPages.map((page, index) => (
            <li className="page-item" key={page + '-' + index}>
              <Link
                className={clsx(
                  'page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none',
                  {
                    'bg-blue-600 shadow-md text-white hover:text-white hover:bg-blue-700': page === currentPage,
                  }
                )}
                href={createPageUrl(page)}
              >
                {page}
              </Link>
            </li>
          ))}
          <li className="page-item">
            <PageLink url={nextPageUrl} isDisabled={isOnLastPage}>
              <IoChevronForwardOutline size={28} className={isOnLastPage ? 'text-gray-400' : 'text-gray-800'} />
            </PageLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
