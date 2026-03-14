export default function Languageswitcher({onlanguagechange}) {

    const handlelangchange = (e) => {
        e.preventDefault()
        onlanguagechange(e.currentTarget.dataset.lang)

    }


    return <>
    <ul className="nav justify-content-center">
        <li className="nav-item">
            <a className="nav-link active" data-lang="AR" onClick={handlelangchange} href="#">العربية</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" data-lang="FR" onClick={handlelangchange} href="#">Francais</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" data-lang="EN" onClick={handlelangchange} href="#">English</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" data-lang="ES" onClick={handlelangchange} href="#">Espanol</a>
        </li>
    </ul>
    </>
}