import cvPDF from '../../documents/Valdenebro,Laura-JuniorFullstackDeveloper.pdf';

const ResumeSection = () => {
    
    return (
        <div className="row text-center justify-content-around">
            <div className="col-2 btn btn-wo-background">
                {/* TODO: REACT ROUTER   */}
                <a className="link" href={ cvPDF } download>
                    {/* <img  className="logo" src={ cv } title="CV" alt="Cv's icon" /> */}
                    <p><span className="highlight-container"><span className="highlight">Resumé</span></span></p>
                </a>
            </div>
        </div>
)};

export default ResumeSection;