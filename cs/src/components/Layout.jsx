export default function Layout(props) {
     
    const { children } = props 

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CAFFINED</h1>
                <p>For Coffe Insatiates</p>
            </div>
            <button>
              <p>Sign up free</p>
              <i className="fa-solid fa-mug-hot"></i>
            </button>
        </header>
    )
   
    const footer = (
        <footer>
            <p>
                <span className="text-gradient">Caffiend</span>
                was made by <a href="#" target="_blank">Nour</a> using the
                <a href="#" target="_blank">FantaCss</a>
            </p>
        </footer>
    )

    return (

        <>
           {header}
           <main>
              {children}
           </main>
           {footer}
        </>
    )
}