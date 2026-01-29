import React from "react";
//aqui vao vir os arquivos de Header e Footer dps

const Layout = ({ children }) => {
    return(
        <div>
            {/* <Header /> */}
            <header style={{background: 'var(--primary)', padding: '20px'}}>HEADER (Stub)</header>
            <main>
                {children}
            </main>

            {/* <Footer /> */}
            <footer style={{background: 'var(--dark-gray)', color: 'white', padding:'20px'}}>FOOTER (Stub)</footer>
        </div>
    );
};

export default Layout;