const Footer = ({ tech, techSite, place, placeSite, author, linkedin }) => {
  return (
    <footer>
      Made with <a href={techSite}> {tech} </a> at
      <a href={placeSite}> {place} </a> by <a href={linkedin}> {author} </a>
    </footer>
  );
};
export default Footer;
