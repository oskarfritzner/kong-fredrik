const Footer = () => {
    return (
        <div className="p-8 bg-black text-white flex justify-between items-center border-t border-gray-700">
            <div className="hover:underline transition duration-200 ease-in-out">
                <a href="mailto:kontakt@kongfredrik.no" target="_blank" rel="noopener noreferrer">
                    kontakt@kongfredrik.no
                </a>
            </div>
            <div className="hover:underline transition duration-200 ease-in-out">
                <a href="tel:+4745989432">
                    +47 45989432
                </a>
            </div>
            <div>
                gamlebyen 45, 1607 Fredrikstad
            </div>
        </div>
    ); 
};

export default Footer;
