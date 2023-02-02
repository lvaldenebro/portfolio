import cvPDF from '../../documents/Valdenebro,Laura-JuniorFullstackDeveloper.pdf';

const ResuméSection = () => {
    
    return (
        <div className="row text-center justify-content-center">
            <div className="col btn btn-wo-background">
                {/* TODO: REACT ROUTER   */}
                <a className="link" href={ cvPDF } download>
                    {/* <img  className="logo" src={ cv } title="CV" alt="Cv's icon" /> */}
                    <p><span className="highlight-container"><span className="highlight">Resumé</span></span></p>
                </a>
            </div>
        </div>
)};

export default ResuméSection;