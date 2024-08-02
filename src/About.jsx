import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     backgroundColor: 'black',
    //     color: 'white'
    // })
    let myStyle={
        color:props.mode==='Dark'?'white':'#042743',
        backgroundColor:props.mode==='Dark'?'042743':'white',
        border:'1px solid',
        borderColor:props.mode==='Dark'?'white':'#042743'
    }
   
    return (
        <>
            <div className="container my-3">
                <h1 className="my-3">About us</h1>
                <div class="accordion" id="accordionExample" style={myStyle}>
                    <div class="accordion-item" style={myStyle}>
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Analyze your text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                TextUtils gives you a way to analyze you text quickly and efficiently, be it word count, character count or converting your text to uppercase or lowercase.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" style={myStyle}>
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Free to use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text.
                                TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" style={myStyle}>
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Browser compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                This word counter software works in any web browsers such as Chrome,Firefox, Internet Explorer,Safari,Opera.
                                It suits to count characters in facebook,blogs,books,documents,pdf,essays,articles etc.
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container">
                    <button className='btn btn-primary my-3' onClick={toggleStyle}>{btnText}</button>
                </div> */}
            </div>
        </>
    )
}
