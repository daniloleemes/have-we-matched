function Content() {
    return (
        <div className="container mt--8 pb-5">
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-7">
                    <div className="card bg-secondary border-0 mb-0">
                        <div className="card-header bg-transparent pb-5">
                            <div className="text-muted text-center mt-2 mb-3"><small>Sign in with</small></div>
                            <div className="btn-wrapper text-center">
                                <a href="#" className="btn btn-neutral btn-icon">
                                    <span className="btn-inner--icon"><img src="/img/icons/common/github.svg" /></span>
                                    <span className="btn-inner--text">Github</span>
                                </a>
                                <a href="#" className="btn btn-neutral btn-icon">
                                    <span className="btn-inner--icon"><img src="/img/icons/common/google.svg" /></span>
                                    <span className="btn-inner--text">Google</span>
                                </a>
                            </div>
                        </div>
                        <div className="card-body px-lg-5 py-lg-5">
                            <div className="text-center text-muted mb-4">
                                <small>Or sign in with credentials</small>
                            </div>
                            <form role="form">
                                <div className="form-group mb-3">
                                    <div className="input-group input-group-merge input-group-alternative">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                                        </div>
                                        <input className="form-control" placeholder="Email" type="email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group input-group-merge input-group-alternative">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                        </div>
                                        <input className="form-control" placeholder="Password" type="password" />
                                    </div>
                                </div>
                                <div className="custom-control custom-control-alternative custom-checkbox">
                                    <input className="custom-control-input" id=" customCheckLogin" type="checkbox" />
                                    <label className="custom-control-label" for=" customCheckLogin">
                                        <span className="text-muted">Remember me</span>
                                    </label>
                                </div>
                                <div className="text-center">
                                    <button type="button" className="btn btn-primary my-4">Sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-6">
                            <a href="#" className="text-light"><small>Forgot password?</small></a>
                        </div>
                        <div className="col-6 text-right">
                            <a href="#" className="text-light"><small>Create new account</small></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content