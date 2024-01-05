import Link from 'next/link';

interface Props {
  url: string;
  isDisabled: boolean;
  children: React.ReactNode;
}

export const PageLink = ({ url, isDisabled, children }: Props) => {
  return isDisabled ? (
    <span className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 cursor-not-allowed">
      {children}
    </span>
  ) : (
    <Link
      href={url}
      className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
    >
      {children}
    </Link>
  );
};
