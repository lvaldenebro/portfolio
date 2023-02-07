const TextIntroduction = () => {
    return (
        <div className="col-12 col-lg-7 text-center text-lg-start">
        <h1 className="h1">laura valdenebro</h1>
        <p className="subtitle">full-stack developer /</p>
        <p className="subtitle">computational linguist</p>
        {/* adapt viewBox in sass*/}
        <p className="motto"><span className="highlight-container"><span className="highlight">highlight</span></span> your passion<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart heart" viewBox="0 0 24 24">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg></p>
    </div>
)};
export default TextIntroduction;