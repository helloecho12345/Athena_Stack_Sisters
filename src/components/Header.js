const Header = () => (
    <header class="masthead bg-primary text-white text-center" id="page-top">
    {/*<!-- <div id="services" class="container-fluid text-center"></div> -->*/}
        <div class="container d-flex align-items-center flex-column">
            {/* <!-- Masthead Heading --> */}
            <h1 class="masthead-heading text-uppercase mb-0">Welcome to United Kingdom</h1>
        </div>

        <div class="d-grid gap-2 d-md-flex justify-content-md-center">

            <a href="#work"><button type="button" class="btn btn-primary btn-circle btn-xl"><i class="fa solid fa-briefcase"></i></button></a>
            <a href="#health"><button type="button" class="btn btn-primary btn-circle btn-xl"><i class="fa-solid fa-stethoscope"></i></button></a>
            <a href="#housing"><button type="button" class="btn btn-primary btn-circle btn-xl"><i class="fa-solid fa-house"></i></button></a>
            <a href="#legal"><button type="button" class="btn btn-primary btn-circle btn-xl"><i class="fa-solid fa-scale-unbalanced-flip"></i></button></a>
            <a href="#intro"><button type="button" class="btn btn-primary btn-circle btn-xl"><i class="fa-solid fa-hand"></i></button></a>
            <a href="#education"><button type="button" class="btn btn-primary btn-circle btn-xl"><i class="fa-solid fa-graduation-cap"></i></button></a>
            <a href="#emergency"><button type="button" class="btn btn-primary btn-circle btn-xl"><i class="fa-solid fa-circle-exclamation"></i></button></a>
        </div>
    </header>
)

export default Header