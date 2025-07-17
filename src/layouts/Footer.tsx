const Footer = () => {
  return (
    <footer className="bg-headerBg text-white py-6 mt-10 rounded-t-lg shadow-inner">
      <div className="container mx-auto px-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Maxime Larquetoux. Tous droits réservés.
      </div>
    </footer>
  )
}



export default Footer;