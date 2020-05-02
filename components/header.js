function Header({ children }) {
    return (
        <div className="main-content">
            <div className="header bg-gradient-primary py-7 py-lg-8 pt-lg-9">
                <div className="container">
                    <div className="header-body text-center mb-7">
                        <div className="row justify-content-center">
                            <div className="col-xl-5 col-lg-6 col-md-8 px-5">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="separator separator-bottom separator-skew zindex-100">
                    <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
                
            </div>
        </div>
    )
}

export default Header