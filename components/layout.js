function Layout({ children }) {
    return (
        <div className='bg-default'>
            {children}
            <script src="/vendor/jquery/dist/jquery.min.js"></script>
            <script src="/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
            <script src="/vendor/js-cookie/js.cookie.js"></script>
            <script src="/vendor/jquery.scrollbar/jquery.scrollbar.min.js"></script>
            <script src="/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js"></script>
            <script src="/js/argon.js?v=1.2.0"></script>

        </div>
    )
}

export default Layout