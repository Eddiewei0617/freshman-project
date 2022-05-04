interface Props<T> {
  children: React.ReactNode;
}

export default function Layout({ children }: Props<symbol>) {
  return (
    <>
      <header className="headerAndFooter bg-fontGreen sm:bg-red-200">
        這裡是Navbar
      </header>
      <div className="mx-4 my-2">{children}</div>
      <footer className="headerAndFooter bg-gray-300"> 這裡是footer</footer>
    </>
  );
}
