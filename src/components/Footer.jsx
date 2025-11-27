const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200 bg-background">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Z-Labs. Building for the simple hack life, one line of code at a time.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
