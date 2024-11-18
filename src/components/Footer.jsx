function Footer() {
    return (
        <footer style={{ padding: '10px', backgroundColor: '#333', color: '#fff', textAlign: 'center' }}>
            <p style={{ margin: 0 }}>© {new Date().getFullYear()} Our Company. All rights reserved.</p>
            <p style={{ margin: '5px 0' }}>
                <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</a> |
                <a href="#" style={{ color: '#fff', textDecoration: 'none', marginLeft: '5px' }}>Terms of Service</a>
            </p>
        </footer>
    );
}

export default Footer;