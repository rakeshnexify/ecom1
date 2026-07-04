function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 text-center">
        <p>
          © {currentYear} UniQuick Mart. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;